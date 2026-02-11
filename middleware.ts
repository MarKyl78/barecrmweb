// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const SE_HOSTS = new Set(["barecrm.se", "www.barecrm.se"]);
const IO_HOSTS = new Set(["barecrm.io", "www.barecrm.io"]);

function isLocalePath(pathname: string) {
  return pathname === "/sv" || pathname.startsWith("/sv/") || pathname === "/en" || pathname.startsWith("/en/");
}

function isPublicAsset(pathname: string) {
  // next internals + vanliga publika filer/mappar
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/logo/")) return true;
  if (pathname.startsWith("/screenshots/")) return true;
  if (pathname === "/favicon.ico") return true;
  if (pathname === "/robots.txt") return true;
  if (pathname === "/sitemap.xml") return true;

  // allt som ser ut som en fil med ändelse (png, svg, css, js, etc)
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ släpp igenom assets alltid
  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  // Redan på /sv eller /en → låt den vara
  if (isLocalePath(pathname)) {
    return NextResponse.next();
  }

  const host = req.headers.get("host")?.toLowerCase() ?? "";

  // På vercel preview/localhost: välj default (sv), men bygg så du kan ändra senare
  // (Du kan sätta default till en om du vill)
  let locale: "sv" | "en" = "sv";

  if (SE_HOSTS.has(host)) locale = "sv";
  if (IO_HOSTS.has(host)) locale = "en";

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// Viktigt: matcha inte assets/next internals
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|logo/|screenshots/).*)",
  ],
};
