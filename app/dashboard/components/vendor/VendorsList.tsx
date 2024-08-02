import React, { useEffect, useState } from 'react'
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";
import Image from 'next/image';
// SHADCN.UI
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import moment from 'moment';
import { TiBriefcase } from 'react-icons/ti';
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger} from "@/components/ui/alert-dialog"

const VendorsList = () => {
  type Vendor = {
    id: number;
    imageUrl: string;
    name: string;
    contractvalue: string;
    vendorCategory: string;
    email: string;
    date: string;
    type: string;
    address: string;
    note: string; 
  };

  const [vendors, setVendor] = useState<Vendor[]>([])
  const [reload,setReload] = useState(false)
  
  //     DELETE FUNCTION
  const deleteVendor = async (id:number) => {
    try {
      console.log("trying to delete..")
      const response = await fetch('/api/vendor', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
  
      const data = await response.json();
  
      if (data.success) {
      setReload(!reload)
      }
    } catch (error) {
      console.error('An error occurred while deleting the vendor:', error);
    }
  };

  const fetchVendors = async () => {
    const response = await fetch("/api/vendor")
    const data = await response.json()
    setVendor(await data.vendors)
  }
  useEffect(() => {
    fetchVendors()
  }, [reload])


  return (
    <div className="overflow-x-auto">
      {vendors ?
        <table className="rounded overflow-hidden w-full table-auto">
          <thead className="  bg-[#F5F5F5]">
            <tr >
              <th className="px-4 py-5 text-left font-semibold text-nowrap">Vendor Name</th>
              <th className="px-4 py-5 text-left font-semibold">ID</th>
              <th className="px-4 py-5 text-left font-semibold text-nowrap">Contract Value</th>
              <th className="px-4 py-5 text-left font-semibold">Category</th>
              <th className="px-4 py-5 text-left font-semibold">Type</th>
              <th className="px-4 py-5 text-left font-semibold">Status</th>
              <th className="px-4 py-5 text-left font-semibold">Action</th>
            </tr>
          </thead>
          {vendors.length !== 0 ? vendors.map((item, index) => (
            <tbody className=' border-b border-slate-100'>
              <tr key={index}>
                <td className="p-4 flex flex-row items-center gap-2"><Image src={item.imageUrl} width={45} height={45} alt='' className=" rounded-full text-3xl mx-2" /><p>{item.name}</p></td>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.contractvalue}</td>
                <td className="p-4">{item.vendorCategory}</td>
                <td className="p-4">{item.type}</td>
                <td className="p-4">
                  <span className="bg-[#f1f6e7] text-[#6BA10F] px-2 py-1 text-sm rounded-lg">Permanent</span>
                </td>
                <td className="flex flex-row justify-center items-center gap-3">

                  <Popover>
                    <PopoverTrigger><button className='text-slate-600 hover:text-black text-lg'><RiEyeLine /></button></PopoverTrigger>
                    <PopoverContent className='bg-slate-50 relative top-[25%] right-[25%] w-max'>
                      <div className='font-bold text-left items-center'>Vendor Detail</div>
                      <div>
                        <div className='flex flex-row gap-4 mt-4'>
                          <div className='flex flex-col gap-4'>
                            <div className='flex justify-start items-start mr-3 w-full flex-col gap-2'>
                              <p className="text-md font-medium text-gray-500">Vendor Image: </p>
                              <Image className='rounded-xl object-cover ' src={item!.imageUrl} height={170} width={170} alt='' />
                            </div>

                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="gap-2">
                              <div className="text-md font-medium text-gray-500 text-nowrap flex flex-row"><TiBriefcase className='text-2xl' /><p>Vendor Name: </p></div>
                              <div className="text-md text-black font-semibold px-2">{item.name}</div>
                            </div>

                            <div className="mt-3 flex flex-row gap-2">
                              <div className="text-md font-medium text-gray-500 text-nowrap">Email: </div>
                              <div className="text-md text-black font-semibold">{item.email}</div>
                            </div>
                            <div className="mt-3 flex flex-row gap-2">
                              <div className="text-md font-medium text-gray-500 text-nowrap">Contract Value </div>
                              <div className="text-md text-black font-semibold">{item.contractvalue}</div>
                            </div>
                            <div className="mt-3 flex flex-row gap-2">
                              <div className="text-md font-medium text-gray-500 text-nowrap">Vendor Category: </div>
                              <div className="text-md text-black font-semibold ">{item.vendorCategory}</div>
                            </div>
                            <p className='mt-3 text-slate-500 font-semibold text-sm inline-flex'>Date: <p className='text-black'>{moment(item.date).format('MMMM Do, YYYY')}</p></p>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-2">
                          <div className="text-md font-medium text-gray-500 text-nowrap">Note: </div>
                          <div className="text-md text-black font-semibold ">{item.note}</div>
                        </div>
                      </div>


                    </PopoverContent>
                  </Popover>

                  <button className='text-slate-600 hover:text-black text-lg'><RiEdit2Line /></button>
                  <AlertDialog>
  <AlertDialogTrigger><button className='text-slate-600 hover:text-black text-lg'><RiDeleteBin6Line /></button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>You want to delete {item.name} vendor?</AlertDialogTitle>
      <AlertDialogDescription>
        This action will permanently delete {item.name} vendor data.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{deleteVendor(item.id);}} className='bg-red-600 hover:bg-red-500'>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

                </td>
              </tr>
            </tbody>
          )) :
            <div className='h-52 w-[70vh] absolute left-[40%] items-center'>
              <p className='text-center text-nowrap m-24 font-xl font-semibold'>The vendor list is currently empty.</p>
            </div>
          }
        </table>
        :
        <div className='flex items-center justify-center h-[500px]'>
          <span className="loader"></span>
        </div>
      }
    </div>
  )
}

export default VendorsList


