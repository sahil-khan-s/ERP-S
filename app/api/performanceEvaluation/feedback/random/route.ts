import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  try {
    const feedbacks = await prisma.feedback.findMany();
    if (!feedbacks) {
      throw new Error("Failed to fetch random feedback");
    }

    const randomFeedback =
      feedbacks[Math.floor(Math.random() * feedbacks.length)];

    // get the details of the vendor who give this feedback
    const vendor = await prisma.vendor.findUnique({
      where: {
        id: randomFeedback?.venodrId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        massage: "feedback fetched random successful",
        feedback: {
          ...randomFeedback,
          vendorName: vendor?.name,
          vendorImage: vendor?.imageUrl,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        massage: "Failed to fetch random feedbacks",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
