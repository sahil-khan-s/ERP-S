import React, { useEffect, useState } from 'react'
import moment from 'moment';
//ICONS
import { RiDeleteBin6Line, RiEyeLine, RiEdit2Line } from "react-icons/ri";
import Image from 'next/image';
// SHADCN.UI
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { TiBriefcase } from 'react-icons/ti';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const VendorsList = () => {
    interface Vendor {
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

    const [vendorsData, setVendorsData] = useState<Vendor[] | null>()
    const [reload, setReload] = useState(false)

    //     EDIT VENDOR useStates
    const [editName, setEditName] = React.useState<string>("")
    const [editEmail, setEditEmail] = React.useState<string>("")
    const [editValue, setEditValue] = React.useState<string>("")
    const [editCategory, setEditCategory] = React.useState<string>("")
    const [editType, setEditType] = React.useState<string>("")
    const [editAddress, setEditAddress] = React.useState<string>("")
    const [editNote, setEditNote] = React.useState<string>("")

    //  EDIT FUNCTION
    const editData = async (editId: number) => {
        try {
            const response = await fetch("/api/vendor", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: editId,
                    name: editName,
                    email: editEmail,
                    contractvalue: editValue,
                    vendorCategory: editCategory,
                    type: editType,
                    address: editAddress,
                    note: editNote
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to update vendor: ${response.statusText}`);
            } else {
                setVendorsData(null)
                setReload(!reload);
            }

        } catch (error) {
            console.error(error)
        }

        finally {
            fetchVendors();
        }
    }

    // FILL EDIT INPUT FIELDS
    const fillData = (user: any) => {
        setEditName(user.name);
        setEditEmail(user.email);
        setEditValue(user.contractvalue);
        setEditCategory(user.vendorCategory);
        setEditType(user.type);
        setEditAddress(user.address);
        setEditNote(user.note)
    }

    //     DELETE FUNCTION
    const deleteVendor = async (id: number) => {
        try {
            const response = await fetch('/api/vendor', {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            const data = await response.json();
            if (data.success) {
                setVendorsData(null)
                fetchVendors()
            }
        } catch (error) {
            console.error("An error occurred while deleting the vendor:", error);
        }
    };

    // FETCH VENDORS FUNCTION
    const fetchVendors = async (): Promise<Vendor[]> => {
        try {
            const response = await axios.get('/api/vendor');
            setVendorsData(response.data.vendors)
            return response.data.vendors; // Assuming 'vendors' is the key in the response
        } catch (error) {
            throw new Error('Error fetching vendors'); // Throw error to be handled by React Query
        }
    };

    // let { data: vendors, error, isLoading } = useQuery<Vendor[], Error>({
    //     queryKey: ['vendors'], // Array format for queryKey
    //     queryFn: fetchVendors,  // The function to fetch data
    // });
    // if (isLoading) return <div className='flex items-center justify-center h-[500px]'><span className="loader"></span></div>;
    //if (error) return <div>{error.message}</div>;


    useEffect(() => {
        fetchVendors();
    }, []);

    return (
        <div className="overflow-x-auto">
            {vendorsData ?
                <table className="rounded mt-3 md:mt-0 w-full table-auto">
                    <thead className="  bg-[#F5F5F5]">
                        <tr >
                            <th className="md:block hidden py-3 px-0.5 md:px-4 md:py-5 text-left text-sm md:text-base font-medium text-nowrap">Vendor Name</th>
                            <th className="md:hidden block py-3 px-0.5 md:px-4 md:py-5 text-left mx-2 md:text-left text-sm md:text-base font-medium text-nowrap">Name</th>
                            <th className="py-3 px-0.5 md:px-4 md:py-5 text-center md:text-left text-sm md:text-base font-medium">ID</th>
                            <th className="md:hidden block py-3 px-0.5 md:px-4 md:py-5 text-center text-sm md:text-base md:text-left font-medium text-nowrap">Value</th>
                            <th className="md:block hidden py-3 px-0.5 md:px-4 md:py-5 text-center text-sm md:text-base md:text-left font-medium text-nowrap">Contract Value</th>
                            <th className="py-3 px-0.5 md:px-4 md:py-5 text-center md:text-left text-sm md:text-base font-medium">Category</th>
                            <th className="py-3 px-0.5 md:px-4 md:py-5 text-center md:text-left text-sm md:text-base font-medium">Type</th>
                            <th className="py-3 px-0.5 md:px-4 md:py-5 text-center md:text-left text-sm md:text-base font-medium">Status</th>
                            <th className="py-3 px-0.5 md:px-4 md:py-5 text-center md:text-left text-sm md:text-base font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className=' border-b border-slate-100'>
                        {/* vendorsData?.length !== 0 ?  */}
                        {vendorsData?.map((item, index) => (
                            <tr key={index} className='my-1'>
                                <td className="py-2 px-1 w-max text-sm md:text-base md:p-4 text-nowrap flex flex-row items-center gap-2"><Image src={item.imageUrl} width={45} height={45} alt='' className="object-cover rounded-full h-9 w-9 md:h-10 md:w-10 md:mx-2" /><p>{item.name}</p></td>
                                <td className="py-2 px-1 text-sm md:text-base md:p-4 text-nowrap">{item.id}</td>
                                <td className="py-2 px-1 text-sm md:text-base md:p-4 text-nowrap ">{item.contractvalue}</td>
                                <td className="py-2 px-1 text-sm md:text-base md:p-4 text-nowrap ">{item.vendorCategory}</td>
                                <td className="py-2 px-1 text-sm md:text-base md:p-4 text-nowrap">{item.type}</td>
                                <td className="py-2 px-1 text-sm md:text-base md:p-4 text-nowrap ">
                                    <span className=" bg-[#f1f6e7] text-[#6BA10F] px-1 md:px-2 py-1 text-sm md:text-sm rounded-lg">Permanent</span>
                                </td>
                                {/*   ACTIONS   */}
                                <td className="flex flex-row justify-center items-center gap-3 mx-1 md:gap-3">
                                    {/*   VIEW   */}
                                    <Popover>
                                        <PopoverTrigger>
                                            <button className='text-slate-600 hover:text-black text-lg h-10'><RiEyeLine className='text-sm mt-1 md:text-xl' /></button>
                                        </PopoverTrigger>
                                        <PopoverContent className='bg-slate-50 relative md:top-auto md:right-[22%] w-auto md:w-max p-2 md:p-4'>
                                            <h4 className='font-semibold md:font-bold text-left items-center text-sm md:text-base'>Vendor Detail</h4>
                                            <div>
                                                <div className='flex flex-col md:flex-row gap-1 md:gap-4 mt-2 md:mt-4'>
                                                    <div className='flex justify-start items-start mr-2 md:mr-3 w-full flex-col gap-2'>
                                                        <p className="font-medium text-gray-600 text-sm">Vendor Image: </p>
                                                        <Image className='rounded-xl object-cover h-[131.53px] w-[125px] md:h-[171px] md:w-[150px] ' src={item!.imageUrl} height={150} width={150} alt='' />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <div className='mt-1 md:mt-3 flex flex-col md:flex-row gap-0.5 md:gap-2'>
                                                            <div className="text-sm md:text-base font-medium text-gray-600 text-nowrap flex flex-row"><TiBriefcase className='text-2xl' /><p>Vendor Name: </p></div>
                                                            <div className="text-sm md:text-base text-black font-semibold px-2">{item.name}</div>
                                                        </div>

                                                        <div className="mt-1 md:mt-3 flex flex-col md:flex-row gap-0.5 md:gap-2">
                                                            <div className="text-sm md:text-base font-medium text-gray-600 text-nowrap">Email: </div>
                                                            <div className="text-sm md:text-base text-black font-semibold">{item.email}</div>
                                                        </div>
                                                        <div className="mt-1 md:mt-3 flex flex-col md:flex-row gap-0.5 md:gap-2">
                                                            <div className="text-sm md:text-base font-medium text-gray-600 text-nowrap">Contract Value </div>
                                                            <div className="text-sm md:text-base text-black font-semibold">{item.contractvalue}</div>
                                                        </div>
                                                        <div className="mt-1 md:mt-3 flex flex-col md:flex-row gap-0.5 md:gap-2">
                                                            <div className="text-sm md:text-base font-medium text-gray-600 text-nowrap">Vendor Category: </div>
                                                            <div className="text-sm md:text-base text-black font-semibold ">{item.vendorCategory}</div>
                                                        </div>
                                                        <p className='mt-1 md:mt-3 text-gray-600 font-semibold text-sm inline-flex'>Date: <p className='text-black'>{moment(item.date).format('MMMM Do, YYYY')}</p></p>
                                                    </div>
                                                </div>
                                                <div className="mt-1 md:mt-3 flex flex-col md:flex-row gap-0.5 md:gap-2">
                                                    <div className="text-sm md:text-base text-black font-semibold max-w-32 md:max-w-full">
                                                        <span className="text-sm md:text-base font-medium text-gray-600">Note: </span>
                                                        {item.note}</div>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>

                                    {/*   EDIT   */}
                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <button onClick={() => { fillData(item) }} className='text-slate-600 hover:text-black text-lg'>
                                                <RiEdit2Line className='text-sm md:text-xl' />
                                            </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Edit vendor</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <div className="mb-2 md:mb-4 flex gap-2 md:gap-4">
                                                        <div className="w-full">
                                                            <input value={editName} onChange={(e) => { setEditName(e.target.value) }} className="border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="text" placeholder="Vendor Name" />
                                                        </div>
                                                        <div className="w-full">
                                                            <input value={editEmail} onChange={(e) => { setEditEmail(e.target.value) }} className="border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="email" placeholder="Contract Email" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-2 md:mb-4 flex gap-2 md:gap-4">
                                                        <div className="w-full">
                                                            <input value={editValue} onChange={(e) => { setEditValue(e.target.value) }} className="border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="text" placeholder="Contract Value" />
                                                        </div>
                                                        <div className="w-full">
                                                            <input value={editCategory} onChange={(e) => { setEditCategory(e.target.value) }} className="border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="text" placeholder="Category" />
                                                        </div>
                                                        <div className="w-full">
                                                            <Select defaultValue={item.type} onValueChange={(value: string) => { setEditType(value) }}>
                                                                <SelectTrigger className="border border-slate-300 appearance-none h-[38px] md:h-[52px] rounded-xl w-full p-4 focus:ring-1 leading-tight outline-none text-gray-900 text-sm  focus:text-black">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="Office">Office</SelectItem>
                                                                    <SelectItem value="Remote">Remote</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-2 md:mb-4">
                                                        <input value={editAddress} onChange={(e) => { setEditAddress(e.target.value) }} className="border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" type="text" placeholder="Address" />
                                                    </div>
                                                    <div>
                                                        <textarea value={editNote} onChange={(e) => { setEditNote(e.target.value) }} className="border-slate-300 appearance-none border rounded-xl w-full p-2 px-3 md:p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-900" placeholder="Notes"></textarea>
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
                                        <AlertDialogTrigger><button className='text-slate-600 hover:text-black text-lg'><RiDeleteBin6Line className='text-sm md:text-xl' /></button></AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>You want to delete {item.name} vendor?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action will permanently delete {item.name} vendor data.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => { deleteVendor(item.id); }} className='bg-[#ff3b3b] hover:bg-[#ff4d4d]'>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                :
                <div className='flex items-center justify-center h-[500px]'><span className="loader"></span></div>
            }
        </div>
    )
}

export default VendorsList