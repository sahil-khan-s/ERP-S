import Nav from "./components/common/nav";
import DashboardLineChart from "./components/dashboard/DashboardLineChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DashboardDoughnutChart from "./components/dashboard/DashboardDoughnutChart ";
import RiskSummaryCard from "./components/dashboard/RiskSummaryCard";
import DashboardTransactionCard from "./components/dashboard/DashboardTransactionCard";
import DashboardContractCard from "./components/dashboard/DashboardContractCard";

export default function Home() {
  return (
    <>
      <section className="bg-white px-4 py-1">
        <Nav />
      </section>
      <main className="min-h-screen py-6 px-4 bg-white">
        <div
          className="grid grid-cols-2 gap-2 justify-between overflow-auto min-w-full"
          style={{ gridTemplateColumns: "63% 35%" }}
        >
          <div className="border-[1px] border-black border-opacity-[0.28] rounded-xl p-4">
            <div className="box my-4 flex w-full justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-normal text-2xl">Status</h3>
                <div className="flex gap-2 items-center">
                  <button className="py-2 px-4 rounded-[6px] text-[#069855] bg-[#E6F5EE] text-[12px] ">
                    Renewed
                  </button>
                  <button className="py-2 px-4 rounded-[6px] text-[#D39C1D] bg-[#FBF5E8] text-[12px] ">
                    Pending
                  </button>
                </div>
              </div>
              <MoreHorizIcon
                className="text-[#686464] cursor-pointer"
                fontSize="large"
              />
            </div>
            <DashboardLineChart />
          </div>
          <div className="border-[1px] border-black border-opacity-[0.28] rounded-xl p-4">
            <div className="box my-4 flex w-full justify-between">
              <h3 className="font-normal text-2xl">Total Sum Calculation</h3>
              <MoreHorizIcon
                className="text-[#686464] cursor-pointer"
                fontSize="large"
              />
            </div>
            <DashboardDoughnutChart />
            <div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <div className="p-2 rounded-full bg-black"></div>
                  <span>Contract</span>
                </div>
                <span className="font-bold">42</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <div className="p-2 rounded-full bg-[#DDFF8F]"></div>
                  <span>Resources</span>
                </div>
                <span className="font-bold">79</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 justify-between overflow-auto min-w-full my-6">
          <RiskSummaryCard />
          <DashboardTransactionCard />

          <DashboardContractCard />
        </div>
      </main>
    </>
  );
}
