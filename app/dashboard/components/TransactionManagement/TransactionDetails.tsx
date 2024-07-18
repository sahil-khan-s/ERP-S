import React from "react";
import TransactionCard from "./TransactionCard";
import SpotifyLogo from "@/public/Transaction_Management_Assets/SpotifyLogo.png";
import AdobeXdLogo from "@/public/Transaction_Management_Assets/AbobeXD.png";
import UpworkLogo from "@/public/Transaction_Management_Assets/UpworkLogo.png";
import GoogleCloudLogo from "@/public/Transaction_Management_Assets/GoogleCloud.png";
import Image from "next/image";
import visaImage from "@/public/Transaction_Management_Assets/Visa.png";
import MasterCard from "@/public/Transaction_Management_Assets/MasterCard.png";

const TransactionDetails = ({
  mainTitle,
  logo,
  ShowTransactionDetails,
}: {
  mainTitle: string;
  logo: any;
  ShowTransactionDetails: boolean;
}) => {
  return (
    <div className="border-[1px] border-black border-opacity-[0.28] rounded-xl p-4 min-w-[220px]">
      <div className="flex text-[#121212] my-2 items-center gap-2">
        <Image src={logo} alt="image" />
        <span className="font-medium">{mainTitle}</span>
      </div>
      <hr className="my-3" />
      {ShowTransactionDetails ? (
        <>
          <TransactionCard
            title={"Spotify App"}
            time="June 19 2023 at 16.42"
            amount="-$12.7"
            amountColor="#D62C2C"
            image={SpotifyLogo}
          />
          <TransactionCard
            title={"Adobe XD 2023"}
            time="June 12 2023 at 10.18"
            amount="-$20.74"
            amountColor="#D62C2C"
            image={AdobeXdLogo}
          />
          <TransactionCard
            title={"Upwork"}
            time="June 08 2023 at 23.05"
            amount="+$10.812.7"
            amountColor="#4EEA7A"
            image={UpworkLogo}
          />
          <TransactionCard
            title={"Google Cloud"}
            time="June 02 2023 at 09.15"
            amount="-$124.32"
            amountColor="#D62C2C"
            image={GoogleCloudLogo}
          />
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
