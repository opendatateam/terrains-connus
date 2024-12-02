import type { AggregatedLandMutation } from "../types/models";
import { NatureCulture } from "../types/models";

// Helper function to convert CSV land use to enum
function mapNatureCulture(csvLandUse: string): NatureCulture {
	const mapping: { [key: string]: NatureCulture } = {
		landes: NatureCulture.L,
		prés: NatureCulture.P,
		pâtures: NatureCulture.PA,
		pacages: NatureCulture.PC,
		"prés d'embouche": NatureCulture.PE,
		herbages: NatureCulture.PH,
		"prés plantes": NatureCulture.PP,
		sols: NatureCulture.S,
		terres: NatureCulture.T,
		"terres plantées": NatureCulture.TP,
		vergers: NatureCulture.VE,
		vignes: NatureCulture.VI,
	};
	return mapping[csvLandUse.toLowerCase()] || NatureCulture.T;
}

export const api = {
	async getLandTransactions(): Promise<AggregatedLandMutation[]> {
		try {
			const response = await fetch("../../../data/stats.csv");
			const csvText = await response.text();

			const lines = csvText.split("\n");
			const headers = lines[0].split(",");

			return lines
				.slice(1) // Skip header row
				.filter((line) => line.trim()) // Remove empty lines
				.map((line) => {
					const values = line.split(",");
					return {
						departementCode: values[0],
						month: new Date(`${values[1]}-01`), // Add day to make valid date
						natureCulture: mapNatureCulture(values[2]),
						nbMutations: Number.parseInt(values[3], 10),
						count: Number.parseInt(values[3], 10),
					};
				});
		} catch (error) {
			console.error("Error loading CSV data:", error);
			throw error;
		}
	},
};

// Export the interface
