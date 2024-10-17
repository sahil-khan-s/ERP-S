import { createSlice } from "@reduxjs/toolkit";

import { Task } from "@prisma/client";
// export interface Task {
// 	id: number;
// 	title: string;
// 	time: string;
// 	status: string;
// }

export interface TaskInitialStatus {
	allTasks: Array<Task> | undefined;
	taskToEdit: Task | undefined;
	isEditingEnabled: boolean;
}

const initialState: TaskInitialStatus = {
	allTasks: undefined,
	isEditingEnabled: false,
	taskToEdit: undefined,
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
			if (state.allTasks) {
				state.allTasks[action.payload.index].status =
					action.payload.status;
			}
		},
		setTaskToEdit: (
			state: TaskInitialStatus,
			action: { payload: { taskToEdit: Task | undefined } }
		) => {
			state.taskToEdit = action.payload.taskToEdit;

			console.log(action.payload.taskToEdit);
		},

		toggleTaskEditing: (state: TaskInitialStatus) => {
			if (state.isEditingEnabled) {
				state.taskToEdit = undefined;
			}

			state.isEditingEnabled = !state.isEditingEnabled;
		},

		// delete Task
		deleteTask: (
			state: TaskInitialStatus,
			action: { payload: { taskId: number } }
		) => {
			if (state.allTasks) {
				state.allTasks = state.allTasks.filter(
					(task) => task.id !== action.payload.taskId
				);
			}
		},
	},
});
export const {
	addTasks,
	resetTasks,
	updateStatus,
	setTaskToEdit,
	toggleTaskEditing,
	deleteTask,
} = taskReducer.actions;
export default taskReducer.reducer;
