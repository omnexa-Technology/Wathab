// import { NextResponse } from 'next/server';
// import { routing } from '@/i18n/routing';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//   if (pathname === '/') return NextResponse.redirect(new URL('/ar', request.url));
//   const segment = pathname.split('/')[1];
//   if (!routing.locales.includes(segment)) return NextResponse.redirect(new URL('/ar', request.url));
//   const h = new Headers(request.headers);
//   h.set('x-next-locale', segment);
//   return NextResponse.next({ request: new Request(request, { headers: h }) });
// }

// export const config = { matcher: ['/', '/(ar|en)/:path*'] };



import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const USERNAME = 'admin';
const PASSWORD = '123456';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/studio')) {
    const auth = request.headers.get('authorization');
    if (!auth) {
      return new Response('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }

    const base64 = auth.split(' ')[1];
    const [user, pass] = atob(base64).split(':');
    if (user !== USERNAME || pass !== PASSWORD) {
      return new Response('Access denied', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
    return NextResponse.next();
  }

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