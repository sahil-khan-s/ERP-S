import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const PATCH = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { comment, feedbackId } = await req.json();

		if (!comment || !feedbackId) {
			throw new Error("Missing arguments");
		}

		const newFeedback = await prisma.feedback.update({
			where: {
				id: feedbackId,
			},
			data: {
				comment,
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Comment added successfully",
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
