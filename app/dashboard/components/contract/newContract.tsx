"use client";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import Loader from '../common/Loader';
import { getAllContracts } from '../../contract/helper';

interface ContractData {
    title: string
    to: string
    location: string
    status: string
    content: string
    dateRange: DateRange
}


export function unixTimestamp(time: string) {
    const date = new Date(time)
    return date.getTime() / 1000
}


const NewContract = ({ setOpenContractPopUp }: { setOpenContractPopUp: (open: boolean) => void }) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<ContractData>({
        defaultValues: {
            title: "",
            to: "",
            location: "",
            status: "active",
            content: "",
            dateRange: {
                from: new Date(2022, 0, 20),
                to: addDays(new Date(2022, 0, 20), 20),
            }
        }
    });

    const dateRange = watch('dateRange');
    const [buttonLoading, setButtonLoading] = useState(false)

    const onSubmit = async (data: ContractData) => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const dateFrom = unixTimestamp(data.dateRange.from?.toString() || '');
            const dateTo = unixTimestamp(data.dateRange.to?.toString() || '');

            const response = await fetch("/api/contracts-section/contracts/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    dateFrom,
                    dateTo,
                    from: "John Doe" //TODO: replace the from's hard coated value to a real signed in user name
                })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            if (!result.success) {
                throw new Error("Failed to create new contract");
            }
            setOpenContractPopUp(false);

            alert("Contract added successfully");

            getAllContracts();

        } catch (error) {
            console.error("Error while uploading contract ==>", error);
            alert("Error occurred, check console for details.")
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#5a5a5a46]">
            <div className='p-0 md:pl-40'>
                <div className="bg-white p-4 w-full max-w-max rounded-2xl shadow-md">
                    <h2 className="text-[20px] font-semibold font-lexend">Add new Contract</h2>
                    <hr className='h-[1px] border-[#A2A1A81A] mr-40 mt-2' />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col md:flex-row gap-x-3 justify-between items-center'>
                            <div className='w-80'>
                                <h2 className='font-lexend mb-1 font-semibold text-[#16151C]'>Title</h2>
                                <div className="flex justify-between gap-x-3 min-w-auto  md:mt-4 items-center p-4 border-gray-400 h-14 rounded-2xl border-[0.48px]">

                                    <input
                                        {...register("title", { required: "Contract title is required" })}
                                        className="w-full  placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none"
                                        type="text"
                                        placeholder="Contract Title"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                                </div>

                                <div className='my-5'>
                                    <h2 className='font-lexend mb-1 font-semibold text-[#16151C]'>For</h2>
                                    <input
                                        {...register("to", { required: "Contractor name is required" })}
                                        className=' w-full  py-2 px-4 border-gray-400 rounded-lg border-[0.48px] placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none'
                                        placeholder='Name of the contractor for which the contract is'
                                        type="text"
                                    />
                                    {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>}
                                </div>

                                <div className='my-2 md:my-5'>
                                    <h2 className='font-lexend mb-1 font-semibold text-[#16151C]'>Location</h2>
                                    <input
                                        {...register("location", { required: "Location is required" })}
                                        className=' w-full  py-2 px-4 border-gray-400 rounded-lg border-[0.48px] placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none'
                                        placeholder='Location'
                                        type="text"
                                    />
                                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                                </div>
                            </div>
                            <div className='w-80'>

                                <h2 className='font-lexend md:mt-8 mb-3 font-semibold text-[#16151C]'>Status</h2>
                                <ul className='flex justify-start w-full flex-wrap gap-3 items-center'>
                                    {['active', 'renewal', 'modified', 'viewed', 'signed', 'notSigned'].map((status) => (
                                        <li key={status} className='flex items-center gap-x-2'>
                                            <input
                                                {...register("status")}
                                                type="radio"
                                                className='size-5 '
                                                id={status}
                                                value={status}
                                            />
                                            <label htmlFor={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</label>
                                        </li>
                                    ))}
                                </ul>

                                <div className='flex items-center gap-x-4 mt-8'>
                                    <h2 className='font-lexend font-semibold text-[#16151C]'>Date Range</h2>
                                    <Controller
                                        name="dateRange"
                                        control={control}
                                        rules={{ required: "Date range is required" }}
                                        render={({ field }) => (
                                            <Popover className->
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        id="date"
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[300px] justify-start text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value?.from ? (
                                                            field.value.to ? (
                                                                <>
                                                                    {format(field.value.from, "LLL dd, y")} -{" "}
                                                                    {format(field.value.to, "LLL dd, y")}
                                                                </>
                                                            ) : (
                                                                format(field.value.from, "LLL dd, y")
                                                            )
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        initialFocus
                                                        mode="range"
                                                        defaultMonth={field.value?.from}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        numberOfMonths={2}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        )}
                                    />
                                </div>
                                {errors.dateRange && <p className="text-red-500 text-sm mt-1">{errors.dateRange.message}</p>}

                                <h2 className='font-lexend mt-6 mb-2 font-semibold text-[#16151C]'>Content</h2>
                                <textarea
                                    {...register("content", { required: "Content is required" })}
                                    rows={3}
                                    className='w-full outline-none h-20 font-lexend font-light text-[#16151C] p-1 border-[0.48px] rounded-xl border-gray-400'
                                    placeholder='content of the contract'
                                ></textarea>
                                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
                            </div>
                        </div>
                        <div className='mx-auto flex items-center gap-x-2 mt-3 md:my-6 justify-center'>
                            <button
                                type="button"
                                onClick={() => setOpenContractPopUp(false)}
                                className='border-[1px] w-40 border-[#A2A1A833] rounded-lg py-2'
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#DDFF8F] rounded-lg py-2 w-40"
                            >
                                {
                                    loading ?
                                        <Loader size={4} /> :
                                        <p>Save</p>
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default NewContract;