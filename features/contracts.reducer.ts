import { createSlice } from "@reduxjs/toolkit";

import { Contract } from "@prisma/client";
export interface ContractsInitialState {
	allContracts: Array<Contract> | undefined;
	isEditingEnabled: boolean;
	contractToEdit: Contract | undefined;
}
const initialState: ContractsInitialState = {
	allContracts: undefined,
	isEditingEnabled: false,
	contractToEdit: undefined,
};

const allContractsReducer = createSlice({
	name: "allContracts",
	initialState,
	reducers: {
		addContracts: (state: ContractsInitialState, action) => {
			state.allContracts = action.payload.contracts;
		},
		resetContracts: (state: ContractsInitialState, action) => {
			state.allContracts = [];
		},
		toggleContractEditing: (state: ContractsInitialState) => {
			if (state.contractToEdit !== undefined) {
				state.contractToEdit = undefined;
			}
			state.isEditingEnabled = !state.isEditingEnabled;
		},
		setContractToEdit: (state, action) => {
			if (!state.allContracts) {
				return;
			}
			state.contractToEdit = state.allContracts.find(
				(item) => item.id === action.payload.id
			);
		},
	},
});
export const {
	addContracts,
	resetContracts,
	toggleContractEditing,
	setContractToEdit,
} = allContractsReducer.actions;
export default allContractsReducer.reducer;
