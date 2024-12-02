import { createRouter, createWebHistory } from 'vue-router'
import MapView from '../views/MapView.vue'
import DatasheetView from '../views/DatasheetView.vue'
import QuestionsView from '../views/QuestionsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/datasheet',
      name: 'datasheet',
      component: DatasheetView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    }
  ]
})

export default router 