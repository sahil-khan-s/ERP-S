import React from "react";
import transactionListSvg from "@/public/Transaction_Management_Assets/Svgs/TransactionList.svg";
import Image from "next/image";
import Link from "next/link";

const TransactionList = () => {
  const transactions = [
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
    {
      name: "Lunch Items",
      shopName: "Foody",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Accepted",
      amount: "123,456",
    },
    {
      name: "Travelling",
      shopName: "PIA",
      date: "12/10/2019",
      paymentMethod: "Cash",
      approved: "Declined",
      amount: "123,456",
    },
  ];

  return (
    <div className="p-4 h-[500px] border-[1px] border-black border-opacity-[0.28] rounded-xl flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <Image src={transactionListSvg} alt="svg" />
          Transaction List
        </h2>
        <Link href="#" className="text-[#6BA10F] font-medium">
          View All
        </Link>
      </div>
      <hr className="text-[#E3E3E3]" />
      <div className="overflow-auto h-full">
        <table className="min-w-full bg-white">
          <thead className="text-[#121212] border-b border-[#121212]">
            <tr>
              <th className="p-4 text-left text-sm font-medium">Name</th>
              <th className="p-4 text-left text-sm font-medium">Shop Name</th>
              <th className="p-4 text-left text-sm font-medium">Date</th>
              <th className="p-4 text-left text-sm font-medium">
                Payment Method
              </th>
              <th className="p-4 text-left text-sm font-medium">Approved</th>
              <th className="p-4 text-left text-sm font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="text-[#A8A8A8]">
                <td className="p-4 text-sm my-2 border-b">
                  {transaction.name}
                </td>
                <td className="p-4 text-sm border-b">{transaction.shopName}</td>
                <td className="p-4 text-sm border-b">{transaction.date}</td>
                <td className="p-4 text-sm border-b">
                  {transaction.paymentMethod}
                </td>
                <td className="p-2 text-sm border-b">
                  <div
                    className={`p-2 rounded-lg ${
                      transaction.approved !== "Accepted"
                        ? "text-[#A10F0F] bg-[#A10F0F] bg-opacity-10"
                        : "text-[#6BA10F] bg-[#6BA10F] bg-opacity-10"
                    }`}
                  >
                    {transaction.approved}
                  </div>
                </td>
                <td className="p-4 text-sm border-b">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
