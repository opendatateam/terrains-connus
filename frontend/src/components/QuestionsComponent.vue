<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
  { 
    value: 'item-1', 
    title: 'TerrainsConnus ? Quesaco ?', 
    content: '<b>TerrainsConnus</b> permet de rechercher et d’analyser les ventes de parcelles en France par typologie (terres agricoles, bois, vignes, etc.), en combinant les données ouvertes des <b>Demandes de Valeurs Foncières (DVF)</b> et du <b>Registre Parcellaire Graphique (RPG)</b>. L’application offre une vision claire des transactions foncières pour aider agriculteurs, collectivités et investisseurs à mieux comprendre et exploiter le marché foncier.' 
  },
  { 
    value: 'item-2', 
    title: 'D’où viennent les données ?', 
    content: '<p>L\'application exploite trois sources de données publiques :</p><br /><ul><li><b>Demandes de Valeurs Foncières (DVF)</b> :<br />Les données DVF proviennent du Ministère de l\'Économie, des Finances et de la Souveraineté Industrielle et Numérique. Elles regroupent les informations portant sur les valeurs foncières déclarées à l’occasion des mutations immobilières (ventes de biens bâtis et non bâtis) enregistrées par la Direction Générale des Finances Publiques (DGFiP). Ces données incluent des informations précieuses telles que :<br /><ul><li>La nature de la mutation (vente, adjudication, expropriation, échange),</li><li>La valeur foncière (prix de la mutation),</li><li>La surface de la parcelle cadastrale,</li><li>La nature du bien (terrain, maison, immeuble),</li><li>La localisation géographique précise.</li></ul><br />Les données DVF permettent d’avoir une vue d’ensemble sur le marché foncier en France et sont mises à jour régulièrement pour refléter les transactions récentes.<br /><b>L’application présente uniquement les mutations ayant eu lieu sur des terrains agricoles, c’est-à-dire correspondant à l’une des natures de cultures suivantes : landes ; landes boisées ; prés ; pâtures ou pâturages ; pacages ou pâtis ; prés d’embouche ; herbages ; prés ; pâtures ou herbages plantes ; sols ; terres ; terres plantées ; vergers ; vignes.</b><br />Lien vers les données DVF : https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/<br /><br /><b>Registre Parcellaire Graphique (RPG)</b><br />Le RPG est une base de données géographique créée par l’Agence de Services et de Paiement (ASP). Il contient les contours des parcelles agricoles déclarées chaque année dans le cadre de la Politique Agricole Commune (PAC). Les informations disponibles dans le RPG incluent :<br /><ul><li>Les limites géographiques des parcelles agricoles,</li>Leur typologie (cultures, pâturages, etc.),<li></li>Les déclarations effectuées par les exploitants agricoles.<li></li></ul><br />Le RPG est un outil essentiel pour analyser l’utilisation des terres agricoles en France et suivre les évolutions des surfaces dédiées à différentes typologies de cultures.<br /><b>L’application mobilise le RPG pour apporter une précision supplémentaire sur les cultures présentes sur la parcelle ayant fait l’objet de la mutation.</b><br />Lien vers les données du RPG : <a href="https://www.data.gouv.fr/fr/datasets/registre-parcellaire-graphique-rpg-contours-des-parcelles-et-ilots-culturaux-et-leur-groupe-de-cultures-majoritaire/">https://www.data.gouv.fr/fr/datasets/registre-parcellaire-graphique-rpg-contours-des-parcelles-et-ilots-culturaux-et-leur-groupe-de-cultures-majoritaire/</a>'
  },
  { 
    value: 'item-3', 
    title: 'À qui s’adresse l’application ?', 
    content: '<p><b>TerrainsConnus</b> est une application utile pour :</p><ul><li><b>Entreprises du secteur immobilier</b> : analyser les tendances et identifier des opportunités.</li><li><b>Entreprises agricoles</b> : trouver des terres adaptées et planifier leurs investissements.</li><li><b>Collectivités territoriales</b> : suivre les transactions foncières et faciliter l’aménagement.</li><li><b>Citoyens curieux</b> : explorer les ventes et comprendre leur environnement foncier.</li></ul>'
  },
  { 
    value: 'item-4', 
    title: 'Pourquoi sélectionner les parcelles par typologie ?', 
    content: 'La typologie des parcelles permet d’identifier précisément leur nature (terres agricoles, bois, vignes, etc.) et leur usage. Cela offre une vision claire pour analyser le marché foncier, comparer les prix, et mieux comprendre l’utilisation des terres, que ce soit pour investir, planifier ou préserver les ressources agricoles.' 
  },
  { 
    value: 'item-5', 
    title: 'Qui sommes-nous ?', 
    content: '<p><b>TerrainsConnus</b> est une application née en décembre 2024 lors d’un hackathon, créée par une équipe de la communauté <b>data.gouv.fr</b> accompagnée de bénévoles. L’objectif est de rendre les données foncières et agricoles accessibles à tous en exploitant les données ouvertes du <b>DVF</b> et du <b>RPG</b>.</p>'
  },
]
</script>

<template>
  <div class="questions">
    <h2 class="faq-title">Questions fréquentes</h2>
    <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionContent>
          <span v-html="item.content"></span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<style scoped>
.questions {
  padding: 40px 20px;
  margin: 0;
  width: 100%; /* Étend la FAQ sur toute la largeur de l'écran */
  box-sizing: border-box;
  background-color: white; /* Fond blanc */
  font-family: 'Geist', sans-serif; /* Application de la police Geist */
}

.faq-title {
  text-align: left;
  font-size: 2rem;
  margin-bottom: 20px;
}

.accordion-item {
  width: 100%;
  font-family: 'Geist', sans-serif; /* Application de la police au contenu */
}
</style>