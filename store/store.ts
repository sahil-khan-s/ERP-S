import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import taskReducer, {
	TaskInitialStatus,
} from "@/features/contract-tasks.reducer";
import contractsReducer, {
	ContractsInitialState,
} from "@/features/contracts.reducer";
import feedbackReducer, {
	FeedbacksInitialState,
} from "@/features/feedback.reducer.ts";

import performanceReducer, {
	PerformancesInitialState,
} from "@/features/performance.reducer";
export const store: EnhancedStore = configureStore({
	reducer: {
		tasks: taskReducer,
		contracts: contractsReducer,
		feedbacks: feedbackReducer,
		performances: performanceReducer,
	},
});

export interface Store {
	tasks: TaskInitialStatus;
	feedbacks: FeedbacksInitialState;
	contracts: ContractsInitialState;
	performances: PerformancesInitialState;
}
