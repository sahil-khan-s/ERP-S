import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { title, location, from, to, dateFrom, dateTo, content, status } =
			await request.json();

		if (
			![
				title,
				location,
				from,
				to,
				dateFrom,
				dateTo,
				content,
				status,
			].every((item) => (item ? true : false))
		) {
			return NextResponse.json(
				{
					success: false,
					message: "Missing required fields to add contract",
				},
				{ status: 401, statusText: "missing arguments" }
			);
		}

		const newContract = await prisma.contract.create({
			data: {
				title,
				from,
				to,
				dateFrom: new Date(dateFrom * 1000).toISOString(),
				dateTo: new Date(dateTo * 1000).toISOString(),
				location,
				content,
				status,
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Contract added successfully",
				task: newContract,
			},
			{ status: 201, statusText: "ok" }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to create new Contract" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	} finally {
		await prisma.$disconnect();
	}
};
