<template>
  <div class="tile">
    <h2 class="font-bold mb-2">{{ natureCultureFullName }}</h2>
  </div>
</template>

<script lang="ts">
import { NatureCulture } from "@/types/NatureCulture";
import { defineComponent } from "vue";

export default defineComponent({
	name: "TileTwo",
	props: {
		selectedNatureCulture: {
			type: String,
			default: "",
		},
	},
	computed: {
		natureCultureFullName(): string {
			return this.selectedNatureCulture
				? NatureCulture[
						this.selectedNatureCulture as keyof typeof NatureCulture
					]
				: "";
		},
	},
});
</script>