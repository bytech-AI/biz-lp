import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const STATIC_ASSET_RE = /\.(png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2|ttf|otf|css|js)$/i

export function proxy(request: NextRequest) {
  let hostname = (request.headers.get('host') || '').toLowerCase()
  const pathname = request.nextUrl.pathname

  // [LOCAL-ONLY 一時対応・コミットしないこと] localhost を biz.bytech.jp として扱いプレビュー
  if (hostname.startsWith('localhost') || hostname.startsWith('127.0.0.1')) {
    hostname = 'biz.bytech.jp'
  }

  // 検索評価を canonical と同じ非 www に集約する。
  // これまでは bytech.jp / www.bytech.jp の双方が 200 を返していた。
  if (hostname === 'www.bytech.jp') {
    return NextResponse.redirect(
      new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, 'https://bytech.jp'),
      308,
    )
  }

  // biz は biz.bytech.jp（サブドメイン）で独立配信。クリーンURL（/counseling 等）を
  // 内部の /biz/* へリライトして返す。/biz/assets は絶対パスなので素通し。
  if (hostname === 'biz.bytech.jp') {
    // biz 専用 favicon（.ico は STATIC_ASSET_RE に含まれるため、素通し判定より前に処理）。
    // apex の /favicon.ico が露出しないよう biz ロゴへリライト。
    if (pathname === '/favicon.ico') {
      return NextResponse.rewrite(new URL('/biz/assets/img/common/favicon.ico', request.url))
    }
    // 静的アセット（/biz/assets/... 含む）は素通し
    if (STATIC_ASSET_RE.test(pathname)) {
      return NextResponse.next()
    }
    // /blog（WPメディア）は Cloudflare 側で WP へ振り分け済み。念のため素通し。
    if (pathname === '/blog' || pathname.startsWith('/blog/')) {
      return NextResponse.next()
    }
    // biz 専用 robots / sitemap（ホスト別）
    if (pathname === '/robots.txt') {
      return NextResponse.rewrite(new URL('/biz/robots.txt', request.url))
    }
    if (pathname === '/sitemap.xml') {
      return NextResponse.rewrite(new URL('/biz/sitemap.xml', request.url))
    }
    // biz 専用サンクス（静的HTML）。counseling(→/thanks) と 資料DL(→/thanks-2)。
    // public/biz/thanks* の index.html を明示リライト（拡張子なしのため /biz/* 既定
    // リライトでは解決しない）。
    if (pathname === '/thanks' || pathname === '/thanks/') {
      return NextResponse.rewrite(new URL('/biz/thanks/index.html', request.url))
    }
    if (pathname === '/thanks-2' || pathname === '/thanks-2/') {
      return NextResponse.rewrite(new URL('/biz/thanks-2/index.html', request.url))
    }
    // 旧 /biz プレフィックス付きURLはクリーンURLへ 301（重複コンテンツ回避）
    if (pathname === '/biz' || pathname === '/biz/') {
      return NextResponse.redirect(new URL(`/${request.nextUrl.search}`, request.url), 301)
    }
    if (pathname.startsWith('/biz/')) {
      const stripped = pathname.replace(/^\/biz/, '') || '/'
      return NextResponse.redirect(new URL(`${stripped}${request.nextUrl.search}`, request.url), 301)
    }
    // クリーンパス → 内部 /biz/* へリライト（URLは綺麗なまま）
    return NextResponse.rewrite(new URL(`/biz${pathname}`, request.url))
  }

  if (hostname === 'lp.bytech.jp') {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/'
    if (normalizedPath === '/thanks' || normalizedPath === '/thnks') {
      return NextResponse.rewrite(new URL('/lp/thanks/index.html', request.url))
    }
    if (pathname === '/lp' || pathname.startsWith('/lp/')) {
      return NextResponse.next()
    }
    let newPath = `/lp${pathname}`
    if (newPath.endsWith('/')) {
      newPath += 'index.html'
    } else if (!/\.[a-z0-9]+$/i.test(newPath)) {
      newPath += '/index.html'
    }
    return NextResponse.rewrite(new URL(newPath, request.url))
  }

  // lp4 は lp4.bytech.jp（ASP流入の広告LP）。旧WordPressから移設した静的LPを
  // public/lp4/* に丸ごと持ち、全パスを /lp4/* へリライトして返す。
  // ページ内のアセット参照が相対パス（wp-content/...）なので、アセットも含めて
  // 一律にプレフィックスを付ける必要がある（素通しにすると /wp-content/... が404）。
  // 予約カレンダーの source は 'AIカレッジ【GEN_ASP】'、LINEは b-college-asp。
  if (hostname === 'lp4.bytech.jp') {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/'
    if (normalizedPath === '/thanks' || normalizedPath === '/thnks') {
      return NextResponse.rewrite(new URL('/lp4/thanks/index.html', request.url))
    }
    if (pathname === '/lp4' || pathname.startsWith('/lp4/')) {
      return NextResponse.next()
    }
    let newPath = `/lp4${pathname}`
    if (newPath.endsWith('/')) {
      newPath += 'index.html'
    } else if (!/\.[a-z0-9]+$/i.test(newPath)) {
      newPath += '/index.html'
    }
    return NextResponse.rewrite(new URL(newPath, request.url))
  }

  // GEEK は geek.bytech.jp（サブドメイン）で独立配信。
  // geek.bytech.jp/ → 内部の /geek（geek-static/index.html）を返す。アセットは絶対パスなので素通し。
  if (hostname === 'geek.bytech.jp') {
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/geek', request.url))
    }
    const normalizedPath = pathname.replace(/\/+$/, '') || '/'
    // geek 専用 favicon（ルート /favicon.ico の404を解消。geek の緑ロゴを配信）
    if (pathname === '/favicon.ico') {
      return NextResponse.rewrite(new URL('/geek-static/files/favicon.ico', request.url))
    }
    // geek 専用 robots / sitemap（ホスト別）
    if (pathname === '/robots.txt') {
      return NextResponse.rewrite(new URL('/geek-static/robots.txt', request.url))
    }
    if (pathname === '/sitemap.xml') {
      return NextResponse.rewrite(new URL('/geek-static/sitemap.xml', request.url))
    }
    if (pathname === '/llms.txt') {
      return NextResponse.rewrite(new URL('/geek-static/llms.txt', request.url))
    }
    if (normalizedPath === '/thanks') {
      return NextResponse.rewrite(new URL('/geek-static/thanks.html', request.url))
    }
    const geekLegal: Record<string, string> = {
      '/privacy-policy': '/geek-privacy-policy-static/index.html',
      '/membership-terms': '/geek-membership-terms-static/index.html',
      '/specified_commercial': '/geek-specified_commercial-static/index.html',
      // Claude Code実録（note記事の一覧ページ）
      '/record': '/geek-record-static/index.html',
    }
    // clean URL → 実体ファイルへ内部リライト（URLは綺麗なまま）
    if (geekLegal[normalizedPath]) {
      return NextResponse.rewrite(new URL(geekLegal[normalizedPath], request.url))
    }
    // 直アクセスされた実体URL（.../geek-*-static/index.html）は clean URL へ 301
    const uglyToClean: Record<string, string> = {
      '/geek-privacy-policy-static/index.html': '/privacy-policy',
      '/geek-membership-terms-static/index.html': '/membership-terms',
      '/geek-specified_commercial-static/index.html': '/specified_commercial',
      '/geek-record-static/index.html': '/record',
    }
    if (uglyToClean[pathname]) {
      return NextResponse.redirect(new URL(uglyToClean[pathname], request.url), 301)
    }
    // ここまでで一致しないパスは geek 専用ページとして存在しない。
    // geek.bytech.jp は bytech.jp と同じ Next アプリで配信しているため、
    // ここを素通し(next())にすると apex の全ページ（/chatgpt-master 等）が
    // geek サブドメインでも露出し重複コンテンツになる。default-deny にして防ぐ。
    // 素通しは geek ページ自身のリソースのみ:
    //   - 拡張子付きアセット（STATIC_ASSET_RE）
    //   - geek 専用アセットディレクトリ（下記プレフィックス）
    // geek に新ページを追加する場合は上の clean URL 群に明示登録すること。
    const GEEK_ASSET_PREFIXES = ['/geek-static/', '/geek-assets/', '/files/', '/img/']
    if (
      STATIC_ASSET_RE.test(pathname) ||
      GEEK_ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix))
    ) {
      return NextResponse.next()
    }
    // 未登録パスは geek トップへ 301。重複コンテンツを避けつつ評価を geek トップに集約。
    return NextResponse.redirect(new URL('/', request.url), 301)
  }

  // apex / その他ホストからは /geek を公開しない（サブドメインへ移行済みのため404）。
  if (pathname === '/geek' || pathname === '/geek/') {
    return new NextResponse(null, { status: 404 })
  }

  // /biz は biz.bytech.jp（サブドメイン）へ移行済み。apex の旧URLは 301 で集約し
  // SEO評価を新サブドメインへ引き継ぐ（アセットは対象外＝素通し）。
  if ((pathname === '/biz' || pathname.startsWith('/biz/')) && !STATIC_ASSET_RE.test(pathname)) {
    const stripped = pathname.replace(/^\/biz/, '') || '/'
    return NextResponse.redirect(
      new URL(`https://biz.bytech.jp${stripped}${request.nextUrl.search}`),
      301,
    )
  }

  // /bytech は廃止し / に統合（静的HTML化）。ロゴ/サブページの旧 /bytech リンク救済のため恒久リダイレクト。
  // /bytech/course 等のサブページは対象外（厳密一致のみ）。
  if (pathname === '/bytech' || pathname === '/bytech/') {
    return NextResponse.redirect(new URL('/', request.url), 308)
  }

  // bytech.jp はルートの静的ホーム(app/route.ts)をそのまま返す
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
