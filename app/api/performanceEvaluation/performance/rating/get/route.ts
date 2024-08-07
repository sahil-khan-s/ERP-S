import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const GET = async (req: NextRequest): Promise<NextResponse> => {
	try {
		// add the vendor performance
		const performances = await prisma.performance.findMany();

		// also add the vendor Name to each performance
		let modifiedPerformances = [];
		for (const performance of performances) {
			const vendor = await prisma.vendor.findUnique({
				where: { id: performance.vendorId },
			});
			modifiedPerformances.push({
				...performance,
				vendorName: vendor?.name,
			});
		}

		return NextResponse.json(
			{
				success: true,
				message: "Performance of vendor added successfully",
				performances: modifiedPerformances,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: "Internal server error" },
			{ status: 500 }
		);
	}
};
