// 人材開発支援助成金「事業展開等リスキリング支援コース」シミュレーション用の定数・ロジック。
//
// ★数値の出典: 厚生労働省パンフレット「人材開発支援助成金（事業展開等リスキリング支援コース）
//   のご案内（詳細版）」(PL050401 / 令和5年4月1日以降提出の計画届に基づく訓練が対象)。
// ★要確認: 賃金助成の単価は令和7年度に引き上げられている可能性があります(報道あり)。
//   最新の厚労省パンフレットで確認し、下記 WAGE_PER_HOUR を更新してください。
//
// 活用チェック項目(ELIGIBILITY_GROUPS)は、社内の「助成金活用チェックシート」を基に構成。

export type CompanySize = "sme" | "large"; // sme=中小企業 / large=中小企業以外(大企業)

// ── 助成額・助成率 ─────────────────────────────
export const EXPENSE_RATE: Record<CompanySize, number> = {
  sme: 0.75,
  large: 0.6,
};

// 賃金助成(1人1時間あたり)。※eラーニング・通信・定額制・育休中の訓練は対象外(経費助成のみ)。
export const WAGE_PER_HOUR: Record<CompanySize, number> = {
  sme: 960,
  large: 480,
};

// 経費助成の限度額(1人1訓練あたり)。実訓練時間の区分ごと。
// ※eラーニング等(標準学習時間が定められているものを除く)は一律「10時間以上100時間未満」区分。
export const EXPENSE_CAP: {
  maxHours: number;
  cap: Record<CompanySize, number>;
}[] = [
  { maxHours: 100, cap: { sme: 300_000, large: 200_000 } },
  { maxHours: 200, cap: { sme: 400_000, large: 250_000 } },
  { maxHours: Infinity, cap: { sme: 500_000, large: 300_000 } },
];

export const WAGE_HOUR_LIMIT = 1200; // 賃金助成の限度時間(専門実践は1600)
export const ANNUAL_CAP = 100_000_000; // 1事業所1年度あたりの支給限度額(1億円)
export const MIN_TRAINING_HOURS = 10; // OFF-JTの最低実訓練時間

// 中小企業の判定基準(中小企業基本法/人材開発支援助成金)。資本金・従業員数の「いずれか」を満たせば中小企業。
export const INDUSTRIES = [
  { key: "retail", label: "小売業（飲食店を含む）", capital: 50_000_000, employees: 50 },
  { key: "service", label: "サービス業", capital: 50_000_000, employees: 100 },
  { key: "wholesale", label: "卸売業", capital: 100_000_000, employees: 100 },
  { key: "other", label: "製造業・建設業・その他", capital: 300_000_000, employees: 300 },
] as const;

// バイテックの標準コース(経費/人のプリセット)
export const COURSE_PRESETS = [
  { key: "koritsuka", label: "AI業務効率化研修", cost: 200_000, hours: 10 },
  { key: "jidoka", label: "AI業務自動化研修", cost: 300_000, hours: 10 },
] as const;

// ── 活用可否チェック(助成金活用チェックシート準拠) ─────────────
// fail: "hard" … NGだと現状は対象外(要相談) / "setup" … 計画届までに整備すればOK / "fixed" … AI研修は該当(既定はい)
export type CheckItem = {
  id: string;
  label: string;
  note?: string;
  fail: "hard" | "setup" | "fixed";
  defaultYes?: boolean;
};

export type CheckGroup = { key: string; title: string; items: CheckItem[] };

export const ELIGIBILITY_GROUPS: CheckGroup[] = [
  {
    key: "A",
    title: "A. まず確認（ここがNGだと申請できません）",
    items: [
      { id: "A-1", label: "雇用保険の適用事業所である（雇用保険の被保険者がいる）", note: "役員のみ・被保険者ゼロの会社は対象外です。", fail: "hard" },
      { id: "A-2", label: "過去5年以内に、助成金の不正受給がない", fail: "hard" },
      { id: "A-3", label: "性風俗・接待飲食等営業や暴力団関係でなく、倒産状態でない", fail: "hard" },
    ],
  },
  {
    key: "B",
    title: "B. 労務の整備",
    items: [
      { id: "B-1", label: "労働保険料を納付している", fail: "hard" },
      { id: "B-2", label: "過去1年間に、労働関係法令の違反（是正勧告等）がない", fail: "hard" },
      { id: "B-3", label: "労働時間を客観的な方法（タイムカード・PCログ等）で把握し、研修は所定労働時間内に実施して賃金を支払う", note: "時間外・休日に実施する場合は割増賃金の支払いが必要です。", fail: "hard" },
    ],
  },
  {
    key: "C",
    title: "C. 社内制度の整備（計画届の提出までに必要）",
    items: [
      { id: "C-1", label: "事業内職業能力開発計画を策定し、労働者に周知している", note: "自社の人材育成方針を書く社内計画。未整備でも計画届までに整備すればOK（厚労省がテンプレートを公開）。", fail: "setup" },
      { id: "C-2", label: "職業能力開発推進者を選任している", note: "人事・労務や教育訓練部門の部課長等を1名選任。未整備でも計画届までに整備すればOK。", fail: "setup" },
    ],
  },
  {
    key: "D",
    title: "D. 研修の性質",
    items: [
      { id: "D-1", label: "研修がDX（デジタル技術の活用・AI活用等）に関する内容である", note: "バイテックのAI活用研修は該当します。", fail: "fixed", defaultYes: true },
      { id: "D-2", label: "対象者の職務に関連する内容である", fail: "hard" },
    ],
  },
  {
    key: "E",
    title: "E. 運用のお約束",
    items: [
      { id: "E-1", label: "研修期間中も対象者を雇用保険の被保険者として雇用継続でき、受講率8割以上（eラーニングは修了）を満たせる", fail: "hard" },
      { id: "E-2", label: "契約・お支払いは、計画届の提出「後」に行う", note: "提出前に契約・着手すると対象外になります。", fail: "hard" },
      { id: "E-3", label: "研修開始の約1か月前までに計画届を提出できる（提出可能期間は開始の6か月前〜1か月前）", note: "助成金活用の場合、すぐに受講開始できない理由がこの項目です。", fail: "hard" },
    ],
  },
];

export const ALL_CHECK_ITEMS = ELIGIBILITY_GROUPS.flatMap((g) => g.items);

export type Verdict = "eligible" | "eligible_with_setup" | "review";

export function judgeEligibility(answers: Record<string, boolean>): {
  verdict: Verdict;
  hardFails: CheckItem[];
  setupPending: CheckItem[];
} {
  const hardFails = ALL_CHECK_ITEMS.filter((i) => i.fail === "hard" && answers[i.id] === false);
  const setupPending = ALL_CHECK_ITEMS.filter((i) => i.fail === "setup" && answers[i.id] === false);
  const verdict: Verdict = hardFails.length > 0 ? "review" : setupPending.length > 0 ? "eligible_with_setup" : "eligible";
  return { verdict, hardFails, setupPending };
}

// ── 助成額の算定 ─────────────────────────────
export type AmountInput = {
  size: CompanySize;
  headcount: number; // 受講人数
  hoursPerPerson: number; // 1人あたり実訓練時間
  costPerPerson: number; // 1人あたり訓練経費
  wageHoursPerPerson: number; // うち賃金助成対象(所定労働時間内・対面)の訓練時間
};

export type AmountResult = {
  expensePerPerson: number;
  expenseTotal: number;
  wagePerPerson: number;
  wageTotal: number;
  grantTotal: number; // 合計助成額(年度上限適用後)
  netPerPerson: number; // 実質負担/人(経費ベース)
  netTotal: number; // 実質負担合計(経費ベース)
  costTotal: number;
  capApplied: boolean; // 経費助成の上限が効いたか
  rate: number;
};

function expenseCapFor(size: CompanySize, hours: number): number {
  const tier = EXPENSE_CAP.find((t) => hours < t.maxHours) ?? EXPENSE_CAP[EXPENSE_CAP.length - 1];
  return tier.cap[size];
}

export function calcAmount(input: AmountInput): AmountResult {
  const { size, headcount, hoursPerPerson, costPerPerson, wageHoursPerPerson } = input;
  const rate = EXPENSE_RATE[size];
  const cap = expenseCapFor(size, hoursPerPerson);
  const rawExpense = Math.floor(costPerPerson * rate);
  const expensePerPerson = Math.min(rawExpense, cap);
  const capApplied = rawExpense > cap;
  const expenseTotal = expensePerPerson * headcount;

  const wageHours = Math.min(Math.max(wageHoursPerPerson, 0), WAGE_HOUR_LIMIT);
  const wagePerPerson = wageHours * WAGE_PER_HOUR[size];
  const wageTotal = wagePerPerson * headcount;

  const grantTotal = Math.min(expenseTotal + wageTotal, ANNUAL_CAP);
  const costTotal = costPerPerson * headcount;
  const netPerPerson = costPerPerson - expensePerPerson;
  const netTotal = costTotal - expenseTotal;

  return { expensePerPerson, expenseTotal, wagePerPerson, wageTotal, grantTotal, netPerPerson, netTotal, costTotal, capApplied, rate };
}

export const yen = (n: number) => "¥" + Math.round(n).toLocaleString("ja-JP");
