<template>
  <div>
    <leaflet class="mt-20" />
    <template v-if="state.isLoading">
      <h1 class="text-center mt-20">Loading</h1>
    </template>
    <template v-if="!state.isLoading">
      <div class="container mx-auto">
        <charts
          type="pie"
          class="my-20"
          :chartData="items.dataChartPie"
          chartTitle="Products"
        />

        <charts
          type="area"
          :chartData="items.dataChartArea"
          chartTitle="Quotes"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    state: {
      isLoading: false,
    },
    items: {
      users: [],
      characters: [],
      dataChartPie: [],
      dataChartArea: [],
    },
  }),

  created() {
    this.fetch();
  },

  methods: {
    async fetch() {
      this.state.isLoading = true;
      const api = [this.$api.general.products(), this.$api.general.quotes()];

      let [resProducts, resQuotes] = await Promise.all(api);

      this.normalizeProducts(resProducts.data?.products);
      this.normalizeQuotes(resQuotes.data?.quotes);

      this.state.isLoading = false;
    },

    normalizeProducts(val) {
      let data = val?.map((x) => {
        return { name: x?.brand, y: x?.price };
      });

      this.items.dataChartPie = data;
    },

    normalizeQuotes(val) {
      let data = val?.map((x) => {
        return { name: x?.author, y: x?.id };
      });

      this.items.dataChartArea = data;
    },
  },
};
</script>
