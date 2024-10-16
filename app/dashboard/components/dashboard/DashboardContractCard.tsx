'use client'

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const contracts = [
  {
    id: 1,
    initials: "ND",
    title: "Non Disclosure Agreement",
    name: "Victor James",
    location: "London, UK",
    number: "#1604160001",
    contact: "John Smith",
    date: "24 OCT '17",
  },
  {
    id: 2,
    initials: "SC",
    title: "Service Contract",
    name: "Johny Jameson",
    location: "London, UK",
    number: "#1604160001",
    contact: "John Smith",
    date: "24 OCT '17",
  },
  {
    id: 3,
    initials: "SC",
    title: "Service Contract",
    name: "Johny Jameson",
    location: "London, UK",
    number: "#1604160001",
    contact: "John Smith",
    date: "24 OCT '17",
  },
  {
    id: 3,
    initials: "SC",
    title: "Service Contract",
    name: "Johny Jameson",
    location: "London, UK",
    number: "#1604160001",
    contact: "John Smith",
    date: "24 OCT '17",
  },
  {
    id: 3,
    initials: "SC",
    title: "Service Contract",
    name: "Johny Jameson",
    location: "London, UK",
    number: "#1604160001",
    contact: "John Smith",
    date: "24 OCT '17",
  },
];

const DashboardContractCard = () => {
  return (
    <div className="border rounded-xl py-4 pl-4 pr-2">
      <div className="flex justify-between items-center my-4">
        <h3 className="text-xl  md:text-xl font-semibold">Contracts</h3>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 bg-white border text-sm md:text-base h-10 md:h-auto rounded-xl flex justify-center items-center">
            <EditIcon className="text-[#686464] cursor-pointer mr-2" />
            Edit
          </button>
          <button className="px-3 py-2 bg-white border text-sm md:text-base h-10 md:h-auto rounded-xl">
            View All
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-">
      {contracts.map((contract) => (
        <div key={contract.id} className="flex items-center">
          <div className="flex items-center my-2">
            <div className="bg-[#DDFF8F] p-2 rounded-full mr-2">
              <span className="text-[#16151C] text-md font-semibold">
                {contract.initials}
              </span>
            </div>
            <div>
              <div className="text-[15px] font-normal">
                {contract.title}
                <span className=" mx-2 text-sm text-[#A2A1A8]">
                  {contract.name}, {contract.location}
                  {contract.number}
                </span>
              </div>
            </div>
          </div>
          <div className="text-[14px] min-w-[75px]">
            <p className="font-normal">{contract.contact}</p>
            <p className="text-[12px] text-[#A2A1A8]">{contract.date}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DashboardContractCard;
