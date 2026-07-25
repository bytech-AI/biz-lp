// 研修コースのレジストリ。各コースページの「他にもおすすめの研修コース」導線（内部リンク）に使う。
// color は各コースのブランドアクセント（FVグラデーションの主色）。

export type CourseSummary = {
  slug: string;
  name: string;
  desc: string;
  color: string;
  logo: string;
};

export const COURSES: CourseSummary[] = [
  {
    slug: "chat-gpt-training",
    name: "ChatGPT研修",
    desc: "定番の生成AIから全社活用を始めたい組織・チームにおすすめ。",
    color: "#10a37f",
    logo: "/biz/assets/img/index/plan/logo/cg_logo.webp",
  },
  {
    slug: "gemini-training",
    name: "Gemini研修",
    desc: "Google Workspaceを利用する組織・チームにおすすめ。",
    color: "#4a86e8",
    logo: "/biz/assets/img/index/plan/gemini/tools.webp",
  },
  {
    slug: "claude-training",
    name: "Claude研修",
    desc: "Claude Cowork・Codeまで幅広く活用したい組織・チームにおすすめ。",
    color: "#d97757",
    logo: "/biz/assets/img/index/plan/logo/claude-ai-icon.svg",
  },
  {
    slug: "claude-code-training",
    name: "Claude Code研修",
    desc: "非エンジニアでも業務の自動化・開発を進めたい組織・チームにおすすめ。",
    color: "#c96b45",
    logo: "/biz/assets/img/index/plan/logo/claudecode-color.svg",
  },
  {
    slug: "copilot-training",
    name: "Copilot研修",
    desc: "Microsoft 365を利用する組織・チームにおすすめ。",
    color: "#1a95a8",
    logo: "/biz/assets/img/index/plan/logo/copilot.webp",
  },
  {
    slug: "copilot-studio-training",
    name: "Copilot Studio研修",
    desc: "Copilot活用からAIエージェント内製まで進めたい組織・チームにおすすめ。",
    color: "#7b3fb5",
    logo: "/biz/assets/img/index/plan/logo/studio.webp",
  },
  {
    slug: "creative-ai-training",
    name: "AIクリエイティブ研修",
    desc: "画像・動画・デザイン制作を内製したい組織・チームにおすすめ。",
    color: "#b33f8f",
    logo: "/biz/assets/img/index/plan/logo/creative.webp",
  },
  {
    slug: "dify-training",
    name: "Dify研修",
    desc: "AIアプリ・業務自動化を内製したい組織・チームにおすすめ。",
    color: "#3b52c8",
    logo: "/biz/assets/img/index/plan/logo/dify.webp",
  },
];
