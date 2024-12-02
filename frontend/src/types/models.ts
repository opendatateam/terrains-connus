export enum NatureCulture {
	L = "Landes",
	P = "Prés",
	PA = "Pâtures ou pâturages",
	PC = "Pacages ou pâtis",
	PE = "Prés d'embouche",
	PH = "Herbages",
	PP = "Prés, pâtures ou herbages plantes",
	S = "Sols",
	T = "Terre",
	TP = "Terres plantées",
	VE = "Vergers",
	VI = "Vignes",
}

export interface AggregatedLandMutation {
	departementCode: string;
	month: Date;
	natureCulture: NatureCulture;
	nbMutations: number;
}

export interface LandMutation {
	id: string; // id_parcelle
	date?: string; // date_mutation
	mutationType?: string; // nature_mutation
	price?: number; // valeur_fonciere
	communeCode?: string; // code_commune
	landUseCode?: string; // code_nature_culture
	landUse?: string; // nature_culture
	specialLandUseCode?: string | null; // code_nature_culture_speciale
	specialLandUse?: string | null; // nature_culture_speciale
	area?: number; // surface_terrain
	coordinates?: [number, number]; // [longitude, latitude]
}

export interface FilterParams {
	type?: string[];
	minPrice?: number;
	maxPrice?: number;
	minArea?: number;
	maxArea?: number;
	// Add other filter parameters as needed
}
