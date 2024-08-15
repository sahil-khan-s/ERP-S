"use client";
import React, { useState, useEffect } from 'react';

const AppPerformancePopup = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element | null => {
    const defaultVendor = { id: "1", name: "Vendor A" };
    const defaultVendors = [defaultVendor];
    const defaultRatings = Array(12).fill("");

    const [selectedVendor, setSelectedVendor] = React.useState(defaultVendor.id);
    const [evaluationScore, setEvaluationScore] = React.useState("");
    const [ratings, setRatings] = React.useState<string[]>(defaultRatings);

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ): void => {
        e.preventDefault();
        const formData = {
            vendorId: selectedVendor,
            evaluationScore: Number(evaluationScore),
            ratings: ratings.map(Number),
        };
        console.log("Form Data:", formData);

        onClose(false);
    };

    if (!open) return null;

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
                            onChange={(e) => setEvaluationScore(e.target.value)}
                            className="w-full items-center p-2 border-gray-400 h-12 rounded-xl border-[0.48px] font-outfit text-sm text-black font-light outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 font-outfit">
                            Monthly Ratings
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {ratings.map((_, index) => (
                                <input
                                    key={index}
                                    type="number"
                                    step={0.1}
                                    max={5.0}
                                    value={ratings[index]}
                                    onChange={(e) =>
                                        setRatings((prevRatings) =>
                                            prevRatings.map((rating, i) =>
                                                i === index ? e.target.value : rating
                                            )
                                        )
                                    }
                                    className="p-2 placeholder:font-outfit font-outfit text-sm rounded-lg border-gray-400 h-12 border-[0.48px] outline-none"
                                    placeholder={`Month ${index + 1}`}
                                    required
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
