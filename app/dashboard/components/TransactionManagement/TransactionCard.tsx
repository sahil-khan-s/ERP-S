import Image from "next/image";

interface CardProps {
  image: any;
  title: string;
  time: string;
  amount: number;
  amountColor: string;
}

const TransactionCard = ({
  image,
  title,
  time,
  amount,
  amountColor,
}: CardProps) => {
  return (
    <div className="my-2 flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image src={image} alt="image" width={28} />
        <div className="flex flex-col">
          <h3 className="font-medium">{title}</h3>
          <span className="text-[10px] text-[#A8A8A8]">{time}</span>
        </div>
      </div>
      <div style={{ color: amountColor }}>{amount}</div>
    </div>
  );
};

export default TransactionCard;
