import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { vendorId, evaluationScore, yearlyRating } = await req.json();

		const rating = {
			jan: -1,
			feb: -1,
			mar: -1,
			apr: -1,
			may: -1,
			jun: -1,
			jul: -1,
			aug: -1,
			sep: -1,
			oct: -1,
			nov: -1,
			dec: -1,
		};

		// Check that the params are valid and not undefined
		if (
			!vendorId ||
			!evaluationScore ||
			(yearlyRating && typeof yearlyRating !== "object")
		) {
			return NextResponse.json(
				{ success: false, message: "Invalid or missing arguments" },
				{ status: 400 }
			);
		}

		// Check that the vendor exists
		const vendor = await prisma.vendor.findUnique({
			where: { id: vendorId },
		});

		if (!vendor) {
			return NextResponse.json(
				{ success: false, message: "Vendor not found" },
				{ status: 404 }
			);
		}

		// Add the vendor performance
		const newPerformance = await prisma.performance.create({
			data: {
				rating: { ...rating, ...yearlyRating },
				evaluationScore,
				vendor: { connect: { id: vendorId } },
			},
		});

		return NextResponse.json(
			{
				success: true,
				message: "Performance of vendor added successfully",
				performance: newPerformance,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				message: error || "Internal server error",
			},
			{ status: 500 }
		);
	}
};
