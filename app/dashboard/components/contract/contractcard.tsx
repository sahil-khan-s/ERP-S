import { Contract } from '@prisma/client';
import { useSelector } from 'react-redux';
import { store, Store } from '@/store/store';
import { setContractToEdit } from '@/features/contracts.reducer';
export function dateOnly(time: Date) {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${String(day).length == 1 ? `0${day}` : day} ${month} '${String(year).substring(2, 4)}`
}

const ContractCard = ({ contract }: { contract: Contract }) => {


    const { isEditingEnabled, contractToEdit } = useSelector((state: Store) => state.contracts)

    const isSelected = contract === contractToEdit;

    if (!contract) {
        return null;
    }


    function handleEditSelection() {
        store.dispatch(setContractToEdit({ id: contract.id }));
    }


    const profileText: string = contract?.title
        ? contract.title.split(" ").length >= 2
            ? `${contract.title.split(" ")[0]?.[0]}${contract.title.split(" ")[1]?.[0]}`
            : contract.title[0]
        : '';


    return (
        <div className='' onClick={handleEditSelection}>
            <div className={`flex justify-between  ${isEditingEnabled ? "items-center" : ""}`}>
                <div className='flex items-center gap-x-4'>
                    <input checked={isSelected ? true : false} type="checkbox" className={`size-5 border-gray-100 ${isEditingEnabled ? "" : "hidden"}`} />
                    <div className='flex items-center gap-x-4'>
                        <div className='flex justify-center items-center rounded-full size-8 bg-[#DDFF8F]'><h2 className='text-[15px] uppercase text-center text-[#16151C] font-outfit'>{profileText}</h2></div>
                        <div className='px-2'>
                            <h3 className='text-[15px] text-[#16151C] font-outfit capitalize'>{contract.title}</h3>
                            <p className='text-[15px] text-[#16151C] font-outfit capitalize whitespace-nowrap'>{contract.from} <span className='text-[#A2A1A8] font-outfit'> {contract.location}</span></p>
                            <p className='text-[15px] text-[#A2A1A8] font-outfit'>#{contract.id}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='whitespace-nowrap'>{contract.to}</p>
                    <p className='text-[15px] text-[#A2A1A8] text-right font-outfit'>{dateOnly(contract.dateFrom)}</p>
                </div>
            </div>
            <hr className='mt-2' />
        </div>

    )
}

export default ContractCard