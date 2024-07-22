import React from 'react';
//COMPONENTS
import RiskAssessment from '../components/complaince&risk/RiskAssessment';
import ComplianceAlerts from '../components/complaince&risk/ComplianceAlerts';
import VendorSearchBar from '../components/common/SearchBar';
import Nav from '../components/common/nav';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6"><Nav/></div>
      <header className="flex justify-between items-center px-6">
        <VendorSearchBar />
        <button className="bg-[#DDFF8F] text-black rounded-xl text-sm py-3  m-2 px-6">Date Range</button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComplianceAlerts />
        <RiskAssessment />
      </div>
    </div>
  );
}

export default App;
