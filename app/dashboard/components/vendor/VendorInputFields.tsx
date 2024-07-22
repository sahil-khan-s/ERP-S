import React from 'react'
// SHADCN UI
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { HiOutlineCamera } from "react-icons/hi2";


const VendorInputFields = () => {

  const [image, setImage] = React.useState<string>("")
  const [vendorName, setVendorName] = React.useState<string>("")
  const [contractName, setContractName] = React.useState<string>("")
  const [number, setNumber] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [date, setDate] = React.useState<Date>()
  const [type, setType] = React.useState<string>("")
  const [adress, setAdress] = React.useState<string>("")
  const [note, setNote] = React.useState<string>("")

<<<<<<< HEAD
  const handleForm = () => {
    console.log(image, vendorName, contractName, number, email, date, type, adress, note)
=======
  const handleForm = ()=>{
    console.log(image,vendorName,contractName,number,email,date,type,adress,note)
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
  }



  return (
    <form action={handleForm}>
<<<<<<< HEAD
      <div className="flex items-start mb-4 justify-start w-full">
        <label
          htmlFor="image-upload"
          className="shadow appearance-none border rounded-xl p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] flex flex-col items-center justify-center w-32 h-32 "
        >
          <div className="flex flex-col items-center justify-center">
            <HiOutlineCamera className="text-slate-500 text-xl" />
          </div>

          <input
            id="image-upload"
            type="file"
            className="hidden"
            accept="image/*"
          />
        </label>
      </div>
      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <input value={vendorName} onChange={(e) => setVendorName(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 focus:outline-none focus:ring-1 focus:ring-black" id="vendorName" type="text" placeholder="Vendor Name" />
        </div>
        <div className="w-full">
          <input value={contractName} onChange={(e) => setContractName(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractName" type="text" placeholder="Contract Name" />
=======
                <div className="flex items-start mb-4 justify-start w-full">
            <label
              htmlFor="image-upload"
              className="shadow appearance-none border rounded-xl p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] flex flex-col items-center justify-center w-32 h-32 "
            >
              <div className="flex flex-col items-center justify-center">
                <HiOutlineCamera className="text-slate-500 text-xl" />
              </div>

              <input
                id="image-upload"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <input value={vendorName} onChange={(e)=>setVendorName(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 focus:outline-none focus:ring-1 focus:ring-black" id="vendorName" type="text" placeholder="Vendor Name" />
        </div>
        <div className="w-full">
          <input value={contractName} onChange={(e)=>setContractName(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractName" type="text" placeholder="Contract Name" />
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
        </div>
      </div>
      <div className=" mb-4 flex gap-4">
        <div className="w-full">
<<<<<<< HEAD
          <input value={number} onChange={(e) => setNumber(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractNumber" type="text" placeholder="Contract Number" />
        </div>
        <div className="w-full">
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractEmail" type="email" placeholder="Contract Email" />
=======
          <input value={number} onChange={(e)=>setNumber(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractNumber" type="text" placeholder="Contract Number" />
        </div>
        <div className="w-full">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractEmail" type="email" placeholder="Contract Email" />
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
        </div>
      </div>
      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  " shadow h-12 appearance-none border rounded-xl w-full p-4 text-gray-700 focus:ring-1 leading-tight outline-none text-[16px] ",
                  !date && "text-muted-foreground item-start justify-start"
<<<<<<< HEAD
                )}
=======
                  )}
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
              >
                {date ? format(date, "PPP") : <div className='text-gray-400 font-normal'>Date of birth</div>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>            </div>
        <div className="w-full">
          <Select>
            <SelectTrigger className=" shadow h-12 appearance-none border rounded-xl w-full p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] text-gray-400 focus:text-black">
<<<<<<< HEAD
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem onClick={() => setType("Office")} value="office">Office</SelectItem>
              <SelectItem onClick={() => setType("remote")} value=" ">Remote</SelectItem>
=======
              <SelectValue  placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem onClick={()=>setType("Office")} value="office">Office</SelectItem>
              <SelectItem onClick={()=>setType("remote")} value=" ">Remote</SelectItem>
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mb-4">
<<<<<<< HEAD
        <input value={adress} onChange={(e) => setAdress(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="address" type="text" placeholder="Address" />
      </div>
      <div className="mb-4">
        <textarea value={note} onChange={(e) => setNote(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="notes" placeholder="Notes"></textarea>
=======
        <input value={adress} onChange={(e)=>setAdress(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="address" type="text" placeholder="Address" />
      </div>
      <div className="mb-4">
        <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="notes" placeholder="Notes"></textarea>
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
      </div>
      <div className='flex justify-end'>
        <button
          type="submit"
          className="absolute bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
          Save
        </button>
<<<<<<< HEAD
      </div>
    </form>
=======
            </div>
          </form>
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
  )
}

export default VendorInputFields
