<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script lang="ts">
import { type DefineComponent, defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default defineComponent({
	name: "App",
	components: {
		HeaderComponent,
		MainComponent,
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
