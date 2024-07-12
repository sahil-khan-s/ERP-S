import React from 'react'
import ContractCard, { ContractInterface } from '../../components/contract/contractcard'

const page = () => {

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



    return (
        <div className='w-full h-full bg-white flex mt-10 justify-between gap-x-10'>

            <div className='w-5/12 p-4 border-[0.48px] border-gray-500 rounded-2xl'>
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


                <div className="flex overflow-y-scroll flex-col gap-y-2 mt-10">
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


            <div className='w-7/12  p-4 border-[0.48px] border-gray-500 rounded-2xl'>
                right side
            </div>




        </div>
    )
}

export default page