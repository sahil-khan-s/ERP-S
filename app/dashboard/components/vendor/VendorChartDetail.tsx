import React from 'react'
import VendorPageChart from './NewVendorChart'

const cont = 121 // ..........................

const VendorChartDetail = () => {
  return (
    <div className="p-6 border border-slate-300 rounded-xl mt-3 flex flex-col justify-center h-full">
      <div className=" text-lg font-semibold">Total Sum Calculation</div>
      <div className="flex items-center justify-center">
        <VendorPageChart count={cont} />
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-sm font-semibold flex flex-row">
        <div className='h-3 w-3 m-1 mx-2 rounded-full bg-[#000]'>
        </div>
          <p>Contract Value</p>
          </div>
        <div className="text-sm font-bold">42</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-sm font-semibold flex flex-row">
          <div className='h-3 w-3 m-1 mx-2 rounded-full bg-[#DDFF8F]'>
          </div>
          <p>Resources</p>
          </div>
        <div className="text-sm font-bold">79</div>
      </div>
    </div>
  )
}

export default VendorChartDetail
