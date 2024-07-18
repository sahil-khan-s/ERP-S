import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface StateCardProps {
  bgColor: string;
  color: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  image: StaticImageData | string;
}

const StateCard = ({
  color,
  bgColor,
  icon,
  title,
  subtitle,
  image,
}: StateCardProps) => {
  return (
    <div
      style={{ color: color, borderColor: bgColor }}
      className="px-6 py-4 border-2 rounded-xl flex items-center gap-4"
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="flex justify-center items-center w-14 h-14 p-3 rounded-full"
      >
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="flex ">
          <span className="text-black">{subtitle}</span>
          {image === "" ? "" : <Image src={image} alt="happy" width={22} />}
        </p>
      </div>
    </div>
  );
};

export default StateCard;
