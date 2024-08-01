import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const transactionDetails = await prisma.transactionDetails.findMany();
    if (!transactionDetails) {
      throw new Error("Failed to fetch transactionDetails");
    }

    return NextResponse.json(
      {
        success: true,
        massage: "transactionDetails fetched successfully",
        transactionDetails,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        massage: "Failed to fetch transactionDetails",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
