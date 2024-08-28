import React from 'react'

const riskPercentageData = [
  {
    department: 'Legal',
    riskPercentage: '20%',
    riskStatus: 'Compliant',
  }, {
    department: 'Custom',
    riskPercentage: '60%',
    riskStatus: 'Non-Compliant',
  }, {
    department: 'Legal',
    riskPercentage: '80%',
    riskStatus: 'Compliant',
  }
];

const CompliancePercentage = () => {
  return (
    <>
      {
        riskPercentageData.map((item, index) => (
          <div key={index} className='border-t border-t-slate-200 flex flex-row justify-between'>
            <div className='p-3 text-xs lg:text-[16px]'>{item.department}</div>
            <div className='text-xs lg:text-[16px] p-3'>{item.riskPercentage}</div>
            {item.riskStatus == "Compliant" ? <div className='px-1 lg:px-2 py-2 lg:py-3 m-1 rounded-lg text-[#6BA10F] text-xs lg:text-sm bg-[#f0f6e7]'>{item.riskStatus}</div> : <div className='px-1 lg:px-2 py-2 lg:py-3 m-1 rounded-lg text-xs lg:text-sm bg-[#f6e7e7] text-[#A10F0F] text-center'>{item.riskStatus}</div>}
          </div>
        ))
      }
    </>
  )
}

export default CompliancePercentage
