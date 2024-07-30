// edit the details of the contract whose Id is sent in the req.body.

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
	try {
		const {
			id,
			title,
			location,
			from,
			to,
			dateFrom,
			dateTo,
			content,
			status,
		} = await req.json();

		if (
			!id ||
			!title ||
			!location ||
			!from ||
			!to ||
			!dateFrom ||
			!dateTo ||
			!content ||
			!status
		) {
			console.log(
				id,
				title,
				location,
				from,
				to,
				dateFrom,
				dateTo,
				content,
				status
			);

			return NextResponse.json(
				{
					success: false,
					message: "Missing required fields to edit contract",
				},
				{ status: 401, statusText: "missing arguments" }
			);
		}

		const updatedContract = await prisma.contract.update({
			where: {
				id,
			},
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
				message: "Contract edited successfully",
				task: updatedContract,
			},
			{ status: 200, statusText: "ok" }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				success: false,
				message: "Error editing contract",
			},
			{ status: 500, statusText: "error" }
		);
	}
};
