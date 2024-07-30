"use client";
import React, { useEffect, useState } from 'react';
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
import { Task } from '@prisma/client';
import { timeOnly } from './task';
import { store } from '@/store/store';
import { toggleTaskEditing } from '@/features/contract-tasks.reducer';
import { getTodayTasks } from '../../contract/layout';


// function which makes a unixTimestamp from 24H format time "00:00" and  ISO date in a format of "Sat Jul 13 2024 00:00:00 GMT+0500 (Pakistan Standard Time)". 
function makeUnixTimestamp(time: string, date: Date | undefined) {
    if (!date) {
        return undefined;
    }
    const [hours, minutes] = time.split(':');
    const dateObj = new Date(date);
    dateObj.setHours(Number(hours));
    dateObj.setMinutes(Number(minutes));
    return dateObj.getTime() / 1000;
}



// function which make a 24H time from  12:00 AM time formate.
export function time24H(time: string) {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    return date.toString();
}


const EditTaskPopup = ({ task }: { task: Task }) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date(task.time))
    const [time, setTime] = useState(time24H(timeOnly(task.time)));
    const [title, setTitle] = useState(task.title);



    const handleForm = async () => {
        if (!title || !makeUnixTimestamp(time, date)) {
            return;
        }

        const data = {
            title,
            time: makeUnixTimestamp(time, date),
            status: task.status,
            id: task.id
        };

        try {
            const response = await fetch("/api/contracts-section/tasks/edit", {
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
                throw new Error("Failed to edit task");
            }
            alert("Task edited successfully");

            cancelEdit();

            getTodayTasks();
        } catch (error) {
            console.error("Failed to edit task", error);
            alert("Failed to edit task. See console for details");
        } finally {
        }
    }


    const cancelEdit = () => {
        store.dispatch(toggleTaskEditing());
    }


    console.log(date, time, title);


    return (

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 max-w-[450px] w-full rounded-2xl shadow-md">

                <h2 className="text-[20px] font-semibold font-lexend">Edit the Task</h2>

                <hr className='h-[1px] border-[#A2A1A81A] mr-40 mt-2' />


                <div className="flex justify-between gap-x-3 min-w-[359px] my-5 items-center p-4 border-gray-400 h-14 rounded-2xl border-[0.48px]">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Task title" />
                </div>


                <div className='flex justify-between items-center mt-5 gap-x-2'>

                    <div>
                        <input
                            className="w-full placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none"
                            type="text"
                            placeholder="Task title"
                        />
                    </div>

                    {/* // Time and date picker */}
                    <div className="flex justify-between items-center mt-5 gap-x-2">
                        <div className="relative">
                            <input
                                type="time"
                                id="time"
                                className="mx-2 leading-none border-gray-200 border-[1px] text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white"
                                min="09:00"
                                max="18:00"
                                value={time}
                                required
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
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
                </div>

                <div className='mx-auto flex items-center gap-x-2 my-6 justify-center'>
                    <button onClick={cancelEdit} className='border-[1px] w-40 border-[#A2A1A833] rounded-lg py-2'>cancel</button>
                    <button onClick={handleForm} className="bg-[#DDFF8F] rounded-lg py-2 w-40">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskPopup;
