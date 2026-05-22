import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

type StaticWordPressPage = {
  bodyAttributes: Record<string, string>;
  bodyHtml: string;
  headHtml: string;
  htmlAttributes: Record<string, string>;
  metadata: Metadata;
};

const pageCache = new Map<string, Promise<StaticWordPressPage>>();

function attributesToObject(attributes: string) {
  const result: Record<string, string> = {};

  for (const match of attributes.matchAll(/\s([^\s=]+)(?:=("([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    const name = match[1];
    if (
      name.startsWith("data-qb-") ||
      name.startsWith("monica-") ||
      name === "onclick" ||
      name === "style"
    ) {
      continue;
    }

    result[name] = match[3] ?? match[4] ?? match[5] ?? "";
  }

  return result;
}

function extractMetaContent(headHtml: string, name: string) {
  const pattern = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["'][^>]*>`,
    "i",
  );
  return headHtml.match(pattern)?.[1];
}

function stripManagedHeadTags(headHtml: string) {
  return headHtml
    .replace(/<meta\s+http-equiv=["']Content-Type["'][^>]*>/gi, "")
    .replace(/<meta\s+charset=["'][^"']*["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']viewport["'][^>]*>/gi, "")
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");
}

function stripNonVisualBodyTags(bodyHtml: string) {
  return bodyHtml.replace(
    /<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/gi,
    "",
  );
}

function restoreDocumentAttributesScript(
  htmlAttributes: Record<string, string>,
  bodyAttributes: Record<string, string>,
) {
  return `(() => {
const htmlAttributes = ${JSON.stringify(htmlAttributes)};
const bodyAttributes = ${JSON.stringify(bodyAttributes)};
for (const [name, value] of Object.entries(htmlAttributes)) document.documentElement.setAttribute(name, value);
for (const [name, value] of Object.entries(bodyAttributes)) document.body.setAttribute(name, value);
})();`;
}

async function loadStaticWordPressPage(relativePath: string) {
  const cached = pageCache.get(relativePath);
  if (cached) {
    return cached;
  }

  const page = readFile(join(process.cwd(), "public", relativePath), "utf8").then((html) => {
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    const bodyMatch = html.match(/<body\b([^>]*)>([\s\S]*?)<\/body>/i);
    const htmlMatch = html.match(/<html\b([^>]*)>/i);
    const headHtml = headMatch?.[1] ?? "";

    return {
      bodyAttributes: attributesToObject(bodyMatch?.[1] ?? ""),
      bodyHtml: stripNonVisualBodyTags(bodyMatch?.[2] ?? ""),
      headHtml: stripManagedHeadTags(headHtml),
      htmlAttributes: attributesToObject(htmlMatch?.[1] ?? ""),
      metadata: {
        title: headHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],
        description: extractMetaContent(headHtml, "description"),
      },
    };
  });

  pageCache.set(relativePath, page);
  return page;
}

export async function getStaticWordPressMetadata(relativePath: string) {
  return (await loadStaticWordPressPage(relativePath)).metadata;
}

export async function StaticWordPressPage({ relativePath }: { relativePath: string }) {
  const page = await loadStaticWordPressPage(relativePath);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: restoreDocumentAttributesScript(page.htmlAttributes, page.bodyAttributes),
        }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: page.headHtml }}
        style={{ display: "contents" }}
        suppressHydrationWarning
      />
      <div
        dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
        style={{ display: "contents" }}
        suppressHydrationWarning
      />
    </>
  );
}
