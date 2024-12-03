<template>
  <div class="tile">
    <h2 class="font-bold mb-2">{{ natureCultureFullName }}</h2>
    <p><b>Transactions - {{ level }}</b></p>
    <span v-if="data.length > 0"><HistogramChart :chartData="data" :key="chartKey" /></span>
    <span v-else>Il n'y a pas de transactions pour ce département.</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { NatureCulture } from "@/types/NatureCulture";
import HistogramChart from '@/components/HistogramChart.vue';
import monthDepData from "@/assets/json/dvf_month_agri.json";
import monthNatData from "@/assets/json/dvf_month_agri_nat.json";
import { useAppStore } from '@/store/appStore.ts';

export default defineComponent({
  name: "TileTwo",
  components: {
    HistogramChart,
  },
  props: {
    selectedNatureCulture: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const appStore = useAppStore();

    const data = ref(monthNatData["P"]);
    const chartKey = ref(0);

    const options = {
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    };
    const level = ref("National")

    const natureCultureFullName = computed((): string => {
      return props.selectedNatureCulture
        ? NatureCulture[props.selectedNatureCulture as keyof typeof NatureCulture]
        : "";
    });

    watch(() => appStore.option, (newValue: string) => {
      data.value = monthNatData[newValue];
      chartKey.value++;
    });

    watch(() => appStore.mouseDep, (newValue: string) => {
      data.value = monthDepData[appStore.option][newValue];
      level.value = appStore.mouseDepName;
      chartKey.value++;
    });

    return {
      natureCultureFullName,
      data,
      options,
      chartKey,
      level,
    };
  },
});
</script>
