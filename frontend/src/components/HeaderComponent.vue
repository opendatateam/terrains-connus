<template>
  <header class="app-header">
    <h1>Terrains Connus</h1>
    <!-- Future tabs can be added here -->
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
};
</script>

<style>
.app-header {
  width: 100%;
  background-color: white;
  color: #333;
  padding: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
</style> 