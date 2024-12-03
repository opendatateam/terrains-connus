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

export function getColorsForNatureCulture(natureCultureKey: string): string[] {
	const colorMapping: { [key: string]: string[] } = {
		L: ["#FFFFFF", "#C8E6C9", "#81C784", "#4CAF50", "#388E3C"], // Landes (Vibrant Green)
		P: ["#FFFFFF", "#C5E1A5", "#AED581", "#9CCC65", "#7CB342"], // Prés (Bright Green)
		PA: ["#FFFFFF", "#A5D6A7", "#66BB6A", "#43A047", "#2E7D32"], // Pâtures ou pâturages (Lively Green)
		PC: ["#FFFFFF", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33"], // Pacages ou pâtis (Lime Green)
		PE: ["#FFFFFF", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B"], // Prés d’embouche (Yellow)
		PH: ["#FFFFFF", "#A5D6A7", "#66BB6A", "#43A047", "#2E7D32"], // Herbages (Intense Green)
		PP: ["#FFFFFF", "#81C784", "#66BB6A", "#4CAF50", "#388E3C"], // Prés, pâtures ou herbages plantés (Deep Green)
		S: ["#FFFFFF", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"], // Sols (Vibrant Orange)
		T: ["#FFFFFF", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722"], // Terre (Bright Orange)
		TP: ["#FFFFFF", "#BCAAA4", "#A1887F", "#8D6E63", "#795548"], // Terres plantées (Rich Brown)
		VE: ["#FFFFFF", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722"], // Vergers (Vibrant Red-Orange)
		VI: ["#FFFFFF", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0"], // Vignes (Vibrant Purple)
	};
	return colorMapping[natureCultureKey];
}
