import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const addTask = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { title, time, status } = await request.json();

		if (!title || !time || !status) {
			return NextResponse.json(
				{
					success: false,
					message: "Missing required fields to add task",
				},
				{ status: 400, statusText: "Bad Request" }
			);
		}

		const newTask = await prisma.task.create({
			data: { title, time: new Date(time * 1000).toISOString(), status },
		});

		return NextResponse.json(
			{
				success: true,
				message: "Task added successfully",
				task: newTask,
			},
			{ status: 201, statusText: "Created" }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to create new task" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	} finally {
		await prisma.$disconnect();
	}
};
