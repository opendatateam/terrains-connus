<template>
  <div class="tile">
    <select 
      id="natureCultureSelect" 
      v-model="localSelectedNatureCulture" 
      @change="emitSelection" 
      class="w-full p-2 rounded border border-gray-200"
    >
      <option disabled value="">{{ "Choisir une nature de la culture" }}</option>
      <option v-for="(value, key) in natureCultureOptions" :key="key" :value="key">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NatureCulture } from "../../types";

export default defineComponent({
  name: "TileOne",
  props: {
    selectedNatureCulture: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      localSelectedNatureCulture: this.selectedNatureCulture,
      natureCultureOptions: NatureCulture,
    };
  },
  methods: {
    emitSelection() {
      this.$emit('update:selectedNatureCulture', this.localSelectedNatureCulture);
    },
  },
  watch: {
    selectedNatureCulture(newVal) {
      this.localSelectedNatureCulture = newVal;
    },
  },
});
</script>
