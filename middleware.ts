import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from 'next-auth/jwt';

export const config = {
	matcher: ['/', '/blocks/:path*', '/documentation/:path*', '/pages/:path*', '/uikit/:path*', '/utilities/:path*'], // Adjust matcher based on your routes
};

export async function middleware(req: NextRequest) {
	const signInPage = '/login';
	const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	console.log(session); // For debugging, remove or comment out for production

	if (session) {
		return NextResponse.next(); // Allow access if user is logged in
	}

	const signInUrl = new URL(signInPage, req.nextUrl.origin);
	return NextResponse.redirect(signInUrl);
}
