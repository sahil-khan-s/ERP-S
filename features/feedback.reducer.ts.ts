import { createSlice } from "@reduxjs/toolkit";
import { Feedback } from "@prisma/client";

export interface ModifiedFeedback extends Feedback {
	vendorName: string;
	vendorImage: string;
}
export interface FeedbacksInitialState {
	allFeedbacks: Feedback[] | undefined;
	randomFeedback: ModifiedFeedback | undefined;
}

const initialState: FeedbacksInitialState = {
	randomFeedback: undefined,
	allFeedbacks: undefined,
};

const allFeedbacksReducer = createSlice({
	name: "allFeedbacks",
	initialState,
	reducers: {
		addFeedbacks: (
			state: FeedbacksInitialState,
			action: { payload: { feedbacks: Feedback[] } }
		) => {
			state.allFeedbacks = action.payload.feedbacks;
		},
		changeRandomFeedback: (
			state: FeedbacksInitialState,
			action: { payload: { randomFeedback: ModifiedFeedback } }
		) => {
			state.randomFeedback = action.payload.randomFeedback;
		},
	},
});
export const { addFeedbacks, changeRandomFeedback } =
	allFeedbacksReducer.actions;
export default allFeedbacksReducer.reducer;
