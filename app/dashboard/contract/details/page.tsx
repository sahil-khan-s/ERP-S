"use client";
import React, { useState } from 'react'
import ContractCard from '../../components/contract/contractcard'
import ContractTaskTab from '../../components/contract/details/contractTaskTab';
import ContractNotesTab from '../../components/contract/details/contractNotesTab';
import ContractPrintTab from '../../components/contract/details/contractPrintTab';
import { Contract as ContractInterface } from '@prisma/client';
import { useSelector } from 'react-redux';
import { Store } from '@/store/store';
const page = () => {
    const contracts = useSelector((state: Store) => { return state.contracts.allContracts })

    const [activeTab, setActiveTab] = useState("task");
    const [showDetails, setShowDetails] = useState<ContractInterface | undefined>(contracts == undefined ? undefined : contracts[0])

    return (
        <div className='w-full h-full bg-white flex mt-10 justify-between gap-x-10'>

            <div className={`${showDetails ? "w-5/12" : "w-full"} p-4 border-[0.48px] border-gray-500 rounded-2xl`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-[20px] font-outfit">Contracts</h2>
                    <div className="flex gap-x-2">
                        <button className="flex items-center gap-x-1 p-2 rounded-lg border-[0.48px] border-gray-500">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.54659 0.948852C8.94747 0.349732 7.97614 0.349732 7.37702 0.948852L1.295 7.03088C1.25332 7.07256 1.22322 7.12423 1.20751 7.18096L0.407704 10.0684C0.374811 10.1868 0.408236 10.3136 0.495062 10.4005C0.58202 10.4874 0.708795 10.5208 0.827181 10.488L3.71465 9.6881C3.77138 9.67239 3.82305 9.64229 3.86473 9.60061L9.94662 3.51845C10.5448 2.91893 10.5448 1.94841 9.94662 1.34889L9.54659 0.948852ZM2.03781 7.25247L7.01547 2.27467L8.62081 3.88L3.64301 8.8578L2.03781 7.25247ZM1.71714 7.89593L2.99968 9.1786L1.22562 9.67012L1.71714 7.89593ZM9.46456 3.03639L9.10301 3.39793L7.49754 1.79247L7.85922 1.43092C8.19201 1.09813 8.7316 1.09813 9.06439 1.43092L9.46456 1.83095C9.79681 2.16414 9.79681 2.70333 9.46456 3.03639Z" fill="black" fill-opacity="0.6" />
                            </svg>

                            <p className="font-outfit capitalize font-light text-xs">edit</p>
                        </button>
                        <button className="font-outfit font-light text-xs rounded-lg  p-2 border-[0.48px] border-gray-500">View All</button>
                    </div>
                </div>


                <div className="flex overflow-y-scroll max-h-[650px] flex-col gap-y-2 mt-10 min-h-[660px]">
                    {
                        !contracts ?
                            <h2>Loading...</h2> :
                            contracts.map((contract, index) => {
                                return <div className='cursor-pointer' key={index} onClick={() => setShowDetails(contract)}>
                                    <ContractCard
                                        contract={contract}
                                    />
                                </div>
                            })
                    }
                </div>
            </div>

            <div className={`${showDetails ? "" : "hidden"} w-7/12  p-4 border-[0.48px] border-gray-500 rounded-2xl`}>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-x-6'>
                        <button onClick={() => setActiveTab("task")} className={`${activeTab === "task" ? "border-b-[3px] border-[#6BA10F] text-[#6BA10F] font-semibold" : "text-[#16151C] font-light"} flex gap-x-2 items-center pb-3`}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28882 6.43342C4.28882 4.06473 6.20902 2.14453 8.57771 2.14453H16.4512C17.5887 2.14453 18.6796 2.5964 19.4839 3.40072L22.3326 6.24946C23.137 7.05378 23.5888 8.14467 23.5888 9.28216V19.3001C23.5888 21.6688 21.6686 23.589 19.2999 23.589H8.57771C6.20902 23.589 4.28882 21.6688 4.28882 19.3001V6.43342Z" stroke={activeTab == "task" ? "#6BA10F" : "#16151C"} strokeWidth="1.60833" strokeLinejoin="round" />
                                <path d="M9.6499 7.50562L18.2277 7.50562" stroke={activeTab == "task" ? "#6BA10F" : "#16151C"} strokeWidth="1.60833" strokeLinecap="round" />
                                <path d="M9.6499 12.8667H18.2277" stroke={activeTab == "task" ? "#6BA10F" : "#16151C"} strokeWidth="1.60833" strokeLinecap="round" />
                                <path d="M9.6499 18.2278H13.9388" stroke={activeTab == "task" ? "#6BA10F" : "#16151C"} strokeWidth="1.60833" strokeLinecap="round" />
                            </svg>
                            <p className='capitalize font-lexend'>task</p>
                        </button>
                        <button onClick={() => setActiveTab("notes")} className={`${activeTab === "notes" ? "border-b-[3px] border-[#6BA10F] text-[#6BA10F] font-semibold" : "text-[#16151C] font-light"} flex gap-x-2 items-center pb-3`}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_4595)">
                                    <path d="M5.90909 2.46519L5.90922 2.46519L10.0982 2.46519C10.4271 2.46519 10.67 2.76843 10.67 3.11056C10.67 3.45292 10.4271 3.75593 10.0982 3.75593L5.90936 3.75593C5.90933 3.75593 5.9093 3.75593 5.90927 3.75593C5.19615 3.75695 4.59479 4.43015 4.59386 5.29204C4.59386 5.29208 4.59386 5.29211 4.59386 5.29215M5.90909 2.46519L4.49386 5.29204L4.59386 5.29215M5.90909 2.46519C4.53868 2.46698 3.45181 3.74554 3.45029 5.29195V5.29204L3.45029 19.5041L3.45029 19.5042C3.45181 21.0506 4.53868 22.3292 5.90909 22.3309H5.90922H19.1471H19.1472C20.5176 22.3292 21.6045 21.0506 21.606 19.5042V19.5041V14.6616C21.606 14.3192 21.3631 14.0162 21.0342 14.0162C20.7053 14.0162 20.4624 14.3192 20.4624 14.6616V19.5038C20.4615 20.366 19.8601 21.0392 19.1469 21.04H5.90933C5.19621 21.0392 4.59479 20.366 4.59386 19.5039M5.90909 2.46519L4.59386 19.5039M4.59386 5.29215V19.5038M4.59386 5.29215V19.5038M4.59386 19.5038L4.59386 19.5039M4.59386 19.5038L4.59386 19.5039" fill={activeTab == "notes" ? "#6BA10F" : "#16151C"} stroke={activeTab == "notes" ? "#6BA10F" : "#16151C"} strokeWidth="0.2" />
                                    <path d="M6.91762 16.0674L6.91751 16.0673C6.75259 15.9021 6.68901 15.6612 6.7515 15.4361L6.91762 16.0674ZM6.91762 16.0674C7.08282 16.2323 7.32373 16.2959 7.54873 16.2336L7.54876 16.2336L12.1896 14.9479C12.2974 14.9181 12.3956 14.8608 12.4748 14.7816L12.4041 14.7109L12.4748 14.7816L22.2497 5.00629L22.2498 5.00622C23.2501 4.00362 23.2501 2.38059 22.2498 1.37799L22.2497 1.37792L21.6067 0.734972C20.6048 -0.266996 18.9803 -0.266996 17.9784 0.734972L8.20324 10.5101C8.12403 10.5893 8.06682 10.6875 8.03696 10.7953L6.75152 15.436L6.91762 16.0674ZM21.3334 4.09017L20.8231 4.60047L18.3842 2.16157L18.8948 1.65119L18.8948 1.65118C19.3906 1.15537 20.1945 1.15537 20.6903 1.65118L20.6903 1.65119L21.3334 2.29402C21.3334 2.29405 21.3334 2.29408 21.3335 2.29411C21.8285 2.79059 21.8284 3.59396 21.3334 4.09017ZM9.60922 10.937L17.468 3.07798L19.9067 5.51667L12.0477 13.3756L9.60922 10.937ZM8.30597 14.6791L9.00299 12.1631L10.8217 13.9821L8.30597 14.6791Z" fill={activeTab == "notes" ? "#6BA10F" : "#16151C"} stroke={activeTab == "notes" ? "#6BA10F" : "#16151C"} strokeWidth="0.2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_4595">
                                        <rect width="22" height="22" fill="white" transform="translate(0.899902)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[17px] font-lexend'>Notes</p>
                        </button>
                        <button onClick={() => setActiveTab("print")} className={`${activeTab === "print" ? "border-b-[3px] border-[#6BA10F] text-[#6BA10F] font-semibold" : "text-[#16151C] font-light"} flex gap-x-2 items-center pb-3`}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_4595)">
                                    <path d="M5.90909 2.46519L5.90922 2.46519L10.0982 2.46519C10.4271 2.46519 10.67 2.76843 10.67 3.11056C10.67 3.45292 10.4271 3.75593 10.0982 3.75593L5.90936 3.75593C5.90933 3.75593 5.9093 3.75593 5.90927 3.75593C5.19615 3.75695 4.59479 4.43015 4.59386 5.29204C4.59386 5.29208 4.59386 5.29211 4.59386 5.29215M5.90909 2.46519L4.49386 5.29204L4.59386 5.29215M5.90909 2.46519C4.53868 2.46698 3.45181 3.74554 3.45029 5.29195V5.29204L3.45029 19.5041L3.45029 19.5042C3.45181 21.0506 4.53868 22.3292 5.90909 22.3309H5.90922H19.1471H19.1472C20.5176 22.3292 21.6045 21.0506 21.606 19.5042V19.5041V14.6616C21.606 14.3192 21.3631 14.0162 21.0342 14.0162C20.7053 14.0162 20.4624 14.3192 20.4624 14.6616V19.5038C20.4615 20.366 19.8601 21.0392 19.1469 21.04H5.90933C5.19621 21.0392 4.59479 20.366 4.59386 19.5039M5.90909 2.46519L4.59386 19.5039M4.59386 5.29215V19.5038M4.59386 5.29215V19.5038M4.59386 19.5038L4.59386 19.5039M4.59386 19.5038L4.59386 19.5039" fill={activeTab == "print" ? "#6BA10F" : "#16151C"} stroke={activeTab == "print" ? "#6BA10F" : "#16151C"} strokeWidth="0.2" />
                                    <path d="M6.91762 16.0674L6.91751 16.0673C6.75259 15.9021 6.68901 15.6612 6.7515 15.4361L6.91762 16.0674ZM6.91762 16.0674C7.08282 16.2323 7.32373 16.2959 7.54873 16.2336L7.54876 16.2336L12.1896 14.9479C12.2974 14.9181 12.3956 14.8608 12.4748 14.7816L12.4041 14.7109L12.4748 14.7816L22.2497 5.00629L22.2498 5.00622C23.2501 4.00362 23.2501 2.38059 22.2498 1.37799L22.2497 1.37792L21.6067 0.734972C20.6048 -0.266996 18.9803 -0.266996 17.9784 0.734972L8.20324 10.5101C8.12403 10.5893 8.06682 10.6875 8.03696 10.7953L6.75152 15.436L6.91762 16.0674ZM21.3334 4.09017L20.8231 4.60047L18.3842 2.16157L18.8948 1.65119L18.8948 1.65118C19.3906 1.15537 20.1945 1.15537 20.6903 1.65118L20.6903 1.65119L21.3334 2.29402C21.3334 2.29405 21.3334 2.29408 21.3335 2.29411C21.8285 2.79059 21.8284 3.59396 21.3334 4.09017ZM9.60922 10.937L17.468 3.07798L19.9067 5.51667L12.0477 13.3756L9.60922 10.937ZM8.30597 14.6791L9.00299 12.1631L10.8217 13.9821L8.30597 14.6791Z" fill={activeTab == "print" ? "#6BA10F" : "#16151C"} stroke={activeTab == "print" ? "#6BA10F" : "#16151C"} strokeWidth="0.2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_4595">
                                        <rect width="22" height="22" fill="white" transform="translate(0.899902)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[17px] font-lexend'>Print</p>
                        </button>
                    </div>
                    <button onClick={() => setShowDetails(undefined)} className='pb-3'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7L17 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 17L17 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <hr className='-mt-[2px]' />



                <div className='w-full mt-4'>
                    {
                        contracts === undefined ? null :
                            activeTab === "task"
                                ? <ContractTaskTab contract={showDetails ?? contracts[0]} />
                                : activeTab === "notes"
                                    ? <ContractNotesTab /> :
                                    activeTab === "print" ?
                                        <ContractPrintTab /> : null
                    }
                </div>

            </div>
        </div>
    )
}

export default page
