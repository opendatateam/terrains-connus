import { fromCsv } from "../types";
import type { AggregatedLandMutation } from "../types/models";

export const api = {
	async getAggregatedLandMutations(): Promise<AggregatedLandMutation[]> {
		try {
			const response = await fetch("../../../data/stats.json");
			const jsonData = await response.json();

			return jsonData.map((item: any) => ({
				departementCode: item.code_geo.padStart(2, "0"),
				month: new Date(`${item.month}-01`),
				natureCulture: fromCsv(item.nature_culture),
				nbMutations: Number.parseInt(item.nb_mutations, 10),
			}));

		} catch (error) {
			console.error("Error loading JSON data:", error);
			throw error;
		}
	},
};

// Export the interface
