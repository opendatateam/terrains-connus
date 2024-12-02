<template>
  <header class="app-header">
    <div class="header-content">
      <h1>Terrains connus</h1>
      <p class="tagline">Obtenez une vue d'ensemble des terres vendues, classées par typologie, et accédez rapidement aux détails spécifiques de chaque transaction, incluant son prix et sa classification</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HeaderComponent",
});
</script>

<style>
.app-header {
  width: 100%;
  background-color: white;
  color: #333;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.header-content {
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}

.tagline {
  margin: 8px 0 0 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
}
</style> 