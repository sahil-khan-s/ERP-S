import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//                            POST REQUEST

export const POST = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { imageUrl, vendorName, category, contractValue, email, date, type, address, note } = await request.json();

		// if( imageUrl || vendorName || category || contractValue || email || date || type || address || note ){
		// 	return NextResponse.json(
		// 		{
		// 			success: false,
		// 			message: "vendor field missing",
		// 		},
		// 		{ status: 500, statusText: "Bad request" }
		// 	)
		// }

		const newVendor = await prisma.vendor.create({
			data: { imageUrl, name:vendorName, contractvalue:contractValue, vendorCategory:category, email, date, type, address, note },
		});
		console.log("Vendors uploaded to DB --------- DONE 2")

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
		console.log("SERVER ERROR--------- ERROR 3")

		return NextResponse.json(
			{ success: false, message: "Failed to create new vendor-----------ERROR 00" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	} finally {
		await prisma.$disconnect();
	}
};

//                        GET REQUEST

export const GET = async (): Promise<NextResponse> => {
	try {
		const vendors = await prisma.vendor.findMany();
		if (!vendors) {
			console.log("Faill to fetch --------- ERROR 4")

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
		console.log("SERVER ERROR --------- ERROR 5")

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