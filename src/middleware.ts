import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('middleware が実行された：', request.url)
  return NextResponse.next()
}

export const config = {
  mather: '/api:path*',
}
