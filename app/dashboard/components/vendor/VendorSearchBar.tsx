import React from 'react'
//ICONS
import { CiSearch } from "react-icons/ci";
import { GoFilter } from "react-icons/go";

const VendorSearchBar = () => {
  return (
    <div className="flex items-center space-x-4">
    <div className="relative flex items-center w-full max-w-xs">
    <CiSearch className="absolute left-3 text-gray-700"/>
      <input
        type="text"
        placeholder="Search by name, role"
        className=" rounded pl-10 pr-4 py-2 w-full border rounded-xl-md focus:outline-none focus:ring-1 focus:ring-black"
        />
      
      <kbd className="absolute right-3 text-gray-400">⌘</kbd>
    </div>
    <button className=" text-gray-600 font-light flex items-center px-4 py-2 border rounded-xl-md focus:outline-none focus:ring-1 focus:ring-black">
      Filter
      <GoFilter className="ml-2" />
    </button>
  </div>
  )
}

export default VendorSearchBar
