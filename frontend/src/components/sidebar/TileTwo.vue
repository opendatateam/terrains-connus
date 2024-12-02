<template>
  <div class="tile">
    <h2 class="font-bold mb-2">{{ natureCultureFullName }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NatureCulture } from "@/types/enums/NatureCulture";

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
      return this.selectedNatureCulture ? NatureCulture[this.selectedNatureCulture as keyof typeof NatureCulture] : "";
    }
  }
});
</script>