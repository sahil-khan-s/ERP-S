"use client";
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
const NewTaskPopUp = ({ setOpenTaskPopUp }: { setOpenTaskPopUp: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [date, setDate] = React.useState<Date>()



    // TODO: update the prisma task schema and separate the time and date. also make their types as string.
    // TODO: make a route which returns only today's tasks.



    //! fix this.
    // const [time, setTime] = useState();  
    const setTime = (time: number | null) => {
        console.log(time);
    }




    return (

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 max-w-[450px] w-full rounded-2xl shadow-md">

                <h2 className="text-[20px] font-semibold font-lexend">Add new Task</h2>

                <hr className='h-[1px] border-[#A2A1A81A] mr-40 mt-2' />


                <div className="flex justify-between gap-x-3 min-w-[359px] my-5 items-center p-4 border-gray-400 h-14 rounded-2xl border-[0.48px]">
                    <input className="w-full placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Task title" />
                </div>


                <div className='flex justify-between items-center mt-5 gap-x-2'>
                    <div className="relative">
                        <input onTimeUpdate={(e) => setTime(e.timeStamp)} type="time" id="time" className="mx-2 leading-none border-gray-200 border-[1px] text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white " min="09:00" max="18:00" value="00:00" required />
                    </div>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[250px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>



                <div className='mx-auto flex items-center gap-x-2 my-6 justify-center'>
                    <button onClick={() => setOpenTaskPopUp(false)} className='border-[1px] w-40 border-[#A2A1A833] rounded-lg py-2'>cancel</button>
                    <button className="bg-[#DDFF8F] rounded-lg py-2 w-40">Save</button>
                </div>
            </div>
        </div>
    );
};

export default NewTaskPopUp;
