import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/auth")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};

// the below code, this causing conflicts if my front end and backend both links are different.
// it will work when the links will like -

// frontend: www.shipan-mallik.com
// and
// backend: api.shipan-mallik.com

// -------------------------------------------------
// JUST SAVE THIS CODE AND COMMENT IT FOR FUTURE USE
// -------------------------------------------------

// export function middleware(req: NextRequest) {
//   const accessToken = req.cookies.get("accessToken")?.value;
//   const pathname = req.nextUrl.pathname;

//   if (pathname.startsWith("/dashboard")) {
//     if (!accessToken) {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   }

//   if (pathname.startsWith("/auth") && accessToken) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/auth"],
// };
