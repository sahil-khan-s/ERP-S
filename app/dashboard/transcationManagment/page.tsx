"use client";

import Nav from "../components/common/nav";
import TransactionScreenCard from "../components/TransactionManagement/TransactionScreenCard";
import UserSvg from "@/public/Svgs/Users.svg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TransactionDetails from "../components/TransactionManagement/TransactionDetails";
import TransactionSvg from "@/public/Transaction_Management_Assets/Svgs/Transaction.svg";
import QuickTransferSvg from "@/public/Transaction_Management_Assets/Svgs/Transfer.svg";
import LineChart from "../components/TransactionManagement/LineChart";
import CashIssueImage from "@/public/Transaction_Management_Assets/CardIssue.png";
import TransactionImage from "@/public/Transaction_Management_Assets/Transaction.png";
import TransactionList from "../components/TransactionManagement/TransactionList";
import transactionListSvg from "@/public/Transaction_Management_Assets/Svgs/TransactionList.svg";
import Image from "next/image";
import ActivityCharts from "../components/TransactionManagement/ActivityCharts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Transcation() {

  return (
    <>
      <section className="bg-white px-4 py-1">
        <Nav />
      </section>
      <section className="min-h-screen p-4 bg-white ">
        <div className="flex flex-col gap-8">
          <div
            className="grid grid-cols-2 gap-2 justify-between overflow-auto min-w-full"
            style={{ gridTemplateColumns: "67% 32%" }}
          >
            <div>
              <div className="flex justify-between items-center w-full gap-4">
                {/* Active Users, Transaction and Cash issued cards */}
                <TransactionScreenCard
                  title="Active Users"
                  textColor="#2F70F2"
                  percentageColor="#4EEA7A"
                  image={UserSvg}
                  details="14,7M"
                  icon={<ArrowDropUpIcon fontSize="large" />}
                  percentage="32%"
                />
                <TransactionScreenCard
                  title="Transactions"
                  textColor="#6BA10F"
                  percentageColor="#D62C2C"
                  image={TransactionImage}
                  details="$1.234.10"
                  icon={<ArrowDropDownIcon fontSize="large" />}
                  percentage="32%"
                />
                <TransactionScreenCard
                  title="Card Issued"
                  textColor="#FFBC02"
                  percentageColor="#4EEA7A"
                  image={CashIssueImage}
                  details="3.442"
                  icon={<ArrowDropUpIcon fontSize="large" />}
                  percentage="32%"
                />
              </div>
              <LineChart />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <TransactionDetails
                mainTitle="Transaction Details"
                logo={TransactionSvg}
                ShowTransactionDetails={true}
              />
              <TransactionDetails
                mainTitle="Quick Transfer"
                logo={QuickTransferSvg}
                ShowTransactionDetails={false}
              />
            </div>
          </div>
          <div
            className="box2 grid grid-cols-2 justify-between"
            style={{ gridTemplateColumns: "32% 67%" }}
          >
            <div className="h-[500px] overflow-auto border-[1px] border-black border-opacity-[0.28] rounded-xl">
              <div className="p-4 ">
                <div className="mb-4">
                  <h2 className="text-lg font-medium  flex items-center gap-2">
                    <Image src={transactionListSvg} alt="svg" />
                    Activity Charts
                  </h2>
                </div>
                <hr className="text-[#E3E3E3]" />
                <ActivityCharts />
                <div className="flex flex-col gap-4 items-start text-[#A8A8A8]">
                  <button className="flex justify-between items-center w-full">
                    View Per Quarter <ExpandMoreIcon className="text-black" />
                  </button>
                  <button className="flex justify-between items-center w-full">
                    View Per Year <ExpandMoreIcon className="text-black" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <TransactionList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
