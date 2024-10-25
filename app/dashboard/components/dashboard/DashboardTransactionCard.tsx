'use client'

import React from "react";
import { PiArrowLineUpRightLight, PiArrowLineDownRightLight } from "react-icons/pi";

import Link from "next/link";

const DashboardTransactionCard = () => {
  const transactions = [
    {
      id: 1,
      icon: <PiArrowLineDownRightLight />,
      title: "Active User",
      amount: "-0.32154 BTC",
      date: "Aug 4, 2022",
      time: "21:42",
      description: "14,7M / 32%",
    },
    {
      id: 2,
      icon: <PiArrowLineUpRightLight />,
      title: "Transactions",
      amount: "- $4,210.21",
      date: "Aug 4, 2022",
      time: "21:42",
      description: "$1.234 / 32%",
    },
    {
      id: 3,
      icon: <PiArrowLineDownRightLight />,
      title: "Cards Issue",
      amount: "-0.01254 BTC",
      date: "Aug 4, 2022",
      time: "21:42",
      description: "3.422 / 32%",
    },
  ];

  return (
    <div className="border rounded-xl p-4">
      <div className="mt-4 flex w-full justify-between items-center mb-8">
        <h3 className="text-xl  md:text-xl font-semibold">Transaction</h3>
        <Link href={"/dashboard/transactionManagment"} className="text-gray-600 cursor-pointer">•••</Link>

      </div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between  md:gap-4"
        >
          <div className="flex items-center">
            <div className="bg-[#F4FFEE]  p-2 rounded-full mr-2 md:mr-4">
              {transaction.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1A1B2F]">
                {transaction.title}
              </h3>
              <p className="text-xs md:text-[12px] text-[#C9C9C9]">
                {transaction.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{transaction.amount}</p>
            <p className="text-xs md:text-[12px] text-[#C9C9C9]">
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
