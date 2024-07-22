"use client"
//HOOKS
import React from "react";
//COMPONENTS
import Nav from "../../components/common/nav";
import SearchBar from "../../components/common/SearchBar";
import ComplainceList from "../../components/complaince&risk/ComplainceList";

export default function Vendor() {


  return (
    
      <div className="bg-white">
      <div className="px-6"><Nav/></div>
          <div className=" bg-gray-100 ">
            <main>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center mb-4">
                  <SearchBar />
                  <button className="text-sm bg-[#DDFF8F] text-black p-[15.24px] rounded-[11.43px]">Add Compliance Issue</button>
                </div>
                <ComplainceList />
              </div>
            </main>
          </div>
        </div>
  );
};

