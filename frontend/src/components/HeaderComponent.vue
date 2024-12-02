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
          placeholder="Rechercher une adresse ou une commune"
          class="search-input"
          v-model="searchAdress"
          v-on:keyup.enter="autoComplete()"
          @input="autoComplete()"
        />
        <div class="addressPropositions" v-if="resultsAdresses">
          <span v-if="resultsAdresses">
            <span v-bind:key="item.properties.banId" v-for="item in resultsAdresses.features">
              <div class="addressProposition" @click="goToAddress(item.geometry.coordinates)">{{  item.properties.label }}</div>
            </span>
          </span></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from '@/store/appStore.ts';

/* Importation des icônes */
import mapBlackIcon from "@/assets/mapblack.svg";
import mapGreyIcon from "@/assets/mapgrey.svg";
import tableBlackIcon from "@/assets/tableblack.svg";
import tableGreyIcon from "@/assets/tablegrey.svg";
import lightBlackIcon from "@/assets/lightblack.svg";
import lightGreyIcon from "@/assets/lightgrey.svg";

interface AddressFeature {
  banId: string;
  label: string;
}

interface Geometry{
  coordinates: Array<number>
}

interface Feature{
  properties: AddressFeature
  geometry: Geometry
}

interface ResultsAdresses {
  features: Feature[];
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const appStore = useAppStore();

    const isMapRoute = computed(() => route.path === "/" || route.path === "/map");
    const isTableRoute = computed(() => route.path === "/tableau");
    const isQuestionsRoute = computed(() => route.path === "/questions");
    const searchAdress = ref("")
    const resultsAdresses = ref<ResultsAdresses | null>(null)

    const autoComplete = () => {
      if (searchAdress.value.length === 0) {
        resultsAdresses.value = null;
      }
      let search = searchAdress.value;
      let timer = setTimeout(() => {
        if (searchAdress.value === search) {
          getAdresses();
        }
      }, 650);
    }


    const getAdresses = () => {
      fetch(
        "https://api-adresse.data.gouv.fr/search/?q=" +
        searchAdress.value.replace(" ", "%20")
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resultsAdresses.value = data;
        });
    }

    const goToAddress = (coordinates: Array<number>) => {
      appStore.updateAddress(coordinates)
      resultsAdresses.value = null;
    }

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
      searchAdress,
      autoComplete,
      resultsAdresses,
      goToAddress,
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

.addressPropositions {
  position: absolute;
  top: 100%;
  right: 30px;
  width: 300px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
}

.addressProposition{
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

.addressProposition:hover{
  background-color: #ebebeb;
}

</style>