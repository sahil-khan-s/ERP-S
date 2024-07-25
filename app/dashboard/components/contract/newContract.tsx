"use client";
import { useState } from 'react';
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

interface ContractData {
    title: string
    to: string
    location: string
    status: string
    content: string

}


// function which make a unixTimestamp from a time of formate "Thu Jan 20 2022 00:00:00 GMT+0500 (Pakistan Standard Time)".
function unixTimestamp(time: string) {
    const date = new Date(time)
    return date.getTime() / 1000
}


const NewContract = ({ setOpenContractPopUp }: { setOpenContractPopUp: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });
    const [contractData, setContractData] = useState<ContractData>({
        title: "",
        to: "",
        location: "",
        status: "active",
        content: "",
    })


    const handleSubmit = async () => {
        const dateFrom = unixTimestamp(date?.from + "");
        const dateTo = unixTimestamp(date?.to + "");

        // verify each item in contractData that it must be available
        if (!Object.values(contractData).every((item: string) => item.trim().length > 1) || !dateFrom || !dateTo) {
            alert("Every field must be filled");
            return;
        }

        try {
            console.log({ ...contractData, dateFrom, dateTo, from: "John Doe" });

            // const response = await fetch("/api/contracts-section/contracts/add", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ ...contractData, dateFrom, dateTo, from: "John Doe" })  //TODO: replace the from's hard coated value to a real signed in user name
            // })

        } catch (error) {
            console.log("Error while uploading contract ==>", error);
            alert("Error occurred, check console for details.")
        }
    }



    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 max-w-[450px] w-full rounded-2xl shadow-md">

                <h2 className="text-[20px] font-semibold font-lexend">Add new Contract</h2>

                <hr className='h-[1px] border-[#A2A1A81A] mr-40 mt-2' />


                <div className="flex justify-between gap-x-3 min-w-[359px] mt-4 items-center p-4 border-gray-400 h-14 rounded-2xl border-[0.48px]">
                    <input value={contractData.title} onChange={(e) => setContractData((prev) => { return { ...prev, title: e.target.value } })} className="w-full placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Contract Title" />
                </div>

                <div className='my-5'>
                    <h2 className='font-lexend mb-1 font-semibold text-[#16151C]'>For</h2>
                    <input value={contractData.to} onChange={(e) => setContractData((prev) => { return { ...prev, to: e.target.value } })} className='w-full py-2 px-4 border-gray-400 rounded-lg border-[0.48px] placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none' placeholder='Name of the contractor for which the contract is' type="text" />
                </div>

                <div className='my-5'>
                    <h2 className='font-lexend mb-1 font-semibold text-[#16151C]'>Location</h2>
                    <input value={contractData.location} onChange={(e) => setContractData((prev) => { return { ...prev, location: e.target.value } })} className='w-full py-2 px-4 border-gray-400 rounded-lg border-[0.48px] placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none' placeholder='Location' type="text" />
                </div>

                <h2 className='font-lexend mt-8 mb-3 font-semibold text-[#16151C]'>Status</h2>
                <ul className='flex justify-start w-full flex-wrap gap-3 items-center'>
                    <li className='flex items-center gap-x-2'>
                        <input defaultChecked={contractData.status === "active"} onChange={() => setContractData((prev) => { return { ...prev, status: "active" } })} type="radio" className='size-5' name='status' id='active' />
                        <label htmlFor='active'>Active</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input defaultChecked={contractData.status === "renewal"} onChange={() => setContractData((prev) => { return { ...prev, status: "renewal" } })} className='size-5 checked:outline-none' type="radio" name='status' id='renewal' />
                        <label htmlFor='renewal'>Renewal</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input defaultChecked={contractData.status === "modified"} onChange={() => setContractData((prev) => { return { ...prev, status: "modified" } })} className='size-5 checked:outline-none' type="radio" name='status' id='modified' />
                        <label htmlFor='modified'>Modified</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input defaultChecked={contractData.status === "viewed"} onChange={() => setContractData((prev) => { return { ...prev, status: "viewed" } })} className='size-5 checked:outline-none' type="radio" name='status' id='viewed' />
                        <label htmlFor='viewed'>Viewed</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input defaultChecked={contractData.status === "signed"} onChange={() => setContractData((prev) => { return { ...prev, status: "signed" } })} className='size-5 checked:outline-none' type="radio" name='status' id='signed' />
                        <label htmlFor='signed'>Signed</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input defaultChecked={contractData.status === "notSigned"} onChange={() => setContractData((prev) => { return { ...prev, status: "notSigned" } })} className='size-5 checked:outline-none' type="radio" name='status' id='notSigned' />
                        <label htmlFor='notSigned'>Not Signed</label>
                    </li>
                </ul>

                <div className='flex items-center gap-x-4 mt-8'>
                    <h2 className='font-lexend font-semibold text-[#16151C]'>Date Range</h2>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[300px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
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
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>


                <h2 className='font-lexend mt-6 mb-2 font-semibold text-[#16151C]'>Content</h2>
                <textarea onChange={(e) => setContractData((prev) => { return { ...prev, content: e.target.value } })} rows={3} className='w-full outline-none h-20 font-lexend font-light text-[#16151C] p-1 border-[0.48px] rounded-xl border-gray-400' placeholder='content of the contract'></textarea>


                <div className='mx-auto flex items-center gap-x-2 my-6 justify-center'>
                    <button onClick={() => setOpenContractPopUp(false)} className='border-[1px] w-40 border-[#A2A1A833] rounded-lg py-2'>cancel</button>
                    <button onClick={handleSubmit} className="bg-[#DDFF8F] rounded-lg py-2 w-40">Save</button>
                </div>
            </div>
        </div>
    );
};

export default NewContract;
