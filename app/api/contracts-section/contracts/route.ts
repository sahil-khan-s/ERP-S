import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const contracts = await prisma.contract
			.findMany()
			.catch(() => {
				return NextResponse.json(
					{
						success: false,
						massage: "something went wrong while getting contracts",
					},
					{ status: 401 }
				);
			})
			.finally(() => {
				prisma.$disconnect();
			});

		return NextResponse.json(
			{
				success: true,
				massage: "contracts fetched successful",
				contracts,
			},

			{ status: 401 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				massage: "something went wrong while getting contracts",
			},
			{ status: 401 }
		);
	}
};
