<template>
  <aside class="sidebar">
    <h2>Filters</h2>
    <div v-if="loading" class="loading">Chargement...</div>
    <div class="filter-section">
      <h3>Types de terrain</h3>
      <div v-for="type in landTypes" :key="type">
        <label>
          <input 
            type="checkbox" 
            :value="type"
            v-model="selectedTypes"
            @change="applyFilters"
          />
          {{ type }}
        </label>
      </div>

      <div class="filter-section">
        <h3>Département</h3>
        <select 
          v-model="selectedDepartment" 
          class="filter-select"
          @change="applyFilters"
        >
          <option value="">Tous les départements</option>
          <option v-for="dept in departments" :key="dept.code" :value="dept.code">
            {{ dept.code }} - {{ dept.name }}
          </option>
        </select>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      filter1: false,
      filter2: false,
      loading: true,
      landTypes: [],
      selectedTypes: [],
      selectedDepartment: '',
      departments: []
    };
  },
  methods: {
    applyFilters() {
      // Handle filters application logic here
    }
  }
};
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

.filter-section {
  margin-bottom: 20px;
}

.filter-section h3 {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.filter-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style> 