<template>
  <DatasheetComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DatasheetComponent from '../components/DatasheetComponent.vue'

export default defineComponent({
  name: 'DatasheetView',
  components: {
    DatasheetComponent
  }
})
</script> 