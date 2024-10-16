"use client";
import Image from "next/image";
import StatsCard from "../components/contract/statsCard";
import Task from "../components/contract/task";
import ContractCard from "../components/contract/contractcard";
import Link from "next/link";
import StateChart, { DataPoint } from "../components/contract/areaChart";
import { useEffect, useState } from "react";
import NewTaskPopUp from "../components/contract/newTaskPopup";
import { useSelector } from "react-redux";
import { store, Store } from "@/store/store";
import { toggleContractEditing } from "@/features/contracts.reducer";
import { Contract as ContractInterface, Task as TaskInterface } from "@prisma/client";
import { toggleTaskEditing } from "@/features/contract-tasks.reducer";
import EditTaskPopup from "../components/contract/editTaskPopup";
import { getTodayTasks } from "./layout";
import Loader, { LoaderSize } from "../components/common/Loader";
import DashboardContractCard from "../components/dashboard/DashboardContractCard";
export default function Contract() {
  const [openTaskPopUp, setOpenTaskPopUp] = useState(false);

  const { allTasks, isEditingEnabled, taskToEdit } = useSelector((state: Store) => { return state.tasks })
  const { allContracts } = useSelector((state: Store) => { return state.contracts });


  const stateChartData: DataPoint[] = [
    {
      month: "Jan",
      percent: 62,
    },
    {
      month: "Feb",
      percent: 62,
    },
    {
      month: "Mar",
      percent: 62,
    },
    {
      month: "Apr",
      percent: 57,
    },
    {
      month: "May",
      percent: 43,
    },
    {
      month: "Jun",
      percent: 43,
    },
    {
      month: "Jul",
      percent: 23,
    },
    {
      month: "Aug",
      percent: 23,
    },
    {
      month: "Sep",
      percent: 11,
    },
    {
      month: "Oct",
      percent: 11,
    },
    {
      month: "Nov",
      percent: 17,
    },
    {
      month: "Dec",
      percent: 0,
    },
  ];

  const handleEditClick = () => {
    store.dispatch(toggleContractEditing())
  }


  const enableTaskEditing = () => {
    store.dispatch(toggleTaskEditing());
  }

  const stats = [
    {
      title: "Active",
      // counts the contracts in allContracts whose status is "active"
      value: allContracts?.reduce((count, contract) => contract.status === "active" ? count + 1 : count, 0) ?? 0
    },
    {
      title: "Renewal",
      value: allContracts?.reduce((count, contract) => contract.status === "renewal" ? count + 1 : count, 0) ?? 0
    },
    {
      title: "Modified",
      value: allContracts?.reduce((count, contract) => contract.status === "modified" ? count + 1 : count, 0) ?? 0
    },
    {
      title: "Viewed",
      value: allContracts?.reduce((count, contract) => contract.status === "viewed" ? count + 1 : count, 0) ?? 0
    },
    {
      title: "Signed",
      value: allContracts?.reduce((count, contract) => contract.status === "signed" ? count + 1 : count, 0) ?? 0
    },
    {
      title: "Not Signed",
      value: allContracts?.reduce((count, contract) => contract.status === "notSigned" ? count + 1 : count, 0) ?? 0
    }
  ]



  useEffect(() => {
    getTodayTasks();
  }, []);



  return (
    <main className="max-h-screen w-screen md:w-full bg-white mt-10">
      {/* Stats Cards */}
      <div className="min-h-[154px] w-full gap-y-4 gap-x-2 mt-10 flex flex-wrap justify-between md:justify-start lg:justify-between items-center">
        {stats.map((state, index) => (
          <StatsCard key={index} data={state} />
        ))}
      </div>

      {openTaskPopUp ? (
        <NewTaskPopUp setOpenTaskPopUp={setOpenTaskPopUp} />
      ) : null}


      {/* popup for editing the Task */}
      {

        (isEditingEnabled && taskToEdit) ?
          <EditTaskPopup task={taskToEdit} /> :
          null
      }

      <div className="w-full flex flex-col md:flex-row gap-y-6 justify-between gap-x-14 my-10">
        {/* task list , right side */}
        <div className=" p-4 w-full md:w-7/12 rounded-2xl border-[0.48px] border-gray-500">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-x-1 md:gap-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 18H14V20H8V18ZM8 22H18V24H8V22Z" fill="#16151C" />
                <path
                  d="M26 4H6C5.46981 4.00079 4.96156 4.21176 4.58666 4.58666C4.21176 4.96156 4.00079 5.46981 4 6V26C4.00079 26.5302 4.21176 27.0384 4.58666 27.4133C4.96156 27.7882 5.46981 27.9992 6 28H26C26.5302 27.9992 27.0384 27.7882 27.4133 27.4133C27.7882 27.0384 27.9992 26.5302 28 26V6C27.9992 5.46981 27.7882 4.96156 27.4133 4.58666C27.0384 4.21176 26.5302 4.00079 26 4ZM18 6V10H14V6H18ZM6 26V6H12V12H20V6H26L26.001 26H6Z"
                  fill="#16151C"
                />
              </svg>

              <h2 className="text-xl  font-outfit capitalize">
                <span className="hidden lg:inline">Task list for today</span>
                <span className="lg:hidden">Tasks</span>
                {" "}
                <span className="text-[#6BA10F]">(13 Dec)</span>
              </h2>
            </div>
            <div className="flex items-center gap-x-2">
              <button onClick={enableTaskEditing} className="flex items-center gap-x-1 p-[6px] rounded-lg md:rounded-xl border-[0.48px] border-[#6BA10F]">
                <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.54659 0.948852C8.94747 0.349732 7.97614 0.349732 7.37702 0.948852L1.295 7.03088C1.25332 7.07256 1.22322 7.12423 1.20751 7.18096L0.407704 10.0684C0.374811 10.1868 0.408236 10.3136 0.495062 10.4005C0.58202 10.4874 0.708795 10.5208 0.827181 10.488L3.71465 9.6881C3.77138 9.67239 3.82305 9.64229 3.86473 9.60061L9.94662 3.51845C10.5448 2.91893 10.5448 1.94841 9.94662 1.34889L9.54659 0.948852ZM2.03781 7.25247L7.01547 2.27467L8.62081 3.88L3.64301 8.8578L2.03781 7.25247ZM1.71714 7.89593L2.99968 9.1786L1.22562 9.67012L1.71714 7.89593ZM9.46456 3.03639L9.10301 3.39793L7.49754 1.79247L7.85922 1.43092C8.19201 1.09813 8.7316 1.09813 9.06439 1.43092L9.46456 1.83095C9.79681 2.16414 9.79681 2.70333 9.46456 3.03639Z" fill="#6BA10F" fill-opacity="0.6" />
                </svg>

                <p className="font-outfit capitalize hidden md:block font-light text-[#6BA10F] text-xs">
                  edit
                </p>
              </button>
              <button
                onClick={() => setOpenTaskPopUp(true)}
                className="text-xl font-outfit text-[#6BA10F]"
              >
                <span className="hidden md:inline">Add new task</span>
                <span className="md:hidden">Add task</span>
              </button>
            </div>
          </div>

          {/* incomplete tasks */}
          <div className="flex flex-col mt-6 gap-y-6 max-h-56 overflow-y-scroll">
            {!allTasks ? (
              // <h2 className="text-xl text-black font-outfit capitalize text-center">
              //   loading...
              // </h2>
              <Loader size={LoaderSize.S} />
            ) : (
              allTasks.map((task, index) => {
                return task.status == "incomplete" ? (
                  <Task key={index} task={task} />
                ) : null;
              })
            )}
          </div>

          {/* completed tasks */}
          <div className="flex justify-start mt-5 items-center">
            <div className="flex justify-center items-center gap-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 18H14V20H8V18ZM8 22H18V24H8V22Z" fill="#A2A1A8" />
                <path
                  d="M26 4H6C5.46981 4.00079 4.96156 4.21176 4.58666 4.58666C4.21176 4.96156 4.00079 5.46981 4 6V26C4.00079 26.5302 4.21176 27.0384 4.58666 27.4133C4.96156 27.7882 5.46981 27.9992 6 28H26C26.5302 27.9992 27.0384 27.7882 27.4133 27.4133C27.7882 27.0384 27.9992 26.5302 28 26V6C27.9992 5.46981 27.7882 4.96156 27.4133 4.58666C27.0384 4.21176 26.5302 4.00079 26 4ZM18 6V10H14V6H18ZM6 26V6H12V12H20V6H26L26.001 26H6Z"
                  fill="#A2A1A8"
                />
              </svg>

              <h2 className="text-xl text-[#A2A1A8] font-outfit capitalize">
                <span className="hidden lg:inline">Task list for today</span>
                <span className="lg:hidden">Tasks</span>
                {" "}
                <span className="">(13 Dec)</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col mt-6 gap-y-6 overflow-y-scroll max-h-56">
            {!allTasks ? (
              // <h2 className="text-xl text-black font-outfit capitalize text-center">
              //   loading...
              // </h2>
              <Loader size={LoaderSize.S} />
            ) : (
              allTasks.map((task, index) => {
                return task.status == "complete" ? (
                  <Task key={index} task={task} />
                ) : null;
              })
            )}
          </div>
        </div>

        {/* left side */}
        <div className=" w-full md:w-5/12 flex flex-col gap-y-3">
          {/* stats */}
          <div className="min-h-64 w-full p-4 rounded-2xl border-[0.48px] border-gray-500">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-outfit">Status</h2>
              <div className="flex gap-x-2">
                <p className="flex items-center gap-x-1 text-xs font-light p-2 text-[#069855] bg-[#E6F5EE] rounded-xl border-[0.48px] border-[#069855]">
                  Renewed
                </p>
                <p className="flex items-center gap-x-1 text-xs font-light p-2 text-[#D39C1D] bg-[#FBF5E8] rounded-xl border-[0.48px] border-[#D39C1D]">
                  Pending
                </p>
              </div>
            </div>

            <div className="w-full h-64 mt-4">
              <StateChart data={stateChartData} />
            </div>
          </div>

          {/* contracts */}
          {/* <div className="w-full mb-20 md:mb-0 rounded-2xl p-4 border-[0.48px] border-gray-500">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-outfit">Contracts</h2>
              <div className="flex gap-x-2">
                <button onClick={handleEditClick} className="flex items-center gap-x-1 p-2 rounded-xl border-[0.48px] border-gray-500">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.54659 0.948852C8.94747 0.349732 7.97614 0.349732 7.37702 0.948852L1.295 7.03088C1.25332 7.07256 1.22322 7.12423 1.20751 7.18096L0.407704 10.0684C0.374811 10.1868 0.408236 10.3136 0.495062 10.4005C0.58202 10.4874 0.708795 10.5208 0.827181 10.488L3.71465 9.6881C3.77138 9.67239 3.82305 9.64229 3.86473 9.60061L9.94662 3.51845C10.5448 2.91893 10.5448 1.94841 9.94662 1.34889L9.54659 0.948852ZM2.03781 7.25247L7.01547 2.27467L8.62081 3.88L3.64301 8.8578L2.03781 7.25247ZM1.71714 7.89593L2.99968 9.1786L1.22562 9.67012L1.71714 7.89593ZM9.46456 3.03639L9.10301 3.39793L7.49754 1.79247L7.85922 1.43092C8.19201 1.09813 8.7316 1.09813 9.06439 1.43092L9.46456 1.83095C9.79681 2.16414 9.79681 2.70333 9.46456 3.03639Z" fill="black" fill-opacity="0.6" />
                  </svg>

                  <p className="font-outfit capitalize font-light text-xs">
                    edit
                  </p>
                </button>
                <Link
                  href={"/dashboard/contract/details"}
                  className="font-outfit font-light text-xs rounded-xl  p-2 border-[0.48px] border-gray-500"
                >
                  View All
                </Link>
              </div>
            </div>

            <div className="flex max-h-48 overflow-y-scroll flex-col gap-y-2 mt-10">
              {
                allContracts == undefined
                  ?
                  <Loader size={LoaderSize.S} />
                  :
                  allContracts.map((contract: ContractInterface, index: number) => {
                    return <ContractCard
                      key={index}
                      contract={contract}
                    />
                  })
              }

            </div>
          </div> */}

          <DashboardContractCard />
        </div>
      </div>
    </main>
  );
}
