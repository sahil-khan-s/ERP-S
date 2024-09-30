"use client";
import { ModifiedPerformance } from '@/features/performance.reducer';
import React, { useState, useEffect } from 'react';
import { getAllPerformances } from '../../performanceEvaluation/page';

const AppPerformancePopup = ({
    onClose,
    performance
}: {
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    performance: ModifiedPerformance | undefined
}): JSX.Element | null => {


    const [evaluationScore, setEvaluationScore] = React.useState(performance?.evaluationScore);
    const [ratings, setRatings] = React.useState<{ name: string, value: number }[] | undefined>(performance?.rating);
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    const handleEvaluationScoreChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setEvaluationScore(Number(e.target.value));
    };

    const handleRatingChange = (
        month: string,
        value: string
    ): void => {

        const parsedValue = Number(value);

        if (isNaN(parsedValue)) {
            return;
        }



        // modify the rating value for the month,.


        setRatings((prevRatings) => {
            return prevRatings?.map((rating) => {
                if (rating.name === month) {
                    return { name: month, value: parsedValue };
                }
                return rating;
            });
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!performance?.vendorId || !ratings) {
            console.error("Error: selectedVendor or ratings is null or undefined");
            return;
        }

        // filter only that rating who are not zero
        const filteredRatings = ratings.filter(rating => {
            if (rating.value === -1) {
                return undefined;
            }
            return rating;
        });

        // object of only those ratings whose value is not -1.
        const ratingObject = filteredRatings.reduce((acc: any, { name, value }) => {
            acc[name] = value;
            return acc;
        }, {});

        try {

            const res = await fetch("/api/performanceEvaluation/performance/rating/update", {
                method: "PATCH",
                body: JSON.stringify({
                    vendorId: performance.vendorId,
                    evaluationScore,
                    performanceId: performance.id,
                    yearlyRating: ratingObject
                })
            });

            if (!res.ok) {
                alert("Something went wrong while updating performance. Please try again later.")
                onClose(false);
                return;
            }

            if (!(await res.json()).success) {
                alert("Something went wrong while updating performance. Please try again later.")
                onClose(false);
                return;
            }

            getAllPerformances();

            alert("Performance added successfully");
            onClose(false); // Close the popup after submission
        } catch (error) {
            console.error("Error while adding performance:", error);
            alert("Error occurred, check console for details.");
        }
    };




    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 w-8/12 ml-20 md:ml-0 max-w-[450px] rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 font-outfit">Edit Vendor Performance</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label
                            htmlFor="evaluationScore"
                            className="block text-sm font-medium mb-2"
                        >
                            Evaluation Score
                        </label>
                        <input
                            type="number"
                            id="evaluationScore"
                            step={0.1}
                            max={5.0}
                            value={evaluationScore}
                            onChange={(e) => handleEvaluationScoreChange(e)}
                            className="w-full items-center p-2 border-gray-400 h-12 rounded-xl border-[0.48px] font-outfit text-sm text-black font-light outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 font-outfit">
                            Monthly Ratings
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {months.map((month: string, index: number) => (
                                <input
                                    key={index}
                                    type="number"
                                    step={0.1}
                                    max={5.0}
                                    value={
                                        ratings?.find((rating) => rating.name === month)?.value !== -1 ? ratings?.find((rating) => rating.name === month)?.value : ""
                                    }
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        handleRatingChange(month, e.target.value);
                                    }}
                                    className="p-2 placeholder:font-outfit font-outfit text-sm rounded-lg border-gray-400 h-12 border-[0.48px] outline-none"
                                    placeholder={`${month}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='mx-auto flex items-center gap-x-3 my-6 justify-center'>
                        <button onClick={() => onClose(false)} className='border-[1px] w-1/2 border-[#A2A1A833] rounded-lg py-2'>cancel</button>
                        <button className="bg-[#DDFF8F] rounded-lg py-2 w-1/2">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppPerformancePopup;
