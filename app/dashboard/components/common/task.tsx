import React from 'react'


export interface Task {
    content: string
    time: string
    completed: boolean
}
const Task = (task: Task) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-x-2'>
                    <input checked={task.completed} className='size-4 outline-none border-[0.48px] border-gray-500' type="checkbox" name="" id="" />
                    <p className='font-outfit text-[15px] text-[#A2A1A8]'>{task.content}</p>
                </div>
                <p className='font-outfit text-[15px] text-[#A2A1A8]'>{task.time}</p>
            </div>

            <hr className='h-[0.48px] bg-black/20 ml-8 mt-4' />
        </div>
    )
}

export default Task