<template>
  <div class="" ref="chartContainer"></div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  props: {
    type: String,
    chartTitle: String,
    chartData: Array,
  },
  data: () => ({
    chartOptions: {
      chart: {
        type: "",
      },
      title: {
        text: "",
      },
      series: [
        {
          data: [],
        },
      ],
    },
  }),

  created() {
    this.chartOptions.title.text = this.chartTitle;
    this.chartOptions.chart.type = this.type;
    this.chartOptions.series[0]["data"] = this.chartData;
    console.log("data", this.chartData);
  },

  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      this.chart = Highcharts.chart(
        this.$refs.chartContainer,
        this.chartOptions
      );
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>
