<script>
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "HistogramChart",
  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.createChart();
    });
  },
  methods: {
    createChart() {
      if (!this.$refs.histogramChart) {
        console.error("Canvas reference is not available.");
        return;
      }

      const ctx = this.$refs.histogramChart.getContext("2d");
      const labels = this.chartData.map((item) => item.x);
      const values = this.chartData.map((item) => item.y);

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Transactions",
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
          ...this.chartOptions,
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <canvas ref="histogramChart"></canvas>
  </div>
</template>
