<template>
  <div class="map-container">
    <SidebarComponent />
    <MapComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MapComponent from "../components/MapComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";

export default defineComponent({
	name: "MapView",
	components: {
		MapComponent,
		SidebarComponent,
	},
});
</script> 