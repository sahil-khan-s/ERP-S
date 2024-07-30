import React, { useEffect, useState } from 'react'
//ICONS
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";


// //STATIC DATA
// const vendors = [
//   { name: "Darlene Robertson", id: "345321231", contractValue: "$100,000", category: "UI/UX Designer", type: "Office", status: "Permanent" },
//   { name: "Floyd Miles", id: "987890345", contractValue: "$142,559", category: "PHP Developer", type: "Office", status: "Permanent" },
//   { name: "Cody Fisher", id: "453367122", contractValue: "$89,07", category: "Sales Manager", type: "Office", status: "Permanent" },
//   { name: "Dianne Russell", id: "345321231", contractValue: "$215,798", category: "BDM", type: "Remote", status: "Permanent" },
//   { name: "Savannah Nguyen", id: "453677881", contractValue: "$83,093", category: "Design Lead", type: "Office", status: "Permanent" },
//   { name: "Jacob Jones", id: "009918765", contractValue: "$79,4233", category: "Python Developer", type: "Remote", status: "Permanent" },
//   { name: "Marvin McKinney", id: "238870122", contractValue: "$723,323", category: "Sr. UI Developer", type: "Remote", status: "Permanent" },
// ];

const VendorsList = () => {
  const [vendors,setVendor] = useState([])

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
                <th className="p-4 py-5 text-left font-semibold">Vendor Name</th>
                <th className="p-4 py-5 text-left font-semibold">ID</th>
                <th className="p-4 py-5 text-left font-semibold">Contract Value</th>
                <th className="p-4 py-5 text-left font-semibold">Category</th>
                <th className="p-4 py-5 text-left font-semibold">Type</th>
                <th className="p-4 py-5 text-left font-semibold">Status</th>
                <th className="p-4 py-5 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((item, index) => (
                <tr key={index}>
                  <td className="p-4"><AccountCircleIcon className=" text-3xl mx-2" />{item.name}</td>
                  {/* vendor image here */}
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.contractvalue}</td>
                  <td className="p-4">{item.vendorCategory}</td>
                  <td className="p-4">{item.type}</td>
                  <td className="p-4">
                    <span className="bg-[#f1f6e7] text-[#6BA10F] px-2 py-1 rounded">{item.status}</span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="p-1"><RiEyeLine /></button>
                    <button className="p-1"><RiEdit2Line /></button>
                    <button className="p-1"><RiDeleteBin6Line /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> : "loading"}
      </div>
    )
  }

  export default VendorsList
