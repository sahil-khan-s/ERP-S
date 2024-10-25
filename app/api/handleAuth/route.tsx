import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Make sure the import path is correct
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  const data = await req.json();

  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });
    return NextResponse.json(
      {
        success: true,
        massage: "Action Successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      return NextResponse.json({ success: true, message: "User registered successfully!" }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ success: false, message: "User registration failed!" }, { status: 500 });
    }
  } else if (data.action === 'login') {
    const { email, password } = data;

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ success: false, message: "No user found with this email!" }, { status: 404 });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ success: false, message: "Invalid password!" }, { status: 401 });
    }

    // Login successful (you can return user data or a token here if needed)
    return NextResponse.json({ success: true, message: "Login successful!" }, { status: 200 });
  }

  return NextResponse.json({ success: false, message: "Invalid action!" }, { status: 400 });
};
