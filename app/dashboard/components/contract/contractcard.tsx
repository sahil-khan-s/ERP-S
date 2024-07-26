import React from 'react'

import { Contract } from '@prisma/client';

export function dateOnly(time: Date) {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${String(day).length == 1 ? `0${day}` : day} ${month} '${String(year).substring(0, 2)}`
}


const ContractCard = ({ contract }: { contract: Contract }) => {


    if (!contract) {
        return null;
    }




    const profileText: string = contract?.title?.split(" ").length >= 2
        ? contract?.title?.split(" ")[0]?.at(0) + contract?.title?.split(" ")[1]?.at(0)
        : contract?.title[0];
    return (
        <div className=''>
            <div className='flex justify-between'>
                <div className='flex items-center gap-x-4'>
                    <div className='flex justify-center items-center rounded-full size-8 bg-[#DDFF8F] '><h2 className='text-[15px] text-center text-[#16151C] font-outfit'>{profileText}</h2></div>
                    <div className='px-2'>
                        <h3 className='text-[15px] text-[#16151C] font-outfit capitalize'>{contract.title}</h3>
                        <p className='text-[15px] text-[#16151C] font-outfit capitalize whitespace-nowrap'>{contract.from} <span className='text-[#A2A1A8] font-outfit'> {contract.location}</span></p>
                        <p className='text-[15px] text-[#A2A1A8] font-outfit'>#{contract.id}</p>
                    </div>
                </div>

                <div>
                    <p className='whitespace-nowrap'>{contract.to}</p>
                    <p className='text-[15px] text-[#A2A1A8] text-right font-outfit'>{dateOnly(contract.dateFrom)}</p>
                </div>
            </div>
            <hr className='mt-2' />
        </div>

    )
}

export default ContractCard