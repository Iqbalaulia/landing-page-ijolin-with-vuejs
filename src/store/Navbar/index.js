// import { ApiPutRequest, ApiPostMultipart } from "@/utils/Api";
// import { Message } from "element-ui";

const state = {
  data: {
    menu: [
      {
        name: "Beranda",
        url: "/",
        name_path: "Beranda",
      },
      {
        name: "Tentang Kami",
        url: "/tentang-kami",
        name_path: "TentangKami",
      },
      {
        name: "Produk & Fitur",
        url: "/produk-fitur",
        name_path: "ProdukFitur",
      },
      {
        name: "Pusat Bantuan",
        url: "/pusat-bantuan",
        name_path: "PusatBantuan",
      },
    ],
  },
};

const mutations = {
  changeNavbar(state, payload) {
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
