import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface TemplateCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  Svgs: StaticImageData;
}

const TemplateCard = ({
  icon,
  title,
  description,
  Svgs,
}: TemplateCardProps) => {
  return (
    <div className="px-6 py-4 bg-white rounded-md flex items-center gap-4">
      <div className="flex justify-center items-center w-14 h-14 p-3 bg-[#EBFDF2] rounded-md">
        <Image src={Svgs} alt="avatarSvg" />
      </div>
      <div>
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="w-[330px]">{description}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

export default TemplateCard;
