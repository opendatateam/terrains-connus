<template>
	<div class="tooltip_body">
		<b>{{ tooltipTitle }}</b>
		<br />
		<span v-if="tooltip.mode === 'parcelle'">Parcelle numéro </span>
		{{ tooltip.value }}
		<span v-if="tooltip.mode === 'departement'"> transactions</span>
		<!-- Display additional tooltipData here -->
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
import { type PropType, defineComponent, onMounted, ref } from "vue";

// Define the type for the parcellesData
interface ParcelleData {
	date_mutation: string;
	nature_mutation: string;
	valeur_fonciere: string;
	code_commune: string;
	id_parcelle: string;
	nature_culture: string;
	nature_culture_speciale: null;
	// Add other fields as necessary
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
		},
	},
	setup(props) {
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

		return { tooltipData };
	},
});
</script>

<style scoped>
.tooltip_body {
	padding-left: 0.75rem;
	padding-top: 0.25rem;
	padding-right: 0.75rem;
	line-height: 1.67;
}
</style>
