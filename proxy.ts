import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const STATIC_ASSET_RE = /\.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|css|js)$/i

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase()
  const pathname = request.nextUrl.pathname

  if (hostname === 'biz.bytech.jp') {
    if (STATIC_ASSET_RE.test(pathname)) {
      return NextResponse.next()
    }
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
