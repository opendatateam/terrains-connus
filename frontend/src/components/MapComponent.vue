<template>
  <div id="map" style="width: 100%; height: 100vh;"></div>
  <div id="sidebar" class="floating-sidebar">
    <!-- Sidebar content goes here -->
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watch } from 'vue';
import maplibregl from 'maplibre-gl';
import type { LandTransaction } from '@/services/api';

export default {
  name: 'MapComponent',
  props: {
    transactions: {
      type: Array as () => LandTransaction[],
      default: () => []
    }
  },
  setup(props) {
    const map = ref<maplibregl.Map | null>(null);

    const updateMapData = () => {
      if (!map.value) return;

      // Update or add the GeoJSON source for transactions
      const source = map.value.getSource('transactions');
      const geojsonData = {
        type: 'FeatureCollection',
        features: props.transactions.map(t => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: t.coordinates
          },
          properties: {
            id: t.id,
            price: t.price,
            area: t.area,
            type: t.type
          }
        }))
      };

      // Add the GeoJSON source to the map
      map.value.addSource('transactions', {
        type: 'geojson',
        data: geojsonData
      });

      // Add a fill layer for transactions
      map.value.addLayer({
        id: 'transactions-fill',
        type: 'fill',
        source: 'transactions',
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': 0.1
        }
      });

      // Add an outline layer for transactions
      map.value.addLayer({
        id: 'transactions-outline',
        type: 'line',
        source: 'transactions',
        paint: {
          'line-color': '#627BC1',
          'line-width': 2
        }
      });
    };

    onMounted(() => {
      const map = new maplibregl.Map({
        container: 'map',
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [2.213749, 46.227638],
        zoom: 5.2,
        minZoom: 2,
        maxZoom: 18,
      });

      map.on('load', () => {
        // Add France boundary source
        map.addSource('france-boundary', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/metropole.geojson'
        });

        // Add a fill layer for France
        map.addLayer({
          id: 'france-fill',
          type: 'fill',
          source: 'france-boundary',
          paint: {
            'fill-color': '#627BC1',
            'fill-opacity': 0.1
          }
        });

        // Add an outline layer for France
        map.addLayer({
          id: 'france-outline',
          type: 'line',
          source: 'france-boundary',
          paint: {
            'line-color': '#627BC1',
            'line-width': 2
          }
        });
      });

      watch(() => props.transactions, {
        immediate: true,
        handler(newTransactions) {
          updateMapData();
        }
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