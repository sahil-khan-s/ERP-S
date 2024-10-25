import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
	try {
		const feedbacks = await prisma.feedback.findMany();
		if (!feedbacks) {
			throw new Error("Failed to fetch feedbacks");
		}

		let modifiedFeedbacks = [];

		// fetch the vendor details with each feedback
		for (const feedback of feedbacks) {
			const vendor = await prisma.vendor.findUnique({
				where: {
					id: feedback.venodrId,
				},
			});
			if (vendor) {
				modifiedFeedbacks.push({
					...feedback,
					vendorName: vendor.name,
					vendorImage: vendor.imageUrl,
				});
			}
		}

		return NextResponse.json(
			{
				success: true,
				massage: "feedbacks fetched successful",
				feedbacks: modifiedFeedbacks,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				massage: "Failed to fetch feedbacks",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};
