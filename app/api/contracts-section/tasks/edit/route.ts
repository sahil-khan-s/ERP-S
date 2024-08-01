import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { title, time, status, id } = await request.json();

		if (!title || !time || !status || !id) {
			return NextResponse.json(
				{
					success: false,
					message: "Missing required fields to edit task",
				},
				{ status: 400 }
			);
		}

		await prisma.task.update({
			where: {
				id: parseInt(id),
			},
			data: {
				title,
				status,
				time: new Date(time * 1000).toISOString(),
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Task updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to update task" },
			{ status: 500 }
		);
	}
};
