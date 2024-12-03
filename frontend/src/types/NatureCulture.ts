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

export function fromJson(key: string): NatureCulture {
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
	return mapping[key.toLowerCase()];
}
