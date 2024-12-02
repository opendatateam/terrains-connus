import type { AggregatedLandMutation } from "../types/models";
import { NatureCulture } from "../types/models";

export const api = {
	async getAggregatedLandMutations(): Promise<AggregatedLandMutation[]> {
		try {
			// const response = await fetch("../../../data/stats.csv");
			// const csvText = await response.text();

			// const lines = csvText.split("\n");
			// const headers = lines[0].split(",");

			// return lines
			// 	.slice(1)
			// 	.filter((line) => line.trim())
			// 	.map((line) => {
			// 		const values = line.split(",");
			// 		return {
			// 			departementCode: values[0].padStart(2, "0"),
			// 			month: new Date(`${values[1]}-01`),
			// 			natureCulture: NatureCulture.fromCsv(values[2]),
			// 			nbMutations: Number.parseInt(values[3], 10),
			// 		};
			// 	});

			// Return mock data for now
			return [
				{
					departementCode: "75",
					month: new Date("2023-01-01"),
					natureCulture: NatureCulture.T,
					nbMutations: 42,
				},
				{
					departementCode: "77",
					month: new Date("2023-01-01"),
					natureCulture: NatureCulture.VI,
					nbMutations: 23,
				},
				// Add more mock data as needed
			];
		} catch (error) {
			console.error("Error loading CSV data:", error);
			throw error;
		}
	},
};

// Export the interface
