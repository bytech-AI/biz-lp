import { notFound } from "next/navigation";
import { getAllSeminars, getSeminar } from "../data";
import { BizHeader, BizFooter } from "../../_chrome/BizChrome";

function seminarFormHtml(action: string) {
  return `
    <form class="formrun df-form" action="${action}" method="post">
      <div class="df-field">
        <label class="df-label">お名前<span class="df-req">必須</span></label>
        <input class="df-input" type="text" name="お名前" placeholder="山田 太郎" data-formrun-required>
        <div class="df-error" data-formrun-show-if-error="お名前">お名前を入力してください</div>
      </div>
      <div class="df-field">
        <label class="df-label">企業名<span class="df-req">必須</span></label>
        <input class="df-input" type="text" name="企業名" placeholder="会社名" data-formrun-required>
        <div class="df-error" data-formrun-show-if-error="企業名">企業名を入力してください</div>
      </div>
      <div class="df-field">
        <label class="df-label">役職<span class="df-req">必須</span></label>
        <select class="df-select" name="役職" data-formrun-required>
          <option value="" disabled selected>選択してください</option>
          <option>経営者・役員</option>
          <option>部長・課長／マネージャー</option>
          <option>一般社員／スタッフ</option>
          <option>契約・嘱託・派遣</option>
        </select>
        <div class="df-error" data-formrun-show-if-error="役職">役職を選択してください</div>
      </div>
      <div class="df-field">
        <label class="df-label">3ヶ月以内の研修導入を予定していますか？<span class="df-req">必須</span></label>
        <div class="df-opts">
          <label class="df-opt"><input type="radio" name="研修導入予定" value="はい" data-formrun-required> はい</label>
          <label class="df-opt"><input type="radio" name="研修導入予定" value="いいえ"> いいえ</label>
        </div>
        <div class="df-error" data-formrun-show-if-error="研修導入予定">選択してください</div>
      </div>
      <div class="df-field">
        <label class="df-label">電話番号<span class="df-req">必須</span></label>
        <input class="df-input" type="tel" name="電話番号" placeholder="09012345678" data-formrun-required>
        <div class="df-error" data-formrun-show-if-error="電話番号">電話番号を入力してください</div>
      </div>
      <div class="df-field">
        <label class="df-label">メールアドレス<span class="df-req">必須</span></label>
        <input class="df-input" type="text" name="メールアドレス" placeholder="mail@example.com" data-formrun-type="email" data-formrun-required>
        <div class="df-error" data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
        <div class="df-error df-error--free" style="display:none;">フリーメールはご利用いただけません。会社のメールアドレスをご入力ください。</div>
      </div>
      <div class="df-field">
        <label class="df-label">認知経路<span class="df-req">必須</span></label>
        <p class="df-hint">当社のサービスを何で知りましたか？</p>
        <div class="df-opts">
          <label class="df-opt"><input type="checkbox" name="認知経路" value="企業HP" data-formrun-required> 企業HP</label>
          <label class="df-opt"><input type="checkbox" name="認知経路" value="AIからのオススメ"> AIからのオススメ</label>
          <label class="df-opt"><input type="checkbox" name="認知経路" value="Google検索"> Google検索</label>
          <label class="df-opt"><input type="checkbox" name="認知経路" value="AI HACK"> AI HACK</label>
          <label class="df-opt"><input type="checkbox" name="認知経路" value="プレスリリース"> プレスリリース</label>
          <label class="df-opt"><input type="checkbox" name="認知経路" value="その他"> その他</label>
        </div>
        <div class="df-error" data-formrun-show-if-error="認知経路">1つ以上選択してください</div>
      </div>
      <div class="_formrun_gotcha" aria-hidden="true" style="position:absolute;height:1px;width:1px;overflow:hidden;">
        <input type="text" name="_formrun_gotcha" tabindex="-1" autocomplete="off">
      </div>
      <button class="df-submit" type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..."><span class="df-submit__label">視聴を申し込む</span><span class="df-submit__icon"></span></button>
      <p class="df-consent">フォームの送信をもって<a href="/privacy-policy/" target="_blank" rel="noopener">プライバシーポリシー</a>に同意したものとします。</p>
    </form>
  `;
}

// 事前に全セミナーslugを列挙して静的生成。未登録slugは404（動的生成しない）。
// → 既存ページ同様サーバ処理ゼロの静的HTML配信を維持する。
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSeminars().map((s) => ({ slug: s.slug }));
}

export default async function SeminarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const seminar = getSeminar(slug);
  if (!seminar) {
    notFound();
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body { font-family: var(--font-noto-jp), sans-serif; color: #333; background: #f5f7fa; margin: 0; padding: 0; }
        .sem-wrap { max-width: 1180px; margin: 0 auto; padding: 112px 40px 80px; }
        .sem-breadcrumb { font-size: 13px; font-weight: 700; margin: 0 0 26px; }
        .sem-breadcrumb a { color: #2a5a9b; text-decoration: none; }
        .sem-breadcrumb a:hover { text-decoration: underline; }
        .sem-breadcrumb span { color: #666; }

        /* 2カラム（左=本文 / 右=申込フォーム固定）。タイトルから2カラムで開始 */
        .sem-layout { display: grid; grid-template-columns: 1fr 380px; gap: 44px; align-items: start; }

        /* 左：本文（白背景1枚の上に各セクションを並べる） */
        .sem-main { background: #fff; padding: 44px; border: 1px solid #e6eaf0; }
        .sem-hero { margin-bottom: 40px; }
        .sem-hero__title { font-size: 34px; font-weight: 800; line-height: 1.45; margin: 0 0 12px; letter-spacing: .01em; }
        .sem-hero__lead { font-size: 16px; color: #1a6fb5; font-weight: 700; margin: 0; }
        .sem-hero__bar { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin: 24px 0 24px; }
        .sem-hero__tag { display: inline-flex; align-items: center; background: #1a2e50; color: #fff; font-size: 13px; font-weight: 700; padding: 10px 22px; border-radius: 4px; }
        .sem-hero__date { font-size: 13px; color: #999; font-family: "Futura","Futura Medium",sans-serif; margin-left: 14px; }
        .sem-hero__share { display: flex; align-items: center; gap: 10px; }
        .sem-hero__share-label { font-family: "Futura","Futura Medium",sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; color: #555; }
        .sem-hero__share a { width: 40px; height: 40px; border-radius: 50%; background: #1a2330; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 14px; font-weight: 700; transition: transform .2s ease, background .2s ease; }
        .sem-hero__share a:hover { background: #1a6fb5; transform: translateY(-2px); }
        .sem-hero__thumb { position: relative; aspect-ratio: 16/9; overflow: hidden; background: linear-gradient(135deg, #223a5e, #16233b); display: flex; align-items: center; justify-content: center; }
        .sem-hero__thumb img { width: 100%; height: 100%; object-fit: contain; }
        .sem-hero__thumb-label { color: rgba(255,255,255,0.55); font-family: "Futura","Futura Medium",sans-serif; font-size: 22px; letter-spacing: .18em; font-weight: 700; }

        .sem-sec { margin-top: 40px; }
        .sem-sec__head { display: flex; align-items: baseline; gap: 12px; border-bottom: 2px solid #e6ebf2; padding-bottom: 12px; margin-bottom: 22px; }
        .sem-sec__head h2 { font-size: 22px; font-weight: 800; margin: 0; }
        .sem-sec__head .en { font-family: "Futura","Futura Medium",sans-serif; font-size: 12px; color: #b7c2d2; letter-spacing: .12em; font-weight: 700; }
        .sem-sec p { font-size: 15px; line-height: 1.95; margin: 0 0 18px; }
        .sem-sec p:last-child { margin-bottom: 0; }

        .sem-reco { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
        .sem-reco li { position: relative; box-sizing: border-box; min-height: 58px; background: #f7f9fc; border: 1px solid #e8edf4; border-radius: 4px; padding: 16px 20px 16px 54px; font-size: 15px; font-weight: 600; line-height: 1.7; }
        .sem-reco li::before { content: ""; position: absolute; left: 20px; top: 18px; width: 20px; height: 20px; background: center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%231f8acb'/%3E%3Cpath d='M5.5 10.4l2.8 2.8 6.2-6.4' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
        .sem-reco li::after { content: none; }

        .sem-speaker { display: flex; gap: 24px; align-items: flex-start; }
        .sem-speaker__photo { flex: 0 0 120px; width: 120px; height: 120px; background: linear-gradient(135deg, #dbe6f2, #c3d4e8); display: flex; align-items: center; justify-content: center; color: #7c93b3; font-size: 12px; font-weight: 700; overflow: hidden; }
        .sem-speaker__photo img { width: 100%; height: 100%; object-fit: cover; }
        .sem-speaker__name { font-size: 19px; font-weight: 800; margin: 0; }
        .sem-speaker__role { font-size: 13px; color: #1a6fb5; font-weight: 700; margin: 4px 0 12px; }
        .sem-speaker__bio { font-size: 14px; line-height: 1.85; color: #555; margin: 0; }

        .sem-prog { list-style: none; counter-reset: prog; margin: 0; padding: 0; }
        .sem-prog li { position: relative; padding: 0 0 22px 58px; }
        .sem-prog li:not(:last-child)::before { content: ""; position: absolute; left: 19px; top: 6px; bottom: -6px; width: 2px; background: #dbe4ef; }
        .sem-prog li::after { counter-increment: prog; content: counter(prog); position: absolute; left: 0; top: 0; width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; font-family: "Futura","Futura Medium",sans-serif; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .sem-prog__title { font-size: 16px; font-weight: 700; margin: 6px 0 6px; }
        .sem-prog__body { font-size: 14px; line-height: 1.8; color: #666; margin: 0; }

        /* 右：申込フォーム（濃色カード・角丸はここだけ・サイド固定） */
        .sem-side { position: sticky; top: 88px; align-self: start; }
        .sem-side__card { background: #14213a; border-radius: 6px; overflow: hidden; border: 1px solid #26364f; }
        .sem-side__head { padding: 13px 22px; }
        .sem-side__head-title { font-size: 17px; font-weight: 800; color: #fff; margin: 0; }
        .sem-side__form { background: #fff; padding: 14px 22px 22px; }

        /* /doc-a と共通の formrun フォームデザイン */
        .df-field { margin-bottom: 11px; }
        .df-label { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; font-size: 13px; font-weight: 700; color: #222; margin-bottom: 5px; line-height: 1.4; }
        .df-req { background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 1px 7px; border-radius: 0; letter-spacing: .04em; }
        .df-input, .df-select { width: 100%; padding: 9px 12px; border: 1px solid #d0d5dd; border-radius: 0; font-size: 14px; color: #222; background: #fff; box-sizing: border-box; transition: border-color .2s ease, box-shadow .2s ease; }
        .df-input::placeholder { color: #aab; }
        .df-input:focus, .df-select:focus { outline: none; border-color: #1a6fb5; box-shadow: 0 0 0 3px rgba(26,111,181,0.12); }
        .df-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M6 8L0 0h12z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 32px; }
        .df-hint { font-size: 11px; color: #888; margin: -2px 0 6px; }
        .df-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
        .df-opt { display: flex; align-items: center; gap: 8px; border: 1px solid #d0d5dd; border-radius: 0; padding: 8px 10px; font-size: 13px; cursor: pointer; transition: border-color .2s ease, background .2s ease; }
        .df-opt:hover { border-color: #1a6fb5; background: #f5f9fd; }
        .df-opt input { width: 16px; height: 16px; accent-color: #1a6fb5; flex-shrink: 0; }
        .df-error { color: #e53935; font-size: 11px; margin-top: 5px; }
        .df-submit { position: relative; overflow: hidden; width: 82%; max-width: 300px; display: flex; align-items: center; justify-content: space-between; gap: 10px; background: linear-gradient(107deg, #D4215F 0%, #D4215F 73%, #b31c50 73%, #b31c50 100%); color: #fff; font-size: 14px; font-weight: 700; padding: 11px 18px; border: none; border-radius: 0; cursor: pointer; margin: 16px auto 0; }
        .df-submit::before { content: ""; position: absolute; inset: 0; background: #b31c50; transform: scaleX(0); transform-origin: left center; transition: transform .35s ease; z-index: 0; }
        .df-submit:hover::before { transform: scaleX(1); }
        .df-submit__label { position: relative; z-index: 1; line-height: 1; }
        .df-submit__icon { position: relative; z-index: 1; width: 24px; height: 24px; border: 1.5px solid #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .df-submit__icon::before { content: ""; display: block; width: 6px; height: 6px; border-top: 1.5px solid #fff; border-right: 1.5px solid #fff; transform: translateX(-1px) rotate(45deg); }
        .df-consent { font-size: 13px; color: #555; line-height: 1.8; margin: 14px 0 0; }
        .df-consent a { color: #2a5a9b; text-decoration: underline; }
        .df-consent a:hover { opacity: .8; }
        .df-field.df-active .df-input,
        .df-field.df-active .df-select,
        .df-field.df-active .df-opt { border-width: 2px; animation: df-blink 1.2s step-end infinite; }
        .df-field.df-active .df-input:focus,
        .df-field.df-active .df-select:focus { animation: none; }
        @keyframes df-blink { 0% { border-color: #e53935; } 50% { border-color: #d0d5dd; } }
        @media (prefers-reduced-motion: reduce) { .df-field.df-active .df-input, .df-field.df-active .df-select, .df-field.df-active .df-opt { animation: none; } }

        /* タブレット以下: 1カラム化＋固定解除（フォームは本文の後ろに回る） */
        @media (max-width: 900px) {
          .sem-layout { grid-template-columns: 1fr; gap: 24px; }
          .sem-side { position: static; }
        }
        @media (max-width: 640px) {
          .sem-wrap { padding: 84px 18px 60px; }
          .sem-main { padding: 26px 20px; }
          .sem-hero__title { font-size: 25px; }
          .sem-speaker { flex-direction: column; align-items: center; text-align: center; }
        }
      ` }} />

      <BizHeader />

      <div className="sem-wrap">
        <nav className="sem-breadcrumb">
          <a href="/">TOP</a> <span>&rsaquo;</span> <a href="/archive">セミナーアーカイブ</a> <span>&rsaquo; {seminar.title}</span>
        </nav>

        <div className="sem-layout">
          {/* 左：本文（ヒーロー→各セクション） */}
          <div className="sem-main">
            <div className="sem-hero">
              <h1 className="sem-hero__title">{seminar.title}</h1>
              <p className="sem-hero__lead">{seminar.lead}</p>
              <div className="sem-hero__bar">
                <div>
                  <span className="sem-hero__tag">{seminar.tag}</span>
                  <span className="sem-hero__date">{seminar.date}</span>
                </div>
                <div className="sem-hero__share">
                  <span className="sem-hero__share-label">SHARE</span>
                  <a href={`https://twitter.com/intent/tweet?url=https://biz.bytech.jp/seminars/${seminar.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Xでシェア">X</a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https://biz.bytech.jp/seminars/${seminar.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Facebookでシェア">f</a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://biz.bytech.jp/seminars/${seminar.slug}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedInでシェア">in</a>
                </div>
              </div>
              <div className="sem-hero__thumb">
                {seminar.thumb ? (
                  <img src={seminar.thumb} alt={seminar.title} />
                ) : (
                  <span className="sem-hero__thumb-label">{seminar.thumbLabel}</span>
                )}
              </div>
            </div>

            <section className="sem-sec">
              <div className="sem-sec__head"><h2>このセミナーについて</h2><span className="en">About</span></div>
              {seminar.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            <section className="sem-sec">
              <div className="sem-sec__head"><h2>こんな方におすすめ</h2><span className="en">Recommended</span></div>
              <ul className="sem-reco">
                {seminar.recommendedFor.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>

            <section className="sem-sec">
              <div className="sem-sec__head"><h2>登壇者</h2><span className="en">Speaker</span></div>
              <div className="sem-speaker">
                <div className="sem-speaker__photo">
                  {seminar.speaker.photo ? <img src={seminar.speaker.photo} alt={seminar.speaker.name} /> : "PHOTO"}
                </div>
                <div>
                  <p className="sem-speaker__name">{seminar.speaker.name}</p>
                  <p className="sem-speaker__role">{seminar.speaker.role}</p>
                  <p className="sem-speaker__bio">{seminar.speaker.bio}</p>
                </div>
              </div>
            </section>

            <section className="sem-sec">
              <div className="sem-sec__head"><h2>プログラム</h2><span className="en">Program</span></div>
              <ul className="sem-prog">
                {seminar.program.map((p, i) => (
                  <li key={i}>
                    <p className="sem-prog__title">{p.title}</p>
                    <p className="sem-prog__body">{p.body}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 右：申込フォーム（サイド固定・送信後に視聴URLをメール配布） */}
          <aside className="sem-side" id="apply">
            <div className="sem-side__card">
              <div className="sem-side__head">
                <p className="sem-side__head-title">アーカイブ視聴申し込みフォーム</p>
              </div>
              <div className="sem-side__form">
                <div dangerouslySetInnerHTML={{ __html: seminarFormHtml(seminar.formAction) }} />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <BizFooter />

      <script dangerouslySetInnerHTML={{ __html: `(function(){
        function init(){
          var form=document.querySelector('form.formrun');
          if(!form){return setTimeout(init,120);}
          var all=[].slice.call(form.querySelectorAll('.df-field'));
          var guide=all.slice(0,2);
          function filled(f){
            var els=f.querySelectorAll('input,select,textarea');
            for(var i=0;i<els.length;i++){var e=els[i];
              if(e.type==='radio'||e.type==='checkbox'){if(e.checked)return true;}
              else if(e.value&&e.value.trim())return true;
            }
            return false;
          }
          function update(){
            var set=false;
            guide.forEach(function(f){
              if(!set&&!filled(f)){f.classList.add('df-active');set=true;}
              else f.classList.remove('df-active');
            });
          }
          form.addEventListener('change',update);
          form.addEventListener('keydown',function(e){
            if(e.key==='Enter'&&!e.isComposing&&e.keyCode!==229){var t=e.target;if(t.tagName==='INPUT'&&t.type!=='checkbox'&&t.type!=='radio'){e.preventDefault();t.blur();update();}}
          });
          update();

          var FREE=['gmail.com','googlemail.com','yahoo.co.jp','yahoo.com','ymail.com','hotmail.com','hotmail.co.jp','outlook.com','outlook.jp','outlook.co.jp','live.jp','live.com','msn.com','icloud.com','me.com','mac.com','aol.com','excite.co.jp','nifty.com','so-net.ne.jp','ocn.ne.jp','docomo.ne.jp','ezweb.ne.jp','au.com','softbank.ne.jp','i.softbank.jp','ybb.ne.jp','goo.jp','biglobe.ne.jp','plala.or.jp','dion.ne.jp','hi-ho.ne.jp','infoseek.jp','protonmail.com','proton.me','zoho.com','gmx.com','mail.com','fastmail.com'];
          var email=form.querySelector('[name="メールアドレス"]');
          var freeErr=form.querySelector('.df-error--free');
          function isFree(v){var m=/@([^@\\s]+)$/.exec((v||'').trim().toLowerCase());return !!m&&FREE.indexOf(m[1])!==-1;}
          function checkFree(){var bad=email&&email.value.indexOf('@')>0&&isFree(email.value);if(freeErr)freeErr.style.display=bad?'block':'none';return bad;}
          if(email){
            email.addEventListener('blur',checkFree);
            email.addEventListener('input',function(){if(freeErr&&freeErr.style.display==='block')checkFree();});
            form.addEventListener('submit',function(e){if(isFree(email.value)){e.preventDefault();e.stopImmediatePropagation();checkFree();email.focus();}},true);
          }
        }
        init();
      })();` }} />
    </>
  );
}
