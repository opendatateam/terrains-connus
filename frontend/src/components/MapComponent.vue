<template>
  <div id="map" style="width: 100%; height: 100vh;"></div>
  <div id="sidebar" class="floating-sidebar">
    <!-- Sidebar content goes here -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
import maplibregl from 'maplibre-gl';

export default {
  name: 'MapComponent',
  setup() {
    onMounted(() => {
      const map = new maplibregl.Map({
        container: 'map',
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [2.213749, 46.227638],
        zoom: 4.5,
        minZoom: 2,
        maxZoom: 18,
      });
    });
  }
};
</script>

<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
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
  z-index: 1; /* Ensure the sidebar is above the map */
}
</style> 