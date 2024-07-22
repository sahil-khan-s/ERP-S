import React from 'react';
//COMPONENTS
import RiskChart from './Chart';
import RiskColorGraph from './ColorGraph';
import RiskComplianceAlert from './RiskComplianceAlert';
import CompliancePercentage from './CompliancePercentage';


function ComplianceAlerts() {
  return (
    <div className="bg-white p-5 pt-4 m-4 mr-1 border border-slate-300 rounded-xl ">
      <RiskColorGraph />
      <div className="text-center mb-4">
        <div className='flex justify-center items-center'>
          <RiskChart count={121} />
        </div>
      </div>
      <div className="text-lg font-bold mb-2">Compliance Alerts</div>
      <RiskComplianceAlert />
      <div>
        <div className='bg-[#F5F5F5] mt-4 flex flex-row rounded-xl justify-between'>
          <div className='p-3'>Department</div><div className='p-3'>Risk Percentage</div><div className='p-3'>Risk Status</div>
        </div>
        <CompliancePercentage />
      </div>
    </div>
  );
}

export default ComplianceAlerts;
