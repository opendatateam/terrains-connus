<template>
  <div class="tile">
    <h2 class="font-bold mb-2">{{ natureCultureFullName }}</h2>
    <p><b>Transactions - {{ level }}</b></p>
    <span v-if="data.length > 0"><HistogramChart :chartData="data" :key="chartKey" :colorHisto="color" /></span>
    <span v-else>Il n'y a pas de transactions pour ce département.</span>
  </div>
</template>

<script lang="ts">
import monthDepData from "@/assets/json/dvf_month_agri.json";
import monthNatData from "@/assets/json/dvf_month_agri_nat.json";
import HistogramChart from "@/components/HistogramChart.vue";
import { useAppStore } from "@/store/appStore.ts";
import { NatureCulture } from "@/types/NatureCulture";
import { getColorsForNatureCulture } from "@/types/NatureCulture";
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
	name: "TileTwo",
	components: {
		HistogramChart,
	},
	props: {
		selectedNatureCulture: {
			type: String,
			default: "",
		},
	},
	setup(props) {
		const appStore = useAppStore();

		const data = ref(monthNatData["P" as keyof typeof monthNatData]);
		const chartKey = ref(0);
		const color = ref("#388E3C");

		const options = {
			plugins: {
				legend: {
					display: true,
					position: "top",
				},
			},
		};
		const level = ref("National");

		const natureCultureFullName = computed((): string => {
			return props.selectedNatureCulture
				? NatureCulture[
						props.selectedNatureCulture as keyof typeof NatureCulture
					]
				: "";
		});

		watch(
			() => appStore.option,
			(newValue: string) => {
				data.value = monthNatData[newValue as keyof typeof monthNatData];
				level.value = "National";
				color.value = getColorsForNatureCulture(appStore.option)[3];
				chartKey.value++;
			},
		);

		watch(
			() => appStore.mouseDep,
			(newValue: string) => {
				const interData =
					monthDepData[appStore.option as keyof typeof monthDepData];
				data.value = interData[newValue as keyof typeof interData];
				level.value = appStore.mouseDepName;
				color.value = getColorsForNatureCulture(appStore.option)[3];
				chartKey.value++;
			},
		);

		return {
			natureCultureFullName,
			data,
			options,
			chartKey,
			level,
			color,
		};
	},
});
</script>
