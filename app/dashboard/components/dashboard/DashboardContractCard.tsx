'use client'

import React from "react";
import Link from "next/link";
import { Store, store } from "@/store/store";
import { toggleContractEditing } from "@/features/contracts.reducer";
import { useSelector } from "react-redux";
import Loader, { LoaderSize } from "../common/Loader";
import ContractCard from "../contract/contractcard";
import { Contract as ContractInterface } from "@prisma/client";

const DashboardContractCard = () => {
  const { allContracts } = useSelector((state: Store) => { return state.contracts });

  const handleEditClick = () => {
    store.dispatch(toggleContractEditing());
  }
  return (

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
