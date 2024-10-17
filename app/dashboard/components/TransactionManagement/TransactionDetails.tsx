"use client";

import React, { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";
import SpotifyLogo from "@/public/Transaction_Management_Assets/SpotifyLogo.png";
import Image, { StaticImageData } from "next/image";
import visaImage from "@/public/Transaction_Management_Assets/Visa.png";
import MasterCard from "@/public/Transaction_Management_Assets/MasterCard.png";

interface transactionDetailsprops {
  id: string;
  image: string | null;
  title: string;
  transactionDate: string;
  amount: number;
}

const TransactionDetails = ({
  mainTitle,
  logo,
  ShowTransactionDetails,
}: {
  mainTitle: string;
  logo: StaticImageData;
  ShowTransactionDetails: boolean;
}) => {

  
  const [detailsOfTransaction, setDetailsOfTransaction] = useState<
    transactionDetailsprops[]
  >([]);

  const GetTransactionDetails = async () => {
    try {
      const res = await fetch("/api/transaction-screen/transaction-details");
      if (!res.ok) {
        throw new Error(
          "Something went wrong while getting transaction-details"
        );
      }
      const data = await res.json();
      if (data.success) {
        setDetailsOfTransaction(data.transactionDetails);
      } else {
        throw new Error(
          "Something went wrong while getting transaction-details"
        );
      }
    } catch (error) {
      throw new Error("Error while getting the transaction-details");
    }
  };

  useEffect(() => {
    GetTransactionDetails();
  }, []);

  return (
    <div className="border-[1px] border-black border-opacity-[0.28] rounded-xl p-4 min-w-[220px]">
      <div className="flex text-[#121212] my-2 items-center gap-2">
        <Image src={logo} alt="image" />
        <span className="font-medium">{mainTitle}</span>
      </div>
      <hr className="my-3" />
      {ShowTransactionDetails ? (
        <>
          {detailsOfTransaction &&
            detailsOfTransaction.map((transaction) => (
              <TransactionCard
                title={transaction.title}
                time={transaction.transactionDate}
                amount={transaction.amount}
                amountColor="#D62C2C"
                image={SpotifyLogo}
              />
            ))}
        </>
      ) : (
        <div className="flex overflow-hidden gap-2">
          <div className="border-[1px] border-black border-opacity-[0.28] rounded-md gap-2 flex p-2 items-center w-[140px]">
            <Image src={visaImage} alt="VisaImage" width={50} />
            <div className="font-medium text-[12px]">
              3419 Debit <br /> Card
            </div>
          </div>
          <div className="border-[1px] border-black border-opacity-[0.28] rounded-md gap-2 flex p-2 items-center w-[140px]">
            <Image src={MasterCard} alt="mastercard" width={50} />
            <div className="font-medium text-[12px]">
              3419 Debit <br /> Card
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
