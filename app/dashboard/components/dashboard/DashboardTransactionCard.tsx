'use client'

import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Upperarrow_svg from "@/public/dashboard/Svgs/upperarrow.svg";
import Downarrow_svg from "@/public/dashboard/Svgs/downarrow.svg";
import Image from "next/image";

const DashboardTransactionCard = () => {
  const transactions = [
    {
      id: 1,
      icon: Upperarrow_svg,
      title: "Active User",
      amount: "-0.32154 BTC",
      date: "Aug 4, 2022",
      time: "21:42",
      description: "14,7M / 32%",
    },
    {
      id: 2,
      icon: Downarrow_svg,
      title: "Transactions",
      amount: "- $4,210.21",
      date: "Aug 4, 2022",
      time: "21:42",
      description: "$1.234 / 32%",
    },
    {
      id: 3,
      icon: Upperarrow_svg,
      title: "Cards Issue",
      amount: "-0.01254 BTC",
      date: "Aug 4, 2022",
      time: "21:42",
      description: "3.422 / 32%",
    },
  ];

  return (
    <div className="border-[1px] border-black border-opacity-[0.28] rounded-xl p-4">
      <div className="mt-4 flex w-full justify-between items-center">
        <h3 className="font-normal text-2xl">Transaction</h3>
        <MoreHorizIcon
          className="text-[#686464] cursor-pointer"
          fontSize="large"
        />
      </div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between my-6"
        >
          <div className="flex items-center">
            <div className="bg-[#F4FFEE]  p-2 rounded-full mr-4">
              <Image
                src={transaction.icon}
                alt={transaction.title}
                className="text-[#6BA10F] size-5"
              />
            </div>
            <div>
              <h3 className="text-md font-semibold text-[#1A1B2F]">
                {transaction.title}
              </h3>
              <p className="text-[12px] text-[#C9C9C9]">
                {transaction.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-md font-semibold">{transaction.amount}</p>
            <p className="text-[12px] text-[#C9C9C9]">
              {transaction.date}
              <br />
              {transaction.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardTransactionCard;
