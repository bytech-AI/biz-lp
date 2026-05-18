import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  if (hostname === 'biz.bytech.jp') {
    return NextResponse.rewrite(new URL(`/biz${pathname}`, request.url))
  }

  // bytech.jp はルートのpage.tsxをそのまま返す
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|css|js)).*)'],
}
