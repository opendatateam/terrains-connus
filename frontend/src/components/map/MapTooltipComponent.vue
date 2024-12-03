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
import parcellesData from "@/assets/json/parcelles.json";
import { type PropType, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "MapTooltipComponent",
	props: {
		tooltip: {
			type: Object as PropType<{ mode: string; value: number }>,
			required: true,
		},
		tooltipTitle: {
			type: String,
			required: true,
			default: "",
		},
	},
	setup(props) {
		const tooltipData = ref<Record<string, any>>({});

		const loadTooltipData = async () => {
			if (props.tooltip.mode === "parcelle") {
				// Use the imported JSON data
				tooltipData.value = parcellesData;
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
