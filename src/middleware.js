// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import { routing } from './i18n/routing';

// export async function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // ── Task 3 & 6: Protect /studio ─────────────────────────────────────────
//   // Unauthenticated → redirect to /login
//   if (pathname.startsWith('/studio')) {
//     const token = await getToken({
//       req: request,
//       secret: process.env.NEXTAUTH_SECRET,
//     });

//     if (!token) {
//       const loginUrl = new URL('/login', request.url);
//       loginUrl.searchParams.set('callbackUrl', '/studio');
//       return NextResponse.redirect(loginUrl);
//     }

//     return NextResponse.next();
//   }

//   // ── Task 4: Prevent authenticated users from seeing /login ───────────────
//   // Authenticated → redirect to /studio
//   if (pathname === '/login') {
//     const token = await getToken({
//       req: request,
//       secret: process.env.NEXTAUTH_SECRET,
//     });

//     if (token) {
//       return NextResponse.redirect(new URL('/studio', request.url));
//     }

//     return NextResponse.next();
//   }

//   // ── Locale routing ───────────────────────────────────────────────────────
//   const nextLocaleCookie = request.cookies.get('NEXT_LOCALE')?.value;
//   let targetLocale = routing.defaultLocale;
//   if (nextLocaleCookie && routing.locales.includes(nextLocaleCookie)) {
//     targetLocale = nextLocaleCookie;
//   }

//   if (pathname === '/') {
//     const url = new URL(`/${targetLocale}`, request.url);
//     const res = NextResponse.redirect(url);
//     if (nextLocaleCookie) {
//       res.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
//       res.cookies.set('langSwitch', '1', { path: '/', maxAge: 10 });
//     }
//     return res;
//   }

//   const segment = pathname.split('/')[1];

//   if (!routing.locales.includes(segment)) {
//     const url = new URL(`/${targetLocale}`, request.url);
//     const res = NextResponse.redirect(url);
//     if (nextLocaleCookie) {
//       res.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
//       res.cookies.set('langSwitch', '1', { path: '/', maxAge: 10 });
//     }
//     return res;
//   }

//   const pathWithoutLocale = pathname.slice(1 + segment.length) || '/';
//   if (segment !== targetLocale) {
//     const url = new URL(`/${targetLocale}${pathWithoutLocale}`, request.url);
//     const res = NextResponse.redirect(url);
//     res.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
//     res.cookies.set('langSwitch', '1', { path: '/', maxAge: 10 });
//     return res;
//   }

//   const h = new Headers(request.headers);
//   h.set('x-next-locale', segment);
//   const response = NextResponse.next({
//     request: new Request(request, { headers: h }),
//   });
//   if (nextLocaleCookie) response.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
//   if (request.cookies.get('langSwitch')?.value === '1') {
//     response.cookies.set('langSwitch', '', { maxAge: 0, path: '/' });
//   }
//   return response;
// }

// export const config = {
//   matcher: [
//     '/',
//     '/(ar|en)/:path*',
//     '/studio/:path*',
//     '/login',
//   ],
// };




import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { routing } from './i18n/routing';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ─────────────────────────────────────────────────────────────
  // 1️⃣ Protect /studio (Auth required)
  // ─────────────────────────────────────────────────────────────
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

  // ─────────────────────────────────────────────────────────────
  // 2️⃣ Prevent authenticated users from accessing /login
  // ─────────────────────────────────────────────────────────────
  if (pathname === '/login') {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (token) {
      return NextResponse.redirect(new URL('/studio', request.url));
    }

    return NextResponse.next();
  }

  // ─────────────────────────────────────────────────────────────
  // 3️⃣ Locale Handling
  // ─────────────────────────────────────────────────────────────

  const segment = pathname.split('/')[1];
  const nextLocaleCookie = request.cookies.get('NEXT_LOCALE')?.value;

  let targetLocale;

  // 🟢 Priority 1: Cookie (during language switch)
  if (nextLocaleCookie && routing.locales.includes(nextLocaleCookie)) {
    targetLocale = nextLocaleCookie;
  }
  // 🟢 Priority 2: Locale from URL
  else if (routing.locales.includes(segment)) {
    targetLocale = segment;
  }
  // 🟢 Fallback: Default locale
  else {
    targetLocale = routing.defaultLocale;
  }

  // ─────────────────────────────────────────────────────────────
  // 4️⃣ Root Path → Redirect to locale
  // ─────────────────────────────────────────────────────────────
  if (pathname === '/') {
    const url = new URL(`/${targetLocale}`, request.url);
    const res = NextResponse.redirect(url);

    if (nextLocaleCookie) {
      res.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
      res.cookies.set('langSwitch', '1', { path: '/', maxAge: 10 });
    }

    return res;
  }

  // ─────────────────────────────────────────────────────────────
  // 5️⃣ If URL has no valid locale → prefix it
  // ─────────────────────────────────────────────────────────────
  if (!routing.locales.includes(segment)) {
    const url = new URL(`/${targetLocale}${pathname}`, request.url);
    const res = NextResponse.redirect(url);

    if (nextLocaleCookie) {
      res.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
      res.cookies.set('langSwitch', '1', { path: '/', maxAge: 10 });
    }

    return res;
  }

  // ─────────────────────────────────────────────────────────────
  // 6️⃣ If URL locale ≠ target locale → Redirect correctly
  // ─────────────────────────────────────────────────────────────
  if (segment !== targetLocale) {
    const pathWithoutLocale =
      pathname.slice(1 + segment.length) || '/';

    const url = new URL(
      `/${targetLocale}${pathWithoutLocale}`,
      request.url
    );

    const res = NextResponse.redirect(url);

    res.cookies.set('NEXT_LOCALE', '', { maxAge: 0, path: '/' });
    res.cookies.set('langSwitch', '1', { path: '/', maxAge: 10 });

    return res;
  }

  // ─────────────────────────────────────────────────────────────
  // 7️⃣ Pass Through (No Redirect Needed)
  // ─────────────────────────────────────────────────────────────

  const headers = new Headers(request.headers);
  headers.set('x-next-locale', segment);

  const response = NextResponse.next({
    request: new Request(request, { headers }),
  });

  // Clear NEXT_LOCALE after use
  if (nextLocaleCookie) {
    response.cookies.set('NEXT_LOCALE', '', {
      maxAge: 0,
      path: '/',
    });
  }

  // Clear langSwitch after delay cycle
  if (request.cookies.get('langSwitch')?.value === '1') {
    response.cookies.set('langSwitch', '', {
      maxAge: 0,
      path: '/',
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/',
    '/(ar|en)/:path*',
    '/studio/:path*',
    '/login',
  ],
};