import React from 'react'
//COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
//ICONS
import { FaUser } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";

const riskInformation = [
  {
    no:"Risk 1",
    image:"https://s3-alpha-sig.figma.com/img/c71e/c81e/48ad1573452bb5d1a7700cbc11a41c69?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4Ido4g2lZzjYaw0FjH8iOCzpvEucanIhig75034oFMBK3cDr9MrVyp3VOzUMzt-l26bHXhz20JNLuhRj0kl9T3biGgBqo4x-8FnrxiYAuBL7px58vtBMTgULPB6M5uh7577jheR03n7716keEsGDqfsf~iTZktvf5MTLlkTAgzIaVPhikf15h04oNClpb2AEVB6IH5t9mO-uD9d2WhSwoLZD54Ds7uirH63vzNOI1yey-YcR405HNLTeNeDONzk-wclfKC1-aEiBTQPBisEQdmN0SP1oiQZ5ddsHzGJjrtOxZK-jRegr3wUxzaDA4oEzJ-TrYWB37LIyMIa8mrUhw__",
    riskOwner:"John Doe",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    level:"High"
  }, {
    image:"https://s3-alpha-sig.figma.com/img/b19c/18b7/276c5a98f2d4726285cc1051f6e46cf1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QICOCxJ7AHoQw7ULqK8uHaQq4jzhjp3wXEx1ko3dRsVcn-NhVWg-tIDAodCo1k4CsUuvcO9emNkYLZfcA~jDoX9~ySFobi6yUxAGNasWaQljTR9J4KpQly2tWzzUsduc1M1MPHiw-gGtY2RugIphO6CZxZFSPIGKKqxlBLaaP2ku8kX6JGULFYVg62FHDOeZY7VtrG4bs7r8yJQZ86jkbesqNB6YZU-6H-k-pNbMfMCY6GXNqRD~1vHvKFkof4AFT2EI1t61rUt79SeaOhBfqAdUWfWNmFEbqX1Yq2kZ~ivssuAMsDEncyx8MaMNNev8ngmvWS-FJrTIQeOsINvXew__",
    riskOwner:"John Doe",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    level:"High"
  }
]



const RiskTabs = () => {
    return (
<Tabs defaultValue="information" className="w-full md:w-2/3">
  <TabsList>
    <TabsTrigger value="information"><FaUser className='mr-1' />General Information</TabsTrigger>
    <TabsTrigger value="assessment"><GoBriefcase className='mr-1' />Risk Assessment</TabsTrigger>
    <TabsTrigger value="mitigation"><LuClipboardList className='mr-1' />Risk Mitigation</TabsTrigger>
  </TabsList>
  <TabsContent value="information">
    {riskInformation.map((item,index)=>(
         <div className=" border w-[600px] rounded-xl p-4 flex items-start mb-4">
               <div className=' flex-shrink-0'> 
                <img src={item.image} alt="Risk 1" className=" w-[151.2px] h-[221.13px] object-cover rounded-lg mr-2" />
               </div>
               <div className='flex w-full flex-col m-4 gap-3'>
                  <div className='flex flex-row justify-between items-center'>
                    <h3 className="text-red-500 text-xl">Risk 1</h3>
                    <button className="bg-slate-100 text-sm text-[#6BA10F] rounded-full  px-4 py-1 ">Open</button>
                  </div>
                   <div className='flex flex-row'><p className='text-gray-400'><strong className='text-black font-medium'> Risk Owner: </strong>{item.riskOwner}</p></div>
                   <div className='flex flex-row'><p className='text-gray-400'><strong className='text-black font-medium'> Descripition: </strong>{item.description}</p></div>
                   <div className='flex flex-row'><p className='text-gray-400'><strong className='text-black font-medium'> Level: </strong> {item.level}</p></div>
              
               </div>
              </div>
    ))}
  </TabsContent>
  <TabsContent className='min-h-screen bg-white mt-8 text-center' value="assessment"> Risk Assessment tab</TabsContent>
  <TabsContent className='min-h-screen bg-white mt-8 text-center' value="mitigation"> Risk Mitigation tab</TabsContent>
</Tabs>
    )
}

export default RiskTabs
