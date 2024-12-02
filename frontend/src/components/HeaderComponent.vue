<template>
  <header class="app-header">
    <div class="header-content">
      <!-- Logo -->
      <div class="logo-container">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo.svg" alt="Terrains Connus Logo" class="logo" />
        </router-link>
      </div>
      <!-- Navigation et recherche -->
      <div class="nav-search">
        <nav class="navigation">
          <!-- Onglet Carte -->
          <router-link
            to="/"
            :class="{ active: isMapRoute }"
            class="nav-link"
          >
            <img
              :src="isMapRoute ? mapBlackIcon : mapGreyIcon"
              alt="Carte Icon"
              class="nav-icon"
            />
            Carte
          </router-link>
          <!-- Onglet Tableau -->
          <router-link
            to="/tableau"
            :class="{ active: isTableRoute }"
            class="nav-link"
          >
            <img
              :src="isTableRoute ? tableBlackIcon : tableGreyIcon"
              alt="Tableau Icon"
              class="nav-icon"
            />
            Tableau
          </router-link>
          <!-- Onglet Questions -->
          <router-link
            to="/questions"
            :class="{ active: isQuestionsRoute }"
            class="nav-link"
          >
            <img
              :src="isQuestionsRoute ? lightBlackIcon : lightGreyIcon"
              alt="Questions Icon"
              class="nav-icon"
            />
            Questions
          </router-link>
        </nav>
        <!-- Barre de recherche -->
        <input
          type="text"
          placeholder="Rechercher une adresse ou une parcelle"
          class="search-input"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

/* Importation des icônes */
import mapBlackIcon from "@/assets/mapblack.svg";
import mapGreyIcon from "@/assets/mapgrey.svg";
import tableBlackIcon from "@/assets/tableblack.svg";
import tableGreyIcon from "@/assets/tablegrey.svg";
import lightBlackIcon from "@/assets/lightblack.svg";
import lightGreyIcon from "@/assets/lightgrey.svg";

export default defineComponent({
  setup() {
    const route = useRoute();

    const isMapRoute = computed(() => route.path === "/" || route.path === "/map");
    const isTableRoute = computed(() => route.path === "/tableau");
    const isQuestionsRoute = computed(() => route.path === "/questions");

    return {
      isMapRoute,
      isTableRoute,
      isQuestionsRoute,
      mapBlackIcon,
      mapGreyIcon,
      tableBlackIcon,
      tableGreyIcon,
      lightBlackIcon,
      lightGreyIcon,
    };
  },
});
</script>

<style>
/* Styles de l'entête */
.app-header {
  width: 100%;
  background-color: white;
  color: #333;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Contenu principal : alignement horizontal */
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

/* Conteneur du logo */
.logo-container {
  display: flex;
  align-items: center;
}

.logo-link {
  display: inline-flex;
}

.logo {
  width: 200px;
  height: auto;
  cursor: pointer; /* Indique que le logo est cliquable */
}

/* Navigation et recherche */
.nav-search {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Navigation */
.navigation {
  display: flex;
  gap: 15px;
}

.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #64748B;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: color 0.2s, background-color 0.2s;
  font-family: 'Geist', sans-serif;
}

.nav-link:hover {
  color: #333;
  background-color: #f5f5f5;
}

.nav-link.active {
  color: #333;
  font-weight: bold;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

/* Barre de recherche */
.search-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 300px;
}

.search-input::placeholder {
  color: #aaa;
}
</style>