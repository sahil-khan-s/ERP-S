import React, { useState } from 'react'

import { store, Store } from '@/store/store'
import { deleteTask, resetTasks, setTaskToEdit, updateStatus } from '@/features/contract-tasks.reducer'
import { useSelector } from 'react-redux'

import deleteIcon from "@/public/delete.png";
import editIcon from "@/public/edit.png";


import { Task as TaskInterface } from '@prisma/client'
import Image from 'next/image'
import { getTodayTasks } from '../../contract/helper';


// function which return a time only in a formate of "HH:MM AM" from a ISOstring date. 
export function timeOnly(time: Date) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}

const Task = ({ task }: { task: TaskInterface }) => {
    const isChecked = task.status === "complete";
    const [loading, setLoading] = useState(false);

    const { allTasks, isEditingEnabled } = useSelector((state: Store) => { return state.tasks })


    const setTaskForEdit = () => {
        store.dispatch(setTaskToEdit({ taskToEdit: task }));
    }


    const deleteTheTask = async () => {
        const res = confirm("are you sure to delete this contract");

        if (!res) {
            return;
        }
        try {

            const response = await fetch("/api/contracts-section/tasks-route/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: task.id })
            })


            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (!(await response.json()).success) {
                alert("Failed to delete contract");
                throw new Error("Failed to delete contract");
            }

            alert("Contract Deleted successful");


            store.dispatch(deleteTask({ taskId: task.id }));

            getTodayTasks();

        } catch (error) {
            console.log("Error while deleting contract ==>", error);
            alert("Error occurred, check console for details.")
        }
    }


    const toggleStatus = async () => {
        const data = {
            id: task.id,
            status: isChecked ? "incomplete" : "complete"
        }

        store.dispatch(updateStatus({ index: allTasks?.indexOf(task), status: isChecked ? "incomplete" : "complete" }))

        // setLoading(true);

        try {
            const response = await fetch("/api/contracts-section/tasks-route/toggle-status", {
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
                    {
                        !isEditingEnabled ?
                            <p className='font-outfit text-[15px] text-[#A2A1A8]'>{timeOnly(task.time)}</p> :
                            <div className='flex justify-end items-center'>
                                <button className='px-2' onClick={setTaskForEdit} >
                                    {/* <Image  className='size-4' src={editIcon} ></Image>
                                     */}
                                    <Image height={16} width={16} src={editIcon} alt='edit icon' />
                                </button>
                                <button className='px-2' onClick={deleteTheTask} >
                                    <Image height={16} width={16} src={deleteIcon} alt='delete icon' />
                                </button>
                            </div>
                    }
                </div>

                <hr className='h-[0.48px] bg-black/20 ml-8 mt-4' />
            </div>
    )
}

export default Task