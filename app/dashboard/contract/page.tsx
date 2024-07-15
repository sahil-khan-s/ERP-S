import Image from "next/image";
import StatsCard from "../components/contract/statsCard";
import Task, { Task as TaskInterface } from "../components/contract/task";
import ContractCard, { ContractInterface } from "../components/contract/contractcard";
import Link from "next/link"
import StateChart, { DataPoint } from "../components/contract/areaChart";



export const contracts: ContractInterface[] = [
  {
    id: 1234567,
    title: 'Service Agreement',
    location: 'New York, US',
    from: 'John Doe',
    to: 'Jane Smith',
    dateFrom: "15 JAN '23",
    dateTo: "15 DEC '23",
    content: 'This service agreement is made between John Doe and Jane Smith. The purpose of this agreement is to set forth the terms and conditions under which John Doe will provide services to Jane Smith. Services to be rendered include, but are not limited to, consulting, advising, and support services as described in the attached Schedule A. John Doe agrees to provide these services in a professional and timely manner, in accordance with industry standards and practices. Jane Smith agrees to compensate John Doe for services rendered at the rate specified in Schedule B. Payment terms are net 30 days from the date of invoice. This agreement is effective from January 15, 2023, and will terminate on December 15, 2023, unless extended by mutual written agreement of both parties. Either party may terminate this agreement upon 30 days written notice to the other party. Upon termination, Jane Smith will pay John Doe for all services rendered and expenses incurred up to the date of termination.'
  },
  {
    id: 2345678,
    title: 'Lease Agreement',
    location: 'San Francisco, US',
    from: 'Alice Johnson',
    to: 'Bob Brown',
    dateFrom: "01 FEB '23",
    dateTo: "31 JAN '24",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
  },
  {
    id: 3456789,
    title: 'Employment Contract',
    location: 'London, UK',
    from: 'David Wilson',
    to: 'Emma Davis',
    dateFrom: "01 MAR '23",
    dateTo: "28 FEB '24",
    content: 'This contract describes the employment terms between David Wilson and Emma Davis.'
  },
  {
    id: 4567890,
    title: 'Consulting Agreement',
    location: 'Toronto, Canada',
    from: 'Michael Miller',
    to: 'Olivia Taylor',
    dateFrom: "01 APR '23",
    dateTo: "01 OCT '23",
    content: 'This contract specifies the consulting services provided by Michael Miller to Olivia Taylor.'
  },
  {
    id: 5678901,
    title: 'Sales Contract',
    location: 'Berlin, Germany',
    from: 'William Moore',
    to: 'Sophia Martinez',
    dateFrom: "01 MAY '23",
    dateTo: "01 NOV '23",
    content: 'This contract defines the sales agreement between William Moore and Sophia Martinez.'
  },
  {
    id: 6789012,
    title: 'Non-Disclosure Agreement',
    location: 'Sydney, Australia',
    from: 'James Anderson',
    to: 'Isabella Thomas',
    dateFrom: "01 JUN '23",
    dateTo: "01 JUN '24",
    content: 'This contract ensures the confidentiality of information shared between James Anderson and Isabella Thomas.'
  },
  {
    id: 7890123,
    title: 'Partnership Agreement',
    location: 'Paris, France',
    from: 'Daniel Jackson',
    to: 'Mia Harris',
    dateFrom: "01 JUL '23",
    dateTo: "01 JUL '24",
    content: 'This contract outlines the partnership terms between Daniel Jackson and Mia Harris.'
  },
  {
    id: 8901234,
    title: 'Freelance Contract',
    location: 'Tokyo, Japan',
    from: 'Matthew White',
    to: 'Amelia Martin',
    dateFrom: "01 AUG '23",
    dateTo: "01 AUG '24",
    content: 'This contract describes the freelance work to be done by Matthew White for Amelia Martin.'
  },
  {
    id: 9012345,
    title: 'Maintenance Agreement',
    location: 'Dubai, UAE',
    from: 'Joseph Lee',
    to: 'Harper Thompson',
    dateFrom: "01 SEP '23",
    dateTo: "01 SEP '24",
    content: 'This contract details the maintenance services provided by Joseph Lee to Harper Thompson.'
  },
  {
    id: 1123456,
    title: 'Investment Contract',
    location: 'Singapore',
    from: 'Christopher Walker',
    to: 'Evelyn Robinson',
    dateFrom: "01 OCT '23",
    dateTo: "01 OCT '24",
    content: 'This contract outlines the investment terms between Christopher Walker and Evelyn Robinson.'
  }
];
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
                    contract={contract}
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
