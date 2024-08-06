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
	randomFeedback: {
		id: 3,
		comment: "this comment is done by the admin",
		content: "this is a feedback 3",
		venodrId: 2,
		vendorImage:
			"https://i2.pickpik.com/photos/128/450/351/women-face-portrait-emotions-preview.jpg",
		vendorName: "marry doe",
	},
	allFeedbacks: [
		{
			id: 1,
			comment: "",
			content: "this is a feedback 1",
			venodrId: 2,
		},
		{
			id: 2,
			comment: "",
			content: "this is a feedback 2",
			venodrId: 2,
		},
		{
			id: 3,
			comment: "this comment is done by the admin",
			content: "this is a feedback 3",
			venodrId: 2,
		},
	],
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
