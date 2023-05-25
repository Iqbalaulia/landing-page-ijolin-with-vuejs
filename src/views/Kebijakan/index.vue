<template>
  <Layout>
    <div>
      <div class="kebijakan container mt-2 mb-2">
        <div class="row">
          <div class="col-md-12">
            <label for="" class="title">Artikel</label>
          </div>
          <div class="col-md-3">
            <div class="kebijakan_list">
              <div
                class="articles_section"
                v-for="(item, index) in kebijakan.item_list"
                :key="`list_${index}`"
                @click="clickItem(item.name)"
                :class="
                  kebijakan.choose_kebijakan === item.name
                    ? `article_active`
                    : ``
                "
              >
                <a
                  href="javascript: void(0);"
                  :class="
                    kebijakan.choose_kebijakan === item.name ? `active` : ``
                  "
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="kebijakan_content">
              <Privasi v-if="kebijakan.choose_kebijakan === `Kebijakan Privasi`" />
              <SyaratKetentuan v-if="kebijakan.choose_kebijakan === `Syarat & Ketentuan`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Kebijakan",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      kebijakan: (state) => state.kebijakan.data,
    }),
  },
  methods: {
    clickItem(name) {
      this.kebijakan.choose_kebijakan = name;
    },
  },
  components: {
    Layout: () => import("@/views/Layout"),
    Privasi: () => import(`./Privasi`),
    SyaratKetentuan: () => import(`./SyaratKetentuan`),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Kebijakan/index.scss";
@import "@/assets/scss/Kebijakan/responsive.scss";
</style>
