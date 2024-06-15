// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-path', pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}
//export function middleware(request: NextRequest) {

//   // get the URL from request header
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-url', request.url);

//   // pass the header to the layout
//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     }
//   });
// }
