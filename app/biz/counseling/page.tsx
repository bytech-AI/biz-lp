export default function CounselingPage() {
  return (
    <>
      <link rel="stylesheet" href="/biz/assets/css/style.min.css" />
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: var(--font-noto-jp), sans-serif;
          color: #333;
          background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat;
          margin: 0;
          padding: 0;
        }
        .csl-header-wrap {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 40px;
        }
        .csl-header__logo img {
          height: 28px;
          filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%);
        }
        .csl-header__nav {
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
        .csl-header__nav a {
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
        .csl-header__nav a.btn-outline:hover {
          background: #f0f2f5;
          border-color: #fff;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8);
        }
        .csl-header__nav a.btn-fill {
          background: linear-gradient(135deg, #1a6fb5, #2a9fd6);
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(26, 111, 181, 0.3);
        }
        .csl-header__nav a.btn-fill:hover {
          opacity: 0.9;
          box-shadow: 0 4px 12px rgba(26, 111, 181, 0.4);
        }
        .csl-main {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 20px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .csl-main {
            flex-direction: column;
            margin: 30px auto;
          }
          .csl-header-wrap {
            padding: 12px 16px;
          }
          .csl-header__nav a {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
        .csl-content {
          flex: 1;
        }
        .csl-content__title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .csl-content__desc {
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .csl-content__image {
          width: 100%;
          height: auto;
        }
        .csl-calendar {
          width: 100%;
          max-width: 460px;
          flex-shrink: 0;
          position: sticky;
          top: 30px;
        }
        .csl-calendar .bc-wrapper {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }
        .csl-calendar .bc-card-body { padding: 18px 14px; }
        @media (max-width: 768px) {
          .csl-calendar {
            max-width: 100%;
            position: static;
          }
        }
        /* ---- bc-* booking calendar ---- */
        :root{--bc-primary:#1a237e;--bc-primary-light:#3949ab;--bc-primary-bg:#E8EAF6;--bc-accent:#C5A572;--bc-bg:#ffffff;--bc-card-bg:#ffffff;--bc-text:#0f0f1e;--bc-text-sub:#6B7280;--bc-border:#E5E7EB;--bc-radius:14px;--bc-err:#DC2626;--bc-row-h:72px}
        .bc-wrapper{max-width:760px;margin:0 auto;padding:20px 16px 32px;font-family:'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN',Meiryo,sans-serif;color:var(--bc-text);-webkit-font-smoothing:antialiased}
        .bc-progress{display:flex;align-items:center;justify-content:center;gap:0;margin:0 0 20px;padding:0 10px}
        .bc-step{display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0}
        .bc-dot{width:30px;height:30px;border-radius:50%;background:#e0e0e0;display:flex;align-items:center;justify-content:center;transition:all .3s}
        .bc-dot-num{font-size:13px;font-weight:700;color:#999;transition:all .3s}
        .bc-dot-label{font-size:11px;color:#999;font-weight:600;white-space:nowrap;transition:all .3s}
        .bc-step.active .bc-dot{background:var(--bc-primary);box-shadow:0 2px 8px rgb(26 35 126 / .3)}
        .bc-step.active .bc-dot-num{color:#fff}
        .bc-step.active .bc-dot-label{color:var(--bc-primary)}
        .bc-step.done .bc-dot{background:var(--bc-primary)}
        .bc-step.done .bc-dot-num{color:#fff}
        .bc-step.done .bc-dot-label{color:var(--bc-primary)}
        .bc-conn{flex:1;height:3px;background:#e0e0e0;border-radius:2px;margin:0 6px;position:relative;margin-bottom:18px;overflow:hidden}
        .bc-conn-fill{position:absolute;top:0;left:0;height:100%;width:0;background:var(--bc-primary);border-radius:2px;transition:width .4s}
        .bc-conn.half .bc-conn-fill{width:50%}
        .bc-conn.filled .bc-conn-fill{width:100%}
        .bc-card{background:var(--bc-card-bg);border-radius:var(--bc-radius);box-shadow:0 2px 16px rgb(0 0 0 / .06);overflow:hidden;position:relative}
        .bc-card-accent{height:4px;background:linear-gradient(90deg,var(--bc-primary),var(--bc-accent))}
        .bc-card-body{padding:22px}
        .bc-panel{display:none}
        .bc-panel.active{display:block;animation:bcFadeIn .3s ease}
        .bc-cal-title-bar{text-align:center;font-size:15px;font-weight:700;color:var(--bc-text);margin-bottom:14px;min-height:20px}
        .bc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;gap:14px;min-height:280px}
        .bc-spinner-lg{width:36px;height:36px;border:3px solid var(--bc-border);border-top-color:var(--bc-primary);border-radius:50%;animation:bcSpin .8s linear infinite}
        .bc-loading-text{font-size:13px;color:var(--bc-text-sub);font-weight:600;letter-spacing:.3px}
        .bc-grid-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
        .bc-grid{display:grid;grid-template-columns:38px repeat(10,minmax(70px,1fr));min-width:780px}
        .bc-grid-corner{border-bottom:2px solid var(--bc-border)}
        .bc-dh{text-align:center;padding:8px 0 10px;border-bottom:2px solid var(--bc-border)}
        .bc-dh-dow{font-size:12px;font-weight:700;color:var(--bc-text-sub)}
        .bc-dh-date{font-size:16px;font-weight:800;color:var(--bc-text);margin-top:1px}
        .bc-dh.today .bc-dh-dow,.bc-dh.today .bc-dh-date{color:var(--bc-primary)}
        .bc-tl{display:flex;align-items:center;justify-content:flex-end;font-size:10px;font-weight:700;color:var(--bc-text-sub);height:var(--bc-row-h);border-right:1px solid var(--bc-border);border-bottom:1px solid #f5f5f5;padding-right:5px;box-sizing:border-box}
        .bc-cell{height:var(--bc-row-h);border-bottom:1px solid #f5f5f5;padding:3px;display:flex;align-items:center;justify-content:center;box-sizing:border-box}
        .bc-slot{width:100%;height:100%;border-radius:8px;border:none;background:#F3F4F6;cursor:default;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;transition:all .15s;padding:2px}
        .bc-slot.has-slot{background:#E8F7EE;cursor:pointer}
        .bc-slot.has-slot:hover{background:#CFEFD9;outline:1.5px solid var(--bc-primary)}
        .bc-slot.selected{background:var(--bc-primary)!important;transform:scale(1.02);outline:none}
        .bc-slot.selected .bc-badge-icon,.bc-slot.selected .bc-badge-num,.bc-slot.selected .bc-badge-label,.bc-slot.selected .bc-badge-tail,.bc-slot.selected .bc-x{color:#fff!important}
        .bc-badge{display:flex;flex-direction:column;align-items:center;gap:2px;line-height:1}
        .bc-badge-icon{font-size:26px;font-weight:500;line-height:1;color:#16A34A}
        .bc-badge-label{font-size:11px;font-weight:700;color:#000;line-height:1}
        .bc-badge-num{font-size:17px;font-weight:900;line-height:1}
        .bc-badge-tail{font-size:11px;font-weight:700;color:#000;line-height:1}
        .bc-badge-few .bc-badge-num{color:#D97706}
        .bc-badge-last .bc-badge-num{color:#DC2626}
        .bc-x{color:#9CA3AF;font-size:20px;font-weight:400}
        .bc-time-bar-d{display:flex;align-items:center;gap:8px;background:var(--bc-primary-bg);padding:10px 14px;border-radius:10px;margin-bottom:16px;font-size:14px;font-weight:600;color:var(--bc-primary)}
        .bc-time-bar-d svg{width:18px;height:18px;flex-shrink:0}
        .bc-field{margin-bottom:14px}
        .bc-label{display:block;font-size:13px;font-weight:700;color:var(--bc-text);margin-bottom:5px}
        .bc-req{color:var(--bc-err);font-size:11px;font-weight:700}
        .bc-opt{color:var(--bc-text-sub);font-size:11px;font-weight:600}
        .bc-hint{font-size:11px;color:var(--bc-text-sub);font-weight:500;margin-left:4px}
        .bc-input{width:100%;padding:11px 14px;border:1.5px solid var(--bc-border);border-radius:10px;font-size:15px;color:var(--bc-text);outline:none;transition:border .2s;box-sizing:border-box;font-family:inherit}
        .bc-input:focus{border-color:var(--bc-primary)}
        .bc-input.error{border-color:var(--bc-err);background:#fef2f2}
        .bc-name-row{display:flex;gap:8px}
        .bc-name-row .bc-input{flex:1}
        .bc-textarea{resize:vertical;min-height:80px}
        .bc-err-msg{display:none;font-size:12px;color:var(--bc-err);margin-top:4px;font-weight:600}
        .bc-err-msg.show{display:block}
        .bc-radio-group{display:flex;flex-direction:column;gap:8px}
        .bc-radio-group-h{display:flex;flex-wrap:wrap;gap:8px}
        .bc-radio-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1.5px solid var(--bc-border);border-radius:10px;cursor:pointer;transition:all .2s;background:var(--bc-bg)}
        .bc-radio-item:hover{border-color:var(--bc-primary);background:var(--bc-primary-bg)}
        .bc-radio-item.selected{border-color:var(--bc-primary);background:var(--bc-primary-bg)}
        .bc-radio-group-h .bc-radio-item{flex:1 1 calc(50% - 8px);min-width:120px}
        .bc-radio-dot{width:18px;height:18px;border-radius:50%;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
        .bc-radio-item.selected .bc-radio-dot{border-color:var(--bc-primary)}
        .bc-radio-dot-inner{width:10px;height:10px;border-radius:50%;background:var(--bc-primary);transform:scale(0);transition:transform .2s}
        .bc-radio-item.selected .bc-radio-dot-inner{transform:scale(1)}
        .bc-radio-text{font-size:14px;font-weight:600;color:var(--bc-text)}
        .bc-check-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1.5px solid var(--bc-border);border-radius:10px;cursor:pointer;transition:all .2s;background:var(--bc-bg)}
        .bc-check-item:hover{border-color:var(--bc-primary);background:var(--bc-primary-bg)}
        .bc-check-item.selected{border-color:var(--bc-primary);background:var(--bc-primary-bg)}
        .bc-check-box{width:18px;height:18px;border-radius:4px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
        .bc-check-item.selected .bc-check-box{border-color:var(--bc-primary);background:var(--bc-primary)}
        .bc-check-mark{color:#fff;font-size:13px;font-weight:900;transform:scale(0);transition:transform .2s;line-height:1}
        .bc-check-item.selected .bc-check-mark{transform:scale(1)}
        .bc-check-text{font-size:14px;font-weight:600;color:var(--bc-text)}
        .bc-btn-row{display:flex;gap:10px;margin-top:18px}
        .bc-btn{flex:1;padding:14px 16px;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit;position:relative}
        .bc-btn-next{background:var(--bc-primary);color:#fff}
        .bc-btn-next:hover{background:#151b5f}
        .bc-btn-next:disabled{opacity:.4;cursor:not-allowed}
        .bc-btn-back{background:#f0f0f0;color:var(--bc-text-sub)}
        .bc-btn-back:hover{background:#e5e5e5}
        .bc-btn-submit{background:var(--bc-primary);color:#fff}
        .bc-btn-submit:hover{background:#151b5f}
        .bc-btn-submit.loading .bc-btn-text{visibility:hidden}
        .bc-btn-submit.loading .bc-spinner{display:block}
        .bc-spinner{display:none;width:22px;height:22px;border:3px solid rgb(255 255 255 / .3);border-top-color:#fff;border-radius:50%;animation:bcSpin .6s linear infinite;position:absolute;top:50%;left:50%;margin:-11px 0 0 -11px}
        .bc-counter{text-align:center;font-size:12px;color:var(--bc-text-sub);margin-top:12px;font-weight:600}
        .bc-note{font-size:11px;color:var(--bc-text-sub);margin-top:8px;text-align:center;line-height:1.6}
        @keyframes bcFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bcSpin{to{transform:rotate(360deg)}}
        @media(max-width:560px){.bc-wrapper{padding:12px 8px 24px}.bc-card-body{padding:14px 10px}.bc-badge-icon{font-size:20px}.bc-badge-label{font-size:10px}.bc-badge-num{font-size:15px}.bc-badge-tail{font-size:10px}.bc-x{font-size:16px}.bc-tl{font-size:9px;padding-right:3px}.bc-dh-date{font-size:13px}.bc-dh-dow{font-size:10px}:root{--bc-row-h:54px}.bc-grid{grid-template-columns:28px repeat(10,minmax(56px,1fr));min-width:620px}.bc-cell{padding:2px}.bc-loading-wrap{padding:48px 16px;min-height:240px}.bc-radio-group-h .bc-radio-item{flex:1 1 100%}}
        .csl-footer {
          background: #1a2e50;
          color: #fff;
          text-align: center;
          padding: 30px 20px;
          font-size: 13px;
        }
        .csl-footer a {
          color: #fff;
          text-decoration: none;
        }
        .csl-footer__logo {
          margin-bottom: 16px;
        }
        .csl-footer__logo img {
          height: 24px;
        }
      ` }} />

      <div className="csl-header-wrap">
        <div className="csl-header__logo">
          <a href="/">
            <img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <nav className="csl-header__nav">
          <a href="/" className="btn-outline">トップページ</a>
          <a href="/doc-a/" className="btn-fill">資料をダウンロード</a>
        </nav>
      </div>

      <main className="csl-main">
        <div className="csl-content">
          <h1 className="csl-content__title">社内でのAI活用に関する<br />ご質問・ご相談を承ります。</h1>
          <p className="csl-content__desc">当日はZoomにて約1時間のセッションを行います。<br />社内でのAI活用方法や学ぶべき内容など、課題やお悩みに合わせた解決策をご提案します。</p>
          <img src="/biz/assets/img/wp/formグラフィック.svg" alt="個別相談予約フォーム" className="csl-content__image" />
        </div>

        <div className="csl-calendar">
          <div dangerouslySetInnerHTML={{ __html: "<div class=\"bc-wrapper\" id=\"form\">\n  <div class=\"bc-progress\">\n    <div class=\"bc-step active\" data-s=\"1\"><div class=\"bc-dot\"><span class=\"bc-dot-num\">1</span></div><span class=\"bc-dot-label\">日時選択</span></div>\n    <div class=\"bc-conn half\"><div class=\"bc-conn-fill\"></div></div>\n    <div class=\"bc-step\" data-s=\"2\"><div class=\"bc-dot\"><span class=\"bc-dot-num\">2</span></div><span class=\"bc-dot-label\">基本情報</span></div>\n    <div class=\"bc-conn\"><div class=\"bc-conn-fill\"></div></div>\n    <div class=\"bc-step\" data-s=\"3\"><div class=\"bc-dot\"><span class=\"bc-dot-num\">3</span></div><span class=\"bc-dot-label\">ニーズ・送信</span></div>\n  </div>\n  <div class=\"bc-card\">\n    <div class=\"bc-card-accent\"></div>\n    <div class=\"bc-card-body\">\n      <div class=\"bc-panel active\" id=\"bcStep1\">\n        <div class=\"bc-cal-title-bar\" id=\"bcCalTitle\"></div>\n        <div class=\"bc-grid-wrap\" id=\"bcCalContainer\">\n          <div class=\"bc-loading-wrap\">\n            <div class=\"bc-spinner-lg\"></div>\n            <div class=\"bc-loading-text\">空き枠を読み込んでいます...</div>\n          </div>\n        </div>\n        <div class=\"bc-btn-row\">\n          <button class=\"bc-btn bc-btn-next\" id=\"bcBtnStep1\" disabled onclick=\"bcGoTo(2)\"><span class=\"bc-btn-text\">次へ進む</span></button>\n        </div>\n      </div>\n\n      <div class=\"bc-panel\" id=\"bcStep2\">\n        <div class=\"bc-time-bar-d\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>\n          <span id=\"bcTimeBarText\">-</span>\n        </div>\n        <div class=\"bc-field\"><label class=\"bc-label\">会社名 <span class=\"bc-req\">必須</span></label><input type=\"text\" class=\"bc-input\" id=\"bcCompany\" placeholder=\"例：株式会社バイテック\" autocomplete=\"organization\"><div class=\"bc-err-msg\" id=\"bcErrCompany\">会社名を入力してください</div></div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">お名前 <span class=\"bc-req\">必須</span></label>\n          <div class=\"bc-name-row\">\n            <input type=\"text\" class=\"bc-input\" id=\"bcLastName\" placeholder=\"姓（例：山田）\" autocomplete=\"family-name\">\n            <input type=\"text\" class=\"bc-input\" id=\"bcFirstName\" placeholder=\"名（例：太郎）\" autocomplete=\"given-name\">\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrName\">姓・名ともに入力してください</div>\n        </div>\n        <div class=\"bc-field\"><label class=\"bc-label\">メールアドレス <span class=\"bc-req\">必須</span></label><input type=\"email\" class=\"bc-input\" id=\"bcEmail\" placeholder=\"例：taro@example.com\" autocomplete=\"email\"><div class=\"bc-err-msg\" id=\"bcErrEmail\">正しいメールアドレスを入力してください</div></div>\n        <div class=\"bc-field\"><label class=\"bc-label\">電話番号 <span class=\"bc-req\">必須</span><span class=\"bc-hint\">※ハイフンなしで入力ください</span></label><input type=\"tel\" class=\"bc-input\" id=\"bcPhone\" placeholder=\"例：09012345678\" autocomplete=\"tel\"><div class=\"bc-err-msg\" id=\"bcErrPhone\">電話番号を入力してください</div></div>\n        <div class=\"bc-field\"><label class=\"bc-label\">部署・所属名 <span class=\"bc-req\">必須</span></label><input type=\"text\" class=\"bc-input\" id=\"bcDept\" placeholder=\"例：経営企画部\"><div class=\"bc-err-msg\" id=\"bcErrDept\">部署・所属名を入力してください</div></div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">従業員規模 <span class=\"bc-req\">必須</span></label>\n          <div class=\"bc-radio-group-h\" data-group=\"employees\">\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'employees','〜9名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜9名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'employees','10〜49名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">10〜49名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'employees','50〜99名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">50〜99名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'employees','100〜499名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">100〜499名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'employees','500名〜')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">500名〜</span></div>\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrEmployees\">1つ選択してください</div>\n        </div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">役職クラス <span class=\"bc-req\">必須</span></label>\n          <div class=\"bc-radio-group\" data-group=\"role\">\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','経営者・役員クラス')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">経営者・役員クラス</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','本部長クラス')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">本部長クラス</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','部長クラス')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">部長クラス</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','課長クラス')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">課長クラス</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','係長・主任クラス')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">係長・主任クラス</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','一般社員')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">一般社員</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','派遣社員')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">派遣社員</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'role','契約社員')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">契約社員</span></div>\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrRole\">1つ選択してください</div>\n        </div>\n        <div class=\"bc-btn-row\">\n          <button class=\"bc-btn bc-btn-back\" onclick=\"bcGoTo(1)\">戻る</button>\n          <button class=\"bc-btn bc-btn-next\" onclick=\"bcGoTo(3)\"><span class=\"bc-btn-text\">次へ進む</span></button>\n        </div>\n      </div>\n\n      <div class=\"bc-panel\" id=\"bcStep3\">\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">希望するAI研修の形式 <span class=\"bc-req\">必須</span><span class=\"bc-hint\">※複数選択可</span></label>\n          <div class=\"bc-radio-group\" data-check-group=\"formats\">\n            <div class=\"bc-check-item\" onclick=\"bcToggleCheck(this,'formats','e-ラーニング')\"><div class=\"bc-check-box\"><span class=\"bc-check-mark\">✓</span></div><span class=\"bc-check-text\">e-ラーニング</span></div>\n            <div class=\"bc-check-item\" onclick=\"bcToggleCheck(this,'formats','ハンズオン（個別マンツーマン形式）')\"><div class=\"bc-check-box\"><span class=\"bc-check-mark\">✓</span></div><span class=\"bc-check-text\">ハンズオン（個別マンツーマン形式）</span></div>\n            <div class=\"bc-check-item\" onclick=\"bcToggleCheck(this,'formats','集団研修（セミナー形式）')\"><div class=\"bc-check-box\"><span class=\"bc-check-mark\">✓</span></div><span class=\"bc-check-text\">集団研修（セミナー形式）</span></div>\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrFormats\">1つ以上選択してください</div>\n        </div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">3ヶ月以内の導入を予定していますか？ <span class=\"bc-req\">必須</span></label>\n          <div class=\"bc-radio-group-h\" data-group=\"urgency\">\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'urgency','はい')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">はい</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'urgency','いいえ')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">いいえ</span></div>\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrUrgency\">選択してください</div>\n        </div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">受講対象者の想定人数 <span class=\"bc-req\">必須</span></label>\n          <div class=\"bc-radio-group-h\" data-group=\"participants\">\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜5名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜5名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜10名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜10名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜30名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜30名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜50名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜50名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜100名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜100名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜200名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜200名</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'participants','〜300名')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">〜300名</span></div>\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrParticipants\">1つ選択してください</div>\n        </div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">認知経路 <span class=\"bc-req\">必須</span></label>\n          <div class=\"bc-radio-group\" data-group=\"awareness\">\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','企業HP')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">企業HP</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','AI HACK')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">AI HACK</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','Google検索')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">Google検索</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','Yahoo検索')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">Yahoo検索</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','X')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">X</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','Instagram')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">Instagram</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','プレスリリース')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">プレスリリース</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','知人・友人')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">知人・友人</span></div>\n            <div class=\"bc-radio-item\" onclick=\"bcSelectRadio(this,'awareness','その他')\"><div class=\"bc-radio-dot\"><div class=\"bc-radio-dot-inner\"></div></div><span class=\"bc-radio-text\">その他</span></div>\n          </div>\n          <div class=\"bc-err-msg\" id=\"bcErrAwareness\">1つ選択してください</div>\n        </div>\n        <div class=\"bc-field\">\n          <label class=\"bc-label\">メッセージ <span class=\"bc-opt\">任意</span><span class=\"bc-hint\">※具体的なご相談内容等あればご記入ください</span></label>\n          <textarea class=\"bc-input bc-textarea\" id=\"bcMessage\" placeholder=\"\"></textarea>\n        </div>\n        <div class=\"bc-btn-row\">\n          <button class=\"bc-btn bc-btn-back\" onclick=\"bcGoTo(2)\">戻る</button>\n          <button class=\"bc-btn bc-btn-submit\" id=\"bcBtnSubmit\" onclick=\"bcSubmit()\"><span class=\"bc-btn-text\">この内容で予約する</span><div class=\"bc-spinner\"></div></button>\n        </div>\n        <p class=\"bc-note\">送信いただいた情報は<a href=\"https://biz.bytech.jp/privacy-policy/\" target=\"_blank\" style=\"color:var(--bc-primary);text-decoration:underline;\">プライバシーポリシー</a>・<a href=\"https://biz.bytech.jp/user-terms/\" target=\"_blank\" style=\"color:var(--bc-primary);text-decoration:underline;\">利用規約</a>に基づき適切に管理いたします。</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"bc-counter\" id=\"bcCounter\">1 / 3</div>\n</div>" }} />
        </div>
      </main>

      <footer className="csl-footer">
        <div className="csl-footer__logo">
          <a href="/">
            <img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>

      {/* 予約ウィジェット — ネイティブ<script>（next/scriptはNext16でinline評価が壊れ未実行になるため不使用） */}
      <script dangerouslySetInnerHTML={{ __html: `
  const GAS_URL    = 'https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec';
  const THANKS_URL = '/thanks';
  const SOURCE     = 'Biz【オーガニック】';
  const ROUTE_ID   = 'biz_organic';

  const BC_ENTRY='calendar';
  const BC_LP_TYPE='biz';
  const DAY_NAMES_BC=['日','月','火','水','木','金','土'];
  const BC_SS_KEY='bc_form_state_'+ROUTE_ID;

  let bcStep=1,bcSelectedStart='',bcSelectedLabel='',bcSelectedDateStr='',bcAllSlots=[];
  let bcRadios={employees:'',role:'',urgency:'',participants:'',awareness:''};
  let bcChecks={formats:[]};
  window.dataLayer=window.dataLayer||[];

  function bcJstTodayStr(){
    return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  }
  function bcAddDaysJst(ymd,n){
    var p=ymd.split('-').map(Number);
    var d=new Date(Date.UTC(p[0],p[1]-1,p[2])+n*86400000);
    return d.getUTCFullYear()+'-'+String(d.getUTCMonth()+1).padStart(2,'0')+'-'+String(d.getUTCDate()).padStart(2,'0');
  }
  function bcJstDow(ymd){
    var p=ymd.split('-').map(Number);
    return new Date(Date.UTC(p[0],p[1]-1,p[2])).getUTCDay();
  }

  function bcInit(){bcRestoreSession();bcFetchSlots();bcHookAutoSave();}

  function bcRestoreSession(){
    try{
      var raw=sessionStorage.getItem(BC_SS_KEY);
      if(!raw)return;
      var s=JSON.parse(raw);
      ['bcCompany','bcLastName','bcFirstName','bcEmail','bcPhone','bcDept','bcMessage'].forEach(function(id){
        if(s[id] && document.getElementById(id)) document.getElementById(id).value=s[id];
      });
      if(s.radios){
        Object.keys(s.radios).forEach(function(g){
          if(!s.radios[g])return;
          var items=document.querySelectorAll('[data-group="'+g+'"] .bc-radio-item');
          items.forEach(function(it){
            if(it.querySelector('.bc-radio-text').textContent===s.radios[g]){
              it.classList.add('selected');bcRadios[g]=s.radios[g];
            }
          });
        });
      }
      if(s.checks&&s.checks.formats){
        var items=document.querySelectorAll('[data-check-group="formats"] .bc-check-item');
        items.forEach(function(it){
          var t=it.querySelector('.bc-check-text').textContent;
          if(s.checks.formats.indexOf(t)!==-1){it.classList.add('selected');bcChecks.formats.push(t);}
        });
      }
    }catch(e){}
  }
  function bcSaveSession(){
    try{
      var s={
        bcCompany:document.getElementById('bcCompany').value,
        bcLastName:document.getElementById('bcLastName').value,
        bcFirstName:document.getElementById('bcFirstName').value,
        bcEmail:document.getElementById('bcEmail').value,
        bcPhone:document.getElementById('bcPhone').value,
        bcDept:document.getElementById('bcDept').value,
        bcMessage:document.getElementById('bcMessage').value,
        radios:bcRadios,checks:bcChecks
      };
      sessionStorage.setItem(BC_SS_KEY,JSON.stringify(s));
    }catch(e){}
  }
  function bcHookAutoSave(){
    ['bcCompany','bcLastName','bcFirstName','bcEmail','bcPhone','bcDept','bcMessage'].forEach(function(id){
      var el=document.getElementById(id);
      if(el) el.addEventListener('input',bcSaveSession);
    });
  }

  async function bcFetchSlots(){
    try{
      var res=await fetch(GAS_URL+'?action=slots&lp_type=biz',{cache:'no-store'});
      var text=await res.text();
      var result;try{result=JSON.parse(text);}catch{bcShowEmpty('枠の取得に失敗しました');return;}
      if(!result.success||!result.slots||result.slots.length===0){bcShowEmpty('現在、予約可能な枠がありません');return;}
      bcAllSlots=result.slots;
      bcRenderCalendar();
    }catch{bcShowEmpty('枠の取得に失敗しました');}
  }

  function bcRenderCalendar(){
    var nowMs=Date.now();
    var todayJst=bcJstTodayStr();
    var dayStrs=[];
    for(var i=0;i<10;i++) dayStrs.push(bcAddDaysJst(todayJst,i));

    var fp=dayStrs[0].split('-'), lp=dayStrs[9].split('-');
    var title=fp[0]+'年'+Number(fp[1])+'月';
    if(fp[1]!==lp[1]) title+=' - '+Number(lp[1])+'月';
    document.getElementById('bcCalTitle').textContent=title;

    var daySlotMaps=[],allHours={};
    dayStrs.forEach(function(dStr){
      var daySlots=bcAllSlots.filter(function(s){
        return typeof s.startedAt==='string' && s.startedAt.substring(0,10)===dStr;
      }).filter(function(s){
        return new Date(s.startedAt).getTime() > nowMs - 30*60*1000;
      });
      var hourMap={};
      daySlots.forEach(function(s){
        var h=parseInt(s.startedAt.substring(11,13),10);
        hourMap[h]=s; allHours[h]=true;
      });
      daySlotMaps.push({dStr:dStr,hourMap:hourMap});
    });

    var hours=Object.keys(allHours).map(Number).sort(function(a,b){return a-b;});
    if(hours.length===0){bcShowEmpty('この期間に空き枠がありません');return;}
    var minH=hours[0],maxH=hours[hours.length-1];

    var html='<div class="bc-grid"><div class="bc-grid-corner"></div>';
    dayStrs.forEach(function(dStr){
      var day=Number(dStr.substring(8,10));
      var dow=DAY_NAMES_BC[bcJstDow(dStr)];
      var todayCls=(dStr===todayJst)?' today':'';
      html+='<div class="bc-dh'+todayCls+'"><div class="bc-dh-dow">'+dow+'</div><div class="bc-dh-date">'+day+'</div></div>';
    });

    for(var h=minH;h<=maxH;h++){
      html+='<div class="bc-tl">'+('0'+h).slice(-2)+':00</div>';
      for(var di=0;di<10;di++){
        var slot=daySlotMaps[di].hourMap[h];
        if(slot){
          var minStr=slot.startedAt.substring(14,16);
          var startStr=('0'+h).slice(-2)+':'+minStr;
          var cap=slot.remainingCapacity||1;
          var badge='';
          if(cap<=1) badge='<div class="bc-badge bc-badge-last"><span class="bc-badge-label">残り</span><span><span class="bc-badge-num">'+cap+'</span><span class="bc-badge-tail">枠</span></span></div>';
          else badge='<div class="bc-badge bc-badge-ok"><span class="bc-badge-icon">◯</span></div>';
          var dStr2=daySlotMaps[di].dStr;
          var day2=Number(dStr2.substring(8,10));
          var mon2=Number(dStr2.substring(5,7));
          var dow2=DAY_NAMES_BC[bcJstDow(dStr2)];
          var label=mon2+'/'+day2+'('+dow2+') '+startStr+'〜';
          html+='<div class="bc-cell"><div class="bc-slot has-slot" data-start="'+slot.startedAt+'" data-date="'+dStr2+'" data-label="'+label+'" onclick="bcSelectSlot(this)">'+badge+'</div></div>';
        }else{
          html+='<div class="bc-cell"><div class="bc-slot"><span class="bc-x">×</span></div></div>';
        }
      }
    }
    html+='</div>';
    document.getElementById('bcCalContainer').innerHTML=html;
  }

  function bcSelectSlot(el){
    document.querySelectorAll('.bc-slot').forEach(function(s){s.classList.remove('selected');});
    el.classList.add('selected');
    bcSelectedStart=el.dataset.start;
    bcSelectedLabel=el.dataset.label;
    bcSelectedDateStr=el.dataset.date;
    document.getElementById('bcBtnStep1').disabled=false;
    dataLayer.push({event:'bc_slot_click',slot_time:bcSelectedLabel});
    document.getElementById('bcBtnStep1').scrollIntoView({behavior:'smooth',block:'center'});
  }
  function bcSelectRadio(el,group,value){
    document.querySelectorAll('[data-group="'+group+'"] .bc-radio-item').forEach(function(r){r.classList.remove('selected');});
    el.classList.add('selected');bcRadios[group]=value;
    var err=document.getElementById('bcErr'+group.charAt(0).toUpperCase()+group.slice(1));
    if(err)err.classList.remove('show');
    bcSaveSession();
  }
  function bcToggleCheck(el,group,value){
    el.classList.toggle('selected');
    var arr=bcChecks[group];
    var idx=arr.indexOf(value);
    if(el.classList.contains('selected')&&idx===-1)arr.push(value);
    else if(!el.classList.contains('selected')&&idx!==-1)arr.splice(idx,1);
    var err=document.getElementById('bcErr'+group.charAt(0).toUpperCase()+group.slice(1));
    if(err&&arr.length>0)err.classList.remove('show');
    bcSaveSession();
  }
  function bcGoTo(step){
    if(step>bcStep){if(bcStep===2&&!bcValidateStep2())return;}
    if(step===2)document.getElementById('bcTimeBarText').textContent=bcSelectedLabel;
    bcStep=step;bcUpdateUI();
  }
  function bcUpdateUI(){
    document.querySelectorAll('.bc-panel').forEach(function(p){p.classList.remove('active');});
    document.getElementById('bcStep'+bcStep).classList.add('active');
    document.querySelectorAll('.bc-wrapper .bc-step').forEach(function(d){var s=parseInt(d.dataset.s);d.classList.remove('active','done');if(s===bcStep)d.classList.add('active');else if(s<bcStep)d.classList.add('done');});
    document.querySelectorAll('.bc-wrapper .bc-conn').forEach(function(c,i){c.classList.remove('filled','half');if(i+1<bcStep)c.classList.add('filled');else if(i+1===bcStep)c.classList.add('half');});
    document.getElementById('bcCounter').textContent=bcStep+' / 3';
    document.querySelector('.bc-wrapper').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function bcValidateStep2(){
    var ok=true;
    var ids=['bcCompany','bcLastName','bcFirstName','bcEmail','bcPhone','bcDept'];
    ids.forEach(function(id){document.getElementById(id).classList.remove('error');});
    document.querySelectorAll('#bcStep2 .bc-err-msg').forEach(function(el){el.classList.remove('show');});
    if(!document.getElementById('bcCompany').value.trim()){document.getElementById('bcCompany').classList.add('error');document.getElementById('bcErrCompany').classList.add('show');ok=false;}
    var ln=document.getElementById('bcLastName'), fn=document.getElementById('bcFirstName');
    if(!ln.value.trim()){ln.classList.add('error');document.getElementById('bcErrName').classList.add('show');ok=false;}
    if(!fn.value.trim()){fn.classList.add('error');document.getElementById('bcErrName').classList.add('show');ok=false;}
    var e=document.getElementById('bcEmail');
    if(!e.value.trim()||!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e.value)){e.classList.add('error');document.getElementById('bcErrEmail').classList.add('show');ok=false;}
    if(!document.getElementById('bcPhone').value.trim()){document.getElementById('bcPhone').classList.add('error');document.getElementById('bcErrPhone').classList.add('show');ok=false;}
    if(!document.getElementById('bcDept').value.trim()){document.getElementById('bcDept').classList.add('error');document.getElementById('bcErrDept').classList.add('show');ok=false;}
    if(!bcRadios.employees){document.getElementById('bcErrEmployees').classList.add('show');ok=false;}
    if(!bcRadios.role){document.getElementById('bcErrRole').classList.add('show');ok=false;}
    return ok;
  }
  function bcValidateStep3(){
    var ok=true;
    document.querySelectorAll('#bcStep3 .bc-err-msg').forEach(function(el){el.classList.remove('show');});
    if(bcChecks.formats.length===0){document.getElementById('bcErrFormats').classList.add('show');ok=false;}
    if(!bcRadios.urgency){document.getElementById('bcErrUrgency').classList.add('show');ok=false;}
    if(!bcRadios.participants){document.getElementById('bcErrParticipants').classList.add('show');ok=false;}
    if(!bcRadios.awareness){document.getElementById('bcErrAwareness').classList.add('show');ok=false;}
    return ok;
  }
  async function bcSubmit(){
    if(!bcValidateStep3())return;
    var btn=document.getElementById('bcBtnSubmit');btn.classList.add('loading');btn.disabled=true;
    dataLayer.push({event:'bc_form_submit'});
    try{
      var last=document.getElementById('bcLastName').value.trim();
      var first=document.getElementById('bcFirstName').value.trim();
      var params=new URLSearchParams({
        action:'book',
        started_at:bcSelectedStart,
        displayed_date:bcSelectedDateStr || (bcSelectedStart?bcSelectedStart.substring(0,10):''),
        last_name:last,
        first_name:first,
        name:(last+' '+first).trim(),
        email:document.getElementById('bcEmail').value.trim(),
        phone:document.getElementById('bcPhone').value.trim(),
        source:SOURCE,
        lp_type:BC_LP_TYPE,
        entry:BC_ENTRY,
        route_id:ROUTE_ID,
        company:document.getElementById('bcCompany').value.trim(),
        department:document.getElementById('bcDept').value.trim(),
        employees:bcRadios.employees,
        role:bcRadios.role,
        formats:bcChecks.formats.join(','),
        urgency:bcRadios.urgency,
        participants:bcRadios.participants,
        awareness:bcRadios.awareness,
        message:document.getElementById('bcMessage').value.trim()
      });
      var res=await fetch(GAS_URL+'?'+params,{cache:'no-store'});
      var text=await res.text();
      var result;try{result=JSON.parse(text);}catch{throw new Error('Invalid');}
      if(result.error){alert('エラー: '+result.error);}
      else{
        dataLayer.push({event:'bc_form_complete',booking_id:result.bookingId||''});
        try{sessionStorage.removeItem(BC_SS_KEY);}catch(e){}
        window.location.href=THANKS_URL;
      }
    }catch{alert('通信エラーが発生しました。もう一度お試しください。');}
    finally{btn.classList.remove('loading');btn.disabled=false;}
  }
  document.querySelectorAll('.bc-input').forEach(function(input){
    input.addEventListener('input',function(){
      this.classList.remove('error');
      var err=this.closest('.bc-field').querySelector('.bc-err-msg');
      if(err)err.classList.remove('show');
    });
  });
  function bcShowEmpty(msg){
    document.getElementById('bcCalContainer').innerHTML='<div class="bc-loading-wrap"><div class="bc-loading-text" style="color:var(--bc-text-sub);font-size:14px;">'+(msg||'予約可能な枠がありません')+'</div></div>';
    document.getElementById('bcBtnStep1').style.display='none';
  }
  window.bcGoTo=bcGoTo;window.bcSelectSlot=bcSelectSlot;window.bcSelectRadio=bcSelectRadio;window.bcToggleCheck=bcToggleCheck;window.bcSubmit=bcSubmit;
  bcInit();
` }} />
    </>
  )
}
