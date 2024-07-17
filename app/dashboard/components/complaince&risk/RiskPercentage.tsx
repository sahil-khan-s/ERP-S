import React from 'react'

const riskPercentageData = [
  {
    department: 'Legal',
    riskPercentage: '20%',
    riskStatus: 'High',
  },{
    department: 'Custom',
    riskPercentage: '10%',
    riskStatus: 'Medium',
  },{
    department: 'Legal',
    riskPercentage: '5%',
    riskStatus: 'Low',
  }
];

const RiskPercentage = () => {
  return (
    <>
    {
      riskPercentageData.map((item,index)=>(
        <div key={index} className='flex flex-row justify-between'>
                  <div className='p-3'>{item.department}</div><div className='p-3'>{item.riskPercentage}</div>
                  {item.riskStatus !== "Low" ? <div className=' p-3 m-1 border rounded-lg text-[#6BA10F] text-sm bg-[#f0f6e7]'>{item.riskStatus}</div> : <div className='text-sm m-1 rounded-lg bg-[#f6e7e7] text-[#A10F0F] p-3'>{item.riskStatus}</div> }

        </div>
      ))
    }
    </>
  )
}

export default RiskPercentage
