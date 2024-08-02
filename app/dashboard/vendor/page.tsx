"use client"
//COMPONENTS
import Nav from "../components/common/nav";
import SearchBar from "../components/common/SearchBar";
import VendorsList from "../components/vendor/VendorsList";
import VendorInputFields from "../components/vendor/VendorInputFields";
import NewVendor from "../components/vendor/NewVendor";
//HOOKS
import React, { useState } from "react";
//ICONS
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Vendor() {

  let [page, setPage] = useState(true)

  const handlePage = () => {
    setPage(!page)
  }

  return (
    <div className="bg-white h-screen">
      <div className="px-6"><Nav/></div>

      {/* Rendor Conditionally */}
      {/* <NewVendor /> */}

      {page ?
        <div>
          <div className="bg-gray-100 ">
            <main>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center mb-4">
                  <SearchBar />
                  <button onClick={handlePage} className="text-sm bg-[#DDFF8F] text-black px-[15.24px] py-3 rounded-[11.43px] w-42">Add New Vendor<AddCircleOutlineIcon className="mx-1" /></button>
                </div>
                <VendorsList />
              </div>
            </main>
          </div>
        </div>
        :
        <div className="bg-white p-8 shadow-lg w-full">
          <VendorInputFields page={page} setPage={setPage} />
          <div className="flex justify-end gap-4">
            <button
              onClick={handlePage}
              className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
              Cancel
            </button>
            <div className="py-2 px-10 ">
            </div>
          </div>
        </div>
      }
    </div>
  );
};

