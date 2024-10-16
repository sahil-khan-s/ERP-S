"use client";
import { useSelector } from "react-redux";
import "../globals.css";
import NavSmallScreen from "./components/common/NavSmallScreen";
import Sidebar from "./components/common/sidebar";
import EditContract from "./components/contract/editContract";
import { store, Store } from "@/store/store";
import { toggleContractEditing } from "@/features/contracts.reducer";
import { useEffect } from "react";
import { getAllContracts } from "./contract/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { contractToEdit, isEditingEnabled } = useSelector((state: Store) => state.contracts);

  function removeEditingMode() {
    store.dispatch(toggleContractEditing());
  }

  useEffect(() => {
    getAllContracts()
  }, []);
  return (
    <section className="bg-white">
      <div className='block md:hidden'>
        <NavSmallScreen />
      </div>

      {
        contractToEdit && isEditingEnabled ? <EditContract cancelEdit={removeEditingMode} contract={contractToEdit} /> : null
      }
      <div className="flex w-full min-h-screen">
        <div className="hidden md:block min-h-screen">
          <Sidebar />
        </div>
        <div className="w-full ">
          <div className="w-full min-h-screen">{children}</div>
        </div>
      </div>
    </section>
  );
}
