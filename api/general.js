export default (ctx) => {
  let { $axios } = ctx;
  return {
    async products() {
      return $axios.get("https://dummyjson.com/products");
    },

    async quotes() {
      return $axios.get("https://dummyjson.com/quotes");
    },
  };
};
