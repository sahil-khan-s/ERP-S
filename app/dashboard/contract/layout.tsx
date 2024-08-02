"use client";
import React, { useEffect, useState } from 'react'
import Contract from './page'
import Nav from '../components/common/nav'
import NewContract from '../components/contract/newContract';
import { Store, store } from '@/store/store';
import { addTasks } from "@/features/contract-tasks.reducer";
import { addContracts, toggleContractEditing } from '@/features/contracts.reducer';
import { useSelector } from 'react-redux';
import EditContract from '../components/contract/editContract';

export const getTodayTasks = async () => {
  try {
    const res = await fetch("/api/contracts-section/tasks/today-tasks");
    const data = await res.json();
    if (data.success) {
      store.dispatch(addTasks({ tasks: data.tasks }))
    } else {
      store.dispatch(addTasks({ tasks: [] }))
      throw new Error("Something went wrong while getting tasks");
    }
  } catch (error) {
    store.dispatch(addTasks({ tasks: [] }))
    throw new Error("Error while getting the tasks");
  }
}


export const getAllContracts = async () => {

  try {
    const res = await fetch("/api/contracts-section/contracts");
    if (!res.ok) {
      throw new Error("Something went wrong while getting contracts");
    }
    const data = await res.json();
    if (data.success) {
      store.dispatch(addContracts({ contracts: data.contracts }))
    } else {
      throw new Error("Something went wrong while getting contracts");
    }
  } catch (error) {
    throw new Error("Error while getting the contracts");
  }
}


const layout = ({ children }: { children: React.ReactNode }) => {
  const [openContractPopUp, setOpenContractPopUp] = useState(false);

  const { contractToEdit, isEditingEnabled } = useSelector((state: Store) => state.contracts);


  useEffect(() => {

    getAllContracts()
  }, []);



  function toggleContractPopUp() {
    setOpenContractPopUp(false);
  }

  function removeEditingMode() {
    store.dispatch(toggleContractEditing());
  }

  return (
    <div className='bg-white p-5 min-h-screen'>
      <Nav />

      {
        openContractPopUp ? <NewContract setOpenContractPopUp={toggleContractPopUp} /> : null
      }

      {
        contractToEdit && isEditingEnabled ? <EditContract cancelEdit={removeEditingMode} contract={contractToEdit} /> : null
      }

      {/* search, filter and add new contract button */}
      <div className="flex justify-between items-center mt-10">

        <div className="flex gap-x-5 justify-between">
          {/* input filed */}
          <div className="flex justify-between min-w-[359px] items-center p-4 border-gray-500 h-14 rounded-2xl border-[0.48px]">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_471)">
                <path d="M12.0181 11.2302L14.8752 14.0874" stroke="black" strokeOpacity="0.6" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.6053 7.1032C13.6053 3.94729 11.047 1.38892 7.89104 1.38892C4.73513 1.38892 2.17676 3.94729 2.17676 7.1032C2.17676 10.2591 4.73513 12.8175 7.89104 12.8175C11.047 12.8175 13.6053 10.2591 13.6053 7.1032Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.42857" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_471">
                  <rect width="15.2381" height="15.2381" fill="white" transform="translate(0.906738 0.119141)" />
                </clipPath>
              </defs>
            </svg>
            <input className="w-60 placeholder:text-black placeholder:font-light placeholder:font-outfit font-outfit placeholder:text-sm text-black font-light text-sm outline-none" type="text" placeholder="Search by name, role, department..." />
            <div className="flex justify-center items-center gap-x-[2px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.716 8.45268H9.76358V7.02411H10.716C11.1869 7.02411 11.6472 6.88447 12.0387 6.62285C12.4303 6.36123 12.7355 5.98937 12.9157 5.55431C13.0959 5.11925 13.143 4.64052 13.0512 4.17866C12.9593 3.7168 12.7325 3.29255 12.3995 2.95957C12.0666 2.62659 11.6423 2.39983 11.1805 2.30796C10.7186 2.21609 10.2399 2.26324 9.80481 2.44345C9.36975 2.62366 8.99789 2.92883 8.73627 3.32037C8.47465 3.71192 8.33501 4.17225 8.33501 4.64316V5.59554H6.90644V4.64316C6.90644 4.17225 6.7668 3.71192 6.50517 3.32037C6.24355 2.92883 5.8717 2.62366 5.43664 2.44345C5.00157 2.26324 4.52284 2.21609 4.06098 2.30796C3.59912 2.39983 3.17488 2.62659 2.8419 2.95957C2.50891 3.29255 2.28215 3.7168 2.19028 4.17866C2.09841 4.64052 2.14556 5.11925 2.32577 5.55431C2.50598 5.98937 2.81115 6.36123 3.2027 6.62285C3.59424 6.88447 4.05458 7.02411 4.52548 7.02411H5.47787V8.45268H4.52548C4.05458 8.45268 3.59424 8.59232 3.2027 8.85395C2.81115 9.11557 2.50598 9.48742 2.32577 9.92248C2.14556 10.3575 2.09841 10.8363 2.19028 11.2981C2.28215 11.76 2.50891 12.1842 2.8419 12.5172C3.17488 12.8502 3.59912 13.077 4.06098 13.1688C4.52284 13.2607 5.00157 13.2136 5.43664 13.0333C5.8717 12.8531 6.24355 12.548 6.50517 12.1564C6.7668 11.7649 6.90644 11.3045 6.90644 10.8336V9.88126H8.33501V10.8336C8.33501 11.3045 8.47465 11.7649 8.73627 12.1564C8.99789 12.548 9.36975 12.8531 9.80481 13.0333C10.2399 13.2136 10.7186 13.2607 11.1805 13.1688C11.6423 13.077 12.0666 12.8502 12.3995 12.5172C12.7325 12.1842 12.9593 11.76 13.0512 11.2981C13.143 10.8363 13.0959 10.3575 12.9157 9.92248C12.7355 9.48742 12.4303 9.11557 12.0387 8.85395C11.6472 8.59232 11.1869 8.45268 10.716 8.45268ZM9.76358 4.64316C9.76358 4.4548 9.81944 4.27066 9.92408 4.11405C10.0287 3.95743 10.1775 3.83536 10.3515 3.76328C10.5255 3.69119 10.717 3.67233 10.9018 3.70908C11.0865 3.74583 11.2562 3.83653 11.3894 3.96973C11.5226 4.10292 11.6133 4.27262 11.65 4.45736C11.6868 4.6421 11.6679 4.8336 11.5958 5.00762C11.5238 5.18165 11.4017 5.33039 11.2451 5.43504C11.0885 5.53969 10.9043 5.59554 10.716 5.59554H9.76358V4.64316ZM3.5731 4.64316C3.5731 4.39057 3.67344 4.14833 3.85205 3.96973C4.03066 3.79112 4.2729 3.69078 4.52548 3.69078C4.77807 3.69078 5.02031 3.79112 5.19892 3.96973C5.37753 4.14833 5.47787 4.39057 5.47787 4.64316V5.59554H4.52548C4.2729 5.59554 4.03066 5.4952 3.85205 5.3166C3.67344 5.13799 3.5731 4.89575 3.5731 4.64316ZM5.47787 10.8336C5.47787 11.022 5.42201 11.2061 5.31736 11.3628C5.21271 11.5194 5.06397 11.6414 4.88994 11.7135C4.71592 11.7856 4.52443 11.8045 4.33968 11.7677C4.15494 11.731 3.98524 11.6403 3.85205 11.5071C3.71886 11.3739 3.62815 11.2042 3.5914 11.0194C3.55466 10.8347 3.57352 10.6432 3.6456 10.4692C3.71768 10.2952 3.83975 10.1464 3.99637 10.0418C4.15299 9.93711 4.33712 9.88126 4.52548 9.88126H5.47787V10.8336ZM6.90644 7.02411H8.33501V8.45268H6.90644V7.02411ZM10.716 11.786C10.4634 11.786 10.2211 11.6857 10.0425 11.5071C9.86392 11.3285 9.76358 11.0862 9.76358 10.8336V9.88126H10.716C10.9685 9.88126 11.2108 9.9816 11.3894 10.1602C11.568 10.3388 11.6683 10.581 11.6683 10.8336C11.6683 11.0862 11.568 11.3285 11.3894 11.5071C11.2108 11.6857 10.9685 11.786 10.716 11.786Z" fill="black" fillOpacity="0.6" />
              </svg>
              <p className="font-outfit text-black/60 text-sm">K</p>
            </div>
          </div>

          <button className="flex justify-between gap-x-2 items-center p-4 border-gray-500 h-14 rounded-2xl border-[0.48px]">
            <p className="text-black font-outfit font-light text-sm capitalize">filter</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.6687 2.02393H14.0973" stroke="black" strokeOpacity="0.6" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.84326 5.8335H10.9226" stroke="black" strokeOpacity="0.6" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.6687 9.64307H14.0973" stroke="black" strokeOpacity="0.6" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.84326 13.4524H10.9226" stroke="black" strokeOpacity="0.6" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </button>
        </div>


        <button onClick={() => setOpenContractPopUp(true)} className="flex justify-between gap-x-2 bg-[#DDFF8F] items-center p-4  h-14 rounded-2xl">
          <p className="text-black font-outfit font-light text-sm capitalize">
            Add new Contract
          </p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.49976 7.5V13.5M12.4998 10.5H6.49976M9.49976 18C13.6419 18 16.9998 14.6421 16.9998 10.5C16.9998 6.35786 13.6419 3 9.49976 3C5.35762 3 1.99976 6.35786 1.99976 10.5C1.99976 14.6421 5.35762 18 9.49976 18Z" stroke="black" strokeWidth="1.5875" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
      </div>
      {children}
    </div>
  )
}

export default layout