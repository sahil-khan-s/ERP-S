import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const task = await prisma.task
			.findMany()
			.catch(() => {
				return NextResponse.json(
					{
						success: false,
						massage: "something went wrong while getting tasks",
					},
					{ status: 401 }
				);
			})
			.finally(() => {
				prisma.$disconnect();
			});

		console.log("task added ==> ", task);
		return NextResponse.json(
			{
				success: true,
				massage: "Tasks fetched successful",
				task,
			},

			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				success: false,
				massage: "something went wrong while getting tasks",
			},
			{ status: 402 }
		);
	}
};
