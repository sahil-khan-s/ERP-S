import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	const { title, time, status } = await req.json();

	console.log(title, time, status);
	if (!(title && time && status)) {
		return NextResponse.json(
			{
				success: false,
				massage: "You must send complete data to add task",
			},
			{ status: 403, statusText: "missing arguments" }
		);
	}
	try {
		const task = await prisma.task
			.create({
				data: {
					title,
					time,
					status,
				},
			})
			.catch(() => {
				return NextResponse.json(
					{
						success: false,
						massage: "something went wrong adding new task",
					},
					{ status: 401 }
				);
			})
			.finally(() => {
				prisma.$disconnect();
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
		console.log(error);
		return NextResponse.json(
			{
				success: false,
				massage: "unable to create new task",
			},
			{ status: 402 }
		);
	}
};
