import React from 'react';
import VendorChartDetail from './VendorChartDetail';
import { TiLocationOutline, TiBriefcase } from "react-icons/ti";


const newVendorUser = {
    "Vendor Name": "Jhon Smith",
    "Location": "Wynn Resorts Las Vegas, NV 89109",
    "Vendor Type": "Remote",
    "Email": "Jhonsmith90@gmail.com",
    "Phone": "034709897668"
}

const NewVendor = () => {
    return (
        <div className='flex h-full flex-row'>

            <div className="flex p-4 m-3 bg-white border border-slate-300 rounded-xl">
                <div className="flex-shrink-0">
                    <img className=" rounded-xl w-72 h-96  object-cover" src="https://s3-alpha-sig.figma.com/img/c71e/c81e/48ad1573452bb5d1a7700cbc11a41c69?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4Ido4g2lZzjYaw0FjH8iOCzpvEucanIhig75034oFMBK3cDr9MrVyp3VOzUMzt-l26bHXhz20JNLuhRj0kl9T3biGgBqo4x-8FnrxiYAuBL7px58vtBMTgULPB6M5uh7577jheR03n7716keEsGDqfsf~iTZktvf5MTLlkTAgzIaVPhikf15h04oNClpb2AEVB6IH5t9mO-uD9d2WhSwoLZD54Ds7uirH63vzNOI1yey-YcR405HNLTeNeDONzk-wclfKC1-aEiBTQPBisEQdmN0SP1oiQZ5ddsHzGJjrtOxZK-jRegr3wUxzaDA4oEzJ-TrYWB37LIyMIa8mrUhw__" alt="Vendor" />
                </div>
                <div className="flex flex-col gap-1 p-8">
                    <div className="text-2xl pt-4 font-semibold">Vendor Details</div>
                    <div className="mt-4 gap-2">
                        <div className="text-md font-medium text-gray-400 flex flex-row"></div>
                        <div className="text-md font-medium text-gray-400 flex flex-row"><TiBriefcase className='text-2xl' /><p>Vendor Name: </p></div>
                        <div className="text-md text-black font-semibold px-2">{newVendorUser['Vendor Name']}</div>
                    </div>
                    <div className="mt-5 gap-2">
                        <div className="text-md font-medium text-gray-400 flex flex-row"><TiLocationOutline className='text-2xl' /><p>Location: </p></div>
                        <div className="text-md text-black font-semibold  px-2">{newVendorUser.Location}</div>
                    </div>
                    <div className="mt-5 flex flex-row gap-2">
                        <div className="text-md font-medium text-gray-400">Vendor Type: </div>
                        <div className="text-md text-black font-semibold ">{newVendorUser['Vendor Type']}</div>
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
