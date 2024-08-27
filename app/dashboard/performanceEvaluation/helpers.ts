import {
	addFeedbacks,
	changeRandomFeedback,
} from "@/features/feedback.reducer.ts";
import { addPerformances } from "@/features/performance.reducer";
import { store } from "@/store/store";

export const getRandomFeedback = async (): Promise<any> => {
	try {
		const res = await fetch("/api/performanceEvaluation/feedback/random");
		if (!res.ok) {
			throw new Error("Failed to fetch random feedback");
		}
		const data = await res.json();
		if (!data.success) {
			throw new Error("No data received");
		}

		store.dispatch(changeRandomFeedback({ randomFeedback: data.feedback }));
		return data;
	} catch (error) {
		console.error("Error fetching random feedback:", error);
		throw error;
	}
};

export const registerFeedback = async ({
	vendorId,
	feedbackContent,
}: {
	vendorId: number | string;
	feedbackContent: string;
}) => {
	try {
		const res = await fetch(
			"/api/performanceEvaluation/feedback/register",
			{
				method: "POST",
				body: JSON.stringify({
					vendorId,
					content: feedbackContent,
				}),
			}
		);

		if (!res.ok) {
			throw new Error("Failed to fetch random feedback");
		}
		const data = await res.json();
		if (!data.success) {
			throw new Error("Something went wrong while adding a feedback");
		}
		return data;
	} catch (error) {
		console.error("Error fetching random feedback:", error);
		throw error;
	}
};

export const getAllPerformances = async (): Promise<void> => {
	try {
		const res = await fetch(
			"/api/performanceEvaluation/performance/rating/get"
		);
		if (!res.ok) {
			throw new Error("Failed to fetch Data from database");
		}
		const data = await res.json();
		if (!data.success) {
			throw new Error("No data received");
		}

		store.dispatch(addPerformances({ performances: data.performances }));
	} catch (error) {
		console.error("Error fetching random feedback:", error);
		throw error;
	}
};

export const getAllFeedbacks = async () => {
	try {
		const res = await fetch("/api/performanceEvaluation/feedback/getAll");
		if (!res.ok) {
			throw new Error("Failed to fetch random feedback");
		}
		const data = await res.json();
		if (!data.success) {
			throw new Error("No data received");
		}
		store.dispatch(addFeedbacks({ feedbacks: data.feedbacks }));
		return data;
	} catch (error) {
		console.error("Error fetching random feedback:", error);
		throw error;
	}
};
