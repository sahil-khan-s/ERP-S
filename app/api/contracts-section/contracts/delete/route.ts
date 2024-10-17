import { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const DELETE = async (req: NextRequest) => {
	try {
		const { id } = await req.json();

		if (!id) {
			return NextResponse.json(
				{
					success: false,
					message: "Missing required fields to delete contract",
				},
				{ status: 400, statusText: "Bad Request" }
			);
		}

		await prisma.contract.delete({
			where: {
				id,
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Contract deleted successfully",
			},
			{ status: 200, statusText: "ok" }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to delete contract" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	} finally {
		await prisma.$disconnect();
	}
};
