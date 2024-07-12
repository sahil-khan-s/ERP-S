import Image from "next/image";
import StatsCard from "../components/contract/statsCard";
import Task, { Task as TaskInterface } from "../components/contract/task";
import ContractCard, { ContractInterface } from "../components/contract/contractcard";
import Link from "next/link"
import StateChart, { DataPoint } from "../components/contract/areaChart";
export default function Contract() {



  const tasks: Array<TaskInterface> = [
    {
      content: "this is a random task description",
      completed: true,
      time: "10:00 AM"
    },
    {
      content: "this is a random task description",
      completed: true,
      time: "10:00 AM"
    },
    {
      content: "this is a random task description",
      completed: true,
      time: "10:00 AM"
    }, {
      content: "this is a random task description",
      completed: false,
      time: "10:00 AM"
    }, {
      content: "this is a random task description",
      completed: false,
      time: "10:00 AM"
    }, {
      content: "this is a random task description",
      completed: false,
      time: "10:00 AM"
    },
    {
      content: "this is a random task description",
      completed: true,
      time: "10:00 AM"
    },
    {
      content: "this is a random task description",
      completed: false,
      time: "10:00 AM"
    },
    {
      content: "this is a random task description",
      completed: true,
      time: "10:00 AM"
    }, {
      content: "this is a random task description",
      completed: false,
      time: "10:00 AM"
    }
  ]

  const contracts: ContractInterface[] = [
    {
      id: 508787257,
      title: "Non Disclosure Agreement",
      location: "London, UK",
      from: "John Snow",
      to: "Larry Page",
      date: "24 OCT ’17"
    },
    {
      id: 3441259408,
      title: "Service Contract",
      location: "New York, US",
      from: "John Snow",
      to: "Larry Page",
      date: "24 OCT ’17"
    }, {
      id: 3441259408,
      title: "Service Contract",
      location: "New York, US",
      from: "John Snow",
      to: "Larry Page",
      date: "24 OCT ’17"
    }, {
      id: 3441259408,
      title: "Service Contract",
      location: "New York, US",
      from: "John Snow",
      to: "Larry Page",
      date: "24 OCT ’17"
    }
  ]


  const stateData: DataPoint[] = [
    {
      month: 'Jan',
      percent: 62,
    },
    {
      month: 'Feb',
      percent: 62,
    },
    {
      month: 'Mar',
      percent: 62,
    },
    {
      month: 'Apr',
      percent: 57,
    },
    {
      month: 'May',
      percent: 43,
    },
    {
      month: 'Jun',
      percent: 43,
    },
    {
      month: 'Jul',
      percent: 23,
    },
    {
      month: 'Aug',
      percent: 23,
    }, {
      month: 'Sep',
      percent: 11,
    }, {
      month: 'Oct',
      percent: 11,
    }, {
      month: 'Nov',
      percent: 17,
    }, {
      month: 'Dec',
      percent: 0,
    }
  ];


  return (
    <main className="max-h-screen bg-white mt-10">

      {/* Stats Cards */}
      <div className="h-[154px] justify-between items-center mt-10 flex gap-x-5">
        {
          Array.from({ length: 6 }).map((_, index) => (
            <StatsCard key={index} />
          ))
        }
      </div>






      <div className="w-full flex justify-between gap-x-14 mt-10">
        {/* task list , right side */}
        <div className=" p-4 w-7/12 rounded-2xl border-[0.48px] border-gray-500">


          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-x-2">
              <img className="size-8" src="https://static.thenounproject.com/png/699088-200.png" alt="" />
              <h2 className="text-xl font-outfit capitalize">Task list for today <span className="text-[#6BA10F]">(13 Dec)</span></h2>
            </div>
            <h2 className="text-xl font-outfit text-[#6BA10F]">+Add new task</h2>
          </div>

          {/* incomplete tasks */}
          <div className="flex flex-col mt-6 gap-y-6 max-h-56 overflow-y-scroll">
            {
              tasks.map((task, index) => {
                return !task.completed ? <Task key={index} completed={task.completed} content={task.content} time={task.time} /> : null
              })
            }
          </div>




          {/* completed tasks */}
          <div className="flex justify-start mt-5 items-center">
            <div className="flex justify-center items-center gap-x-2">
              <img className="size-8" src="https://cdn2.iconfinder.com/data/icons/beauty-15/42/task-512.png" alt="" />
              <h2 className="text-xl text-[#A2A1A8] font-outfit capitalize">Task list for today <span className="">(13 Dec)</span></h2>
            </div>
          </div>

          <div className="flex flex-col mt-6 gap-y-6 overflow-y-scroll max-h-56">
            {
              tasks.map((task, index) => {
                return task.completed ? <Task key={index} completed={task.completed} content={task.content} time={task.time} /> : null
              })
            }
          </div>

        </div>




        {/* left side */}
        <div className="w-5/12 flex flex-col gap-y-3">

          {/* stats */}
          <div className="min-h-64 w-full p-4 rounded-2xl border-[0.48px] border-gray-500">

            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-outfit">Status</h2>
              <div className="flex gap-x-2">
                <p className="flex items-center gap-x-1 text-xs font-light p-2 text-[#069855] bg-[#E6F5EE] rounded-lg border-[0.48px] border-[#069855]">Renewed</p>
                <p className="flex items-center gap-x-1 text-xs font-light p-2 text-[#D39C1D] bg-[#FBF5E8] rounded-lg border-[0.48px] border-[#D39C1D]">Pending</p>
              </div>
            </div>


            <div className="w-full h-64 mt-4">
              <StateChart data={stateData} />
            </div>

          </div>

          {/* contracts */}
          <div className="w-full rounded-2xl p-4 border-[0.48px] border-gray-500">

            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-outfit">Contracts</h2>
              <div className="flex gap-x-2">
                <button className="flex items-center gap-x-1 p-2 rounded-lg border-[0.48px] border-gray-500">
                  <img className="size-3" src="https://icons.veryicon.com/png/o/internet--web/collection-and-payment/pencil-43.png" alt="" />
                  <p className="font-outfit capitalize font-light text-xs">edit</p>
                </button>
                <Link href={"/dashboard/contract/details"} className="font-outfit font-light text-xs rounded-lg  p-2 border-[0.48px] border-gray-500">View All</Link>
              </div>
            </div>


            <div className="flex max-h-48 overflow-y-scroll flex-col gap-y-2 mt-10">
              {
                contracts.map((contract, index) => {
                  return <ContractCard
                    key={index}
                    title={contract.title}
                    location={contract.location}
                    from={contract.from}
                    to={contract.to}
                    date={contract.date}
                    id={contract.id}
                  />
                })
              }
            </div>




          </div>
        </div>


      </div>
    </main>
  );
}
