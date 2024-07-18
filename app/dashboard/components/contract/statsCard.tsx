import React from 'react'
import active from "@/public/icons/activeContracts.svg";
import modified from "@/public/icons/modifiedContracts.svg";
import viewed from "@/public/icons/viewedContracts.svg";
import signed from "@/public/icons/signedContracts.svg";
import notSigned from "@/public/icons/notSignedContracts.svg";
import renewal from "@/public/icons/renewalContract.svg";
import Image from 'next/image';
const StatsCard = ({ data }: { data: { title: string, value: number } }) => {

    let IconComponent;


    switch (data.title) {
        case "Active":
            IconComponent = active;
            break;
        case "Modified":
            IconComponent = modified;
            break;
        case "Renewal":
            IconComponent = renewal;
            break;
        case "Viewed":
            IconComponent = viewed;
            break;
        case "Signed":
            IconComponent = signed;
            break;
        case "Not Signed":
            IconComponent = notSigned;
            break;
        default:
            break;
    }


    return (
        <div className="flex flex-col gap-y-4 justify-between h-full w-[15%] aspect-square p-5 rounded-2xl border-gray-500 border-[0.48px]">
            <div className="h-10 flex justify-end items-center">
                <div className="flex justify-center items-center h-full aspect-square border-gray-500 border-[0.48px] rounded-xl">
                    <Image src={IconComponent} alt="icon for a start card" />
                </div>
            </div>
            <div className="h-16">
                <p className="text-xs font-light capitalize">{data.title}</p>
                <h2 className="text-3xl font-medium text-[#16151C]">{`${data.value}`}</h2>
            </div>
        </div>
    )
}

export default StatsCard