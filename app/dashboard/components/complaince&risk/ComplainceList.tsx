"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";


const ComplainceList = ({ reload }: { reload: boolean }) => {

    type complianceType = {
        id: number;
        description: string;
        assignTo: string;
        title: string;
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
                throw new Error(`Failed to update compliance: ${response.statusText}`);
            }
        } catch (error) {
            console.error(error)
        }
        finally {
            fetchCompliance()
        }
    }

    //     DELETE FUNCTION
    const deleteCompliance = async (id: number) => {
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
                fetchCompliance();
            }
        } catch (error) {
            console.error("An error occurred while deleting the compliance issue:", error);
        }
    };

    // const fetchCompliance = async (): Promise<complianceType[]> => {
    //     try {
    //         const response = await axios.get('/api/compliance');
    //         return response.data.complianceIssue; // Assuming 'complianceIssue' is the key in the response
    //     } catch (error) {
    //         throw new Error('Error fetching complianceIssue'); // Throw error to be handled by React Query
    //     }
    // };

    // const { data: complainces, error, isLoading } = useQuery<complianceType[], Error>({
    //     queryKey: ['complianceIssue'], // Array format for queryKey
    //     queryFn: fetchCompliance,  // The function to fetch data
    // });
    // if (isLoading) return <div className='flex items-center justify-center h-[500px]'><span className="loader"></span></div>;
    // if (error) return <div>{error.message}</div>;

   //   FETCH COMPLIANCE FUNCTION
    const fetchCompliance = async () => {
        try{
            const response = await fetch("/api/compliance");
            const data = await response.json();
            setCompliances(await data.complianceIssue);
        }
        catch{
            console.log(Error)
        }
    };
  
  
    //      UseEffect
    useEffect(() => {
      fetchCompliance();
    }, []);

    return (
        <div className=" h-92 overflow-x-auto">
            {complainces ?
                <table className=" rounded w-full">
                    <thead className="  bg-[#F5F5F5]">
                        <tr >
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">Description</th>
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">ID</th>
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">Assign To</th>
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">Title</th>
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">Type</th>
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">Status</th>
                            <th className="px-2 py-4 lg:p-4 text-center lg:text-left font-medium lg:font-semibold text-sm lg:text-base text-nowrap">Action</th>
                        </tr>
                    </thead>
                    {complainces.length !== 0 && complainces.map((item, index) => (
                        <tbody className=' bg-white border-b border-slate-100'>
                            <tr key={index}>
                                <td className="pl-0.5 py-3 text-left lg:p-4"><p className='max-w-20 md:max-w-40 lg:max-w-44 truncate text-sm md:text-sm lg:text-base'>{item.description}</p></td>
                                <td className="pr-0.5 py-3 text-center md:text-left md:text-sm lg:p-4 text-sm lg:text-base">{item.id}</td>
                                <td className="px-0.5 py-3 text-center md:text-left md:text-sm lg:p-4 text-sm max-w-12 truncate lg:max-w-full lg:text-base">{item.assignTo}</td>
                                <td className="px-0.5 py-3 text-center md:text-left md:text-sm lg:p-4 text-sm max-w-20 truncate lg:max-w-full lg:text-base">{item.title}</td>
                                <td className="px-0.5 py-3 text-center md:text-left md:text-sm lg:p-4 text-sm lg:text-base">{item.type}</td>
                                <td className="px-0.5 py-3 text-center md:text-left md:text-sm lg:p-4 text-sm lg:text-base">
                                    <span className="bg-[#f1f6e7] text-[#6BA10F] px-0.5 lg:px-2 lg:py-1 text-xs md:text-sm lg:text-sm rounded-lg">{item.status}</span>
                                </td>
                                <td className="flex flex-row justify-center items-center gap-3">

                                    {/*   VIEW   */}
                                    <Popover>
                                        <PopoverTrigger >
                                            <button className='text-slate-600 hover:text-black flex items-center my-5'><RiEyeLine className='text-sm lg:text-xl' /></button>                                        </PopoverTrigger>
                                        <PopoverContent className='w-52 md:w-96 bg-[#f8f8f8] relative right-16 top-[-45] md:top-auto md:right-[30%] w-max-42'>
                                            <div className='font-bold items-center mb-3 lg:mb-4 text-center  md:text-base'>Compliance Detail</div>
                                            <div className='flex flex-col gap-3 md:gap-4'>
                                                <div className='inline-flex border-b border-slate-200 items-center'>
                                                    <p className='text-sm lg:text-base text-slate-900 font-medium px-1 lg:px-2'><span className='text-sm lg:text-base font-medium text-gray-500 mr-1'>Title:</span>{item.title}</p>
                                                </div>
                                                <div className='inline-flex border-b border-slate-200 items-center'>
                                                    <span className='text-sm lg:text-base font-medium text-gray-500'>Assign to:</span><p className='text-sm lg:text-base text-slate-900 font-medium px-1 lg:px-2'>{item.assignTo}</p>
                                                </div>
                                                <div className='inline-flex border-b border-slate-200 items-center'>
                                                    <span className='text-sm lg:text-base font-medium text-gray-500'>Type:</span><p className='text-sm lg:text-base text-slate-900 font-medium px-1 lg:px-2'>{item.type}</p>
                                                </div>
                                                <div className='inline-flex border-b border-slate-200 items-center'>
                                                    <span className='text-sm lg:text-base font-medium text-gray-500'>Status:</span><p className='text-sm lg:text-base text-slate-900 font-medium px-1 lg:px-2'>{item.status}</p>
                                                </div>
                                                <div className='inline-flex text-wrap'>
                                                    <p className='text-sm lg:text-base text-slate-900 font-medium leading-snug'><span className='text-sm lg:text-base font-medium text-gray-500 mr-1 lg:mr-2'>Description:</span>{item.description}</p>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>

                                    {/*   EDIT   */}

                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <button onClick={() => { fillInputFields(item) }} className='text-slate-600 hover:text-black flex items-center my-5'>
                                                <RiEdit2Line className='text-sm lg:text-xl' />
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className=' text-sm md:text-lg'>Edit Compliance</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <div className="mb-2 md:mb-4 w-full">
                                                        <input value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className=" border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="text" placeholder="Assign to" />
                                                    </div>
                                                    <div className="mb-2 md:mb-4 flex gap-2 md:gap-4">
                                                        <div className="w-full">
                                                            <Select defaultValue={item.status} onValueChange={(value: string) => { setStatus(value) }}>
                                                                <SelectTrigger className="border border-slate-300 h-8 md:h-12 appearance-none  rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-gray-900 text-sm  focus:text-black">
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
                                                                <SelectTrigger className="border border-slate-300 h-8 md:h-12 appearance-none  rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-sm  text-gray-900 focus:text-black">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="Build-in">Build-in</SelectItem>
                                                                    <SelectItem value="Custom">Custom</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-2 md:mb-4">
                                                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} className=" border-slate-300 appearance-none border rounded-xl w-full  p-2 px-3 md:p-4 text-gray-900 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-sm " type="text" placeholder="Title" />
                                                    </div>
                                                    <div className="mb-2 md:mb-4">
                                                        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className=" border-slate-300 appearance-none border rounded-xl w-full  p-2 px-3 md:p-4 text-gray-900 leading-tight focus:outline-none focus:ring-1 focus:ring-black text-sm " placeholder="Description"></textarea>
                                                    </div>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter >
                                                <AlertDialogCancel className='text-gray-900 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline text-xs md:text-sm'>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => { editData(item.id) }} className=" bg-[#DDFF8F] hover:bg-[#C8F064] text-gray-900 font-semibold py-2 rounded-lg focus:outline-none focus:border border-slate-300-outline text-xs md:text-sm">Save</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                    {/*   DELETE   */}
                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <button className='text-slate-600 hover:text-black flex items-center my-5'><RiDeleteBin6Line className='text-sm lg:text-xl' /></button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className='text-sm md:text-base'>You want to delete this compliance issue?</AlertDialogTitle>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className='text-xs md:text-sm'>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => { deleteCompliance(item.id); }} className='text-xs md:text-sm bg-[#ff3b3b] hover:bg-[#ff4d4d]'>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </td>
                            </tr>
                        </tbody>
                    ))
                        //:
                        //     <div className='h-52 w-[70vh] absolute left-[40%] items-center'>
                        //         <p className='text-center text-nowrap m-24 font-xl font-semibold'>The Compliance list is currently empty.</p>
                        //     </div>
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