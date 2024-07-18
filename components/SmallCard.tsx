import Image, { StaticImageData } from "next/image";
import React from "react";

const SmallCard = ({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="px-6 py-4 bg-white border-2 border-[#EFF0F1] rounded-md flex items-start gap-4">
      <Image src={image} alt="logo" width={40} />
      <div>
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="w-[190px]">{description}</p>
      </div>
    </div>
  );
};

export default SmallCard;
