import React from 'react';

const RiskSummary = () => {
  return (
    <div className="flex flex-col gap-3 border rounded-2xl p-7  max-w-sm">
      <div className="flex justify-between items-center">
        <h4 className="text-gray-700 text-xl font-semibold">Risk Summary</h4>
        <button className="text-gray-400 cursor-pointer">•••</button>
      </div>

      <div className="flex flex-row items-center justify-between">
        <span className="block text-gray-700 font-medium">Total Risk</span>
        <span className="text-4xl font-semibold">54</span>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="h-4 flex flex-row gap-1 rounded-full">
          <div className=" h-4 rounded-sm bg-[#D5F68A]" style={{ width: '33%' }}></div>
          <div className=" h-4 rounded-sm bg-[#A9E338]" style={{ width: '33%' }}></div>
          <div className=" h-4 rounded-sm bg-[#6BA10F]" style={{ width: '34%' }}></div>
        </div>
        <div className="flex justify-between text-gray-500 text-xs mt-1">
          <span className=' font-semibold'>0%</span>
          <span className=' font-semibold'>100%</span>
        </div>
      </div>

      <div className=" text-sm ">
        <ul className="text-gray-700">
          <li className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="block w-3 h-3 bg-black rounded-full mr-2"></span>
              Risk 1
            </div>
            <div className="flex space-x-2">
              <span >High</span>
              <span >Open</span>
            </div>
          </li>
          <li className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="block w-3 h-3 bg-[#6BA10F] rounded-full mr-2"></span>
              Risk 2
            </div>
            <div className="flex space-x-2">
              <span >Medium</span>
              <span >Progress</span>
            </div>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="block w-3 h-3 bg-[#A9E338] rounded-full mr-2"></span>
              Risk 3
            </div>
            <div className="flex space-x-2">
              <span >Low</span>
              <span >Close</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RiskSummary;
