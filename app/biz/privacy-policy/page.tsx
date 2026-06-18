
export default function PrivacyPolicyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body { font-family: var(--font-noto-jp), sans-serif; color: #333; background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat; margin: 0; padding: 0; }
        .pg-header-wrap { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; padding: 16px 40px; }
        .pg-header__logo img { height: 28px; filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%); }
        .pg-header__nav { display: flex; gap: 4px; align-items: center; background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.7); border-radius: 50px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 4px 24px rgba(0,0,0,0.06); padding: 4px; }
        .pg-header__nav a { color: #333; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 20px; border-radius: 40px; border: 1px solid transparent; transition: all .3s ease; white-space: nowrap; }
        .pg-header__nav a.btn-outline:hover { background: #f0f2f5; border-color: #fff; box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8); }
        .pg-header__nav a.btn-fill { background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; border: none; box-shadow: 0 2px 8px rgba(26,111,181,0.3); }
        .pg-header__nav a.btn-fill:hover { opacity: 0.9; box-shadow: 0 4px 12px rgba(26,111,181,0.4); }
        .pg-breadcrumb { max-width: 900px; margin: 30px auto 0; padding: 0 40px; font-size: 13px; }
        .pg-breadcrumb a { color: #2a5a9b; text-decoration: none; }
        .pg-breadcrumb a:hover { text-decoration: underline; }
        .pg-breadcrumb span { color: #666; }
        .pg-hero { max-width: 900px; margin: 0 auto; padding: 30px 40px 0; }
        .pg-hero__title { font-size: 32px; font-weight: 800; margin: 0 0 8px; }
        .pg-hero__subtitle { font-size: 16px; color: #aaa; font-weight: 400; margin: 0 0 20px; font-family: "Futura", "Futura Medium", sans-serif; }
        .pg-hero__line { border: none; border-top: 1px solid #ddd; margin: 0; }
        .pg-card { max-width: 900px; margin: 30px auto; padding: 0 40px 60px; }
        @media (max-width:768px) { .pg-card { margin: 20px auto; padding: 0 20px 40px; } .pg-header-wrap { padding: 12px 16px; } }
        .pg-card .updated { font-size: 14px; color: #666; margin-bottom: 24px; }
        .pg-card .lead { font-size: 15px; line-height: 2; margin-bottom: 30px; }
        .pg-card h2 { font-size: 18px; font-weight: 700; margin: 36px 0 12px; }
        .pg-card p, .pg-card li { font-size: 15px; line-height: 2; }
        .pg-card p { margin-bottom: 16px; }
        .pg-card ul, .pg-card ol { padding-left: 1.5em; margin-bottom: 16px; }
        .pg-card ol { list-style: none; padding-left: 0; }
        .pg-card .contact-info { background: #f8f9fb; border-radius: 8px; padding: 20px 24px; margin: 16px 0; font-size: 15px; line-height: 2; }
        .pg-footer { background: #1a2e50; color: #fff; text-align: center; padding: 30px 20px; font-size: 13px; }
        .pg-footer a { color: #fff; text-decoration: none; }
        .pg-footer__logo { margin-bottom: 16px; }
        .pg-footer__logo img { height: 24px; }
      ` }} />

      <div className="pg-header-wrap">
        <div className="pg-header__logo"><a href="/biz/"><img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <nav className="pg-header__nav">
          <a href="/biz/" className="btn-outline">トップページ</a>
          <a href="/biz/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>
      <nav className="pg-breadcrumb">
        <a href="/biz/">TOP</a> <span>&rsaquo; プライバシーポリシー</span>
      </nav>
      <div className="pg-hero">
        <h1 className="pg-hero__title">プライバシーポリシー</h1>
        <p className="pg-hero__subtitle">Privacy Policy</p>
        <hr className="pg-hero__line" />
      </div>
      <main className="pg-card">
        <p className="updated">本プライバシーポリシーは、2025年7月に最新版に更新されました。</p>
        <p className="lead">このプライバシーポリシーは、株式会社AI棒（以下、「乙」とする。）が運営するバイテックBiz（以下、「本サービス」とする。）をご利用の皆様（以下、「利用者」とする。）から取得される個人情報について、その取扱方針を定めるものです。</p>

        <h2>個人情報の利用目的</h2>
        <p>バイテックBizは、本サービスを通じて利用者から取得した個人情報を次の目的に利用します。</p>
        <ol>
          <li>（1）サービス提供に関する契約履行及びサービス提供による料金精算のため</li>
          <li>（2）コンテンツ提供、料金決済等</li>
          <li>（3）会員管理のため</li>
          <li>（4）会員制サービス利用に伴う本人確認、不正利用防止、登録意思の確認、年齢確認、お問い合わせに対する対応、苦情の処理、お知らせのご連絡等</li>
          <li>（5）マーケティング、広告配信、サービスの改善及び開発のため</li>
          <li>（6）イベント、キャンペーンなどのご連絡、バイテックBizまたは第三者の広告情報の配信、利用者の興味・関心にあわせたおすすめコンテンツの表示、接続頻度の把握その他会員のサービス利用に対する統計作成及び分析等</li>
        </ol>

        <h2>個人情報の取得</h2>
        <p>バイテックBizは、本サービスの提供にあたって必要となる範囲で、主に次のような項目の利用者に関する情報を取得します。なお、以下に掲げる情報の項目は例示であり、必要に応じて他の情報を取得する場合もあります。</p>
        <p><strong>（1）本サービスへご登録いただく場合</strong><br />氏名、生年月日、性別、ログインID、パスワード、携帯電話番号、メールアドレス、14歳未満の利用者についての法定代理人の情報等</p>
        <p><strong>（2）本サービスをご利用いただく場合</strong><br />住所、サービス利用記録、接続ログ、クッキー情報、接続IP情報、決済記録、不正利用記録等</p>

        <h2>個人情報の開示</h2>
        <p>バイテックBizは、利用者の事前の同意がない限り、個人情報を第三者に提供いたしません。ただし、法令、裁判所の判決・決定・命令、官公庁等により開示を要求された場合、必要最小限度の範囲で第三者に対して個人情報を提供する場合があります。</p>
        <p>バイテックBizは、利用者に対するサービスの提供に必要な範囲で、本サービス上でクラスを提供する講師に対し、バイテックBizが取得した個人情報を提供できます。講師は、利用者へのサービスの提供のために個人情報を利用する場合があります。</p>

        <h2>個人情報の取扱いの委託</h2>
        <p>バイテックBizは、上記の「個人情報の利用目的」に記載された利用目的の達成に必要な範囲内で、個人情報の取扱いを第三者（本国外にある者を含みます。）に委託することがあります。個人情報の取扱いを委託する場合、バイテックBizは、委託先に対して適切な監督を行います。</p>

        <h2>個人情報の開示等</h2>
        <p>利用者は、個人情報の、（1）利用目的の通知、（2）開示、（3）訂正・追加・削除、（4）利用停止、消去及び（5）第三者への提供停止（以下、「開示等」といいます。）の手続を行うことができます。ただし、バイテックBizが個人情報保護法に基づき開示等の義務を負わない場合、開示等のご請求に対応できない場合があります。開示等のご請求は下記「お問い合わせ窓口」までご連絡ください。</p>

        <h2>お問い合わせ窓口</h2>
        <div className="contact-info">
          〒150-0021<br />
          東京都渋谷区恵比寿西2丁目4番8号ウィンド恵比寿ビル8F<br />
          株式会社AI棒<br />
          担当部署：バイテックBiz事業部<br />
          電子メール：support@bytech.jp
        </div>

        <h2>セキュリティについて</h2>
        <p>バイテックBizは、本サービスにおけるセキュリティ確保のため、クレジットカード番号などの重要な情報の入力時には、これらの情報が傍受、妨害または改ざんされることを防ぐ目的でSSL（Secure Sockets Layer）技術を使用しています。</p>

        <h2>その他</h2>
        <p>バイテックBizは、プライバシーポリシーの全部または一部を変更する場合があります。重要な変更がある場合には、本サービスが提供されるウェブサイトにおいて、分かりやすい方法でお知らせします。</p>
      </main>
      <footer className="pg-footer">
        <div className="pg-footer__logo"><a href="/biz/"><img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>
    </>
  )
}
