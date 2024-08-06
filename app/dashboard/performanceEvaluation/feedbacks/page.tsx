"use client";
import React, { useEffect, useState } from 'react'
import moment from 'moment';
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";
import Image from 'next/image';
// SHADCN.UI
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { TiBriefcase } from 'react-icons/ti';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSelector } from 'react-redux';
import { store, Store } from '@/store/store';
import { addFeedbacks } from '@/features/feedback.reducer.ts';


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

    useEffect(() => {
        if (!allFeedbacks) {
            getAllFeedbacks()
        }
    }, [allFeedbacks]);

    return (
        <div className="overflow-x-auto mt-8">

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
                                        <button className={`bg-[#6BA10F] px-3 py-2 rounded-md font-semibold font-lexend text-white text-[13px] disabled:bg-[#4a6d0f]`}>Comment</button>
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

