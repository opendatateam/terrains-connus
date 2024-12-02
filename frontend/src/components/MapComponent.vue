<template>
  <div id="map" style="width: 100%; height: 100vh;"></div>
  <div id="sidebar" class="floating-sidebar">
    <!-- Sidebar content goes here -->
  </div>
</template>

<script lang="ts">
import type { Map } from "maplibre-gl";
import maplibregl from "maplibre-gl";
import { type Ref, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "MapComponent",
	setup() {
		const map: Ref<Map | null> = ref(null);

		onMounted(() => {
			const mapInstance = new maplibregl.Map({
				container: "map",
				style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
				center: [2.213749, 46.227638], // Center of France
				zoom: 5.2,
				minZoom: 2,
				maxZoom: 18,
			});

			mapInstance.on("load", () => {
				mapInstance.addSource("france-boundary", {
					type: "geojson",
					data: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/metropole.geojson",
				});

				mapInstance.addLayer({
					id: "france-fill",
					type: "fill",
					source: "france-boundary",
					paint: {
						"fill-color": "#627BC1",
						"fill-opacity": 0.1,
					},
				});

				mapInstance.addLayer({
					id: "france-outline",
					type: "line",
					source: "france-boundary",
					paint: {
						"line-color": "#627BC1",
						"line-width": 2,
					},
				});
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