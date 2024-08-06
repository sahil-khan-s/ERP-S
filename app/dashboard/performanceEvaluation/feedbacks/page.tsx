"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { store, Store } from '@/store/store';
import { addFeedbacks, ModifiedFeedback } from '@/features/feedback.reducer.ts';
import AddCommentPopUp from '../../components/performanceEvaluation/addCommentPopup';


export const getAllFeedbacks = async () => {
    try {
        const res = await fetch('/api/performanceEvaluation/feedback/getAll');
        if (!res.ok) {
            throw new Error('Failed to fetch random feedback');
        }
        const data = await res.json();
        if (!data.success) {
            throw new Error('No data received');
        }
        store.dispatch(addFeedbacks({ feedbacks: data.feedbacks }))
        return data;
    } catch (error) {
        console.error('Error fetching random feedback:', error);
        throw error;
    }
}


export default function Feedbacks() {
    const { allFeedbacks } = useSelector((state: Store) => state.feedbacks);
    // const 
    const [openCommentPopUp, setOpenCommentPopUp] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState<ModifiedFeedback | undefined>(undefined);
    useEffect(() => {
        if (!allFeedbacks) {
            getAllFeedbacks()
        }
    }, [allFeedbacks]);


    const toggleCommentPopUp = (feedback: ModifiedFeedback | boolean | undefined = undefined) => {

        if (feedback && typeof feedback == "object") {
            setSelectedFeedback(feedback);
            setOpenCommentPopUp(true);
        } else {
            setOpenCommentPopUp(false);
            setSelectedFeedback(undefined);
        }
    }


    return (
        <div className="overflow-x-auto mt-8">
            {
                (selectedFeedback && openCommentPopUp) && <AddCommentPopUp feedback={selectedFeedback} setOpenCommentPopUp={toggleCommentPopUp} />
            }
            <h2 className='font-lexend tracking-wide text-[28px] font-semibold'>Vendor Feedbacks</h2>
            <table className="w-full table-auto rounded overflow-hidden mt-6">
                <thead className="bg-[#F5F5F5]">
                    <tr>
                        <th className="px-4 py-5 w-2/12 text-left font-lexend font-semibold whitespace-nowrap">Vendor Name</th>
                        <th className="px-4 py-5 w-1/12 text-left font-lexend font-semibold">Id</th>
                        <th className="px-4 py-5 w-1/2 text-left font-lexend font-semibold flex-1">Details</th>
                        <th className="px-4 py-5 w-2/12 text-center font-lexend font-semibold whitespace-nowrap">Action</th>
                    </tr>
                </thead>

                <tbody className="border-b border-slate-100">
                    {
                        allFeedbacks?.length === 0 ? (
                            <div className="h-52 w-[70vh] absolute left-[40%] items-center">
                                <p className="text-center m-24 text-xl font-semibold">
                                    The vendor list is currently empty.
                                </p>
                            </div>
                        ) : (
                            allFeedbacks?.map((feedback, index) => (

                                <tr className="" key={index}>
                                    <td className="p-4 text-left flex items-center gap-2 whitespace-nowrap">
                                        <Image
                                            src={feedback.vendorImage}
                                            width={45}
                                            height={45}
                                            alt=""
                                            className="rounded-full text-3xl mx-2"
                                        />
                                        <p className='font-outfit'>{feedback.vendorName}</p>
                                    </td>
                                    <td className="p-4 font-outfit text-left whitespace-nowrap">{feedback?.id}</td>
                                    <td className="p-4 font-outfit text-left flex-1">{feedback?.content}</td>
                                    <td className="p-4 text-center whitespace-nowrap">
                                        <button
                                            onClick={() => toggleCommentPopUp(feedback)}
                                            className={` ${feedback.comment.length == 0 ? "bg-[#6BA10F] text-white" : "bg-transparent text-black border-[1px] border-black rounded-md"} px-3 py-2 rounded-md font-semibold font-lexend text-[13px] disabled:bg-[#4a6d0f]`}
                                        >
                                            {feedback.comment.length == 0 ? "Comment" : "Edit comment"}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

