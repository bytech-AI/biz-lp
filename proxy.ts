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
    if (geekLegal[normalizedPath]) {
      return NextResponse.rewrite(new URL(geekLegal[normalizedPath], request.url))
    }
    return NextResponse.next()
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
