import Vue from "vue";

import Vuex from "vuex";

import { productModule } from "./products/index.js";

Vue.use(Vuex);

const store = {
  modules: {
    productModule,
  },
};

export default new Vuex.Store(store);
