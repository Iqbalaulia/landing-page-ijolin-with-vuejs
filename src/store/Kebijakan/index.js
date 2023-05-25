const state = {
  data: {
    choose_kebijakan: "Kebijakan Privasi",
    item_list: [
      {
        name: "Kebijakan Privasi",
      },
      {
        name: "Syarat & Ketentuan",
      },
    ],
  },
};

const mutations = {
  changeKebijakan(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
