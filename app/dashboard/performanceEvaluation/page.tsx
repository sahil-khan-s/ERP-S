"use client";
import { Store } from '@/store/store';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import AddCommentPopUp from '../components/performanceEvaluation/addCommentPopup';
import Link from 'next/link';
import { ModifiedPerformance } from '@/features/performance.reducer';
import EditPerformancePopUp from "../components/performanceEvaluation/editPerformance"
import { getAllPerformances, getRandomFeedback } from './helpers';
import Loader, { LoaderSize } from '../components/common/Loader';


const CustomTooltip = ({ active, payload, label }: { active: boolean, payload: any, label: string }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black px-4 py-3 rounded-lg">
                <p className="text-white font-medium text-lg font-outfit">{`${label}. ${payload[0].value == -1 ? "Not Available" : payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};


const getAvgRating = (rating: Array<{ name: string, value: number }> | any) => {
    let total = 0;
    let count = 0;

    if (!rating) {
        return 0;
    }

    rating.forEach((rating: { name: string, value: number }) => {
        if (rating.value !== -1) {
            total += rating.value
            count += 1
        }
    })
    if (count === 0) {
        return 0
    }

    return (total / count).toFixed(1)

}


const page = () => {
    const [openCommentPopUp, setOpenCommentPopUp] = useState(false);
    const [openPerformancePopUp, setOpenPerformancePopUp] = useState(false);
    const { randomFeedback } = useSelector((state: Store) => state.feedbacks);
    const { allPerformances } = useSelector((state: Store) => state.performances);
    const [selectedPerformance, setSelectedPerformance] = useState<ModifiedPerformance | undefined>(undefined);
    const [selectedPerformanceForEdit, setSelectedPerformanceForEdit] = useState<ModifiedPerformance | undefined>(undefined);
    const [loading, setLoading] = useState(true);


    const toPercent = (decimal: number) => `${decimal}.0`;


    useEffect(() => {
        getRandomFeedback().then(() => {
            getAllPerformances()
        })
            .finally(() => {
                setLoading(false)
            })
    }, []);


    useEffect(() => {
        if (allPerformances) {
            setSelectedPerformance(allPerformances[0])
        }
    }, [allPerformances])


    return (
        <div className='mt-4 md:w-full'>
            {/* comment popup */}
            {
                (randomFeedback && openCommentPopUp) && <AddCommentPopUp feedback={randomFeedback} setOpenCommentPopUp={setOpenCommentPopUp} />
            }
            <div className='w-full flex flex-col lg:flex-row justify-between lg:pr-1 lg:gap-x-5'>


                {/* edit performance popup */}
                {
                    openPerformancePopUp && <EditPerformancePopUp performance={selectedPerformanceForEdit} onClose={setOpenPerformancePopUp} />
                }


                <div className='w-full lg:w-7/12'>
                    <table className="w-full my-5 rounded-xl">
                        <thead className="text-left max-w-full bg-[#F5F5F5]">
                            <tr>
                                <th className="whitespace-nowrap px-2 md:px-4 py-2 font-normal font-outfit text-xs">Vender Name</th>
                                <th className="whitespace-nowrap px-2 md:px-4 py-2 font-normal font-outfit text-xs">Evaluation Score</th>
                                <th className="whitespace-nowrap px-2 md:px-4 py-2 font-normal text-left font-outfit text-xs">
                                    <span className='md:hidden'>Rating</span>
                                    <span className='hidden md:block'>Rating and Reviews</span>
                                </th>
                                <th className="whitespace-nowrap py-2 font-normal font-outfit text-xs">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#A2A1A81A]/10 max-h-40 lg:max-h-52 overflow-y-scroll">
                            {
                                allPerformances?.map((performance, index) => {

                                    return (
                                        <tr key={index}>
                                            <td className="px-2 md:px-4 py-2 font-light text-xs font-lexend text-[#A8A8A8]">{performance.vendorName}</td>
                                            <td className="whitespace-nowrap px-2 md:px-4 py-2 font-light text-xs font-lexend text-[#A8A8A8]">{performance.evaluationScore}</td>
                                            <td className="whitespace-nowrap px-2 md:px-4 py-2 font-light text-xs font-lexend text-[#A8A8A8]">{getAvgRating(performance.rating)}</td>
                                            <td className='flex gap-x-1 md:gap-x-2 items-center'>

                                                <Link href={"/dashboard/vendor"}>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.3306 9.33423C20.3452 10.4018 20.3452 12.0237 19.3306 13.0913C17.6192 14.8919 14.6801 17.3378 11.3416 17.3378C8.00298 17.3378 5.06386 14.8919 3.35255 13.0913C2.33789 12.0237 2.33789 10.4018 3.35255 9.33423C5.06386 7.53368 8.00298 5.08777 11.3416 5.08777C14.6801 5.08777 17.6192 7.53368 19.3306 9.33423Z" stroke="#16151C" />
                                                        <circle cx="11.3416" cy="11.2128" r="2.625" stroke="#16151C" />
                                                    </svg>
                                                </Link>
                                                <button onClick={() => {
                                                    setSelectedPerformanceForEdit(performance);
                                                    setOpenPerformancePopUp(true)
                                                }}>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.60107 19.0878H19.3511M13.0374 5.36052C13.0374 5.36052 13.0374 6.79081 14.4677 8.22111C15.898 9.65141 17.3283 9.65141 17.3283 9.65141M7.38075 16.4523L10.3844 16.0232C10.8176 15.9613 11.2191 15.7606 11.5286 15.4511L18.7586 8.22111C19.5486 7.43118 19.5486 6.15045 18.7586 5.36051L17.3283 3.93022C16.5384 3.14029 15.2577 3.14029 14.4677 3.93022L7.23772 11.1602C6.92824 11.4697 6.72749 11.8712 6.6656 12.3045L6.23651 15.3081C6.14116 15.9756 6.71328 16.5477 7.38075 16.4523Z" stroke="#16151C" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <Link href={"/dashboard/vendor"}>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.7358 8.58777L16.1094 16.7312C15.9692 18.5547 14.4486 19.9628 12.6197 19.9628H8.60195C6.77307 19.9628 5.25253 18.5547 5.11226 16.7312L4.48584 8.58777M18.4858 6.83777C16.2127 5.73 13.5103 5.08777 10.6108 5.08777C7.71139 5.08777 5.00902 5.73 2.73584 6.83777M8.86084 5.08777V4.21277C8.86084 3.24627 9.64434 2.46277 10.6108 2.46277C11.5773 2.46277 12.3608 3.24627 12.3608 4.21277V5.08777M8.86084 10.3378V15.5878M12.3608 10.3378V15.5878" stroke="#16151C" strokeLinecap="round" />
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>

                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* feedback */}
                <div className='w-full lg:w-5/12'>
                    <h2 className='font-lexend tracking-wide text-[22px] font-semibold'>Feedback</h2>
                    {/* random feedback */}
                    {
                        <div className='border-[#6BA10F] border-[1px] shadowLg rounded-lg mt-1 p-4'>

                            {
                                loading ?
                                    <div className='h-full w-full'>
                                        <Loader size={LoaderSize.M} />
                                    </div> :
                                    <div>
                                        <div className='flex justify-start items-center gap-x-2'>
                                            <img className='size-8 rounded-full' src={randomFeedback?.vendorImage} alt="a portrait of vendor who give a feedback" />
                                            <p className='fontLexend font-semibold text-sm capitalize'>{randomFeedback?.vendorName}</p>
                                        </div>
                                        <p className='text-[13.1px] mt-4 text-black/60'>{randomFeedback?.content}</p>
                                    </div>
                            }
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
                                <button onClick={() => setOpenCommentPopUp(true)} disabled={randomFeedback === undefined} className={` ${randomFeedback?.comment.length == 0 ? "bg-[#6BA10F] text-white" : "bg-transparent text-black border-[1px] border-black rounded-md"} px-3 py-2 rounded-md font-semibold font-lexend text-[13px] disabled:hidden`}>{randomFeedback?.comment.length == 0 ? "Comment" : "Edit comment"}</button>
                            </div>
                        </div>
                    }

                    <Link href={"/dashboard/performanceEvaluation/feedbacks"} className='font-lexend font-semibold text-[11.46px] capitalize mt-3'>load more</Link>
                </div>
            </div>


            <div className='w-full mt-10 h-[300px] md:h-[500px] border-[0.48px] border-[#000]/50 p-2 md:p-6 rounded-2xl'>

                <div className="flex items-center justify-start gap-x-2 md:gap-x-5 mb-3 md:mb-5">
                    <h2 className='font-medium text-[22px] text-[#1A1B2F] font-outfit'>Rating</h2>
                    <select onChange={(e) => setSelectedPerformance(allPerformances && allPerformances[+e.target.value])} name="vender" id="vender" className='text-[#C9C9C9] text-[16px] capitalize'>
                        {
                            allPerformances?.map((performance, index) => {
                                return (
                                    <option value={index} key={index}>{performance.vendorName}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        data={selectedPerformance?.rating}
                    >
                        <XAxis axisLine={false} dataKey="name" tickLine={false} />
                        <YAxis axisLine={false} tickFormatter={toPercent} domain={[0, 5]} tickLine={false} type={"number"} interval={"preserveEnd"} />
                        <Tooltip content={<CustomTooltip active={false} payload={undefined} label={''} />} />
                        <Line type="linear" dot={false} dataKey="value" isAnimationActive={false} stroke="#6BA10F" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </div>
    )
}

export default page