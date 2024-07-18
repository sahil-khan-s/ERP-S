import React from 'react'
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";

const complaince = [
  { description: "lorem ipu dol..", id: "345321231", assignTo: "Floyd Miles", title: "UI/UX Designer", type: "Build-in", status: "Open" },
  { description: "lorem ipu dol..", id: "987890345", assignTo: "Cody Fisher", title: "PHP Developer", type: "Build-in", status: "Open" },
  { description: "lorem ipu dol..", id: "453367122", assignTo: "Dianne Russell", title: "Sales Manager", type: "Build-in", status: "Close" },
  { description: "lorem ipu dol..", id: "453367122", assignTo: "BDM", title: "Sales Manager", type: "Build-in", status: "Open" },
  { description: "lorem ipu dol..", id: "453367122", assignTo: "Darlene Robertson", title: "Sales Manager", type: "Custom", status: "Open" },
  { description: "lorem ipu dol..", id: "345321231", assignTo: "Savannah Nguyen", title: "BDM", type: "Custom", status: "Open" },
  { description: "lorem ipu dol..", id: "453677881", assignTo: "Jacob Jones", title: "Design Lead", type: "Build-in", status: "Close" },
  { description: "lorem ipu dol..", id: "009918765", assignTo: "Marvin Mckinny", title: "Python Developer", type: "custom", status: "Open" },
  { description: "lorem ipu dol..", id: "238870122", assignTo: "Brooklyn Simmons", title: "Sr. UI Developer", type: "Build-in", status: "Open" },
  { description: "lorem ipu dol..", id: "009818765", assignTo: "Kristin Waston", title: "Developer", type: "custom", status: "Close" },
];

const ComplainceList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="rounded overflow-hidden w-full table-auto">
        <thead className="  bg-[#F5F5F5]">
          <tr >
            <th className="p-4 py-5 text-left font-semibold">Description</th>
            <th className="p-4 py-5 text-left font-semibold">ID</th>
            <th className="p-4 py-5 text-left font-semibold">Assign To</th>
            <th className="p-4 py-5 text-left font-semibold">Title</th>
            <th className="p-4 py-5 text-left font-semibold">Type</th>
            <th className="p-4 py-5 text-left font-semibold">Status</th>
            <th className="p-4 py-5 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaince.map((item, index) => (
            <tr className='border border-x-0 border-t-0 border-slate-100' key={index}>
              <td className="p-4">{item.description}</td>
              <td className="p-4">{item.id}</td>
              <td className="p-4">{item.assignTo}</td>
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.status}</td>
              <td className="p-4">
                <span className="bg-[#f1f6e7] text-[#6BA10F] px-2 py-1 rounded">{item.status}</span>
              </td>
              <td className="px-4 py-2">
                <button className="p-1 my-1"><RiEyeLine /></button>
                <button className="p-1 my-1"><RiEdit2Line /></button>
                <button className="p-1 my-1"><RiDeleteBin6Line /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComplainceList
