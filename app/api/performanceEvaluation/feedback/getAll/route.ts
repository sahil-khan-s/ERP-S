import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
	try {
		const feedbacks = await prisma.feedback.findMany();
		if (!feedbacks) {
			throw new Error("Failed to fetch feedbacks");
		}

		return NextResponse.json(
			{
				success: true,
				massage: "feedbacks fetched successful",
				feedbacks,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
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
