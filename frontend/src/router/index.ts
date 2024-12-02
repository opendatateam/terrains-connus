import { createRouter, createWebHistory } from "vue-router";
import MapView from "../views/MapView.vue";
import QuestionsView from "../views/QuestionsView.vue";
import TableauView from "../views/TableauView.vue";

const router = createRouter({
	history: createWebHistory("/terrains-connus/"),
	routes: [
		{
			path: "/",
			redirect: "/carte",
		},
		{
			path: "/carte",
			name: "carte",
			component: MapView,
		},
		{
			path: "/tableau",
			name: "tableau",
			component: TableauView,
		},
		{
			path: "/questions",
			name: "questions",
			component: QuestionsView,
		},
	],
});

export default router;
