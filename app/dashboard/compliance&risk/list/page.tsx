// "use client"
// //HOOKS
// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// //COMPONENTS
// import Nav from "../../components/common/nav";
// import SearchBar from "../../components/common/SearchBar";
// import ComplainceList from "../../components/complaince&risk/ComplainceList";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// interface ComplianceFormData {
//   assignTo: string;
//   title: string;
//   type: string;
//   description: string;
// }

// export default function Vendor() {
//   const [open, setOpen] = React.useState<boolean>(false);
//   const [reload, setReload] = React.useState<boolean>(false);

//   const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ComplianceFormData>({
//     defaultValues: {
//       assignTo: "",
//       title: "",
//       type: "",
//       description: ""
//     }
//   });

//   // RESET INPUT FIELDS
//   const resetInputFields = () => {
//     reset();
//     setReload(!reload);
//     setOpen(false);
//   }

//   const [buttonLoading, setButtonLoading] = useState<boolean>(true)
//   //  POST API
//   const handleForm = async (data: ComplianceFormData) => {
//     setButtonLoading(true)
//     try {
//       const response = await fetch("/api/compliance", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//       });
//       if (!response.ok) {
//         throw new Error('Failed to submit compliance issue');
//       }
//       setButtonLoading(false)
//       resetInputFields();
//     } catch (error) {

//       setButtonLoading(false)
//       console.error(error);
//     }
//   }

//   return (
//     <div className="bg-white h-[100vh]">
//       <div className="px-2 lg:px-6"><Nav /></div>
//       <div className=" bg-gray-100 ">
//         <main>
//           <div className="bg-white p-2 lg:p-4 rounded shadow">

//             {/* compliance form */}
//             <div className="flex justify-between items-center mb-4">
//               <SearchBar />

//               <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogTrigger asChild>
//                   <div>
//                     <button onClick={() => setOpen(true)} className="md:block hidden text-sm bg-[#DDFF8F] text-black p-[15.24px] rounded-[11.43px]">Add Compliance Issue</button>
//                     <button onClick={() => setOpen(true)} className=" md:hidden block text-[10px] bg-[#DDFF8F] text-black px-3 ml-2 py-2 rounded-lg ">Add</button>
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent className="bg-white text-white cursor-default">
//                   <DialogHeader>
//                     <DialogTitle className="mb-1 md:mb-3 font-semibold text-lg md:text-xl text-slate-800">Add Compliance issue</DialogTitle>
//                     <DialogDescription>
//                       <form onSubmit={handleSubmit(handleForm)} className='h-full w-full'>
//                         <div className="mb-2 md:mb-4 flex gap-2 md:gap-4">
//                           <div className="w-full">
//                             <input
//                               {...register("assignTo", { required: "Assign to is required" })}
//                               className={`text-black bg-white border-slate-300 appearance-none border rounded-xl w-full px-3 py-2 md:p-4 text-xs md:text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-black ${errors.assignTo ? "border-red-500" : ""}`}
//                               type="text"
//                               placeholder="Assign to"
//                             />
//                             {errors.assignTo && <p className="text-red-500 text-xs mt-1">{errors.assignTo.message}</p>}
//                           </div>
//                           <div className="w-full">
//                             <input
//                               {...register("title", { required: "Title is required" })}
//                               className={`text-black border-slate-300 appearance-none border rounded-xl w-full px-3 py-2 md:p-4 text-xs md:text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-black ${errors.title ? "border-red-500" : ""}`}
//                               type="text"
//                               placeholder="Title"
//                             />
//                             {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
//                           </div>
//                           <div className="w-full">
//                             <Controller
//                               name="type"
//                               control={control}
//                               rules={{ required: "Type is required" }}
//                               render={({ field }) => (
//                                 <Select onValueChange={field.onChange} value={field.value}>
//                                   <SelectTrigger className={`border border-slate-300 h-[33px] md:h-[54px] appearance-none rounded-xl w-full px-3 py-2 md:p-4 text-xs md:text-sm focus:ring-1 leading-tight outline-none ${errors.type ? "border-red-500" : ""}`}>
//                                     <SelectValue placeholder="Select type" />
//                                   </SelectTrigger>
//                                   <SelectContent>
//                                     <SelectItem value="Build-in">Build-in</SelectItem>
//                                     <SelectItem value="Custom">Custom</SelectItem>
//                                   </SelectContent>
//                                 </Select>
//                               )}
//                             />
//                             {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
//                           </div>
//                         </div>
//                         <div className="mb-1 md:mb-2">
//                           <textarea
//                             {...register("description", { required: "Description is required" })}
//                             className={`text-black border-slate-300 appearance-none border rounded-xl w-full px-3 py-2 md:p-4 text-xs md:text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-black ${errors.description ? "border-red-500" : ""}`}
//                             placeholder="Description"
//                           ></textarea>
//                           {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
//                         </div>
//                         <div className="flex md:mt-2 flex-row gap-3">
//                           <button type="button" onClick={resetInputFields} className="bg-white border border-gray-300 text-gray-800 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg focus:outline-none focus:shadow-outline text-xs md:text-sm">Cancel</button>
//                           {buttonLoading ? <button className="w-20 bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-800 font-medium py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline text-xs md:text-sm">Submit</button>
//                             :
//                             <button type="submit" className=" bg-[#DDFF8F] hover:bg-[#C8F064] rounded-lg focus:outline-none focus:border border-slate-300-outline flex items-center justify-between w-20"><div className="submit-loader"></div></button>

//                           }
//                         </div>
//                       </form>
//                     </DialogDescription>
//                   </DialogHeader>
//                 </DialogContent>
//               </Dialog>
//             </div>

//             {/*     compliance list     */}
//             <ComplainceList reload={reload} />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };




import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
