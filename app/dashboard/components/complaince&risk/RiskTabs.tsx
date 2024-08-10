import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
//ICONS
import { FaUser } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";

const riskInformation = [
  {
    no:"Risk 1",
    image:"https://firebasestorage.googleapis.com/v0/b/epr-s-52978.appspot.com/o/images%2F5.jpg?alt=media&token=bf4d88a9-04ef-473d-b982-829e550cd357",
    riskOwner:"John Doe",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    level:"High"
  }, {
    no:"Risk 2",
    image:"https://firebasestorage.googleapis.com/v0/b/epr-s-52978.appspot.com/o/images%2F7.jpg?alt=media&token=a5fdab38-b45e-438a-860d-2ca5500e9276",
    riskOwner:"John Doe",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    level:"High"
  }
]



const RiskTabs = () => {
    return (
<Tabs defaultValue="information" className="w-full md:w-2/3">
  <TabsList className='md:block hidden'>
    <TabsTrigger value="information"><FaUser className='mr-1' />General Information</TabsTrigger>
    <TabsTrigger value="assessment"><GoBriefcase className='mr-1' />Risk Assessment</TabsTrigger>
    <TabsTrigger value="mitigation"><LuClipboardList className='mr-1' />Risk Mitigation</TabsTrigger>
  </TabsList>
  <TabsContent value="information">
    <h4 className='lg:hidden text-gray-600 m-1 m-t0 text-lg font-semibold'>General Information</h4>
    {riskInformation.map((item,index)=>(
         <div className=" border lg:w-[600px] rounded-xl p-2 lg:p-4 flex items-start mb-2 lg:mb-3">
               <div className=' flex-shrink-0'> 
                <img src={item.image} alt="Risk 1" className=" w-[151.2px] h-[221.13px] object-cover rounded-lg mr-2" />
               </div>
               <div className='flex w-full flex-col m-4 gap-0.5 lg:gap-3'>
                  <div className='flex flex-row justify-between items-center'>
                    <h3 className="text-red-500 text-sm lg:text-xl">{item.no}</h3>
                    <button className="bg-slate-100 text-xs lg:text-sm text-[#6BA10F] rounded-full px-2 lg:px-4 py-1 ">Open</button>
                  </div>
                   <div className='flex flex-row text-sm lg:text-[16px]'><p className='text-gray-400'><strong className='text-black font-medium text-sm lg:text-[16px]'> Risk Owner: </strong>{item.riskOwner}</p></div>
                   <div className='flex flex-row text-sm lg:text-[16px]'><p className='text-gray-400'><strong className='text-black font-medium'> Descripition: </strong>{item.description}</p></div>
                   <div className='flex flex-row  text-sm lg:text-[16px]'><p className='text-gray-400'><strong className='text-black font-medium'> Level: </strong> {item.level}</p></div>
              
               </div>
              </div>
    ))}
  </TabsContent>
  <TabsContent className='min-h-screen w-[600px] bg-white mt-8 text-center' value="assessment"> Risk Assessment tab</TabsContent>
  <TabsContent className='min-h-screen w-[600px] bg-white mt-8 text-center' value="mitigation"> Risk Mitigation tab</TabsContent>
</Tabs>
    )
}

export default RiskTabs
