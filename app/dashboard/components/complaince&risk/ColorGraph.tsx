"use client"
"use client"

import React from 'react'


const RiskColorGraph = () => {
  return (<div>
    <div className="flex justify-center gap-1  text-sm">
      <div className="bg-[#000003]  px-12 md:px-16 text-white p-1.5 md:p-2 rounded-md"></div>
      <div className="bg-[#A9E338] px-5 md:px-6 text-black p-1.5 md:p-2 rounded-md"></div>
      <div className="bg-[#D5F68A] text-black px-10 md:px-12 rounded-md"></div>
    </div>
    <div className='mt-2 text-slate-500 w-full flex flex-row justify-center gap-12 text-sm'>
      <p>Legal</p>
      <p>Financial</p>
      <p>HR</p>
    </div>
  </div>
  )
}

export default RiskColorGraph
