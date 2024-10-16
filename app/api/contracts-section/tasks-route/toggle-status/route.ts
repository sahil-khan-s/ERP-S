import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
	try {
		const { id, status } = await req.json();

		if (!id) {
			return NextResponse.json(
				{
					success: false,
					message: "Task id is missing",
				},
				{ status: 400, statusText: "missing arguments" }
			);
		}

		if (status?.trim() !== "complete" && status?.trim() !== "incomplete") {
			return NextResponse.json(
				{
					success: false,
					message: "Invalid status",
				},
				{ status: 405, statusText: "invalid arguments" }
			);
		}

		const task = await prisma.task
			.findUnique({
				where: { id },
			})
			.catch(() => null);
		if (!task) {
			return NextResponse.json(
				{
					success: false,
					message: "Task not found",
				},
				{ status: 404, statusText: "Task not found" }
			);
		}

		const res = await prisma.task.update({
			where: { id },
			data: {
				status,
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Tasks updated successfully",
				response: res,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				message: "Failed to update task",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect().catch(() => {});
	}
};
