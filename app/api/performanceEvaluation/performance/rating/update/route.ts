import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const PATCH = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { vendorId, yearlyRating, performanceId } = await req.json();

		// check that the params are valid and not undefined. only one is required between vendorId and performanceId
		if (
			!(vendorId || yearlyRating) ||
			(!performanceId && typeof performanceId === "object")
		) {
			throw new Error("Missing arguments");
		}

		// check that the vendor exists
		const vendor = await prisma.vendor.findUnique({
			where: { id: vendorId },
		});

		if (!vendor) {
			throw new Error("Vendor not found");
		}

		const oldRecord = await prisma.performance.findUnique({
			where: {
				vendorId,
			},
		});

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

		if (!oldRecord) {
			return NextResponse.json(
				{ success: false, message: "Performance not found" },
				{ status: 404 }
			);
		}
		// add the vendor performance

		const oldRating = JSON.parse(JSON.stringify(oldRecord.rating));
		await prisma.performance.update({
			where: {
				vendorId,
				// id: performanceId,
			},
			data: {
				rating: { ...oldRating, ...yearlyRating },
			},
		});

		const updatedPerformance = await prisma.performance.findUnique({
			where: {
				vendorId,
			},
		});
		return NextResponse.json(
			{
				success: true,
				message: "Vendor performance updated successfully",
				performance: updatedPerformance,
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
