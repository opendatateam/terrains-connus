<template>
  <div id="map" style="width: 100%; height: 100vh;"></div>
  <div id="sidebar" class="floating-sidebar">
  </div>
</template>

<script lang="ts">
import maplibregl, { type Map as MapLibreMap } from "maplibre-gl";
import type { StyleSpecification } from "maplibre-gl";
import { type Ref, defineComponent, onMounted, ref } from "vue";
import styleVector from "@/assets/json/vector.json";
import testData from "@/assets/json/test.json";
import * as d3 from "d3-scale";

export default defineComponent({
	name: "MapComponent",
	setup() {
		const map: Ref<MapLibreMap | null> = ref(null);

		const calculateColor = (value: number) => {
			const scaleMin = 0;
			const scaleMax = 1000;
			const pivot = 500;

			const scale = d3
				.scaleLinear<string>()
				.domain([scaleMin, pivot, scaleMax])
				.range(["#F8FAFC", "#475569", "#020617"]);

			return scale(value);
		};

		const updateMap = () => {
			if (!map.value) return;

			let resultArray = [];
			resultArray.push("match")
			resultArray.push(["get", "code"])
			Object.entries(testData["Prés"]).forEach(([key, value]) => {
				resultArray.push(key, calculateColor(Number(value)));
			});
			resultArray.push("#CCCCCC")
			console.log("okok")
			map.value.setPaintProperty(
				"departements_fill",
				"fill-color",
				resultArray
			);              
		}

		onMounted(() => {
			const mapInstance: MapLibreMap = new maplibregl.Map({
				container: "map",
				style: styleVector as StyleSpecification,
				center: [2.213749, 46.227638], // Center of France
				zoom: 5.2,
				minZoom: 2,
				maxZoom: 18,
			});

			console.log("oefekok")
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
				console.log("okokefcece")
				updateMap();

			});

			map.value = mapInstance;
		});

		return { map };
	},
});
</script>

<style>
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
</style> 