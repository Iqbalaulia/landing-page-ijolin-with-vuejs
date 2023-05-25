<template>
  <Layout>
    <div
      class="content-tagline container-fluid"
      :style="
        'background-image: url(' +
        require('@/assets/image/content/background/bg_9.png') +
        ')'
      "
    >
      <div class="information_tagline">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <h1>Apa ada yang bisa kami bantu?</h1>
            <el-input
              class="information_tagline_search"
              placeholder="Cari bantuan..."
              prefix-icon="el-icon-search"
            >
            </el-input>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="content_search">
      <div class="container">
        <div class="content_question_tagline">
          <label for="question">Paling sering dicari</label>
        </div>
        <div class="content_question_collapse">
          <div class="row">
            <div class="col-md-6">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item class="collapse_custome" name="1">
                  <template slot="title">
                    <label for="" class="title">
                      Apakah aplikasi ini gratis ?
                    </label>
                  </template>
                  <div class="information">
                    Ijolan akan selalu gratis untuk diunduh dan akan membantu
                    kamu bertransaksi barter maupun lelang. Hanya ada potongan
                    sebesar Rp.2.500,- jika kamu mengadakan event lelang dan
                    produkmu terjual ke peserta lelang.
                  </div>
                </el-collapse-item>
                <el-collapse-item class="collapse_custome" name="2">
                  <template slot="title">
                    <label for="" class="title">
                      Apakah saya bisa menemukan pengguna terdekat ?
                    </label>
                  </template>
                  <div class="information">
                    Dengan fitur map dan jarak, kamu akan lebih mudah menemukan
                    barang atau user terdekat denganmu
                  </div>
                </el-collapse-item>
                <el-collapse-item class="collapse_custome" name="3">
                  <template slot="title">
                    <label for="" class="title">
                      Apa perbedaan Ijolan dengan marketplace lain ?
                    </label>
                  </template>
                  <div class="information">
                    Marketplace lain hanya menyediakan fitur jual dan beli, dan
                    mewajibkan kamu membuat toko jika akan menjual produk. Di
                    Ijolan tanpa toko, kamu bisa memilih jual beli, barter
                    maupun lelang untuk mendapatkan apa yang cocok untuk kamu
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="col-md-6">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item class="collapse_custome" name="4">
                  <template slot="title">
                    <label for="" class="title">
                      Apakah data saya aman ?
                    </label>
                  </template>
                  <div class="information">
                    Iya, semua data kamu tersimpan secara aman di cloud server
                    jadi kamu bisa akses data kamu dimana saja dan kapan saja.
                    Meskipun kamu ganti handphone, kamu masih dapat akses
                    menggunakan nomor handphone yang terdaftar di Ijolan.
                  </div>
                </el-collapse-item>
                <el-collapse-item class="collapse_custome" name="5">
                  <template slot="title">
                    <label for="" class="title">
                      Apakah akan ada fitur baru ?
                    </label>
                  </template>
                  <div class="information">
                    Ijolan akan terus memperbarui dan menambah fitur baru agar
                    kamu lebih mudah dan nyaman menggunakannya
                  </div>
                </el-collapse-item>
                <el-collapse-item class="collapse_custome" name="6">
                  <template slot="title">
                    <label for="" class="title">
                      Apakah dikenakan biaya dalam transaksi barter ?
                    </label>
                  </template>
                  <div class="information">
                    Dalam barter kamu tidak dikenakan biaya apapun.
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_form">
      <div class="container">
        <div class="content_form_tagline text-center">
          <label for="">Tidak ada pertanyaan yang kamu maksud?</label>
          <p>
            Kami akan sangat senang menerima komentar, ide, dan berbagai masukan
            <br />
            dari kamu. Hubungi kami jika kamu memiliki saran atau mengalami
            kendala.
          </p>
        </div>
        <div class="content_form_input">
          <div class="row mb-4">
            <div class="col-md-6">
              <div class="form-group mb-0">
                <label for="titleMateri" class="mb-2">
                  Nama Lengkap Kamu
                </label>
                <el-input placeholder="Judul Materi"></el-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-0">
                <label for="titleMateri" class="mb-2"> Alamat Email </label>
                <el-input placeholder="Judul Materi"></el-input>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-md-12">
              <div class="form-group mb-0">
                <label for="titleMateri" class="mb-2">
                  Pertanyaan tentang
                </label>
                <el-input placeholder="Judul Materi"></el-input>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-md-12">
              <div class="form-group mb-0">
                <label for="titleMateri" class="mb-2"> Pesan Kamu </label>
                <el-input type="textarea"></el-input>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-md-12">
              <div class="information">
                Dengan mengirimkan formulir ini, Anda mengizinkan kami untuk
                mengirimkan email kepada Anda sesekali tentang produk dan
                layanan kami. Anda dapat berhenti berlangganan email kapan saja,
                dan kami tidak akan pernah meneruskan email Anda ke pihak
                ketiga. <span> Kebijakan Pribadi</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4 text-end">
              <button class="btn btn-primary-yellow font-weight-bold">
                Kirim Tanggapan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      activeName: "1",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/PusatBantuan/index.scss";
@import "@/assets/scss/PusatBantuan/responsive.scss";
</style>
