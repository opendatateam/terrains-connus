<template>
  <QuestionsComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QuestionsComponent from '../components/QuestionsComponent.vue'

export default defineComponent({
  name: 'QuestionsView',
  components: {
    QuestionsComponent
  }
})
</script> 