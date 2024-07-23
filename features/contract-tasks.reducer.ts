import { createSlice } from "@reduxjs/toolkit";

export interface Task {
	id: number;
	title: string;
	time: string;
	status: string;
}

export interface TaskInitialStatus {
	allTasks: Array<Task>;
}

const initialState: TaskInitialStatus = {
	allTasks: [],
};

const taskReducer = createSlice({
	name: "taskReducer",
	initialState,
	reducers: {
		addTasks: (state: TaskInitialStatus, action) => {
			state.allTasks = action.payload.tasks;
		},
		resetTasks: (state: TaskInitialStatus, action) => {
			state.allTasks = [];
		},
	},
});
export const { addTasks, resetTasks } = taskReducer.actions;
export default taskReducer.reducer;
