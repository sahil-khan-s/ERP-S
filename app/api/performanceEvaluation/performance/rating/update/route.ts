import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const PATCH = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const { vendorId, yearlyRating, performanceId, evaluationScore } =
			await req.json();

		// check that the params are valid and not undefined. only one is required between vendorId and performanceId
		if (
			!(vendorId || yearlyRating || evaluationScore) ||
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
			},
			data: {
				rating: { ...oldRating, ...yearlyRating },
				evaluationScore,
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
