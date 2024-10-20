"use client"

import React from 'react'
;
//COMPONENTS
import RiskAssessment from '../components/complaince&risk/RiskAssessment';
import ComplianceAlerts from '../components/complaince&risk/ComplianceAlerts';
import Nav from '../components/common/nav';
import SearchBar from '../components/common/SearchBar';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-2 lg:px-6"><Nav /></div>
      <header className="flex justify-between items-center px-2 lg:px-4">
        <SearchBar />
        <button className="bg-[#DDFF8F] md:block hidden text-black text-sm py-3 m-2 px-6 rounded-xl">Date Range</button>
        <button className="md:hidden block bg-[#DDFF8F] text-black text-nowrap p-2 px-3 m-0.5 rounded-sm text-[10px]">Date</button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-4">
        <ComplianceAlerts />
        <RiskAssessment />
      </div>
    </div>
  );
}

export default App;
