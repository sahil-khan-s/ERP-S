"use client"


import React from 'react'


const riskPercentageData = [
  {
    department: 'Legal',
    riskPercentage: '20%',
    riskStatus: 'High',
  }, {
    department: 'Custom',
    riskPercentage: '10%',
    riskStatus: 'Medium',
  }, {
    department: 'Legal',
    riskPercentage: '5%',
    riskStatus: 'Low',
  }
];

const RiskPercentage = () => {
  return (
    <>
      {
        riskPercentageData.map((item, index) => (
          <div key={index} className='border border-x-0 border-b-0 border-t-slate-200 flex flex-row justify-between'>
            <div className='p-3 text-xs lg:text-[16px]'>{item.department}</div>
            <div className='text-xs lg:text-[16px] p-3'>{item.riskPercentage}</div>
            {item.riskStatus !== "Low" ? <div className='px-1 py-2 lg:p-3 m-1 border rounded-lg text-[#6BA10F] text-xs bg-[#f0f6e7]'>{item.riskStatus}</div> : <div className='text-xs m-1 rounded-lg bg-[#f6e7e7] text-[#A10F0F] p-2 lg:p-3'>{item.riskStatus}</div>}
          </div>
        ))
      }
    </>
  )
}

export default RiskPercentage
