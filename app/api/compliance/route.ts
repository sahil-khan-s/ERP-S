import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//                            POST REQUEST

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { description, assignTo, title, type } = await request.json();
        const newComplianceIssue = await prisma.complianceIssue.create({
            data: { description, assignTo, title, type, status:"Open"},
        });

        return NextResponse.json(
            {
                success: true,
                message: "Compliance issue added successfully",
                compliance: newComplianceIssue,
            },
            { status: 201, statusText: "Created" }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { success: false, message: "Failed to create new Compliance issue" },
            { status: 500, statusText: "Internal Server Error" }
        );
    } finally {
        await prisma.$disconnect();
    }
};

//                        GET REQUEST

export const GET = async (): Promise<NextResponse> => {
    try {
        const complianceIssue = await prisma.complianceIssue.findMany({
            orderBy: {
                id: 'desc',
            },
        });
        if (!complianceIssue) {

            throw new Error("Failed to fetch compliance Issue");
        }

        return NextResponse.json(
            {
                success: true,
                massage: "compliance Issue fetched successful",
                complianceIssue,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                massage: "Failed to fetch compliance Issue",
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
		const complianceissue = await prisma.complianceIssue.delete({
			where: { id: id }
		});
		if (!complianceissue) {
			throw new Error("Failed to delete compliance issue");
		}
		return NextResponse.json(
			{
				success: true,
				message: "compliance issue deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error)

		return NextResponse.json(
			{
				success: false,
				message: "Failed to delete compliance issue",
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
		const { description, assignTo, title, type, status , id } = await request.json();
		const newComplianceIssue = await prisma.complianceIssue.update({
			where: { id: parseInt(id) },
			data: { description, assignTo, title, type, status },
		});
		return NextResponse.json(
			{
				success: true,
				message: "compliance issue updated successfully",
				compliance: newComplianceIssue,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ success: false, message: "Failed to update compliance issue" },
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
};