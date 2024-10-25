"use client";
import React, { useState } from 'react';
import { ModifiedFeedback } from '@/features/feedback.reducer.ts';
import { getRandomFeedback } from '../../performanceEvaluation/helpers';
export default function AddCommentPopUp({ setOpenCommentPopUp, feedback }: { setOpenCommentPopUp: React.Dispatch<React.SetStateAction<boolean>> | ((feedback?: ModifiedFeedback | boolean | undefined) => void), feedback: ModifiedFeedback }) {
    const [comment, setComment] = useState(feedback.comment);

    const handleForm = async () => {
        if (!comment) {
            return;
        }

        const data = {
            comment,
            feedbackId: feedback.id
        };
        try {
            const response = await fetch("/api/performanceEvaluation/feedback/addComment", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });


            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (!(await response.json()).success) {
                throw new Error("Failed to add comment");
            }

            alert("comment added successfully");

            getRandomFeedback();
        } catch (error) {
            console.error("Failed to add comment to feedback:", error);
            alert("Failed to create new task. See console for details");
        } finally {

            setOpenCommentPopUp(false);
        }
    }


    return (

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 w-8/12 ml-20 md:ml-0 max-w-[450px] rounded-2xl shadow-md">

                <h2 className="text-[20px] font-semibold font-lexend">Add Comment</h2>

                <hr className='h-[1px] border-[#A2A1A81A] mr-40 mt-2' />


                <div className="flex justify-between gap-x-3 w-full my-5 items-center p-4 border-gray-400 h-14 rounded-2xl border-[0.48px]">
                    <input value={comment} onChange={(e) => setComment(e.target.value)} className="w-full placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Task title" />
                </div>




                <div className='mx-auto flex items-center gap-x-2 my-6 justify-center'>
                    <button onClick={() => setOpenCommentPopUp(false)} className='border-[1px] w-40 border-[#A2A1A833] rounded-lg py-2'>cancel</button>
                    <button onClick={handleForm} className="bg-[#DDFF8F] rounded-lg py-2 w-40">Add</button>
                </div>
            </div>
        </div>
    );
};

