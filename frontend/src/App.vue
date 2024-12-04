<template>
  <div id="app">
    <MobileMessage v-if="isMobile" />
    <div v-else>
      <HeaderComponent />
      <MainComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import MobileMessage from "./components/MobileMessage.vue"; // Assurez-vous que ce fichier existe

export default defineComponent({
	name: "App",
	components: {
		HeaderComponent,
		MainComponent,
		MobileMessage,
	},
	setup() {
		const isMobile = ref(false);

		// Détecter si l'utilisateur est sur un appareil mobile
		onMounted(() => {
			const userAgent = window.navigator.userAgent.toLowerCase();
			isMobile.value =
				/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
					userAgent,
				);
		});

		return { isMobile };
	},
});
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

/* Ajuster l'affichage pour le mobile */
.mobile-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f5f1;
  color: #020817;
  font-family: 'Geist', sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.mobile-message img {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.mobile-message h1 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
}

.mobile-message p {
  font-size: 1rem;
  margin: 10px 0 0;
}
</style>
