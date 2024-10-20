import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

const authOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				name: { label: "Name", type: "text" },
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				const email = credentials?.email as string;
				const password = credentials?.password as string;

				if (!email || !password) {
					throw new Error("Email and password are required");
				}

				// Registration or login logic
				const user = await prisma.user.findUnique({
					where: { email },
				});

				if (!user) {
					throw new Error("No user found with this email");
				}

				const isPasswordValid = await bcrypt.compare(password, user.password);
				if (!isPasswordValid) {
					throw new Error("Invalid password");
				}

				return { id: user.id, name: user.name, email: user.email };
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }:any) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }: any) {
			if (session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export default NextAuth(authOptions);
