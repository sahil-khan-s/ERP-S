import Image, { StaticImageData } from "next/image";

const Card = ({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) => {
  return (
    <div className="p-6 bg-[#F6F9F5] rounded-3xl flex justify-start items-center flex-col gap-3 h-[450px]">
      <Image src={image} alt="Card" width={350} />
      <h3 className="text-2xl font-medium">{title}</h3>
      <h3 className="font-light">{text}</h3>
    </div>
  );
};

export default Card;
