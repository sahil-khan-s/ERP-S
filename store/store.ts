import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import taskReducer, {
	TaskInitialStatus,
} from "@/features/contract-tasks.reducer";
import contractsReducer, {
	ContractsInitialState,
} from "@/features/contracts.reducer";
export const store: EnhancedStore = configureStore({
	reducer: {
		tasks: taskReducer,
		contracts: contractsReducer,
	},
});

export interface Store {
	tasks: TaskInitialStatus;
	contracts: ContractsInitialState;
}
