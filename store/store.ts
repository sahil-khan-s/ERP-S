import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import taskReducer, {
	TaskInitialStatus,
} from "@/features/contract-tasks.reducer";
export const store: EnhancedStore = configureStore({
	reducer: {
		tasks: taskReducer,
	},
});

export interface Store {
	tasks: TaskInitialStatus;
}
