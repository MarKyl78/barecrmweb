import { NextRequest, NextResponse } from "next/server";

const SE_HOSTS = new Set(["barecrm.se", "www.barecrm.se"]);
const IO_HOSTS = new Set(["barecrm.io", "www.barecrm.io"]);

function hasLocale(pathname: string) {
  return (
    pathname === "/sv" ||
    pathname.startsWith("/sv/") ||
    pathname === "/en" ||
    pathname.startsWith("/en/")
  );
}

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = (req.headers.get("host") || "").toLowerCase();
  const pathname = url.pathname;

  // Skip Next internals / static
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  const isSe = SE_HOSTS.has(host);
  const isIo = IO_HOSTS.has(host);

  // localhost/dev fallback: svenska
  const defaultLocale = isIo ? "en" : "sv";

  // Root "/" → locale
  if (pathname === "/") {
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // Wrong-domain locale → redirect to correct domain
  if (isIo && (pathname === "/sv" || pathname.startsWith("/sv/"))) {
    const target = new URL(req.url);
    target.host = "www.barecrm.se";
    return NextResponse.redirect(target);
  }

  if (isSe && (pathname === "/en" || pathname.startsWith("/en/"))) {
    const target = new URL(req.url);
    target.host = "www.barecrm.io";
    return NextResponse.redirect(target);
  }

  // Missing locale prefix → add it
  if (!hasLocale(pathname)) {
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};
