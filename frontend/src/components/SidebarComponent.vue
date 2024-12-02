<template>
  <aside class="sidebar">
    <div v-if="loading" class="loading">Chargement...</div>
    <div v-else>
      <TileOne :selectedNatureCulture="selectedNatureCulture" @update:selectedNatureCulture="updateSelectedNatureCulture" />
      <TileTwo :selectedNatureCulture="selectedNatureCulture" />
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TileOne from "./sidebar/TileOne.vue";
import TileTwo from "./sidebar/TileTwo.vue";

export default defineComponent({
  name: "SidebarComponent",
  components: {
    TileOne,
    TileTwo,
  },
  data() {
    return {
      loading: true,
      selectedNatureCulture: "", // Centralized state
    };
  },
  methods: {
    updateSelectedNatureCulture(value: string) {
      this.selectedNatureCulture = value;
    },
  },
  mounted() {
    // Simulate loading
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
});
</script>

<style>
.sidebar {
  position: fixed;
  top: 100px;
  left: 20px;
  width: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.sidebar h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.loading {
  text-align: center;
  padding: 10px;
  color: #909090;
}

.tile {
  position: relative;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.tile:last-child {
  margin-bottom: 0;
}

.tile select {
  position: relative;
  z-index: 2;
}
</style>