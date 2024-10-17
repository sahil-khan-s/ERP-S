import React from 'react';
import VendorChartDetail from './VendorChartDetail';
import { TiLocationOutline, TiBriefcase } from "react-icons/ti";


const newVendorUser = {
    VendorName: "Jhon Smith",
    Location: "Wynn Resorts Las Vegas, NV 89109",
    VendorType: "Remote",
    Email: "Jhonsmith90@gmail.com",
    Phone: "034709897668",
    img:"https://firebasestorage.googleapis.com/v0/b/epr-s-52978.appspot.com/o/images%2F5.jpg?alt=media&token=bf4d88a9-04ef-473d-b982-829e550cd357"
}

const NewVendor = () => {
    return (
        <div className='flex h-full flex-row'>

            <div className="flex p-4 m-3 bg-white border border-slate-300 rounded-xl">
                <div className="flex-shrink-0">
                    <img className=" rounded-xl w-72 h-96  object-cover" src={newVendorUser.img} alt="Vendor" />
                </div>
                <div className="flex flex-col gap-1 p-8">
                    <div className="text-2xl pt-4 font-semibold">Vendor Details</div>
                    <div className="mt-4 gap-2">
                        <div className="text-md font-medium text-gray-400 flex flex-row"></div>
                        <div className="text-md font-medium text-gray-400 flex flex-row"><TiBriefcase className='text-2xl' /><p>Vendor Name: </p></div>
                        <div className="text-md text-black font-semibold px-2">{newVendorUser.VendorName}</div>
                    </div>
                    <div className="mt-5 gap-2">
                        <div className="text-md font-medium text-gray-400 flex flex-row"><TiLocationOutline className='text-2xl' /><p>Location: </p></div>
                        <div className="text-md text-black font-semibold  px-2">{newVendorUser.Location}</div>
                    </div>
                    <div className="mt-5 flex flex-row gap-2">
                        <div className="text-md font-medium text-gray-400">Vendor Type: </div>
                        <div className="text-md text-black font-semibold ">{newVendorUser.VendorType}</div>
                    </div>
                    <div className="mt-5 flex flex-row gap-2">
                        <div className="text-md font-medium text-gray-400">Email: </div>
                        <div className="text-md text-black font-semibold">{newVendorUser.Email}</div>
                    </div>
                    <div className="mt-5 flex flex-row gap-2">
                        <div className="text-md font-medium text-gray-400">Phone: </div>
                        <div className="text-md text-black font-semibold">{newVendorUser.Phone}</div>
                    </div>
                </div>
            </div>
            <VendorChartDetail />
        </div>
    );
};

export default NewVendor;
