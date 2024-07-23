import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	try {
		const { title, time, status } = await req.json();
		if (!title || !time || !status) {
			return NextResponse.json(
				{
					success: false,
					massage: "You must send complete data to add task",
				},
				{ status: 403, statusText: "missing arguments" }
			);
		}
		const task = await prisma.task.create({
			data: {
				title,
				time: new Date(time * 1000).toISOString(),
				status,
			},
		});

		return NextResponse.json(
			{
				success: true,
				massage: "Tasks added successful",
				task,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				massage: "Failed to create new task",
			},
			{ status: 402 }
		);
	} finally {
		await prisma.$disconnect();
	}
};
