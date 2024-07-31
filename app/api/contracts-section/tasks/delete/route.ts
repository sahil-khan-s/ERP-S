import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { id } = (await request.json()) as { id: number };

		await prisma.task.delete({
			where: {
				id,
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Task deleted successfully",
			},
			{ status: 200, statusText: "OK" }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to delete task" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	} finally {
		await prisma.$disconnect();
	}
};
