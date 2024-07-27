import React from 'react'
// SHADCN UI
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { format } from "date-fns"
import { cn, readFileAsDataUrl } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { HiOutlineCamera } from "react-icons/hi2";
import Image from 'next/image'


const VendorInputFields = () => {

  const [selectedImage, setSelectedImage] = React.useState()
  const [vendorName, setVendorName] = React.useState<string>("")
  const [contractName, setContractName] = React.useState<string>("")
  const [number, setNumber] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [date, setDate] = React.useState<Date>()
  const [type, setType] = React.useState<string>("")
  const [adress, setAdress] = React.useState<string>("")
  const [note, setNote] = React.useState<string>("")

  const handleForm = ()=>{
    console.log(vendorName,contractName,number,email,date,type,adress,note)
  }

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]!;
    if (file) {
        const dataUrl = await readFileAsDataUrl(file);
        setSelectedImage(dataUrl)
    }
  }



  return (
    <form action={handleForm}>
                <div className="flex items-start mb-4 justify-start w-full">
          {
            selectedImage ?
           <Image className='max-h-64 max-w-64' src={selectedImage} alt='' height={300} width={300}/>
           : <label
           htmlFor="image-upload"
           className="shadow appearance-none border rounded-xl p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] flex flex-col items-center justify-center w-32 h-32 "
           >
              <div className="flex flex-col items-center justify-center">
                <HiOutlineCamera className="text-slate-500 text-xl" />
              </div>

              <input
                onChange={fileChangeHandler}
                id="image-upload"
                type="file"
                className="hidden"
                accept="image/*"
                />
            </label>
              }
          </div>
      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <input value={vendorName} onChange={(e)=>setVendorName(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 focus:outline-none focus:ring-1 focus:ring-black" id="vendorName" type="text" placeholder="Vendor Name" />
        </div>
        <div className="w-full">
          <input value={contractName} onChange={(e)=>setContractName(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractName" type="text" placeholder="Contract Name" />
        </div>
      </div>
      <div className=" mb-4 flex gap-4">
        <div className="w-full">
          <input value={number} onChange={(e)=>setNumber(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractNumber" type="text" placeholder="Contract Number" />
        </div>
        <div className="w-full">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractEmail" type="email" placeholder="Contract Email" />
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
                  )}
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
          <Select onValueChange={(value: string)=>{setType(value)}}>
            <SelectTrigger className=" shadow h-12 appearance-none border rounded-xl w-full p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] text-gray-400 focus:text-black">
              <SelectValue  placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mb-4">
        <input value={adress} onChange={(e)=>setAdress(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="address" type="text" placeholder="Address" />
      </div>
      <div className="mb-4">
        <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="shadow appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="notes" placeholder="Notes"></textarea>
      </div>
      <div className='flex justify-end'>
        <button
          type="submit"
          className="absolute bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
          Save
        </button>
            </div>
          </form>
  )
}

export default VendorInputFields
