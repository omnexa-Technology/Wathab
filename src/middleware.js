import { NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') return NextResponse.redirect(new URL('/ar', request.url));
  const segment = pathname.split('/')[1];
  if (!routing.locales.includes(segment)) return NextResponse.redirect(new URL('/ar', request.url));
  const h = new Headers(request.headers);
  h.set('x-next-locale', segment);
  return NextResponse.next({ request: new Request(request, { headers: h }) });
}

export const config = { matcher: ['/', '/(ar|en)/:path*'] };
