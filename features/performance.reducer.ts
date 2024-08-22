import { createSlice } from "@reduxjs/toolkit";
import { Performance } from "@prisma/client";

const makeCorrectRating = (rating: any) => {
	const correctRating: Array<{ name: string; value: number }> = [];
	[
		"jan",
		"feb",
		"mar",
		"apr",
		"may",
		"jun",
		"jul",
		"aug",
		"sep",
		"oct",
		"nov",
		"dec",
	].forEach((item) => {
		correctRating.push({
			name: item,
			value: rating[item],
		});
	});

	return correctRating;
};

export interface ModifiedPerformance extends Performance {
	rating: Array<{ name: string; value: number }>;
	vendorName: string;
}
export interface PerformancesInitialState {
	allPerformances: ModifiedPerformance[] | undefined;
}

const initialState: PerformancesInitialState = {
	allPerformances: undefined,
};

const allPerformancesReducer = createSlice({
	name: "allPerformances",
	initialState,
	reducers: {
		addPerformances: (
			state: PerformancesInitialState,
			action: { payload: { performances: any } }
		) => {
			state.allPerformances = action.payload.performances.map(
				(performance: any) => {
					return {
						id: performance.id,
						vendorName: performance.vendorName,
						evaluationScore: performance.evaluationScore,
						vendorId: performance.vendorId,
						rating: makeCorrectRating(performance.rating),
					};
				}
			);
		},
	},
});
export const { addPerformances } = allPerformancesReducer.actions;
export default allPerformancesReducer.reducer;
