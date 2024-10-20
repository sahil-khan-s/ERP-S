"use client"

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
        <div className="flex flex-col justify-start md:justify-between min-w-[100px] md:min-w-[150px] w-[30%] md:w-[15%] p-3 md:p-5 rounded-2xl border-gray-500 border-[0.48px]">
            <div className="h-8 md:h-10 flex justify-end items-center mb-2">
                <div className="flex justify-center items-center h-full aspect-square border-gray-500 border-[0.48px] rounded-md md:rounded-xl">
                    {/* <Image className='h-full w-full object-contain' height={20} width={20} src={IconComponent} alt="icon for a start card" /> */}
                    <IconComponent />
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