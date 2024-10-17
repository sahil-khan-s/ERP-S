import { store } from '@/store/store';
import { addTasks } from "@/features/contract-tasks.reducer";
import { addContracts } from '@/features/contracts.reducer';

type TaskResponse = {
    success: boolean;
    tasks: any[]; // Replace 'any[]' with the actual task structure
};

type ContractResponse = {
    success: boolean;
    contracts: any[]; // Replace 'any[]' with the actual contract structure
};

// Fetch today's tasks with proper error handling
export const getTodayTasks = async (): Promise<void> => {
    try {
        const res = await fetch("/api/contracts-section/tasks-route/today-tasks");
        const data: TaskResponse = await res.json();
        if (data.success) {
            store.dispatch(addTasks({ tasks: data.tasks }));
        } else {
            store.dispatch(addTasks({ tasks: [] }));
            throw new Error("Something went wrong while getting tasks");
        }
    } catch (error) {
        store.dispatch(addTasks({ tasks: [] }));
        throw new Error("Error while getting the tasks");
    }
};

// Fetch all contracts with proper error handling
export const getAllContracts = async (): Promise<void> => {
    try {
        const res = await fetch("/api/contracts-section/contracts");
        const data: ContractResponse = await res.json();
        if (data.success) {
            store.dispatch(addContracts({ contracts: data.contracts }));
        } else {
            throw new Error("Something went wrong while getting contracts");
        }
    } catch (error) {
        throw new Error("Error while getting the contracts");
    }
};
