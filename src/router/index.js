import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Beranda",
    component: () =>
      import(/* webpackChunkName: "beranda" */ "../views/Beranda/Content"),
    meta: {
      title: "Beranda | ",
    },
  },
  {
    path: "/tentang-kami",
    name: "TentangKami",
    component: () =>
      import(/* webpackChunkName: "tentang-kami" */ "../views/TentangKami"),
    meta: {
      title: "Tentang Kami | ",
    },
  },
  {
    path: "/produk-fitur",
    name: "ProdukFitur",
    component: () =>
      import(/* webpackChunkName: "produk-fitur" */ "../views/ProdukFitur"),
    meta: {
      title: "Produk & Fitur | ",
    },
  },
  {
    path: "/pusat-bantuan",
    name: "PusatBantuan",
    component: () =>
      import(/* webpackChunkName: "pusat bantuan" */ "../views/PusatBantuan"),
    meta: {
      title: "Pusat Bantuan | ",
    },
  },
  {
    path: "/kebijakan",
    name: "Kebijakan",
    component: () =>
      import(/* webpackChunkName: "kebijakan" */ "../views/Kebijakan"),
    meta: {
      title: "Kebijakan | ",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
