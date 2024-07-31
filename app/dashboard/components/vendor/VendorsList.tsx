import React, { useState } from 'react'
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";
import Image from 'next/image';

const VendorsList = () => {
  const [vendors, setVendor] = useState()

  const fetchVendors = async () => {
    const response = await fetch("/api/vendor")
    const data = await response.json()
    setVendor(await data.vendors)
  }

  fetchVendors();

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
            <tbody>
              <tr key={index}>
                <td className="p-4 flex flex-row items-center gap-2"><Image src={item.imageUrl} width={45} height={45} alt='' className=" rounded-full text-3xl mx-2" /><p>{item.name}</p></td>
                {/* vendor image here */}
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.contractvalue}</td>
                <td className="p-4">{item.vendorCategory}</td>
                <td className="p-4">{item.type}</td>
                <td className="p-4">
                  <span className="bg-[#f1f6e7] text-[#6BA10F] px-2 py-1 text-sm rounded-lg">Permanent</span>
                </td>
                <td className="flex flex-row justify-center items-center gap-3">
                  <button className='text-slate-600 hover:text-black text-lg'><RiEyeLine /></button>
                  <button className='text-slate-600 hover:text-black text-lg'><RiEdit2Line /></button>
                  <button className='text-slate-600 hover:text-black text-lg'><RiDeleteBin6Line /></button>
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
