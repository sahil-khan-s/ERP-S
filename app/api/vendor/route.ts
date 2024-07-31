import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//                            POST REQUEST

export const POST = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { imageUrl, vendorName, category, contractValue, email, date, type, address, note } = await request.json();
		const newVendor = await prisma.vendor.create({
			data: { imageUrl, name:vendorName, contractvalue:contractValue, vendorCategory:category, email, date, type, address, note },
		});

		return NextResponse.json(
			{
				success: true,
				message: "vendor added successfully",
				vendor: newVendor,
			},
			{ status: 201, statusText: "Created" }
		);
	} catch (error) {
		console.error(error);
		console.log("SERVER ERROR")

		return NextResponse.json(
			{ success: false, message: "Failed to create new vendor" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	} finally {
		await prisma.$disconnect();
	}
};

//                        GET REQUEST

export const GET = async (): Promise<NextResponse> => {
	try {
		const vendors = await prisma.vendor.findMany({
			orderBy: {
			  id: 'desc',
			},
		  });
		if (!vendors) {
			console.log("Faill to fetch")

			throw new Error("Failed to fetch vendor");
		}

		return NextResponse.json(
			{
				success: true,
				massage: "vendors fetched successful",
				vendors,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		console.log("SERVER ERROR")

		return NextResponse.json(
			{
				success: false,
				massage: "Failed to fetch vendor",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};