import React from 'react';
import Nav from '../../components/common/nav';
import RiskTabs from '../../components/complaince&risk/RiskTabs';
import ComplianceChart from '../../components/complaince&risk/Chart';
import RiskColorGraph from '../../components/complaince&risk/ColorGraph';
import RiskSummary from '../../components/complaince&risk/RiskSummary';

const RiskDashboard = () => {
  return (
    <div className='bg-white'>
<Nav/>
    <div className="flex flex-col md:flex-row gap-4 p-4">
    <RiskTabs/>

      <div className="w-full">
        <div>
         <RiskSummary/>
        </div>
        <div>
        <div className='flex justify-center items-center'>
        <ComplianceChart count={327}/>
        </div>
        <RiskColorGraph/>
        </div>
      </div>
    </div>
            </div>
  );
}

export default RiskDashboard;
