"use client"
//HOOKS
import React, { useState } from "react";
//COMPONENTS
import Nav from "../../components/common/nav";
import SearchBar from "../../components/common/SearchBar";
import ComplainceList from "../../components/complaince&risk/ComplainceList";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function Vendor() {

  const [openForm, setOpenForm] = useState(false)

  return (

    <div className="bg-white">
      <div className="px-6"><Nav /></div>
      <div className=" bg-gray-100 ">
        <main>
          <div className="bg-white p-4 rounded shadow">

            {/* compliance form */}

            <div className="flex justify-between items-center mb-4">
              <SearchBar />

              <Dialog>
                <DialogTrigger>                  <button className="text-sm bg-[#DDFF8F] text-black p-[15.24px] rounded-[11.43px]">Add Compliance Issue</button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Compliance issue</DialogTitle>
                    <DialogDescription>
                      <div className='h-full w-full mb-4'>
                        <div className=" mb-4 flex gap-4">
                          <div className="w-full">
                            <input className="bg-white  border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractNumber" type="text" placeholder="Assign to" />
                          </div>
                          <div className="w-full">
                            <input className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractName" type="text" placeholder="Category" />
                          </div>
                          <div className="w-full">
                            <Select onValueChange={(value: string) => { setType(value) }}>
                              <SelectTrigger className=" border border-slate-300 h-[54px] appearance-none  rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-[16px] text-gray-400 focus:text-black">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Office">Office</SelectItem>
                                <SelectItem value="Remote">Remote</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="mb-2">
                          <textarea className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="Description" placeholder="Notes"></textarea>
                        </div>
                        <div className="flex flex-row gap-3">
                          <button className="w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline">Submit</button>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>


            </div>

            <ComplainceList />
          </div>
        </main>
      </div>
    </div>
  );
};

