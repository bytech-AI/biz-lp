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
