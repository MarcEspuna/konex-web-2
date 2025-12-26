import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es', request.url));
  }

  const matchedLocale = locales.find((locale) => pathname.startsWith(`/${locale}`));

  if (!matchedLocale) {
    return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', matchedLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|assets).*)']
};
