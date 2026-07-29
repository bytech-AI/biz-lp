import type { Metadata } from "next";
import Link from "next/link";
import { BizFooter, BizHeader, BIZ_HEADER_OFFSET } from "../_chrome/BizChrome";
import { GrantBoot } from "./GrantBoot";
import {
  ELIGIBILITY_GROUPS,
  ALL_CHECK_ITEMS,
  COURSE_PRESETS,
  INDUSTRIES,
  EXPENSE_RATE,
  WAGE_PER_HOUR,
  EXPENSE_CAP,
  WAGE_HOUR_LIMIT,
  ANNUAL_CAP,
} from "./grant.config";
import "./grant.css";

// ── biz配下はReactのハイドレーションが動かない（トップ静的化・FAQ/カルーセル等が全てvanilla）ため、
//    このシミュレーターもサーバーでHTMLを描画し、ネイティブ<script>でロジックを動かす。

export const metadata: Metadata = {
  title: "助成金活用シミュレーション｜バイテック法人AI研修",
  description:
    "人材開発支援助成金「事業展開等リスキリング支援コース」を、バイテックのAI研修で活用できるか・いくら助成されるかを約1分で試算。経費の最大75%（中小企業）が助成対象です。",
  alternates: { canonical: "/grant" },
  openGraph: {
    title: "助成金活用シミュレーション｜バイテック法人AI研修",
    description:
      "人材開発支援助成金「事業展開等リスキリング支援コース」の活用可否と助成額を約1分で試算。",
    url: "/grant",
    siteName: "バイテック法人AI研修",
  },
};

const STEP_LABELS = ["はじめに", "活用可否", "助成額入力", "お客様情報", "結果"];

// クライアントのvanillaスクリプトに渡す定数(InfinityはnullにしてJSON化)。
const CLIENT_CFG = {
  expenseRate: EXPENSE_RATE,
  wagePerHour: WAGE_PER_HOUR,
  expenseCap: EXPENSE_CAP.map((t) => ({ maxHours: t.maxHours === Infinity ? null : t.maxHours, cap: t.cap })),
  wageHourLimit: WAGE_HOUR_LIMIT,
  annualCap: ANNUAL_CAP,
  failMap: Object.fromEntries(ALL_CHECK_ITEMS.map((i) => [i.id, i.fail])),
  itemLabels: Object.fromEntries(ALL_CHECK_ITEMS.map((i) => [i.id, i.label])),
  presets: COURSE_PRESETS,
  industries: INDUSTRIES,
};

// 起動はハイドレーション完了後（load後）まで待つこと。
// パース時点で recalc() が textContent を書き換えると、サーバーHTMLとの不一致で
// React が hydration error #418 を出してツリーごとDOMを作り直し、
// ここで張ったリスナーもヘッダーのリスナーも全て失われる（＝シミュレーターもメニューも死ぬ）。
const GRANT_SCRIPT = `(function(){
  function boot(){
  var CFG = ${JSON.stringify(CLIENT_CFG)};
  var root = document.getElementById('grantApp');
  if(!root) return;
  var answers = {};
  Object.keys(CFG.failMap).forEach(function(id){ answers[id] = true; });
  var state = { step:0, size:'sme', preset:'koritsuka', industry: CFG.industries[0].key };
  var yen = function(n){ return '¥' + Math.round(n).toLocaleString('ja-JP'); };
  var el = function(id){ return document.getElementById(id); };
  var num = function(id, min){ var v = parseFloat((el(id)||{}).value); if(!isFinite(v)) v = 0; return Math.max(min, v); };

  function showStep(n){
    state.step = n;
    root.querySelectorAll('[data-step]').forEach(function(s){ s.classList.toggle('is-active', parseInt(s.getAttribute('data-step'),10)===n); });
    root.querySelectorAll('.grant-steps__item').forEach(function(it,i){ it.classList.toggle('is-current', i===n); it.classList.toggle('is-done', i<n); });
    var y = root.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: y, behavior:'smooth' });
  }

  function capFor(size, hours){
    for(var i=0;i<CFG.expenseCap.length;i++){ var t = CFG.expenseCap[i]; if(t.maxHours===null || hours < t.maxHours) return t.cap[size]; }
    return CFG.expenseCap[CFG.expenseCap.length-1].cap[size];
  }

  // 業種＋資本金 or 従業員数から中小/大企業を自動判定（いずれかを満たせば中小）。
  function determineSize(){
    var ind = CFG.industries.filter(function(x){ return x.key===state.industry; })[0] || CFG.industries[0];
    var cap = num('g-capital',0), emp = num('g-employees',0);
    var isSme = (cap>0 && cap<=ind.capital) || (emp>0 && emp<=ind.employees);
    state.size = isSme ? 'sme' : 'large';
    var badge = el('g-sizebadge');
    if(badge){ badge.className = 'grant-sizebadge ' + (isSme?'is-sme':'is-large'); badge.textContent = (isSme?'中小企業':'大企業') + 'と判定'; }
  }

  function recalc(){ determineSize(); compute(); }

  function validateForm(){
    var f = { name:'企業名を入力してください', contact:'お名前を入力してください', email:'メールアドレスを正しく入力してください', tel:'電話番号を入力してください' };
    var ok = true;
    var checks = {
      name: !!(el('g-company').value||'').trim(),
      contact: !!(el('g-contact').value||'').trim(),
      email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(el('g-email').value||''),
      tel: !!(el('g-tel').value||'').trim()
    };
    ['name','contact','email','tel'].forEach(function(k){
      var errEl = el('err-'+k); var inp = el(k==='name'?'g-company':(k==='contact'?'g-contact':(k==='email'?'g-email':'g-tel')));
      if(!checks[k]){ ok=false; if(errEl){ errEl.textContent=f[k]; errEl.style.display='block'; } if(inp) inp.classList.add('is-error'); }
      else { if(errEl) errEl.style.display='none'; if(inp) inp.classList.remove('is-error'); }
    });
    return ok;
  }

  function compute(){
    var size = state.size;
    var head = num('g-headcount',1), cost = num('g-cost',0), hours = num('g-hours',0), wageH = num('g-wagehours',0);
    var rate = CFG.expenseRate[size];
    var cap = capFor(size, hours);
    var rawE = Math.floor(cost*rate);
    var expPer = Math.min(rawE, cap); var capApplied = rawE > cap;
    var expTot = expPer*head;
    var wageHours = Math.min(Math.max(wageH,0), CFG.wageHourLimit);
    var wageTot = wageHours*CFG.wagePerHour[size]*head;
    var total = Math.min(expTot+wageTot, CFG.annualCap);
    var costTot = cost*head; var netTot = costTot-expTot;
    var hard=[], setup=[];
    Object.keys(CFG.failMap).forEach(function(id){ if(CFG.failMap[id]==='hard'&&answers[id]===false)hard.push(id); if(CFG.failMap[id]==='setup'&&answers[id]===false)setup.push(id); });
    var verdict = hard.length? 'review' : (setup.length? 'eligible_with_setup' : 'eligible');
    render({ rate:rate, expTot:expTot, wageTot:wageTot, total:total, costTot:costTot, netTot:netTot, capApplied:capApplied, verdict:verdict, hard:hard, setup:setup });
  }

  function render(r){
    var meta = r.verdict==='eligible'
      ? {cls:'is-ok', icon:'✓', title:'活用できる可能性が高いです', desc:'現状のご回答では、要件を満たしています。次は無料個別相談で詳細を確認しましょう。'}
      : r.verdict==='eligible_with_setup'
        ? {cls:'is-warn', icon:'！', title:'活用できる可能性が高いです（要・社内整備）', desc:'計画届の提出までに、下記の社内制度の整備が必要です。進め方もサポートします。'}
        : {cls:'is-review', icon:'！', title:'要確認の項目があります', desc:'満たしていない項目がありますが、設計変更や個別相談で対象化できる場合があります。まずはご相談ください。'};
    var v = el('g-verdict');
    v.className = 'grant-verdict ' + meta.cls;
    el('g-verdict-icon').textContent = meta.icon;
    el('g-verdict-title').textContent = meta.title;
    el('g-verdict-desc').textContent = meta.desc;
    function flagBlock(boxId, listId, ids){
      var box = el(boxId);
      if(!ids.length){ box.style.display='none'; return; }
      box.style.display='block';
      var ul = el(listId); ul.innerHTML='';
      ids.forEach(function(id){ var li=document.createElement('li'); li.textContent = CFG.itemLabels[id]; ul.appendChild(li); });
    }
    flagBlock('g-flags-hard','g-flags-hard-list', r.hard);
    flagBlock('g-flags-setup','g-flags-setup-list', r.setup);
    el('g-total').textContent = yen(r.total);
    el('g-expense-label').textContent = '経費助成（' + Math.round(r.rate*100) + '%）';
    el('g-expense').textContent = yen(r.expTot);
    el('g-expense-sub').textContent = r.capApplied ? '※1人あたり上限を適用' : '';
    el('g-wage').textContent = yen(r.wageTot);
    el('g-wage-sub').textContent = r.wageTot===0 ? '※対面研修の時間を入力すると加算' : '';
    el('g-cost-total').textContent = yen(r.costTot);
    el('g-net').textContent = yen(r.netTot);
    // ライブプレビュー（Step2）も更新
    var lt = el('g2-total'); if(lt) lt.textContent = yen(r.total);
    var ln = el('g2-net'); if(ln) ln.textContent = yen(r.netTot);
  }

  root.addEventListener('click', function(e){
    var t = e.target.closest('[data-item],[data-preset],[data-industry],[data-action],[data-goto]');
    if(!t) return;
    if(t.hasAttribute('data-item')){
      var id = t.getAttribute('data-item'); answers[id] = t.getAttribute('data-val')==='true';
      var wrap = t.closest('.grant-toggle');
      wrap.querySelectorAll('[data-item]').forEach(function(bb){
        var isYes = bb.getAttribute('data-val')==='true';
        bb.classList.toggle('is-yes', isYes && answers[id]===true);
        bb.classList.toggle('is-no', !isYes && answers[id]===false);
      });
      var card = t.closest('.grant-check'); if(card) card.classList.toggle('is-no', answers[id]===false);
      return;
    }
    if(t.hasAttribute('data-preset')){
      var key = t.getAttribute('data-preset'); state.preset = key;
      root.querySelectorAll('[data-preset]').forEach(function(b){ b.classList.toggle('is-active', b===t); });
      var pre = CFG.presets.filter(function(p){ return p.key===key; })[0];
      if(pre){ el('g-cost').value = pre.cost; el('g-hours').value = pre.hours; }
      recalc();
      return;
    }
    if(t.hasAttribute('data-industry')){
      state.industry = t.getAttribute('data-industry');
      root.querySelectorAll('[data-industry]').forEach(function(b){ b.classList.toggle('is-active', b===t); });
      recalc();
      return;
    }
    if(t.hasAttribute('data-action')){
      if(t.getAttribute('data-action')==='submit-form'){
        if(validateForm()){
          // TODO(formrun): 本番エンドポイント確定後、ここで会社情報＋診断結果をPOST。
          recalc(); showStep(4);
        }
      }
      return;
    }
    if(t.hasAttribute('data-goto')){ showStep(parseInt(t.getAttribute('data-goto'),10)); return; }
  });

  // 経費を手入力したらプリセットをカスタムに
  var costInput = el('g-cost');
  if(costInput){ costInput.addEventListener('input', function(){ state.preset='custom'; root.querySelectorAll('[data-preset]').forEach(function(b){ b.classList.toggle('is-active', b.getAttribute('data-preset')==='custom'); }); }); }

  // 入力したら自動で再計算（ライブ）
  ['g-capital','g-employees','g-headcount','g-cost','g-hours','g-wagehours'].forEach(function(id){
    var input = el(id); if(input) input.addEventListener('input', recalc);
  });
  // 初期表示の試算
  recalc();
  }
  var booted=false;
  function start(){ if(booted)return; booted=true; boot(); }
  if(window.__grantHydrated){ start(); }
  else {
    window.addEventListener('grant:hydrated', start, {once:true});
    // ハイドレーションが何らかの理由で走らない場合の保険。
    setTimeout(start, 3000);
  }
})();`;

export default function GrantPage() {
  return (
    <>
      <BizHeader />
      <main className="grant-page" style={{ paddingTop: BIZ_HEADER_OFFSET }}>
        <div className="grant-page__inner">
          <nav className="grant-breadcrumb" aria-label="パンくず">
            <Link href="/">トップ</Link>
            <span>›</span>
            <span>助成金活用シミュレーション</span>
          </nav>
          <header className="grant-hero">
            <p className="grant-hero__eyebrow">SUBSIDY SIMULATOR</p>
            <h1 className="grant-hero__title">助成金活用シミュレーション</h1>
            <p className="grant-hero__lead">
              人材開発支援助成金「事業展開等リスキリング支援コース」を使って、<br className="pc-only" />
              自社で活用できるか・いくら助成されるかを一気通貫で試算します。
            </p>
          </header>

          <div className="grant" id="grantApp">
            {/* 進行状況 */}
            <ol className="grant-steps" aria-label="進行状況">
              {STEP_LABELS.map((label, i) => (
                <li key={label} className={`grant-steps__item${i === 0 ? " is-current" : ""}`}>
                  <span className="grant-steps__num">{i + 1}</span>
                  <span className="grant-steps__label">{label}</span>
                </li>
              ))}
            </ol>

            {/* Step0 イントロ */}
            <section className="grant-card grant-intro is-active" data-step="0">
              <p className="grant-intro__eyebrow">助成金活用シミュレーション</p>
              <h2 className="grant-intro__title">人材開発支援助成金<br />「事業展開等リスキリング支援コース」</h2>
              <p className="grant-intro__desc">
                バイテックのAI研修は<strong>DX（デジタル化）に関する訓練</strong>として本助成金の対象になり得ます。
                「自社は使えるか」から「いくら助成されるか」まで、約1分で試算できます。
              </p>
              <ul className="grant-intro__points">
                <li>経費の<strong>最大75%</strong>（中小企業）が助成対象</li>
                <li>まず<strong>活用可否</strong>をチェック → 続けて<strong>助成額</strong>を試算</li>
                <li>OFF-JT 10時間以上／計画届は訓練開始の約1か月前まで が主な条件</li>
              </ul>
              <button type="button" className="grant-btn grant-btn--fill grant-btn--lg" data-goto="1">シミュレーションを始める →</button>
              <p className="grant-note">※本シミュレーションは概算であり、支給を保証するものではありません。実際の支給可否・金額は労働局の審査によります。</p>
            </section>

            {/* Step1 活用可否 */}
            <section className="grant-card" data-step="1">
              <h2 className="grant-h2">活用できるかチェック</h2>
              <p className="grant-lead">当てはまらない項目だけ「いいえ」に切り替えてください。（初期値はすべて「はい」）</p>
              {ELIGIBILITY_GROUPS.map((g) => (
                <div className="grant-group" key={g.key}>
                  <h3 className="grant-group__title">{g.title}</h3>
                  {g.items.map((item) => (
                    <div className="grant-check" key={item.id}>
                      <div className="grant-check__body">
                        <p className="grant-check__label">{item.label}</p>
                        {item.note && <p className="grant-check__note">{item.note}</p>}
                      </div>
                      {item.fail === "fixed" ? (
                        <span className="grant-fixed">該当</span>
                      ) : (
                        <div className="grant-toggle" role="group" aria-label={item.label}>
                          <button type="button" className="grant-toggle__btn is-yes" data-item={item.id} data-val="true">はい</button>
                          <button type="button" className="grant-toggle__btn" data-item={item.id} data-val="false">いいえ</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <div className="grant-nav">
                <button type="button" className="grant-btn grant-btn--ghost" data-goto="0">戻る</button>
                <button type="button" className="grant-btn grant-btn--fill" data-goto="2">助成額をシミュレーション →</button>
              </div>
            </section>

            {/* Step2 助成額入力 */}
            <section className="grant-card" data-step="2">
              <h2 className="grant-h2">助成額シミュレーション</h2>
              <p className="grant-lead">入力すると助成額を自動で計算します。</p>

              {/* 企業規模の判定（設問） */}
              <div className="grant-sizeq">
                <p className="grant-sizeq__title">まず、企業規模を判定します（助成率が変わります）</p>
                <div className="grant-field">
                  <label className="grant-label">業種</label>
                  <div className="grant-presets">
                    {INDUSTRIES.map((ind, i) => (
                      <button key={ind.key} type="button" className={`grant-preset${i === 0 ? " is-active" : ""}`} data-industry={ind.key}>
                        <span>{ind.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grant-grid2">
                  <div className="grant-field">
                    <label className="grant-label">資本金・出資金（円）</label>
                    <input className="grant-input" id="g-capital" type="number" inputMode="numeric" min={0} step={1000000} defaultValue={30000000} />
                  </div>
                  <div className="grant-field">
                    <label className="grant-label">常時雇用する従業員数（人）</label>
                    <input className="grant-input" id="g-employees" type="number" inputMode="numeric" min={0} step={1} defaultValue={30} />
                  </div>
                </div>
                <div className="grant-sizeresult">
                  <span className="grant-sizebadge is-sme" id="g-sizebadge">中小企業と判定</span>
                </div>
              </div>

              <div className="grant-field">
                <label className="grant-label">研修コース（1人あたり経費）</label>
                <div className="grant-presets">
                  {COURSE_PRESETS.map((p, i) => (
                    <button key={p.key} type="button" className={`grant-preset${i === 0 ? " is-active" : ""}`} data-preset={p.key}>
                      <span>{p.label}</span>
                      <strong>¥{p.cost.toLocaleString("ja-JP")}</strong>
                    </button>
                  ))}
                  <button type="button" className="grant-preset" data-preset="custom">
                    <span>カスタム</span>
                    <strong>自由入力</strong>
                  </button>
                </div>
              </div>
              <div className="grant-grid2">
                <div className="grant-field">
                  <label className="grant-label">受講人数（名）</label>
                  <input className="grant-input" id="g-headcount" type="number" inputMode="numeric" min={1} step={1} defaultValue={5} />
                </div>
                <div className="grant-field">
                  <label className="grant-label">1人あたり訓練経費（円）</label>
                  <input className="grant-input" id="g-cost" type="number" inputMode="numeric" min={0} step={10000} defaultValue={200000} />
                </div>
                <div className="grant-field">
                  <label className="grant-label">1人あたり実訓練時間（時間）</label>
                  <input className="grant-input" id="g-hours" type="number" inputMode="numeric" min={0} step={1} defaultValue={10} />
                </div>
                <div className="grant-field">
                  <label className="grant-label">うち対面研修の時間（賃金助成対象・任意）</label>
                  <input className="grant-input" id="g-wagehours" type="number" inputMode="numeric" min={0} step={1} defaultValue={0} />
                  <p className="grant-field__note">所定労働時間内の対面研修分。eラーニングは対象外です。</p>
                </div>
              </div>

              {/* ライブ助成額プレビュー（自動計算） */}
              <div className="grant-live">
                <div>
                  <p className="grant-live__label">助成額の目安（合計）</p>
                  <p className="grant-live__total" id="g2-total">¥0</p>
                </div>
                <p className="grant-live__net">実質負担（経費ベース）<b id="g2-net">¥0</b></p>
              </div>

              <div className="grant-nav">
                <button type="button" className="grant-btn grant-btn--ghost" data-goto="1">戻る</button>
                <button type="button" className="grant-btn grant-btn--fill" data-goto="3">この内容で進む →</button>
              </div>
            </section>

            {/* Step3 お客様情報 */}
            <section className="grant-card" data-step="3">
              <h2 className="grant-h2">お客様情報のご入力</h2>
              <p className="grant-lead">ご入力後、診断結果と助成額の目安を表示します。詳細なご案内もお送りします。</p>
              <div className="grant-form">
                <div className="grant-field">
                  <label className="grant-label">企業名<span className="grant-req">必須</span></label>
                  <input className="grant-input" id="g-company" type="text" placeholder="株式会社バイテック" />
                  <p className="grant-err" id="err-name" style={{ display: "none" }} />
                </div>
                <div className="grant-field">
                  <label className="grant-label">お名前<span className="grant-req">必須</span></label>
                  <input className="grant-input" id="g-contact" type="text" placeholder="山田 太郎" />
                  <p className="grant-err" id="err-contact" style={{ display: "none" }} />
                </div>
                <div className="grant-field">
                  <label className="grant-label">メールアドレス<span className="grant-req">必須</span></label>
                  <input className="grant-input" id="g-email" type="email" placeholder="mail@example.com" />
                  <p className="grant-err" id="err-email" style={{ display: "none" }} />
                </div>
                <div className="grant-field">
                  <label className="grant-label">電話番号<span className="grant-req">必須</span></label>
                  <input className="grant-input" id="g-tel" type="tel" placeholder="09012345678" />
                  <p className="grant-err" id="err-tel" style={{ display: "none" }} />
                </div>
              </div>
              <p className="grant-consent">「結果を見る」をもって<a href="/privacy-policy/" target="_blank" rel="noopener">プライバシーポリシー</a>に同意したものとします。</p>
              <div className="grant-nav">
                <button type="button" className="grant-btn grant-btn--ghost" data-goto="2">戻る</button>
                <button type="button" className="grant-btn grant-btn--fill" data-action="submit-form">結果を見る →</button>
              </div>
            </section>

            {/* Step4 結果 */}
            <section className="grant-card grant-result" data-step="4">
              <div className="grant-verdict is-ok" id="g-verdict">
                <span className="grant-verdict__icon" id="g-verdict-icon">✓</span>
                <div>
                  <h2 className="grant-verdict__title" id="g-verdict-title" />
                  <p className="grant-verdict__desc" id="g-verdict-desc" />
                </div>
              </div>
              <div className="grant-flags" id="g-flags-hard" style={{ display: "none" }}>
                <p className="grant-flags__title">満たしていない項目</p>
                <ul id="g-flags-hard-list" />
              </div>
              <div className="grant-flags grant-flags--setup" id="g-flags-setup" style={{ display: "none" }}>
                <p className="grant-flags__title">計画届までに整備が必要な項目</p>
                <ul id="g-flags-setup-list" />
              </div>
              <div className="grant-amount">
                <p className="grant-amount__label">助成額の目安（合計）</p>
                <p className="grant-amount__total" id="g-total">¥0</p>
                <div className="grant-amount__rows">
                  <div className="grant-row">
                    <span className="grant-row__k"><span id="g-expense-label">経費助成</span><em className="grant-row__sub" id="g-expense-sub" /></span>
                    <span className="grant-row__v" id="g-expense">¥0</span>
                  </div>
                  <div className="grant-row">
                    <span className="grant-row__k">賃金助成（対面研修分）<em className="grant-row__sub" id="g-wage-sub" /></span>
                    <span className="grant-row__v" id="g-wage">¥0</span>
                  </div>
                  <div className="grant-row">
                    <span className="grant-row__k">訓練経費（総額）</span>
                    <span className="grant-row__v" id="g-cost-total">¥0</span>
                  </div>
                  <div className="grant-row is-highlight">
                    <span className="grant-row__k">実質負担（経費ベース）</span>
                    <span className="grant-row__v" id="g-net">¥0</span>
                  </div>
                </div>
                <button type="button" className="grant-editlink" data-goto="2">入力内容を修正する</button>
              </div>
              <div className="grant-cta">
                <p className="grant-cta__title">この試算をもとに、具体的な活用プランをご案内します</p>
                <div className="grant-cta__btns">
                  <a className="grant-btn grant-btn--fill grant-btn--lg" href="/counseling">無料個別相談を予約する</a>
                  <a className="grant-btn grant-btn--outline grant-btn--lg" href="/doc-a">資料をダウンロード</a>
                </div>
              </div>
              <p className="grant-note">
                ※本シミュレーションは概算であり、支給を保証するものではありません。実際の支給可否・金額は労働局の審査によります。
                数値は厚生労働省パンフレット（事業展開等リスキリング支援コース）に基づきますが、最新の要件・単価は
                <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html" target="_blank" rel="noopener">厚生労働省の公式情報</a>をご確認ください。
              </p>
            </section>
          </div>
        </div>
      </main>
      <BizFooter />
      <GrantBoot />
      <script dangerouslySetInnerHTML={{ __html: GRANT_SCRIPT }} />
    </>
  );
}
