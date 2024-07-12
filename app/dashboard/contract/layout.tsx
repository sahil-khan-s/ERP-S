import React from 'react'
import Contract from './page'
import Nav from '../components/common/nav'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-white p-5'>
            <Nav />
            {/* search, filter and add new contract button */}
            <div className="flex justify-between items-center mt-14">

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

                    <button className="flex justify-between gap-x-2 items-center p-4 border-gray-500 h-14 rounded-2xl border-[0.48px]">
                        <p className="text-black font-outfit font-light text-sm capitalize">filter</p>
                        <img className="size-4" src="https://cdn3.iconfinder.com/data/icons/navigation-53/24/4_-_Navigation_hotdog_list_menu_options_stack-512.png" alt="" />
                    </button>
                </div>



                <button className="flex justify-between gap-x-2 bg-[#DDFF8F] items-center p-4  h-14 rounded-2xl">
                    <p className="text-black font-outfit font-light text-sm capitalize">
                        Add new Contract
                    </p>
                    <img className="size-5" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="" />
                </button>
            </div>
            {children}
        </div>
    )
}

export default layout