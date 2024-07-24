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
		updateStatus: (state: TaskInitialStatus, action) => {
			state.allTasks[action.payload.index].status = action.payload.status;
		},
	},
});
export const { addTasks, resetTasks, updateStatus } = taskReducer.actions;
export default taskReducer.reducer;
