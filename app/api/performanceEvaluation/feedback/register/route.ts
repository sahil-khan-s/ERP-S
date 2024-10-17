import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const POST = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { content, vendorId } = await req.json();

		if (!content || !vendorId) {
			throw new Error("Missing arguments");
		}

		const vendor = await prisma.vendor.findUnique({
			where: { id: vendorId },
		});

		if (!vendor) {
			throw new Error("Vendor not found");
		}

		const newFeedback = await prisma.feedback.create({
			data: {
				content,
				comment: "",
				vendor: { connect: { id: vendorId } },
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Feedback added successfully",
				feedback: newFeedback,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: "Internal server error" },
			{ status: 500 }
		);
	}
};
