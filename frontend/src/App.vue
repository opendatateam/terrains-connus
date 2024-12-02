<template>
  <HeaderComponent />
  <SidebarComponent />
  <MapComponent />
</template>

<script lang="ts">
import { type DefineComponent, defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MapComponent from "./components/MapComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";

export default defineComponent({
	name: "App",
	components: {
		HeaderComponent,
		SidebarComponent,
		MapComponent,
	},
}) as DefineComponent;
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
