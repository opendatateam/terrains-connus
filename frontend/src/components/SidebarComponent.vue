<template>
  <aside class="sidebar">
    <h2>Filters</h2>
    <div>
      <label>
        <input type="checkbox" v-model="filter1" />
        Filter 1
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" v-model="filter2" />
        Filter 2
      </label>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      filter1: false,
      filter2: false
    };
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
</style> 