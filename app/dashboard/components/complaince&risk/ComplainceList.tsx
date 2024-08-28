"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useEffect, useState } from 'react'
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";
// SHADCN.UI


const ComplainceList = ({ reload }: { reload: boolean }) => {

    type complianceType = {
        id: number;
        description: string;
        assignTo: string;
        title: string;
        vendorCategory: string;
        type: string;
        status: string;
    }

    const [complainces, setCompliances] = useState<complianceType[] | null>();

    //EDIT FORM USESTATE
    const [assignTo, setAssignTo] = React.useState<string>("");
    const [title, setTitle] = React.useState<string>("");
    const [type, setType] = React.useState<string>("");
    const [status, setStatus] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");

    // FILL INPUT FIELD
    const fillInputFields = (data: complianceType) => {
        setAssignTo(data.assignTo);
        setDescription(data.description);
        setTitle(data.title);
        setType(data.type);
        setStatus(data.status)
    }

    // FETCH COMPLIANCE FUNCTION
    const fetchCompliance = async () => {
        const response = await fetch("/api/compliance");
        const data = await response.json();
        setCompliances(await data.complianceIssue);
    };

    //  EDIT FUNCTION
    const editData = async (editId: number) => {
        try {
            const response = await fetch("/api/compliance", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: editId,
                    assignTo,
                    title,
                    status,
                    type,
                    description
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to update vendor: ${response.statusText}`);
            } else {
                fetchCompliance()
            }

        } catch (error) {
            console.error(error)
        }
    }

    //     DELETE FUNCTION
    const deleteVendor = async (id: number) => {
        try {
            const response = await fetch('/api/compliance', {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            const data = await response.json();
            if (data.success) {
                setCompliances(null)
                fetchCompliance();
            }
        } catch (error) {
            console.error("An error occurred while deleting the compliance issue:", error);
        }
    };

    useEffect(() => {
        fetchCompliance();
    }, [reload]);

    return (
        <div className="overflow-x-auto h-92">
            {complainces ?
                <table className=" rounded overflow-hidden w-full table-auto">
                    <thead className="  bg-[#F5F5F5]">
                        <tr >
                            <th className="p-4 text-left font-semibold">Description</th>
                            <th className="p-4 text-left font-semibold">ID</th>
                            <th className="p-4 text-left font-semibold">Assign To</th>
                            <th className="p-4 text-left font-semibold">Title</th>
                            <th className="p-4 text-left font-semibold">Type</th>
                            <th className="p-4 text-left font-semibold">Status</th>
                            <th className="p-4 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    {complainces.length !== 0 ? complainces.map((item, index) => (
                        <tbody className=' bg-white border-b border-slate-100'>
                            <tr key={index}>
                                <td className="p-4"><p className='max-w-44 truncate'>{item.description}</p></td>
                                <td className="p-4">{item.id}</td>
                                <td className="p-4">{item.assignTo}</td>
                                <td className="p-4">{item.title}</td>
                                <td className="p-4">{item.type}</td>
                                <td className="p-4">
                                    <span className="bg-[#f1f6e7] text-[#6BA10F] px-2 py-1 text-sm rounded-lg">{item.status}</span>
                                </td>
                                <td className="flex flex-row justify-center items-center gap-3">

                                    {/*   VIEW   */}
                                    <Popover>
                                        <PopoverTrigger >
                                            <button className='text-slate-600 hover:text-black text-lg flex items-center my-5'><RiEyeLine className='text-xl' /></button>                                        </PopoverTrigger>
                                        <PopoverContent className='bg-[#f8f8f8] relative top-[-30] right-[45%] w-max-42'>
                                            <div className='font-bold items-center mb-4 text-center'>Compliance Detail</div>
                                            <div className='flex flex-col gap-4'>
                                                <div className='inline-flex border-b border-slate-200'>
                                                    <span className='text-md font-medium text-gray-500'>Title:</span><p className='text-md text-slate-900 font-medium px-2'>{item.title}</p>
                                                </div>
                                                <div className='inline-flex border-b border-slate-200'>
                                                    <span className='text-md font-medium text-gray-500'>Assign to:</span><p className='text-md text-slate-900 font-medium px-2'>{item.assignTo}</p>
                                                </div>
                                                <div className='inline-flex border-b border-slate-200'>
                                                    <span className='text-md font-medium text-gray-500'>Type:</span><p className='text-md text-slate-900 font-medium px-2'>{item.type}</p>
                                                </div>
                                                <div className='inline-flex border-b border-slate-200'>
                                                    <span className='text-md font-medium text-gray-500'>Status:</span><p className='text-md text-slate-900 font-medium px-2'>{item.status}</p>
                                                </div>
                                                <div className='inline-flex text-wrap'>
                                                    <p className='text-md text-slate-900 font-medium '><span className='text-md font-medium text-gray-500 mr-2'>Description:</span>{item.description}</p>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>

                                    {/*   EDIT   */}

                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <button onClick={() => { fillInputFields(item) }} className='text-slate-600 hover:text-black text-lg flex items-center my-5'>
                                                <RiEdit2Line className='text-xl' />
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Edit vendor</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <div className="mb-4 flex gap-4 w-full">
                                                        <input value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="text" placeholder="Assign to" />
                                                    </div>
                                                    <div className=" mb-4 flex gap-4">

                                                        <div className="w-full">
                                                            <Select defaultValue={item.status} onValueChange={(value: string) => { setStatus(value) }}>
                                                                <SelectTrigger className=" border border-slate-300 h-12 appearance-none  rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-[16px] text-gray-900 focus:text-black">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="Open">Open</SelectItem>
                                                                    <SelectItem value="Close">Close</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className="w-full">
                                                            <Select defaultValue={item.type} onValueChange={(value: string) => { setType(value) }}>
                                                                <SelectTrigger className=" border border-slate-300 h-12 appearance-none  rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-[16px] text-gray-900 focus:text-black">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="Build-in">Build-in</SelectItem>
                                                                    <SelectItem value="Custom">Custom</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-900 leading-tight focus:outline-none focus:ring-1 focus:ring-black" type="text" placeholder="Title" />
                                                    </div>
                                                    <div className="mb-4">
                                                        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className=" border-slate-300 appearance-none border rounded-xl w-full p-4 text-gray-900 leading-tight focus:outline-none focus:ring-1 focus:ring-black" placeholder="Description"></textarea>
                                                    </div>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className='text-gray-900 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline'>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => { editData(item.id) }} className=" bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-900 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline">Save</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                    {/*   DELETE   */}
                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <button className='text-slate-600 hover:text-black text-lg flex items-center my-5'><RiDeleteBin6Line className='text-xl' /></button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>You want to delete this compliance issue?</AlertDialogTitle>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => { deleteVendor(item.id); }} className='bg-[#ff3b3b] hover:bg-[#ff4d4d]'>Delete</AlertDialogAction>
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

export default ComplainceList
