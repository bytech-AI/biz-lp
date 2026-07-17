
export default function DocAPage() {
  return (
    <>
      <link rel="stylesheet" href="/biz/assets/slick/slick.css" />
      <link rel="stylesheet" href="/biz/assets/slick/slick-theme.css" />
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: var(--font-noto-jp), sans-serif;
          color: #333;
          background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat;
          margin: 0;
          padding: 0;
        }
        .doc-header-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 40px;
        }
        .doc-header__logo img {
          height: 28px;
          filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%);
        }
        .doc-header__nav {
          display: flex;
          gap: 4px;
          align-items: center;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          padding: 4px;
        }
        .doc-header__nav a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 40px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .doc-header__nav a.btn-outline:hover {
          background: #f0f2f5;
          border-color: #fff;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8);
        }
        .doc-header__nav a.btn-fill {
          background: linear-gradient(135deg, #1a6fb5, #2a9fd6);
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(26, 111, 181, 0.3);
        }
        .doc-header__nav a.btn-fill:hover {
          opacity: 0.9;
          box-shadow: 0 4px 12px rgba(26, 111, 181, 0.4);
        }
        .doc-main {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 20px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .doc-main {
            flex-direction: column;
            /* align-items:flex-start のままだと子の幅がcontent基準になり、
               slickのslick-track幅に引っ張られてレイアウトが暴走する。
               stretchで子をコンテナ幅に固定して連鎖を断つ。 */
            align-items: stretch;
            margin: 30px auto;
          }
        }
        .doc-content {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .doc-content__eyebrow {
          color: #2a5a9b;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .doc-content__title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.4;
        }
        .doc-content__image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .doc-content__desc {
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .doc-content__subtitle {
          font-size: 22px;
          font-weight: 800;
          color: #0a7ac2;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 3px dashed #0a7ac2;
        }
        .doc-content__list-wrap {
          background: #fff;
          border-radius: 8px;
          padding: 30px 30px 30px 40px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          margin-bottom: 30px;
        }
        .doc-content__list {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: item;
        }
        .doc-content__list li {
          font-size: 16px;
          font-weight: 600;
          line-height: 2.2;
          counter-increment: item;
        }
        .doc-content__list li::before {
          content: counter(item) ". ";
          font-weight: 700;
        }
        .doc-content__carousel {
          margin-bottom: 30px;
        }
        .doc-content__carousel img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        /* slick初期化前は最初の1枚だけ表示（巨大画像/8枚スタックのチラつき防止） */
        .doc-carousel:not(.slick-initialized) > div:not(:first-child) {
          display: none;
        }
        .doc-content__carousel .slick-dots {
          bottom: -30px;
        }
        .doc-content__carousel .slick-dots li button:before {
          font-size: 10px;
          color: #1a2e50;
        }
        .doc-content__carousel .slick-prev,
        .doc-content__carousel .slick-next {
          z-index: 2;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(26, 46, 80, 0.18);
          transition: box-shadow .2s ease, transform .2s ease;
        }
        .doc-content__carousel .slick-prev { left: 12px; }
        .doc-content__carousel .slick-next { right: 12px; }
        .doc-content__carousel .slick-prev:hover,
        .doc-content__carousel .slick-next:hover {
          background: #fff;
          box-shadow: 0 6px 18px rgba(26, 46, 80, 0.28);
          /* transform:scale は slick の translateY(-50%) 中央寄せを上書きして
             矢印が下にズレ落ちるため指定しない（hoverは box-shadow のみ変化）。 */
        }
        /* slick標準フォントの矢印グリフ(ネイビー円＋切り抜き)をやめ、borderで描く端正なネイビー矢印に */
        .doc-content__carousel .slick-prev:before,
        .doc-content__carousel .slick-next:before {
          content: "";
          display: block;
          width: 11px;
          height: 11px;
          border-top: 2.5px solid #1a2e50;
          border-right: 2.5px solid #1a2e50;
          border-radius: 1.5px;
          opacity: 1;
        }
        .doc-content__carousel .slick-prev:before { transform: translateX(2px) rotate(-135deg); }
        .doc-content__carousel .slick-next:before { transform: translateX(-2px) rotate(45deg); }
        .doc-form {
          width: 100%;
          max-width: 420px;
          flex-shrink: 0;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          padding: 14px 24px 22px;
          position: sticky;
          top: 30px;
        }
        @media (max-width: 768px) {
          .doc-form {
            max-width: 100%;
            position: static;
          }
        }
        .doc-form__title {
          font-size: 20px;
          font-weight: 800;
          text-align: center;
          margin: 0 0 10px;
        }
        /* formrun SDK 自前フォーム（stock-sun風シンプル・コンパクト） */
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
        /* お名前欄：赤枠＋点滅 */
        /* ガイド点滅：現在入力すべき項目(.df-active)だけ赤↔グレーでウィンカー点滅。グレー枠は常時ベースにあり残る。入力中(focus)は停止。 */
        .df-field.df-active .df-input,
        .df-field.df-active .df-select,
        .df-field.df-active .df-opt { border-width: 2px; animation: df-blink 1.2s step-end infinite; }
        .df-field.df-active .df-input:focus,
        .df-field.df-active .df-select:focus { animation: none; }
        @keyframes df-blink { 0% { border-color: #e53935; } 50% { border-color: #d0d5dd; } }
        @media (prefers-reduced-motion: reduce) { .df-field.df-active .df-input, .df-field.df-active .df-select, .df-field.df-active .df-opt { animation: none; } }
        .doc-footer {
          background: #1a2e50;
          color: #fff;
          text-align: center;
          padding: 30px 20px;
          font-size: 13px;
        }
        .doc-footer a {
          color: #fff;
          text-decoration: none;
        }
        .doc-footer__logo {
          margin-bottom: 16px;
        }
        .doc-footer__logo img {
          height: 24px;
        }
      ` }} />

      <div className="doc-header-wrap">
        <div className="doc-header__logo">
          <a href="/">
            <img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <nav className="doc-header__nav">
          <a href="/" className="btn-outline">トップページ</a>
          <a href="/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>

      <main className="doc-main">
        <div className="doc-content">
          <p className="doc-content__eyebrow">Download _</p>
          <h1 className="doc-content__title">【サービス紹介】「ハンズオン型法人AI研修｜バイテックBiz」【資料ダウンロード】</h1>
          <img src="/biz/assets/img/wp/Certificate-MockUp-02-2-1024x683.webp" alt="バイテックBiz資料サムネ" className="doc-content__image" />
          <p className="doc-content__desc">ハンズオン型法人AI研修サービスバイテックBizを紹介する「サービス概要資料」となります！</p>
          <h2 className="doc-content__subtitle">この資料で分かること</h2>
          <div className="doc-content__list-wrap">
            <ol className="doc-content__list">
              <li>現在の生成AI</li>
              <li>生成AI導入の課題</li>
              <li>バイテックのアプローチ</li>
              <li>カリキュラム</li>
              <li>バイテックのサポート</li>
              <li>料金プラン</li>
              <li>ご支援の流れ</li>
              <li>弊社コンサルタントのご紹介</li>
              <li>会社概要</li>
            </ol>
          </div>
          <div className="doc-content__carousel">
            <div className="doc-carousel">
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.13.33_1-1-2048x1154.webp" alt="スライド1" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.41.41_6-2048x1153.webp" alt="スライド2" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.13.42_2-1-2048x1153.webp" alt="スライド3" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.41.53_7-2048x1148.webp" alt="スライド4" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.13.53_5-2048x1146.webp" alt="スライド5" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.42.12_3-2048x1153.webp" alt="スライド6" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.42.25_4-2048x1158.webp" alt="スライド7" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.42.37_8-1-2048x1152.webp" alt="スライド8" /></div>
            </div>
          </div>
        </div>

        <div className="doc-form">
          <p className="doc-form__title">資料ダウンロードフォーム</p>
          {/* formrun SDK 自前フォーム。class/action/method は formrun 指定のため変更不可。設問は @document-1 に準拠。
              React管理外(dangerouslySetInnerHTML)にして SDK とハイドレーションの競合(点滅)を回避（counselingと同方式）。 */}
          <div dangerouslySetInnerHTML={{ __html: `
          <form class="formrun df-form" action="https://form.run/api/v1/r/pgetvek7sw64q7ycxwsraw6l" method="post">
            <!-- どの資料のDLかをDiscord通知で識別するための隠しフィールド。ページごとに value を変える。
                 ※ formrun 管理画面で「資料名」フィールドを登録しておくこと（未登録だと通知に載らない）。 -->
            <input type="hidden" name="資料名" value="サービス紹介資料">
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
            <button class="df-submit" type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..."><span class="df-submit__label">ダウンロードする</span><span class="df-submit__icon"></span></button>
            <p class="df-consent">フォームの送信をもって<a href="/privacy-policy/" target="_blank" rel="noopener">プライバシーポリシー</a>に同意したものとします。</p>
          </form>
          ` }} />
        </div>
      </main>

      <footer className="doc-footer">
        <div className="doc-footer__logo">
          <a href="/">
            <img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>

      {/* 入力ガイド点滅：お名前・企業名の2項目のみ。現在の未入力項目を点滅、入力中は停止、確定(change/Enter)で次へ。 */}
      <script dangerouslySetInnerHTML={{ __html: `(function(){
        function init(){
          var form=document.querySelector('form.formrun');
          if(!form){ return setTimeout(init,120); }
          var all=[].slice.call(form.querySelectorAll('.df-field'));
          var guide=all.slice(0,2); // お名前・企業名まで
          function filled(f){
            var els=f.querySelectorAll('input,select,textarea');
            for(var i=0;i<els.length;i++){var e=els[i];
              if(e.type==='radio'||e.type==='checkbox'){ if(e.checked) return true; }
              else if(e.value && e.value.trim()) return true;
            }
            return false;
          }
          function update(){
            var set=false;
            guide.forEach(function(f){
              if(!set && !filled(f)){ f.classList.add('df-active'); set=true; }
              else f.classList.remove('df-active');
            });
          }
          form.addEventListener('change',update);
          form.addEventListener('keydown',function(e){
            /* IME変換確定のEnter(isComposing / keyCode 229)は無視。文字重複を防ぐ */
            if(e.key==='Enter' && !e.isComposing && e.keyCode!==229){ var t=e.target; if(t.tagName==='INPUT'&&t.type!=='checkbox'&&t.type!=='radio'){ e.preventDefault(); t.blur(); update(); } }
          });
          update();

          /* フリーメール拒否（会社メール限定） */
          var FREE=['gmail.com','googlemail.com','yahoo.co.jp','yahoo.com','ymail.com','hotmail.com','hotmail.co.jp','outlook.com','outlook.jp','outlook.co.jp','live.jp','live.com','msn.com','icloud.com','me.com','mac.com','aol.com','excite.co.jp','nifty.com','so-net.ne.jp','ocn.ne.jp','docomo.ne.jp','ezweb.ne.jp','au.com','softbank.ne.jp','i.softbank.jp','ybb.ne.jp','goo.jp','biglobe.ne.jp','plala.or.jp','dion.ne.jp','hi-ho.ne.jp','infoseek.jp','protonmail.com','proton.me','zoho.com','gmx.com','mail.com','fastmail.com'];
          var email=form.querySelector('[name="メールアドレス"]');
          var freeErr=form.querySelector('.df-error--free');
          function isFree(v){ var m=/@([^@\\s]+)$/.exec((v||'').trim().toLowerCase()); return !!m && FREE.indexOf(m[1])!==-1; }
          function checkFree(){ var bad=email && email.value.indexOf('@')>0 && isFree(email.value); if(freeErr) freeErr.style.display=bad?'block':'none'; return bad; }
          if(email){
            email.addEventListener('blur',checkFree);
            email.addEventListener('input',function(){ if(freeErr && freeErr.style.display==='block') checkFree(); });
            form.addEventListener('submit',function(e){ if(isFree(email.value)){ e.preventDefault(); e.stopImmediatePropagation(); checkFree(); email.focus(); } }, true);
          }
        }
        if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
      })();` }} />
      {/* jQuery→slick→初期化 を順番にロード（自前で依存順にチェーン）。 */}
      <script dangerouslySetInnerHTML={{ __html: `(function(){
          function load(src, cb){ var s=document.createElement('script'); s.src=src; s.onload=cb; document.body.appendChild(s); }
          load('https://code.jquery.com/jquery-3.7.1.min.js', function(){
            load('/biz/assets/slick/slick.min.js', function(){
              window.jQuery(function(){
                window.jQuery('.doc-carousel').slick({
                  autoplay: false, dots: true, arrows: true,
                  slidesToShow: 1, speed: 400
                });
              });
            });
          });
        })();` }} />
    </>
  )
}
