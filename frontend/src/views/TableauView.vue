<template>
  <TableauComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableauComponent from "../components/TableauComponent.vue";

export default defineComponent({
	name: "TableauView",
	components: {
		TableauComponent,
	},
});
</script> 