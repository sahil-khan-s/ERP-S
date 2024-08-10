"use client"
//HOOKS
import React from "react";
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

  const [open, setOpen] = React.useState<boolean>(false)
  const [reload, setReload] = React.useState<boolean>(false);

  // FORM USESTATES
  const [assignTo, setAssignTo] = React.useState<string>("")
  const [title, setTitle] = React.useState<string>("")
  const [type, setType] = React.useState<string>("")
  const [description, setDescription] = React.useState<string>("")

  // RESET INPUT FIELDS
  const resetInputFields = () => {
    setAssignTo("");
    setTitle("");
    setType("");
    setDescription("");
    setReload(!reload)
    setOpen(false);
  }

  //  POST API
  const handleForm = async () => {
    try {
      const response = await fetch("/api/compliance", {
        method: "POST",
        body: JSON.stringify({ assignTo, title, type, description })
      })
    } catch (error) {
      console.error(error)
    }
    resetInputFields();
  }

  return (

    <div className="bg-white min-h-screen">
      <div className="px-6"><Nav /></div>
      <div className=" bg-gray-100 ">
        <main>
          <div className="bg-white p-2 lg:p-4 rounded shadow">

            {/* compliance form */}

            <div className="flex justify-between items-center mb-4">
              <SearchBar />

              <Dialog open={open}>
                <DialogTrigger asChild>
                  <button onClick={() => setOpen(true)} className="text-xs lg:text-sm bg-[#DDFF8F] text-black p-3 lg:p-[15.24px] rounded-[11.43px]">Add Compliance Issue</button>
                </DialogTrigger>
                <DialogContent className="bg-white text-white cursor-default">
                  <DialogHeader>
                    <DialogTitle className="mb-3 font-semibold text-xl">Add Compliance issue</DialogTitle>
                    <DialogDescription>
                      <form action={handleForm} className='h-full w-full'>
                        <div className=" mb-4 flex gap-4">
                          <div className="w-full">
                            <input required value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className={`bg-white  border-slate-300 appearance-none border rounded-xl w-full p-4 leading-tight focus:outline-none focus:ring-1 focus:ring-black ${assignTo ? "text-gray-800" : "text-gray-400"}`} id="contractNumber" type="text" placeholder="Assign to" />
                          </div>
                          <div className="w-full">
                            <input required value={title} onChange={(e) => { setTitle(e.target.value) }} className={`border-slate-300 appearance-none border rounded-xl w-full p-4 leading-tight  focus:outline-none focus:ring-1 focus:ring-black ${title ? "text-gray-800" : "text-gray-400"} `} id="contractName" type="text" placeholder="Title" />
                          </div>
                          <div className="w-full">
                            <Select onValueChange={(value: string) => { setType(value) }}>
                              <SelectTrigger className={`border border-slate-300 h-[54px] appearance-none  rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-[16px]  ${type ? "text-gray-800" : "text-gray-400"}`}>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Build-in">Build-in</SelectItem>
                                <SelectItem value="Custom">Custom</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="mb-2">
                          <textarea required value={description} onChange={(e) => setDescription(e.target.value)} className={`border-slate-300 appearance-none border rounded-xl w-full p-4 leading-tight focus:outline-none focus:ring-1 focus:ring-black ${description ? "text-gray-800" : "text-gray-400"}`} id="Description" placeholder="Descrpition"></textarea>
                        </div>
                        <div className="flex mt-4 flex-row gap-3">
                          <button type={"button"} onClick={() => resetInputFields()} className="bg-white border border-gray-300 text-gray-800 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg focus:outline-none focus:shadow-outline">cancel</button>
                          <button type={"submit"} className="w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-800 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline">Submit</button>
                        </div>
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            {/*     compliance list     */}
            <ComplainceList reload={reload} />
          </div>
        </main>
      </div>
    </div>
  );
};

