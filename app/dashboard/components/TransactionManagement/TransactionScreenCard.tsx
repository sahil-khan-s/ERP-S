import Image from "next/image";
import React from "react";

interface TransactionScreenProps {
  icon: any;
  title: string;
  details: string;
  image: any;
  textColor: string;
  percentageColor: string;
  percentage: string;
}

const TransactionScreenCard = ({
  icon,
  title,
  details,
  percentage,
  textColor,
  percentageColor,
  image,
}: TransactionScreenProps) => {
  return (
    <div className="p-3 min-w-[220px] flex flex-grow gap-1 justify-start items-start font-medium flex-col border-[1px] border-black border-opacity-[0.28] rounded-xl">
      <div className="flex gap-2 items-center">
        <Image src={image} alt="image" width={30} />
        <span style={{ color: textColor }}>{title}</span>
      </div>
      <div className="flex ">
        <div className="flex gap-1 font-semibold text-[28px]">{details}</div>
        <div
          className="flex items-center justify-center "
          style={{ color: percentageColor }}
        >
          {icon}
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default TransactionScreenCard;
