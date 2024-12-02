import type { DepartementCode } from "./FrenchDepartement";
import type { NatureCulture } from "./NatureCulture";

export interface AggregatedLandMutation {
	departementCode: DepartementCode;
	month: Date;
	natureCulture: NatureCulture;
	nbMutations: number;
}

export interface LandMutation {
	id: string;
	date?: Date;
	mutationType?: string;
	price?: number;
	communeCode?: string;
	landUseCode?: string;
	landUse?: string;
	specialLandUseCode?: string | null;
	specialLandUse?: string | null;
	area?: number;
	coordinates?: [number, number];
}
