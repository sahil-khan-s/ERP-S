import Nav from "./components/common/nav";
import DashboardLineChart from "./components/dashboard/DashboardLineChart";
import DashboardTransactionCard from "./components/dashboard/DashboardTransactionCard";
import DashboardContractCard from "./components/dashboard/DashboardContractCard";
import ComplianceChart from "./components/complaince&risk/Chart";
import RiskSummary from "./components/complaince&risk/RiskSummary";

export default async function Home() {
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
                <button className="text-gray-600 cursor-pointer">•••</button>
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
              <button className="text-gray-600 cursor-pointer">•••</button>
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
