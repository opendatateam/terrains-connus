import type { FrenchDepartment } from "../enums/FrenchDepartment";
import type { NatureCulture } from "../enums/NatureCulture";

export interface AggregatedLandMutation {
	departementCode: FrenchDepartment;
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
