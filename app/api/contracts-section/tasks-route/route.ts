import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
	try {
		const tasks = await prisma.task.findMany();
		if (!tasks) {
			throw new Error("Failed to fetch tasks");
		}

		return NextResponse.json(
			{
				success: true,
				massage: "Tasks fetched successful",
				tasks,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				massage: "Failed to fetch tasks",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};
