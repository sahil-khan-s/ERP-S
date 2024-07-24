import React, { useState } from 'react'
import { getTodayTasks } from '../../contract/layout'
import { store, Store } from '@/store/store'
import { resetTasks, updateStatus } from '@/features/contract-tasks.reducer'
import { useSelector } from 'react-redux'


export interface Task {
    id: number
    title: string
    time: string
    status: string
}


// function which return a time only in a formate of "HH:MM AM" from a ISOstring date. 
function timeOnly(time: string) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}

const Task = ({ task }: { task: Task }) => {
    const [isChecked, setIsChecked] = useState(task.status === "complete");
    const [loading, setLoading] = useState(false);
    // const []
    const tasks = useSelector((state: Store) => { return state.tasks.allTasks })

    const toggleStatus = async () => {
        const data = {
            id: task.id,
            status: isChecked ? "incomplete" : "complete"
        }

        store.dispatch(updateStatus({ index: tasks.indexOf(task), status: isChecked ? "incomplete" : "complete" }))

        // setLoading(true);

        try {
            const response = await fetch("/api/contracts-section/tasks/toggle-status", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok || !(await response.json()).success) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // await getTodayTasks();
            // setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        loading ? <div>
            <h2>updating...</h2>
        </div> :
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-2'>
                        <input onChange={(e) => toggleStatus()} checked={isChecked} className='size-4 text-black outline-none border-[0.48px] border-gray-500' type="checkbox" name="" id="" />
                        <p className='font-outfit text-[15px] text-[#A2A1A8]'>{task.title}</p>
                    </div>
                    <p className='font-outfit text-[15px] text-[#A2A1A8]'>{timeOnly(task.time)}</p>
                </div>

                <hr className='h-[0.48px] bg-black/20 ml-8 mt-4' />
            </div>
    )
}

export default Task