'use client'
import Nav from "./components/common/nav";
import DashboardLineChart from "./components/dashboard/DashboardLineChart";
import DashboardTransactionCard from "./components/dashboard/DashboardTransactionCard";
import DashboardContractCard from "./components/dashboard/DashboardContractCard";
import ComplianceChart from "./components/complaince&risk/Chart";
import RiskSummary from "./components/complaince&risk/RiskSummary";
import { useSession } from "next-auth/react";
import { } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";

export default function Home() {

  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <section className="bg-white px-4 py-1">
        <Nav />
      </section>
      <main className="min-h-screen py-6 px-4 bg-white">
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-2 justify-between  min-w-full"
          style={{ gridTemplateColumns: "63% 35%" }}
        >
          <div className=" border rounded-xl p-4">
            <div className="box md:my-4 flex w-full justify-between">
              <div className="flex flex-row gap-2 justify-between items-center w-full">
                <h3 className="text-xl  md:text-xl font-semibold">Status</h3>

                <Popover>
                  <PopoverTrigger>
                    <button className="text-gray-600 cursor-pointer">•••</button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="flex justify-start items-center gap-x-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                      <Link href={"/dashboard/contract"}>See Details</Link>
                    </div>
                  </PopoverContent>
                </Popover>

              </div>
            </div>
            <div className="flex gap-2 items-center py-2 md:m\py-0">
              <button className="py-2 px-4 rounded-[6px] text-[#069855] bg-[#E6F5EE] text-[12px] ">
                Renewed
              </button>
              <button className="py-2 px-4 rounded-[6px] text-[#D39C1D] bg-[#FBF5E8] text-[12px] ">
                Pending
              </button>
            </div>
            <DashboardLineChart />
          </div>
          <div className="border rounded-xl p-3 md:p-4">
            <div className="box my-3 md:my-4 flex w-full justify-between">
              <h3 className="text-xl  md:text-xl font-semibold">Total Sum Calculation</h3>
              {/* <button className="text-gray-600 cursor-pointer">•••</button> */}
              <Popover>
                <PopoverTrigger>
                  <button className="text-gray-600 cursor-pointer">•••</button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex items-center justify-start gap-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    <Link href={"/dashboard/contract"}>See Details</Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex justify-center md:my-10 items-center">
              <ComplianceChart count={121} />
            </div>
            <div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <div className="p-2 rounded-full bg-black"></div>
                  <span className="text-sm md:text-base">Contract</span>
                </div>
                <span className=" font-semibold md:font-bold text-sm md:text-base">42</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <div className="p-2 rounded-full bg-[#DDFF8F]"></div>
                  <span className="text-sm md:text-base">Resources</span>
                </div>
                <span className=" font-semibold md:font-bold text-sm md:text-base">79</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 justify-between min-w-full my-4">
          <RiskSummary />
          <DashboardTransactionCard />
          <DashboardContractCard />
        </div>
      </main>
    </>
  );
}
