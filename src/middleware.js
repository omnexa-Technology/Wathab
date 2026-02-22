import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { routing } from './i18n/routing';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect /studio — redirect to /login if no valid session
  if (pathname.startsWith('/studio')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', '/studio');
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  // Locale routing
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ar', request.url));
  }

  const segment = pathname.split('/')[1];
  if (!routing.locales.includes(segment)) {
    return NextResponse.redirect(new URL('/ar', request.url));
  }

  const h = new Headers(request.headers);
  h.set('x-next-locale', segment);
  return NextResponse.next({
    request: new Request(request, { headers: h }),
  });
}

export const config = {
  matcher: [
    '/',
    '/(ar|en)/:path*',
    '/studio/:path*',
  ],
};
