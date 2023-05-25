<template>
  <Layout>
    <div
      class="content-tagline container-fluid"
      :style="
        'background-image: url(' +
        require('@/assets/image/content/background/bg_4.png') +
        ')'
      "
    >
      <div class="information_tagline">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <h1>Tentang Kami</h1>
            <span>Semua yang ingin kamu ketahui dari Ijolan ada disini</span>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="content_dealin">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <label for="">Apa itu Ijolan?</label>
          </div>
          <div class="col-md-7">
            <div class="content_dealin_information">
              <p>
                Ijolan adalah aplikasi e-commerce dengan tampilan futuristik
                yang menarik dan mudah digunakan. Pengguna bukan hanya bisa
                melakukan jual beli saja, tapi juga terdapat model transaksi
                lelang dan barter sehingga pengguna dapat memilih sendiri model
                transaksi untuk menawarkan barang yang efisien. Dengan fitur
                chat, lokasi, dan verifikasi KTP membuat Ijolan App memiliki
                sistem keamanan yang baik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="content_history"
      :style="
        'background-image: url(' +
        require('@/assets/image/content/background/bg_5.png') +
        ')'
      "
    >
      <!-- <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="content_history_information">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus est pellentesque elit ullamcorper. Faucibus a
                pellentesque sit amet. Ipsum nunc aliquet bibendum enim
                facilisis gravida. Egestas pretium aenean pharetra magna.
                Lobortis feugiat vivamus at augue eget arcu dictum. Ipsum
                suspendisse ultrices gravida dictum fusce ut. Ullamcorper velit
                sed ullamcorper morbi tincidunt. Ipsum suspendisse ultrices
                gravida dictum fusce ut placerat orci nulla. Enim praesent
                elementum facilisis leo vel. Volutpat odio facilisis mauris sit
                amet massa vitae. Ultrices gravida dictum fusce ut placerat orci
                nulla. Volutpat odio facilisis mauris sit amet massa vitae
                tortor condimentum. Semper feugiat nibh sed pulvinar.
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <label for="">Cerita Kami</label>
          </div>
        </div>
      </div> -->
    </div>

    <!-- <div class="content_rate">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="content_rate_information">
              <span>diluncurkan pada Januari</span>
              <br />
              <strong>2021</strong>
              <br />
              <span>hingga saat ini</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="content_rate_information">
              <span>telah diunduh sebanyak</span>
              <br />
              <strong>150k+</strong>
              <br />
              <span>pengguna</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="content_rate_information">
              <span>telah digunakan sebanyak</span>
              <br />
              <strong>100k+</strong>
              <br />
              <span>pengguna aktif</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="content_rate_information">
              <span>telah mendapat rating</span>
              <br />
              <el-rate v-model="value" disabled text-color="#ff9900"> </el-rate>
              <label>4.8</label>
              <br />
              <span>pada appstore</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </Layout>
</template>
<script>
export default {
  name: "TentangKami",
  components: {
    Layout: () => import("@/views/Layout"),
  },
  data() {
    return {
      value: 5,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/TentangKami/index.scss";
@import "@/assets/scss/TentangKami/responsive.scss";
</style>
