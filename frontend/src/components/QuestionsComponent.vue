<template>
  <div class="faq">
    <h2 class="text-2xl font-bold mb-6">FAQ</h2>
    <div class="accordion">
      <!-- Question 1 -->
      <div class="accordion-item">
        <button
          class="accordion-header"
          @click="toggleAccordion(1)"
          :aria-expanded="activeAccordion === 1"
        >
          TerrainsConnus ? Quesaco ?
        </button>
        <div class="accordion-body" v-show="activeAccordion === 1">
          <p>
            <strong>TerrainsConnus</strong> permet de rechercher et d’analyser les ventes de parcelles en France par typologie (terres agricoles, bois, vignes, etc.), en combinant les données ouvertes des <strong>Demandes de Valeurs Foncières (DVF)</strong> et du <strong>Registre Parcellaire Graphique (RPG)</strong>. L’application offre une vision claire des transactions foncières pour aider agriculteurs, collectivités et investisseurs à mieux comprendre et exploiter le marché foncier.
          </p>
        </div>
      </div>

      <!-- Question 2 -->
      <div class="accordion-item">
        <button
          class="accordion-header"
          @click="toggleAccordion(2)"
          :aria-expanded="activeAccordion === 2"
        >
          D’où viennent les données ?
        </button>
        <div class="accordion-body" v-show="activeAccordion === 2">
          <p>L'application exploite trois sources de données publiques :</p>
          <h4 class="font-semibold mt-2">Demandes de Valeurs Foncières (DVF)</h4>
          <p>
            Les données DVF proviennent du Ministère de l'Économie, des Finances et de la Souveraineté Industrielle et Numérique. Elles regroupent les informations portant sur les valeurs foncières déclarées à l’occasion des mutations immobilières (ventes de biens bâtis et non bâtis).
          </p>
          <ul class="list-disc pl-5">
            <li>Nature de la mutation (vente, adjudication, expropriation, etc.).</li>
            <li>Valeur foncière (prix de la mutation).</li>
            <li>Surface de la parcelle cadastrale.</li>
            <li>Nature du bien (terrain, maison, immeuble).</li>
            <li>Localisation géographique précise.</li>
          </ul>
          <p>Les mutations concernent uniquement les terrains agricoles.</p>

          <h4 class="font-semibold mt-4">Registre Parcellaire Graphique (RPG)</h4>
          <p>
            Le RPG contient les contours des parcelles agricoles déclarées chaque année dans le cadre de la Politique Agricole Commune (PAC). Ces données incluent les typologies des cultures et les limites géographiques.
          </p>

          <h4 class="font-semibold mt-4">Parcelles en Agriculture Biologique (AB)</h4>
          <p>
            Ce jeu de données regroupe les parcelles déclarées en bio ou en conversion dans le cadre de la PAC. L’application identifie si une parcelle vendue est conduite en bio.
          </p>
        </div>
      </div>

      <!-- Question 3 -->
      <div class="accordion-item">
        <button
          class="accordion-header"
          @click="toggleAccordion(3)"
          :aria-expanded="activeAccordion === 3"
        >
          À qui s’adresse l’application ?
        </button>
        <div class="accordion-body" v-show="activeAccordion === 3">
          <p>
            <strong>TerrainsConnus</strong> est une application utile pour :
          </p>
          <ul class="list-disc pl-5">
            <li>
              <strong>Les entreprises du secteur immobilier</strong> : identifier des opportunités d’investissement, analyser les tendances de prix et affiner leurs stratégies.
            </li>
            <li>
              <strong>Les entreprises agricoles</strong> : repérer des terres adaptées, comparer les prix par typologie ou région, et planifier leurs investissements.
            </li>
            <li>
              <strong>Les collectivités territoriales</strong> : suivre les transactions foncières, identifier les zones à fort potentiel ou à protéger.
            </li>
            <li>
              <strong>Les citoyens curieux</strong> : explorer les prix et typologies des parcelles vendues, mieux comprendre leur environnement ou préparer un achat foncier.
            </li>
          </ul>
        </div>
      </div>

      <!-- Question 4 -->
      <div class="accordion-item">
        <button
          class="accordion-header"
          @click="toggleAccordion(4)"
          :aria-expanded="activeAccordion === 4"
        >
          Qui sommes-nous ?
        </button>
        <div class="accordion-body" v-show="activeAccordion === 4">
          <p>
            <strong>TerrainsConnus</strong> est une application née en décembre 2024 lors d’un hackathon, créée par une équipe de la communauté <strong>data.gouv.fr</strong> accompagnée de bénévoles. L’objectif est de rendre les données foncières et agricoles accessibles à tous.
          </p>
        </div>
      </div>

      <!-- Question 5 -->
      <div class="accordion-item">
        <button
          class="accordion-header"
          @click="toggleAccordion(5)"
          :aria-expanded="activeAccordion === 5"
        >
          L’utilisation de l’application est-elle conforme à la réglementation ?
        </button>
        <div class="accordion-body" v-show="activeAccordion === 5">
          <p>
            Oui, l’utilisation de <strong>TerrainsConnus</strong> est conforme à la réglementation. Les données utilisées (DVF et RPG) sont publiques et ouvertes, respectant le <strong>RGPD</strong> et les directives légales.
          </p>
        </div>
      </div>

      <!-- Question 6 -->
      <div class="accordion-item">
        <button
          class="accordion-header"
          @click="toggleAccordion(6)"
          :aria-expanded="activeAccordion === 6"
        >
          Pourquoi sélectionner les parcelles par typologie ?
        </button>
        <div class="accordion-body" v-show="activeAccordion === 6">
          <p>
            La typologie des parcelles permet d’identifier précisément leur nature (terres agricoles, bois, vignes, etc.) et leur usage. Cela offre une vision claire pour analyser le marché foncier, comparer les prix et mieux comprendre l’utilisation des terres.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FAQComponent",
  setup() {
    const activeAccordion = ref<number | null>(null);

    const toggleAccordion = (index: number) => {
      activeAccordion.value = activeAccordion.value === index ? null : index;
    };

    return {
      activeAccordion,
      toggleAccordion,
    };
  },
});
</script>

<style>
.faq {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.accordion {
  border-top: 1px solid #ddd;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
}

.accordion-header {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.accordion-header:hover {
  background-color: #f9f9f9;
}

.accordion-header[aria-expanded="true"] {
  background-color: #f0f0f0;
}

.accordion-body {
  padding: 15px;
  font-size: 0.95rem;
  line-height: 1.6;
  background-color: #f9f9f9;
}
</style>