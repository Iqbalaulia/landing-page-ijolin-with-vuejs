<template>
  <div class="footer_beranda">
    <div class="content_footer container">
      <div class="row">
        <div class="col-md-3 text-center">
          <div class="content_footer_image">
            <img
              :src="require('@/assets/image/logo/logo_white.png')"
              class="img-fluid d-none d-sm-block"
              alt=""
            />
            <img
              class="img-fluid mt-2 mb-2"
              :src="require('@/assets/image/logo/text_white.svg')"
              alt=""
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="layanan">
            <label for="">Layanan</label>
            <ul>
              <li>
                <router-link :to="`/tentang-kami`"> Tentang Kami </router-link>
              </li>
              <li>
                <router-link :to="`/produk-fitur`">
                  Produk & Fitur
                </router-link>
              </li>
              <li>
                <a href="javascript: void(0);" @click="handleSyaratKetentuan()">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="javascript: void(0);"
                  @click="handleKebijakanPrivasi()"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="kontak">
            <label for="">Kontak Kami</label>
            <ul>
              <li class="">
                <div class="d-flex">
                  <img
                    class="img-fluid"
                    :src="require('@/assets/image/icon/map-pin.png')"
                    alt=""
                  />
                  Jl. Pleret Selatan II No. 8, Banyu, Banyuanyar, Banjarsari,
                  Surakarta - Jawa Tengah
                </div>
                <!-- <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/map-pin.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span>
                      Jl. Mawar No. 9, Patukpulo, Sidomulyo, Krian, Sidoarjo -
                      Jawa Timur
                    </span>
                  </div>
                </div> -->
              </li>
              <li>
                <div class="d-flex">
                  <img
                    class="img-fluid"
                    :src="require('@/assets/image/icon/mail.png')"
                    alt=""
                  />
                  partnership@ijolan.id
                </div>
                <!-- <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/mail.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span> partnership@ijolan.id </span>
                  </div>
                </div> -->
              </li>
              <li>
                <div class="d-flex">
                  <img
                    class="img-fluid"
                    :src="require('@/assets/image/icon/CS.png')"
                    alt=""
                  />
                  cs@ijolan.id
                </div>
                <!-- <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/CS.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span> cs@ijolan.id </span>
                  </div>
                </div> -->
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="col-md-3">
          <div class="sosmed">
            <ul>
              <li>
                <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/facebook.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span> Facebook </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/instagram.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span> Instagram </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/twitter.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span> Twitter</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-md-2">
                    <img
                      class="img-fluid"
                      :src="require('@/assets/image/icon/youtube.png')"
                      alt=""
                    />
                  </div>
                  <div class="col-md-10">
                    <span> Youtube</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
    <div class="text-footer text-center">
      <label>
        © 2021 Ijolan - PT Artech Indo Universal. All Rights Reserved.
      </label>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapState({
      kebijakan: (state) => state.kebijakan.data,
    }),
  },
  methods: {
    handleKebijakanPrivasi() {
      this.$router.push("/kebijakan");
      this.kebijakan.choose_kebijakan = "Kebijakan Privasi";
    },
    handleSyaratKetentuan() {
      this.$router.push("/kebijakan");
      this.kebijakan.choose_kebijakan = "Syarat & Ketentuan";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Footer/index.scss";
</style>
