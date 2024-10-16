import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const name = credentials?.name as string | null;
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        try {
          if (name) {
            // Registration logic
            const existingUser = await prisma.user.findUnique({
              where: { email },
            });

            if (existingUser) {
              throw new Error("User with this email already exists");
            }

            const pwHash = await bcrypt.hash(password, 12);

            const newUser = await prisma.user.create({
              data: {
                name,
                email,
                password: pwHash,
              },
            });

            return { id: newUser.id, name: newUser.name, email: newUser.email };
          } else {
            // Login logic
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
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("An unexpected error occurred");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
});