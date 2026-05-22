import {
  getStaticWordPressMetadata,
  StaticWordPressPage,
} from "@/lib/static-wordpress-page";

const relativePath = "plan-static/index.html";

export const dynamic = "force-static";

export async function generateMetadata() {
  return getStaticWordPressMetadata(relativePath);
}

export default function PlanPage() {
  return <StaticWordPressPage relativePath={relativePath} />;
}
