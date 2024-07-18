import React from "react";
import commaSvg from "@/public/Svgs/comma.svg";
import Image from "next/image";

interface ReviewCardProps {
  title: string;
  subtitle: string;
  name: string;
  detail: string;
  color: string;
}

const ReviewCard = ({
  title,
  subtitle,
  name,
  detail,
  color,
}: ReviewCardProps) => {
  const isWhiteBackground = color === "#ffffff";

  return (
    <div
      className={`relative w-[400px] h-[400px] p-6 text-[#7F7F88] rounded-3xl ${
        isWhiteBackground ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: color }}
    >
      <Image
        src={commaSvg}
        alt="Image"
        className="absolute right-4 top-40  z-0"
      />
      <div className="flex absolute flex-col justify-between items-start text-[#7F7F88] h-[90%] w-[90%] z-10">
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>
          <div className="flex justify-start gap-6 items-center">
            <div className="avatar w-20 h-20 rounded-full bg-[#D9D9D9]"></div>
            <div>
              <div className="font-medium text-2xl text-black">{name}</div>

              <div>{detail}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
