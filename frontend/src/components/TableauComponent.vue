<template>
  <div class="tableau">
    <h2 class="tableau-title">Voir les données</h2>
    <p class="tableau-description">
      Vous pouvez filtrer, trier et télécharger les données. Si vous réalisez un filtre, vous pouvez télécharger les données filtrées.
    </p>
    <div class="iframe-container">
      <iframe
        class="grist-embed"
        src="https://grist.numerique.gouv.fr/o/docs/wb4Q9XMVCVsg/Autre-cereales?utm_id=share-doc&embed=true"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TableauComponent",
});
</script>

<style scoped>
/* Le conteneur principal occupe toute la page */
.tableau {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Prend toute la hauteur de la fenêtre */
  margin: 0;
  padding: 20px; /* Ajout d'un padding pour le contenu */
  box-sizing: border-box; /* Inclut le padding dans la largeur */
}

/* Le titre est aligné à gauche */
.tableau-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: left;
  color: #020817; /* Couleur du titre */
}

/* Description sous le titre avec alignement à gauche */
.tableau-description {
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: left;
  color: #020817; /* Couleur alignée avec le titre */
  line-height: 1.5;
}

/* L'iframe occupe tout l'espace disponible */
.iframe-container {
  flex: 1; /* Permet à l'iframe de prendre tout l'espace disponible */
  margin: 0;
}

.grist-embed {
  width: 100%;
  height: 100%; /* Prend toute la hauteur restante */
  border: none; /* Supprime les bordures autour de l'iframe */
  background: transparent;
}
</style>
