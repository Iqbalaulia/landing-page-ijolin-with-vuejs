import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";
const dataState = createPersistedState({
  key: "storedealin",
  paths: ["user"],
});
// import moment from "moment";
// import { _ } from "vue-underscore";

import Navbar from "./Navbar";
import Kebijakan from "./Kebijakan";
export default new Vuex.Store({
  modules: {
    navbar: Navbar,
    kebijakan: Kebijakan,
  },
  state: {},

  mutations: {
    updateState(state, payload) {
      Object.keys(payload).map((item) => {
        state[item] = payload[item];
      });
    },
  },
  actions: {},
  plugins: [dataState],
});
