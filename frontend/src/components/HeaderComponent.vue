<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-top">
        <h1>Terrains connus</h1>
        <p class="tagline">Obtenez une vue d'ensemble des terres vendues, classées par typologie, et accédez rapidement aux détails spécifiques de chaque transaction, incluant son prix et sa classification</p>
      </div>
      <nav class="navigation">
        <router-link to="/" :class="{ active: isMapRoute }" class="nav-link">Carte</router-link>
        <router-link to="/tableau" class="nav-link">Tableau</router-link>
        <router-link to="/questions" class="nav-link">Questions</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
	setup() {
		const route = useRoute();
		const isMapRoute = computed(() => {
			return route.path === "/" || route.path === "/map";
		});

		return {
			isMapRoute,
		};
	},
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
}

.header-top {
  margin-bottom: 20px;
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

.navigation {
  border-bottom: 1px solid #eee;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  color: #666;
  text-decoration: none;
  margin-right: 10px;
}

.nav-link:hover {
  color: #333;
}

.router-link-active {
  color: #333;
  border-bottom: 2px solid #627BC1;
  margin-bottom: -1px;
}
</style> 