import general from "@/api/general";

export default (ctx, inject) => {
  let api = {};
  api.general = general(ctx);
  inject("api", api);
};
