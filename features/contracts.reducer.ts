import { createSlice } from "@reduxjs/toolkit";

import { Contract } from "@prisma/client";
export interface ContractsInitialState {
	allContracts: Array<Contract> | undefined;
}
const initialState: ContractsInitialState = {
	// allContracts: [
	// 	{
	// 		id: "9012345",
	// 		title: "Maintenance Agreement",
	// 		location: "Dubai, UAE",
	// 		from: "Joseph Lee",
	// 		to: "Harper Thompson",
	// 		dateFrom: new Date(),
	// 		dateTo: new Date(),
	// 		content:
	// 			"This contract details the maintenance services provided by Joseph Lee to Harper Thompson.",
	// 		status: "active",
	// 	},
	// 	{
	// 		id: "1123456",
	// 		title: "Investment Contract",
	// 		location: "Singapore",
	// 		from: "Christopher Walker",
	// 		to: "Evelyn Robinson",
	// 		dateFrom: new Date(),
	// 		dateTo: new Date(),
	// 		content:
	// 			"This contract outlines the investment terms between Christopher Walker and Evelyn Robinson.",
	// 		status: "modifed",
	// 	},
	// ],
	allContracts: undefined,
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
	},
});
export const { addContracts, resetContracts } = allContractsReducer.actions;
export default allContractsReducer.reducer;
