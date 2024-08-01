"use client";
import { changeRandomFeedback } from '@/features/feedback.reducer.ts';
import { store, Store } from '@/store/store';
import { Feedback } from '@prisma/client';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
export interface VendorScore {
    name: string
    evaluationScore: number
    ratingAndReviews: number
}


const getRandomFeedback = async (): Promise<any> => {
    try {
        const res = await fetch('/api/performanceEvaluation/feedback/random');
        if (!res.ok) {
            throw new Error('Failed to fetch random feedback');
        }
        const data = await res.json();
        if (!data.success) {
            throw new Error('No data received');
        }
        return data;
    } catch (error) {
        console.error('Error fetching random feedback:', error);
        throw error;
    }
}

const CustomTooltip = ({ active, payload, label }: { active: boolean, payload: any, label: string }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black px-4 py-3 rounded-lg">
                <p className="text-white font-medium text-lg font-outfit">{`${label}. ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};


const page = () => {

    const { randomFeedback } = useSelector((state: Store) => state.feedbacks);

    const vendorScores: VendorScore[] = [
        {
            name: 'John Doe',
            evaluationScore: 4.3,
            ratingAndReviews: 3.3
        },
        {
            name: "Flody",
            evaluationScore: 4.3,
            ratingAndReviews: 4.9
        }, {
            name: "Marry Doe",
            evaluationScore: 4.6,
            ratingAndReviews: 4.1
        }
    ]

    const data = [
        {
            name: 'Jan',
            uv: 3.2,
        },
        {
            name: 'Feb',
            uv: 4.1,
        },
        {
            name: 'Mar',
            uv: 2.4,
        },
        {
            name: 'Apr',
            uv: 3.9,
        },
        {
            name: 'May',
            uv: 3.0,
        },
        {
            name: 'Jun',
            uv: 4.9,
        },
        {
            name: 'Jul',
            uv: 4.2,
        },
        {
            name: 'Aug',
            uv: 2.8,
        }, {
            name: 'Sep',
            uv: 4.0,
        },
        {
            name: 'Oct',
            uv: 2.4,
        },
        {
            name: 'Nov',
            uv: 3.8,
        },
        {
            name: 'Dec',
            uv: 3.9,
        },
    ];


    // setInterval(async () => {
    //     const res = await getRandomFeedback();
    //     store.dispatch(changeRandomFeedback({ randomFeedback: res }));
    // }, 10000);

    const toPercent = (decimal: number) => `${decimal}.0`;


    return (
        <div className='mt-4 w-full'>
            <div className='flex justify-between pr-10 gap-x-5'>
                {/* venders */}
                <div className='w-7/12 max-h-52 overflow-scroll'>
                    <table className="min-w-full my-5 rounded-xl">
                        <thead className="text-left bg-[#F5F5F5]">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-normal font-outfit text-xs">Vender Name</th>
                                <th className="whitespace-nowrap px-4 py-2 font-normal font-outfit text-xs">Evaluation Score</th>
                                <th className="whitespace-nowrap px-4 py-2 font-normal font-outfit text-xs">Rating and Reviews</th>
                                <th className="whitespace-nowrap px-4 py-2 font-normal font-outfit text-xs">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#A2A1A81A]/10">
                            {
                                vendorScores.map((vendor, index) => {

                                    return (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap px-4 py-2 font-light text-xs font-lexend text-[#A8A8A8]">{vendor.name}</td>
                                            <td className="whitespace-nowrap px-4 py-2 font-light text-xs font-lexend text-[#A8A8A8]">{vendor.evaluationScore}</td>
                                            <td className="whitespace-nowrap px-4 py-2 font-light text-xs font-lexend text-[#A8A8A8]">{vendor.ratingAndReviews}</td>
                                            <td className='flex gap-x-2 items-center'>

                                                <button>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.3306 9.33423C20.3452 10.4018 20.3452 12.0237 19.3306 13.0913C17.6192 14.8919 14.6801 17.3378 11.3416 17.3378C8.00298 17.3378 5.06386 14.8919 3.35255 13.0913C2.33789 12.0237 2.33789 10.4018 3.35255 9.33423C5.06386 7.53368 8.00298 5.08777 11.3416 5.08777C14.6801 5.08777 17.6192 7.53368 19.3306 9.33423Z" stroke="#16151C" />
                                                        <circle cx="11.3416" cy="11.2128" r="2.625" stroke="#16151C" />
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.60107 19.0878H19.3511M13.0374 5.36052C13.0374 5.36052 13.0374 6.79081 14.4677 8.22111C15.898 9.65141 17.3283 9.65141 17.3283 9.65141M7.38075 16.4523L10.3844 16.0232C10.8176 15.9613 11.2191 15.7606 11.5286 15.4511L18.7586 8.22111C19.5486 7.43118 19.5486 6.15045 18.7586 5.36051L17.3283 3.93022C16.5384 3.14029 15.2577 3.14029 14.4677 3.93022L7.23772 11.1602C6.92824 11.4697 6.72749 11.8712 6.6656 12.3045L6.23651 15.3081C6.14116 15.9756 6.71328 16.5477 7.38075 16.4523Z" stroke="#16151C" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.7358 8.58777L16.1094 16.7312C15.9692 18.5547 14.4486 19.9628 12.6197 19.9628H8.60195C6.77307 19.9628 5.25253 18.5547 5.11226 16.7312L4.48584 8.58777M18.4858 6.83777C16.2127 5.73 13.5103 5.08777 10.6108 5.08777C7.71139 5.08777 5.00902 5.73 2.73584 6.83777M8.86084 5.08777V4.21277C8.86084 3.24627 9.64434 2.46277 10.6108 2.46277C11.5773 2.46277 12.3608 3.24627 12.3608 4.21277V5.08777M8.86084 10.3378V15.5878M12.3608 10.3378V15.5878" stroke="#16151C" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>

                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* feedback */}
                <div className='w-5/12'>
                    <h2 className='font-lexend tracking-wide text-[22px] font-semibold'>Feedback</h2>
                    {
                        randomFeedback ?
                            <div className='border-[#6BA10F] border-[1px] shadowLg rounded-lg mt-1 p-4'>
                                <div className='flex justify-start items-center gap-x-2'>
                                    <img className='size-8 rounded-full' src={randomFeedback.vendorImage} alt="a portrait of vendor who give a feedback" />
                                    <p className='fontLexend font-semibold text-sm capitalize'>{randomFeedback.vendorName}</p>
                                </div>
                                <p className='text-[13.1px] mt-4 text-black/60'>{randomFeedback.content}</p>

                                <hr className='mt-3' />
                                <div className='flex justify-between mt-2 items-center'>
                                    <div className='flex items-center justify-start gap-x-2'>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.02393 2.74231H10.4816C11.2054 2.74231 11.8995 3.02981 12.4112 3.54157C12.923 4.05333 13.2105 4.74743 13.2105 5.47117C13.2105 6.19491 12.923 6.88901 12.4112 7.40077C11.8995 7.91253 11.2054 8.20003 10.4816 8.20003H5.02393V2.74231Z" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.02393 8.20007H11.1639C11.8876 8.20007 12.5817 8.48758 13.0935 8.99934C13.6052 9.5111 13.8927 10.2052 13.8927 10.9289C13.8927 11.6527 13.6052 12.3468 13.0935 12.8585C12.5817 13.3703 11.8876 13.6578 11.1639 13.6578H5.02393V8.20007Z" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0906 2.74231H6.95068" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.68046 13.6578H3.54053" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.3626 2.74231L6.26929 13.6578" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_1696)">
                                                <path d="M6.46789 11.6112H5.10346C4.19879 11.6112 3.33116 11.2518 2.69146 10.6121C2.05176 9.97243 1.69238 9.10481 1.69238 8.20014C1.69238 7.29547 2.05176 6.42784 2.69146 5.78814C3.33116 5.14844 4.19879 4.78906 5.10346 4.78906H6.46789" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.5596 4.78906H11.924C12.8287 4.78906 13.6963 5.14844 14.336 5.78814C14.9757 6.42784 15.3351 7.29547 15.3351 8.20014C15.3351 9.10481 14.9757 9.97243 14.336 10.6121C13.6963 11.2518 12.8287 11.6112 11.924 11.6112H10.5596" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5.78589 8.20007H11.2436" stroke="black" strokeOpacity="0.4" strokeWidth="2.45597" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1696">
                                                    <rect width="16.3732" height="16.3732" fill="white" transform="translate(0.327148 0.0136719)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <button className='bg-[#6BA10F] px-3 py-2 rounded-md font-semibold font-lexend text-white text-[13px]'>Comment</button>
                                </div>
                            </div> :
                            <div className='border-[#6BA10F] flex items-center justify-center w-full min-h-20 border-[1px] shadowLg rounded-lg mt-1 p-4'>
                                <h2 className='font-medium text-[22px] text-[#1A1B2F] font-outfit'>Loading ....</h2>
                            </div>
                    }

                    <button className='font-lexend font-semibold text-[11.46px] capitalize mt-3'>load more</button>
                </div>
            </div>


            <div className='w-full mt-10 h-[500px] border-[0.48px] border-[#000]/50 p-6 rounded-2xl'>

                <div className="flex  items-center gap-x-5 mb-5">
                    <h2 className='font-medium text-[22px] text-[#1A1B2F] font-outfit'>Rating</h2>
                    <select name="vender" id="vender" className='text-[#C9C9C9] text-[22px] capitalize'>
                        <option defaultChecked value="vender1">vender 1</option>
                        <option value="vender2">vender 2</option>
                        <option value="vender3">vender 3</option>
                        <option value="vender4">vender 4</option>
                    </select>
                </div>

                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                    >
                        <XAxis axisLine={false} dataKey="name" tickLine={false} />
                        <YAxis axisLine={false} tickFormatter={toPercent} domain={[1, 5]} tickLine={false} type={"number"} interval={"preserveEnd"} />
                        <Tooltip content={<CustomTooltip active={false} payload={undefined} label={''} />} />
                        <Line type="linear" dot={false} dataKey="uv" isAnimationActive={false} stroke="#6BA10F" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </div>
    )
}

export default page