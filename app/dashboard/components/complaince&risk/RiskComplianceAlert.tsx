import React from 'react'


const complianceData = [
  {
    alertType: 'Build-in',
    description: 'Lorem ipsum dolor',
    date: '04-11-2024',
    status: 'Open',
  },
  {
    alertType: 'Custom',
    description: 'Lorem ipsum dolor',
    date: '04-11-2024',
    status: 'Closed',
  },
];

const RiskComplianceAlert = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      {complianceData.map((compliance, index) => (
        <div className='border p-4 rounded-xl border-slate-300 flex flex-col gap-2'>
          <div className='flex flex-row'><div className='font-semibold'>Alert Type:</div><p className='text-slate-400 px-1'>{compliance.alertType}</p></div>
          <div className='flex flex-row'><div className='font-semibold'>Description:</div><p className='text-slate-400 px-1'>{compliance.description}</p></div>
          <div className='flex flex-row'><div className='font-semibold'>Date:</div><p className='text-slate-400 px-1'>{compliance.date}</p></div>
          <div className='flex flex-row'><div className='font-semibold'>Status:</div><p className='text-slate-400 px-1'>{compliance.status}</p></div>
        </div>
      ))}
    </div>
  )
}

export default RiskComplianceAlert
