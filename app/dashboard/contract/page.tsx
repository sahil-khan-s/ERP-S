import Image from "next/image";
import StatsCard from "../components/common/statsCard";
import Task, { Task as TaskInterface } from "../components/common/task";
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


  return (
    <main className="min-h-screen bg-white mt-10">
      {/* search, filter and add new contract button */}
      <div className="flex justify-between items-center">

        <div className="flex gap-x-5 justify-between">
          {/* input filed */}
          <div className="flex justify-between min-w-[359px] items-center p-4 border-gray-500 h-14 rounded-2xl border-[0.48px]">
            <img className="size-4" src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="" />
            <input className="w-60 placeholder:text-black placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Search by name, role, department..." />
            <div className="flex justify-center items-center gap-x-2">
              <img className="size-4" src="https://static.thenounproject.com/png/2366951-200.png" alt="" />
              <p className="font-outfit">K</p>
            </div>
          </div>

          <div className="flex justify-between gap-x-2 items-center p-4 border-gray-500 h-14 rounded-2xl border-[0.48px]">
            <p className="text-black font-outfit font-light text-sm capitalize">filter</p>
            <img className="size-4" src="https://cdn3.iconfinder.com/data/icons/navigation-53/24/4_-_Navigation_hotdog_list_menu_options_stack-512.png" alt="" />
          </div>
        </div>



        <button className="flex justify-between gap-x-2 bg-[#DDFF8F] items-center p-4  h-14 rounded-2xl">
          <p className="text-black font-outfit font-light text-sm capitalize">
            Add new Contract
          </p>
          <img className="size-5" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="" />
        </button>
      </div>


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
          <div className="flex flex-col mt-6 gap-y-6 max-h-48 overflow-y-scroll">
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

          <div className="flex flex-col mt-6 gap-y-6 overflow-y-scroll max-h-48">
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
          <div className=" h-40 w-full rounded-2xl border-[0.48px] border-gray-500 flex justify-center items-center">
            <h2>State Graph</h2>
          </div>

          {/* contracts */}
          <div className="w-full h-40 rounded-2xl p-4 border-[0.48px] border-gray-500">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-outfit">Contracts</h2>
              <div className="flex gap-x-2">
                <button className="flex items-center gap-x-1 p-2 rounded-lg border-[0.48px] border-gray-500">
                  <img className="size-3" src="https://icons.veryicon.com/png/o/internet--web/collection-and-payment/pencil-43.png" alt="" />
                  <p className="font-outfit capitalize font-light text-xs">edit</p>
                </button>
                <button className="font-outfit font-light text-xs rounded-lg  p-2 border-[0.48px] border-gray-500">View All</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
