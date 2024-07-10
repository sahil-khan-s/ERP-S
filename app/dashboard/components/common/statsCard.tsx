import React from 'react'

const StatsCard = () => {
    return (
        <div className="flex flex-col gap-y-4 justify-between h-full w-[177px] aspect-square p-5 rounded-2xl border-gray-500 border-[0.48px]">
            <div className="h-10 flex justify-end items-center">
                <div className="flex justify-center items-center h-full aspect-square border-gray-500 border-[0.48px] rounded-lg">
                    <img className="size-5" src="data:image/png;base64,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" alt="" />
                </div>
            </div>
            <div className="h-16">
                <p className="text-xs font-light capitalize">Active</p>
                <h2 className="text-3xl font-medium text-[#16151C]">{Math.floor(Math.random() * 500)}</h2>
            </div>
        </div>
    )
}

export default StatsCard