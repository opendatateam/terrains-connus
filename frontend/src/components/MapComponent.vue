<template>
	<div>
		<div
			ref="mapTooltip"
			class="map_tooltip"
			v-show="tooltip.visibility == 'visible'"
			:style="{ top: tooltip.top, left: tooltip.left }"
		>
		<div class="tooltip_body">
			<b>{{ depName }}</b>
			<br />
			<span v-if="tooltip.mode == 'parcelle'">parcelle numéro </span>
			{{ tooltip.value }}
			<span v-if="tooltip.mode == 'departement'"> transactions</span>
		</div>
		</div>
		<div id="map" style="width: 100%; height: 100vh;"></div>
		<div id="sidebar" class="floating-sidebar"></div>
	</div>
</template>

<script lang="ts">
import fullPeriodData from "@/assets/json/full_period.json";
import styleVector from "@/assets/json/vector.json";
import { useAppStore } from "@/store/appStore.ts";
import * as d3 from "d3-scale";
import maplibregl, { type Map as MapLibreMap } from "maplibre-gl";
import type {
	LngLatLike,
	StyleSpecification,
} from "maplibre-gl";
import { type Ref, defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
	name: "MapComponent",
	setup() {
		const appStore = useAppStore();
		const map: Ref<MapLibreMap | null> = ref(null);
		let displayDepLayer = true;
		const depName = ref(null);

		const tooltip = ref({
			top: "0px",
			left: "0px",
			display: "block",
			mode: "departement",
			visibility: "",
			value: 0,
		});

		const calculateColor = (value: number) => {
			const scaleMin = 0;
			const scaleMax = 65000;
			const pivot = 30000;

			const scale = d3
				.scaleLinear<string>()
				.domain([scaleMin, pivot, scaleMax])
				.range(["#F8FAFC", "#475569", "#020617"]);

			return scale(value);
		};

		const updateMap = (value: string) => {
			if (!map.value) return;

			const resultArray = [];
			resultArray.push("match");
			resultArray.push(["get", "code"]);
			Object.entries(fullPeriodData[value as keyof typeof fullPeriodData]).forEach(
				([key, value]) => {
					resultArray.push(key, calculateColor(Number(value)));
				},
			);
			resultArray.push("#CCCCCC");
			map.value.setPaintProperty(
				"departements_fill",
				"fill-color",
				resultArray,
			);
		};

		const displayTooltip = (e: any) => {
			const tooltipX = e.point.x;
			const tooltipY = e.point.y;
			tooltip.value.top = tooltipY + "px";
			tooltip.value.left = tooltipX + "px";
		};

		onMounted(() => {
			const mapInstance: MapLibreMap = new maplibregl.Map({
				container: "map",
				style: styleVector as StyleSpecification,
				center: [2.213749, 46.227638], // Center of France
				zoom: appStore.mapZoom,
				minZoom: 2,
				maxZoom: 18,
			});

			mapInstance.on("load", () => {
				mapInstance.addLayer({
					id: "departements_fill",
					type: "fill",
					source: "decoupage-administratif",
					"source-layer": "departements",
					paint: {
						"fill-opacity": 0.5,
					},
				});

				mapInstance.addLayer({
					id: "parcelles_fill",
					type: "fill",
					source: "cadastre",
					filter: ["has", "dvf"],
					"source-layer": "parcelles",
					minzoom: 13,
					maxzoom: 18,
					paint: {
						"fill-color": "rgba(0, 0, 255, 0.2)",
					},
				});

				mapInstance.on("mousemove", "departements_fill", (e: any) => {
					depName.value = e.features[0]["properties"]["nom"];
					const depCode = e.features[0]["properties"]["code"];
					tooltip.value.mode = "departement";
					tooltip.value.value = (
						fullPeriodData[
							appStore.option as keyof typeof fullPeriodData
						] as unknown as Record<string, number>
					)[depCode];
					tooltip.value.visibility = "visible";
					displayTooltip(e);
				});

				mapInstance.on("mousemove", "parcelles_fill", (e: any) => {
					const parcelleCode = e.features[0]["properties"]["id"];
					tooltip.value.mode = "parcelle";
					tooltip.value.value = parcelleCode;
					tooltip.value.visibility = "visible";
					displayTooltip(e);
				});

				updateMap("P");
			});

			mapInstance.on("zoom", (m) => {
				appStore.updateMapZoom(mapInstance.getZoom());
			});

			map.value = mapInstance;
		});

		watch(
			() => appStore.option,
			(newValue: string) => {
				updateMap(newValue);
			},
		);

		watch(
			() => appStore.address,
			(newValue: Array<number>) => {
				if (!map.value) return;
				map.value.flyTo({
					center: newValue as LngLatLike,
					zoom: 16,
				});
			},
		);

		watch(
			() => appStore.mapZoom,
			(newValue: number) => {
				if (!map.value) return;
				if (displayDepLayer && newValue > 13) {
					displayDepLayer = false;
					tooltip.value.visibility = "";
					map.value.setLayoutProperty(
						"departements_fill",
						"visibility",
						"none",
					);
				}
				if (!displayDepLayer && newValue <= 13) {
					displayDepLayer = true;
					tooltip.value.visibility = "visible";
					map.value.setLayoutProperty(
						"departements_fill",
						"visibility",
						"visible",
					);
				}
			},
		);

		return { map, tooltip, depName };
	},
});
</script>

<style scoped>
#map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.floating-sidebar {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 1;
}

.map_tooltip {
  width: auto;
  min-width: 165px;
  height: auto;
  background-color: white;
  position: absolute;
  z-index: 999;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(22, 22, 22, 0.12),
    0 8px 16px -16px rgba(22, 22, 22, 0.32);
  text-align: left;
  pointer-events: none;
  font-size: 0.75rem;
}

.tooltip_body {
    padding-left: 0.75rem;
    padding-top: 0.25rem;
    padding-right: 0.75rem;
    line-height: 1.67;
}


</style> 