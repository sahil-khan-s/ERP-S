import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const transactionList = await prisma.transactionList.findMany();
    if (!transactionList) {
      throw new Error("Failed to fetch contracts");
    }

    return NextResponse.json(
      {
        success: true,
        message: "transactionList fetched successfully",
        transactionList,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        massage: "Failed to fetch transactionList",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
