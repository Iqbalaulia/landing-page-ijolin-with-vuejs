<template>
  <div>
    <!-- Visible mobile mode -->
    <div class="body d-block d-md-none">
      <router-link :to="`/`" class="logo">
        <img :src="require('@/assets/image/logo/Logo.svg')" alt="" />
      </router-link>

      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="">
          <li v-for="(item, index) in navbar.menu" :key="`menu-${index}`">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Visible lg md  -->
    <div class="container template d-none d-md-block d-lg-block">
      <div class="template-header">
        <div class="template-title">
          <img
            class="img-fluid"
            :src="require('@/assets/image/logo/Logo.svg')"
            alt=""
          />
        </div>
      </div>
      <div class="template-btn">
        <label for="template-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="template-links">
        <router-link
          v-for="(item, index) in navbar.menu"
          :key="`menu-${index}`"
          :to="item.url"
          :class="$route.name === item.name_path ? 'active' : ''"
          >{{ item.name }}</router-link
        >
        <button
          class="btn btn-primary-yellow"
          data-toggle="tooltip"
          data-placement="top"
          title="Coming Soon"
          @click="showdataform = true"
        >
          <img
            class="img-fluid"
            :src="require('@/assets/image/icon/smartphone.svg')"
            alt=""
          />
          Download
        </button>
      </div>
    </div>
    <Modal
      title=""
      :show="showdataform"
      width="40%"
      :onClose="() => (showdataform = false)"
    >
      <div class="d-flex justify-content-center modal_coming_soon">
        <div class="image_section">
          <img
            class="mx-auto"
            :src="require('@/assets/image/logo/logo_white.png')"
            alt=""
          />
        </div>
      </div>
      <div class="row modal_label">
        <div class="col-md-12">
          <p class="text-center coming_soon">Coming Soon</p>
          <p class="text-center ready">ARE YOU READY?</p>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      showdataform: false,
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      navbar: (state) => state.navbar.data,
    }),
  },
  methods: {
    // ...mapActions("PenilaianSoal", [
    //   "getListExamScore",
    //   "getDeleteListExamScore",
    // ]),
  },
  components: {
    Modal: () => import("@/components/Modal"),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Navbar/index.scss";
@import "@/assets/scss/Navbar/index-two.scss";
@import "@/assets/scss/Navbar/responsive.scss";
</style>
