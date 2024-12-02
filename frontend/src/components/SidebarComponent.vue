<template>
  <aside class="sidebar">
    <h2>Filters</h2>
    <div v-if="loading" class="loading">Chargement...</div>
    <div v-else>
      <label for="natureCultureSelect">Nature Culture:</label>
      <select id="natureCultureSelect" v-model="selectedNatureCulture">
        <option v-for="(value, key) in natureCultureOptions" :key="key" :value="key">
          {{ value }}
        </option>
      </select>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NatureCulture } from "../types";

export default defineComponent({
	name: "SidebarComponent",
	data() {
		return {
			loading: true,
			selectedNatureCulture: null,
			natureCultureOptions: NatureCulture,
		};
	},
	mounted() {
		// Simulate loading
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	},
	methods: {
		applyFilters(): void {
			// Handle filters application logic here
		},
	},
});
</script>

<style>
.sidebar {
  position: fixed;
  top: 80px; /* Give some space below header */
  left: 20px; /* Space from left edge */
  width: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
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

select {
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style> 