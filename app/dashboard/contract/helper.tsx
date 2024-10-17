import { Store, store } from "@/store/store";
import { addTasks } from "@/features/contract-tasks.reducer";
import { addContracts } from "@/features/contracts.reducer";

export const getTodayTasks = async (): Promise<void> => {
    try {
      const res = await fetch("/api/contracts-section/tasks-route/today-tasks");
      const data = await res.json();
      if (data.success) {
        store.dispatch(addTasks({ tasks: data.tasks }));
      } else {
        store.dispatch(addTasks({ tasks: [] }));
        throw new Error("Something went wrong while getting tasks");
      }
    } catch (error) {
      store.dispatch(addTasks({ tasks: [] }));
      console.error("Error while getting the tasks", error);
    }
  };


  export const getAllContracts = async (): Promise<void> => {
    try {
      const res = await fetch("/api/contracts-section/contracts");
      if (!res.ok) {
        throw new Error("Something went wrong while getting contracts");
      }
      const data = await res.json();
      if (data.success) {
        store.dispatch(addContracts({ contracts: data.contracts }));
      } else {
        throw new Error("Something went wrong while getting contracts");
      }
    } catch (error) {
      console.error("Error while getting the contracts", error);
    }
  };