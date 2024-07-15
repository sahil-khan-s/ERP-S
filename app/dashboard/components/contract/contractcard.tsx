import React from 'react'



export interface ContractInterface {
    id: number
    title: string
    location: string
    from: string
    to: string
    dateFrom: string
    dateTo: string
    content: string
}
const ContractCard = ({ contract }: { contract: ContractInterface }) => {


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
                        <p className='text-[15px] text-[#16151C] font-outfit capitalize whitespace-nowrap'>{contract.to} <span className='text-[#A2A1A8] font-outfit'> {contract.location}</span></p>
                        <p className='text-[15px] text-[#A2A1A8] font-outfit'>#{contract.id}</p>
                    </div>
                </div>

                <div>
                    <p className='whitespace-nowrap'>{contract.from}</p>
                    <p className='text-[15px] text-[#A2A1A8] text-right font-outfit'>{contract.dateFrom}</p>
                </div>
            </div>
            <hr className='mt-2' />
        </div>

    )
}

export default ContractCard