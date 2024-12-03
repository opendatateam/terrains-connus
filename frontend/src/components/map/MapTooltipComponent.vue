<template>
	<div class="tooltip_body">
		<span v-if="tooltip.mode === 'parcelle' && tooltip.value">
			<h1><b>Demandes de valeurs foncières</b></h1>
			<div v-if="comData[tooltip.value as keyof typeof comData]['nature_mutation']">Nature mutation : {{  comData[tooltip.value as keyof typeof comData]['nature_mutation'] }}</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['valeur_fonciere']">Prix : {{  comData[tooltip.value as keyof typeof comData]['valeur_fonciere'] }} euros</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['surface_terrain']">Surface : {{  comData[tooltip.value as keyof typeof comData]['surface_terrain'] }} m2</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['date_mutation']">Date : {{  comData[tooltip.value as keyof typeof comData]['date_mutation'] }} euros</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['nature_culture']">Nature Culture : {{  comData[tooltip.value as keyof typeof comData]['nature_culture'] }}</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['nature_culture_speciale']">Nature Culture Spéciale : {{  comData[tooltip.value as keyof typeof comData]['nature_culture_speciale'] }}</div>
			<h1 v-if="comData[tooltip.value as keyof typeof comData]['surf_rpg']"><b>Registre Parcellaire Graphique</b></h1>
			<div v-if="comData[tooltip.value as keyof typeof comData]['surf_rpg']">Surface : {{  comData[tooltip.value as keyof typeof comData]['surf_rpg'] }} m2</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['LIBELLE_CULTU']">Nature Culture : {{  comData[tooltip.value as keyof typeof comData]['LIBELLE_CULTU'] }}</div>
			<div v-if="comData[tooltip.value as keyof typeof comData]['bio']">Bio : {{  comData[tooltip.value as keyof typeof comData]['bio'] }}</div>
			<h1 v-if="comData[tooltip.value as keyof typeof comData]['MOY_REND_2019_2023']"><b>Statistiques agricoles annuelles</b></h1>
			<div v-if="comData[tooltip.value as keyof typeof comData]['MOY_REND_2019_2023']">Rendement moyen : {{  comData[tooltip.value as keyof typeof comData]['MOY_REND_2019_2023'] }}</div>
		</span>
		<span v-if="tooltip.mode === 'departement'"><b>{{ tooltipTitle }}</b><br />{{ tooltip.value }} transactions</span>
		<div v-if="tooltipData">
			<p v-for="(value, key) in tooltipData" :key="key">
				{{ key }}: {{ value }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
// Import the JSON file
import parcellesData from "@/assets/json/parcelles.json";
import { type PropType, defineComponent, onMounted, ref, watch } from "vue";
import { useAppStore } from "@/store/appStore.ts";

// Define the type for the parcellesData
export interface ParcelleData {
	date_mutation: string;
	nature_mutation: string;
	valeur_fonciere: string;
	code_commune: string;
	id_parcelle: string;
	nature_culture: string;
	nature_culture_speciale: null;
	MOY_REND_FR_2019_2023: null;
}

type ParcellesData = Record<string, ParcelleData>;

export default defineComponent({
	name: "MapTooltipComponent",
	props: {
		tooltip: {
			type: Object as PropType<{ mode: string; value: number | string }>,
			required: true,
		},
		tooltipTitle: {
			type: String,
			required: true,
			default: "",
		}
	},

	setup(props) {
		const appStore = useAppStore();
		const comData = ref({})
		const tooltipData = ref<ParcelleData | null>(null);

		const loadTooltipData = () => {
			if (props.tooltip.mode === "parcelle") {
				// Convert tooltip.value to a string to use as a key
				const key = String(props.tooltip.value);
				tooltipData.value = (parcellesData as ParcellesData)[key] || null;
			}
		};

		onMounted(() => {
			loadTooltipData();
		});

		watch(() => appStore.comData, (newValue: Object) => {
			comData.value = newValue;
		});
		return { tooltipData, comData };
	},
});
</script>

<style scoped>
.tooltip_body {
	width: 300px;
	padding-left: 0.75rem;
	padding-top: 0.25rem;
	padding-right: 0.75rem;
	line-height: 1.67;
}
</style>
