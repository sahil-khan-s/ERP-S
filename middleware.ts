import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
	const session = await auth();
	const path = request.nextUrl.pathname;
	const isPublicRoute =
		path === "/" || path === "/login" || path === "/register";
	if (!session && !isPublicRoute) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	if (session && isPublicRoute) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
