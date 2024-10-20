import NextAuth  from "@/auth";
import { NextResponse } from "next/server";

const signIn = NextAuth;
export const POST = async (req: any) => {

  const data = await req.json();
  console.log(data);

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
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        massage: "Failed to register",
      },
      { status: 500 }
    );
  }
};
