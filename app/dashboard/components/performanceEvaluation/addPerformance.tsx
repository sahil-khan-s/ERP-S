"use client";
import React, { useState, useEffect } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { store } from '@/store/store';

import { getAllPerformances } from '../../performanceEvaluation/helpers';

const fetchVendors = async () => {
    try {
        const res = await fetch("/api/vendor");
        const data = await res.json();
        return data.vendors;
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while getting Vendors");
    }
}



const AppPerformancePopup = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element | null => {
    const [vendors, setVendors] = useState<{ id: number; name: string }[]>([]);

    const [selectedVendor, setSelectedVendor] = useState<string | undefined>(undefined);
    const [evaluationScore, setEvaluationScore] = useState<string>("");
    const [ratings, setRatings] = useState({
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0
    });

    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    // Fetch vendors
    useEffect(() => {


        (async (): Promise<void> => {
            try {
                const vendors: { id: number; name: string }[] = await fetchVendors();

                const allPerformances = store.getState().performances.allPerformances ?? [];

                const filteredVendors = vendors.filter(vendor => {
                    let isPerformanceAvailable: boolean = false;

                    for (let item of allPerformances) {
                        if (item.vendorId == vendor.id) {
                            isPerformanceAvailable = true;
                            break;
                        }
                    }
                    return !isPerformanceAvailable;
                })

                setVendors(filteredVendors);
            } catch (error) {
                console.error("Error fetching vendors:", error);
            }
        })()

    }, []);


    const handleEvaluationScoreChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setEvaluationScore(e.target.value);
    };

    const handleRatingChange = (
        month: string,
        value: string
    ): void => {

        const parsedValue = Number(value);
        if (isNaN(parsedValue)) {
            return;
        }

        setRatings((prevRatings) => ({
            ...prevRatings,
            [month]: parsedValue,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedVendor) {
            return;
        }

        const vendorId = selectedVendor.split(" ")[0];

        // filter only that rating who are not zero
        const filteredRatings = Object.entries(ratings)
            .filter(([_, value]) => value !== 0)
            .reduce((acc: any, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});


        const res = await fetch("/api/performanceEvaluation/performance/add", {
            method: "POST",
            body: JSON.stringify({
                evaluationScore: Number(evaluationScore),
                vendorId: Number(vendorId),
                yearlyRating: filteredRatings
            })
        });


        if (!res.ok) {
            alert("Something went wrong while adding performance. Please try again later.")
            onClose(false);
            return;
        }

        if (!(await res.json()).success) {

            alert("Something went wrong while adding performance. Please try again later.")
            onClose(false);
            return;
        }

        getAllPerformances();
        alert("Performance added successfully");
        onClose(false); // Close the popup after submission
    };



    if (!open) return null; // Don't render the modal if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 w-8/12 ml-20 md:ml-0 max-w-[450px] rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 font-outfit">Add Vendor Performance</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        {/* select vendor */}
                        <Select onValueChange={(e) => setSelectedVendor(e)}>
                            <SelectTrigger className="w-full items-center p-2 border-gray-400 h-12 rounded-xl border-[0.48px] font-outfit text-sm text-black font-light outline-none">
                                <SelectValue placeholder="Select a Vendor" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {vendors.map((vendor, index) => (
                                        <SelectItem key={index} value={vendor.id + " " + vendor.name}>
                                            {vendor.id + " " + vendor.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

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
                            min={0}
                            value={evaluationScore}
                            onChange={handleEvaluationScoreChange}
                            className="w-full items-center p-2 border-gray-400 h-12 rounded-xl border-[0.48px] font-outfit text-sm text-black font-light outline-none"
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
                                        ratings[month as keyof typeof ratings] === 0 ? "" : ratings[month as keyof typeof ratings]
                                    }
                                    onChange={(e) => {
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
