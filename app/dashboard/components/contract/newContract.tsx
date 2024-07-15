import React from 'react';

const NewContract = ({ setOpenContractPopUp }: { setOpenContractPopUp: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="bg-white p-4 max-w-[450px] w-full rounded-2xl shadow-md">

                <h2 className="text-[20px] font-semibold font-lexend">Add new Contract</h2>

                <hr className='h-[1px] border-[#A2A1A81A] mr-40 mt-2' />


                <div className="flex justify-between gap-x-3 min-w-[359px] mt-4 items-center p-4 border-gray-200 h-14 rounded-2xl border-[0.48px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z" fill="#16151C" />
                    </svg>
                    <input className="w-full placeholder:text-[#16151C33] placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Search Author" />
                </div>

                <h2 className='font-lexend mt-4 font-semibold text-[#16151C]'>Author</h2>
                <div className='flex justify-between items-center my-3 gap-y-2'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-start  items-center gap-x-[10px]'>
                            <input className='size-5' type="checkbox" />
                            <p className='font-lexend font-light text-[#16151C]'>John Smith</p>
                        </div>
                        <div className='flex justify-end  items-center gap-x-2'>
                            <input className='size-5' type="checkbox" />
                            <p className='font-lexend font-light text-[#16151C]'>Nisha Singh</p>
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-start  items-center gap-x-2'>
                            <input className='size-5' type="checkbox" />
                            <p className='font-lexend font-light text-[#16151C]'>Billy Mathew</p>
                        </div>
                        <div className='flex justify-end  items-center gap-x-2'>
                            <input className='size-5' type="checkbox" />
                            <p className='font-lexend font-light text-[#16151C]'>Harry Osborn</p>
                        </div>
                    </div>
                </div>

                <h2 className='font-lexend mt-8 mb-3 font-semibold text-[#16151C]'>Status</h2>
                <ul className='flex justify-between items-center'>
                    <li className='flex items-center gap-x-2'>
                        <input type="radio" className='size-5' name='status' id='draft' />
                        <label htmlFor='draft'>Draft</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input className='size-5 checked:outline-none' type="radio" name='status' id='approved' />
                        <label htmlFor='approved'>Approved</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input className='size-5 checked:outline-none' type="radio" name='status' id='signed' />
                        <label htmlFor='signed'>Signed</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input className='size-5 checked:outline-none' type="radio" name='status' id='expired' />
                        <label htmlFor='expired'>Expired</label>
                    </li>
                </ul>

                <h2 className='font-lexend mt-8 font-semibold text-[#16151C]'>Category</h2>
                <ul className='flex justify-start gap-x-10 items-center mt-3'>
                    <li className='flex items-center gap-x-2'>
                        <input type="radio" className='size-5' name='category' id='paid' />
                        <label htmlFor='paid'>Paid</label>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <input className='size-5 ' type="radio" name='category' id='free' />
                        <label htmlFor='free'>Free</label>
                    </li>
                </ul>



                <h2 className='font-lexend mt-6 mb-2 font-semibold text-[#16151C]'>Description</h2>
                <textarea rows={3} className='w-full outline-none h-20 font-lexend font-light text-[#16151C] p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in alias sit voluptate repellendus ipsam natus nam libero error similique inventore sunt fugiat nihil voluptas, quisquam illo laborum accusamus fugit.</textarea>


                <div className='mx-auto flex items-center gap-x-2 my-6 justify-center'>
                    <button onClick={() => setOpenContractPopUp(false)} className='border-[1px] w-40 border-[#A2A1A833] rounded-lg py-2'>cancel</button>
                    <button className="bg-[#DDFF8F] rounded-lg py-2 w-40">Save</button>
                </div>
            </div>
        </div>
    );
};

export default NewContract;
