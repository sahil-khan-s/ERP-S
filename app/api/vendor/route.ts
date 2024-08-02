import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//                            POST REQUEST

export const POST = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { imageUrl, vendorName, category, contractValue, email, date, type, address, note } = await request.json();
		const newVendor = await prisma.vendor.create({
			data: { imageUrl, name: vendorName, contractvalue: contractValue, vendorCategory: category, email, date, type, address, note },
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
		console.error(error);

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



//         DELETE REQUEST
export const DELETE = async (request: Request): Promise<NextResponse> => {
	try {
		const { id } = await request.json();
		const vendor = await prisma.vendor.delete({
			where: { id: id }
		});
		if (!vendor) {
			throw new Error("Failed to delete vendor");
		}
		return NextResponse.json(
			{
				success: true,
				message: "Vendor deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error)

		return NextResponse.json(
			{
				success: false,
				message: "Failed to delete vendor",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};

//       PATCH REQUEST
export const PATCH = async (request: NextRequest): Promise<NextResponse> => {
	try {
		const { id, name, vendorCategory, contractvalue, email, type, address, note } = await request.json();
		const updatedVendor = await prisma.vendor.update({
			where: { id: parseInt(id) },
			data: { name, contractvalue, vendorCategory, email, type, address, note },
		});
		return NextResponse.json(
			{
				success: true,
				message: "Vendor updated successfully",
				vendor: updatedVendor,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ success: false, message: "Failed to update vendor" },
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};

