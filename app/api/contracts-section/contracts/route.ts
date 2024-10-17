import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const contracts = await prisma.contract.findMany();
		if (!contracts) {
			throw new Error("Failed to fetch contracts");
		}

		return NextResponse.json(
			{
				success: true,
				massage: "Contracts fetched successfully",
				contracts,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				massage: "Failed to fetch contracts",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};
