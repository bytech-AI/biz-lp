import {
  getStaticWordPressMetadata,
  StaticWordPressPage,
} from "@/lib/static-wordpress-page";

const relativePath = "support-static/index.html";

export const dynamic = "force-static";

export async function generateMetadata() {
  return getStaticWordPressMetadata(relativePath);
}

export default function SupportPage() {
  return <StaticWordPressPage relativePath={relativePath} />;
}
