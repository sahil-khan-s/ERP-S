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
// FIREBASE
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { storage } from '@/lib/firebaseConfig'



const VendorInputFields = () => {


  const [selectedImage, setSelectedImage] = React.useState()
  const [image,setImage] = React.useState<any>()
  const [vendorName, setVendorName] = React.useState<string>("")
  const [contractName, setContractName] = React.useState<string>("")
  const [number, setNumber] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [date, setDate] = React.useState<Date>()
  const [type, setType] = React.useState<string>("")
  const [adress, setAdress] = React.useState<string>("")
  const [note, setNote] = React.useState<string>("")
  
  let imageUrl:string;


  const handleImageUpload = async () => {
    const storageRef = ref(storage,`images/${image.name}`)
    try {
    
      const uploaded = await uploadBytes(storageRef,image)
       imageUrl = await getDownloadURL(storageRef)
       setSelectedImage(undefined)
    
    } catch (error) {
      console.error(error)
    }
  }

  const handleForm = async ()=>{
      await handleImageUpload();
     
      try {
        const response = await fetch("/api/vendor", {
          method:"POST",
          body:JSON.stringify({imageUrl,vendorName,contractName,number,email,type,adress,note})
        })

      } catch (error) {
        console.log("SERVER ERROR--------------")
      }
  }

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const dataUrl = await readFileAsDataUrl(file);
        setSelectedImage(dataUrl)
        setImage(e.target.files?.[0]!)
    }

  }



  return (
    <form action={handleForm}>
                <div className="flex items-start mb-4 justify-start w-full">
          {
            selectedImage ?
           <Image className='min-h-52 max-h-64 w-auto' src={selectedImage} alt='' height={300} width={300}/>
           : <label
           htmlFor="image-upload"
           className="border border-slate-300 appearance-none rounded-xl p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] flex flex-col items-center justify-center w-32 h-32 "
           >
              <div className="flex flex-col items-center justify-center">
                <HiOutlineCamera className="text-slate-500 text-xl" />
              </div>

              <input
                required
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
          <input required value={vendorName} onChange={(e)=>setVendorName(e.target.value)} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 focus:outline-none focus:ring-1 focus:ring-black" id="vendorName" type="text" placeholder="Vendor Name" />
        </div>
        <div className="w-full">
          <input required value={contractName} onChange={(e)=>setContractName(e.target.value)} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractName" type="text" placeholder="Contract Name" />
        </div>
      </div>
      <div className=" mb-4 flex gap-4">
        <div className="w-full">
          <input required value={number} onChange={(e)=>setNumber(e.target.value)} className="bg-white  border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractNumber" type="text" placeholder="Contract Number" />
        </div>
        <div className="w-full">
          <input required value={email} onChange={(e)=>setEmail(e.target.value)} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="contractEmail" type="email" placeholder="Contract Email" />
        </div>
      </div>
      <div className="mb-4 flex gap-4">
        <div className="w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  " border border-slate-300 h-12 appearance-none  rounded-xl w-full p-4 text-gray-700 focus:ring-1 leading-tight outline-none text-[16px] ",
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
            <SelectTrigger className=" border border-slate-300 h-12 appearance-none  rounded-xl w-full p-4 -gray-700 focus:ring-1 leading-tight outline-none text-[16px] text-gray-400 focus:text-black">
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
        <input required value={adress} onChange={(e)=>setAdress(e.target.value)} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="address" type="text" placeholder="Address" />
      </div>
      <div className="mb-4">
        <textarea required value={note} onChange={(e)=>setNote(e.target.value)} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black" id="notes" placeholder="Notes"></textarea>
      </div>
      <div className='flex justify-end'> 
        <button
        type="submit"
        className="absolute w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:border border-slate-300-outline">
          Save
      </button> 
            </div>
          </form>
  )
}

export default VendorInputFields
