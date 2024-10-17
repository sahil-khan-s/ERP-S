'use client'

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import { Store, store } from "@/store/store";
import { toggleContractEditing } from "@/features/contracts.reducer";
import { useSelector } from "react-redux";
import Loader, { LoaderSize } from "../common/Loader";
import ContractCard from "../contract/contractcard";
import { Contract as ContractInterface } from "@prisma/client";
// const contracts = [
//   {
//     id: 1,
//     initials: "ND",
//     title: "Non Disclosure Agreement",
//     name: "Victor James",
//     location: "London, UK",
//     number: "#1604160001",
//     contact: "John Smith",
//     date: "24 OCT '17",
//   },
//   {
//     id: 2,
//     initials: "SC",
//     title: "Service Contract",
//     name: "Johny Jameson",
//     location: "London, UK",
//     number: "#1604160001",
//     contact: "John Smith",
//     date: "24 OCT '17",
//   },
//   {
//     id: 3,
//     initials: "SC",
//     title: "Service Contract",
//     name: "Johny Jameson",
//     location: "London, UK",
//     number: "#1604160001",
//     contact: "John Smith",
//     date: "24 OCT '17",
//   },
//   {
//     id: 3,
//     initials: "SC",
//     title: "Service Contract",
//     name: "Johny Jameson",
//     location: "London, UK",
//     number: "#1604160001",
//     contact: "John Smith",
//     date: "24 OCT '17",
//   },
//   {
//     id: 3,
//     initials: "SC",
//     title: "Service Contract",
//     name: "Johny Jameson",
//     location: "London, UK",
//     number: "#1604160001",
//     contact: "John Smith",
//     date: "24 OCT '17",
//   },
// ];

const DashboardContractCard = () => {
  const { allContracts } = useSelector((state: Store) => { return state.contracts });

  const handleEditClick = () => {
    store.dispatch(toggleContractEditing());
  }
  return (
    // <div className="border rounded-xl py-4 pl-4 pr-2">
    //   <div className="flex justify-between items-center my-4">
    //     <h3 className="text-xl  md:text-xl font-semibold">Contracts</h3>
    //     <div className="flex items-center gap-2">
    //       <button className="px-3 py-2 bg-white border text-sm md:text-base h-10 md:h-auto rounded-xl flex justify-center items-center">
    //         <EditIcon className="text-[#686464] cursor-pointer mr-2" />
    //         Edit
    //       </button>
    //       <button className="px-3 py-2 bg-white border text-sm md:text-base h-10 md:h-auto rounded-xl">
    //         View All
    //       </button>
    //     </div>
    //   </div>

    //   <div className="flex flex-col gap-">
    //     {contracts.map((contract) => (
    //       <div key={contract.id} className="flex items-center">
    //         <div className="flex items-center my-2">
    //           <div className="bg-[#DDFF8F] p-2 rounded-full mr-2">
    //             <span className="text-[#16151C] text-md font-semibold">
    //               {contract.initials}
    //             </span>
    //           </div>
    //           <div>
    //             <div className="text-[15px] font-normal">
    //               {contract.title}
    //               <span className=" mx-2 text-sm text-[#A2A1A8]">
    //                 {contract.name}, {contract.location}
    //                 {contract.number}
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="text-[14px] min-w-[75px]">
    //           <p className="font-normal">{contract.contact}</p>
    //           <p className="text-[12px] text-[#A2A1A8]">{contract.date}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="w-full mb-20 md:mb-0 rounded-2xl p-4 border-[0.48px] border-gray-500">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-outfit">Contracts</h2>
        <div className="flex gap-x-2">
          <button onClick={handleEditClick} className="flex items-center gap-x-1 p-2 rounded-xl border-[0.48px] border-gray-500">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.54659 0.948852C8.94747 0.349732 7.97614 0.349732 7.37702 0.948852L1.295 7.03088C1.25332 7.07256 1.22322 7.12423 1.20751 7.18096L0.407704 10.0684C0.374811 10.1868 0.408236 10.3136 0.495062 10.4005C0.58202 10.4874 0.708795 10.5208 0.827181 10.488L3.71465 9.6881C3.77138 9.67239 3.82305 9.64229 3.86473 9.60061L9.94662 3.51845C10.5448 2.91893 10.5448 1.94841 9.94662 1.34889L9.54659 0.948852ZM2.03781 7.25247L7.01547 2.27467L8.62081 3.88L3.64301 8.8578L2.03781 7.25247ZM1.71714 7.89593L2.99968 9.1786L1.22562 9.67012L1.71714 7.89593ZM9.46456 3.03639L9.10301 3.39793L7.49754 1.79247L7.85922 1.43092C8.19201 1.09813 8.7316 1.09813 9.06439 1.43092L9.46456 1.83095C9.79681 2.16414 9.79681 2.70333 9.46456 3.03639Z" fill="black" fill-opacity="0.6" />
            </svg>

            <p className="font-outfit capitalize font-light text-xs">
              edit
            </p>
          </button>
          <Link
            href={"/dashboard/contract/details"}
            className="font-outfit font-light text-xs rounded-xl  p-2 border-[0.48px] border-gray-500"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="flex max-h-48 overflow-y-scroll flex-col gap-y-2 mt-10">
        {
          allContracts == undefined
            ?
            <Loader size={LoaderSize.S} />
            :
            allContracts.map((contract: ContractInterface, index: number) => {
              return <ContractCard
                key={index}
                contract={contract}
              />
            })
        }

      </div>
    </div>


  );
};

export default DashboardContractCard;
