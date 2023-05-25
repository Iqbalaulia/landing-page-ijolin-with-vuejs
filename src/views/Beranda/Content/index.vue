<template>
  <Layout>
    <div
      class="content-beranda container-fluid"
      :style="
        'background-image: url(' +
        require('@/assets/image/content/background/bg_2.png') +
        ')'
      "
    >
      <div class="information_tagline">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <h1>
              Jual Beli, Lelang dan Barter <br />
              Hanya Dalam 1 Aplikasi
            </h1>
            <span
              >Dapatkan barang yang kamu inginkan disini dengan uang maupun
              tanpa uang</span
            >
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="image_banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <div class="d-flex justify-content-center">
              <img
                class="d-none d-sm-block h-75"
                :src="require('@/assets/image/content/image_1.png')"
                alt=""
              />
              <img
                class="image_center"
                :src="require('@/assets/image/content/image_3.png')"
                alt=""
              />
              <img
                class="d-none d-sm-block h-75"
                :src="require('@/assets/image/content/image_2.png')"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="apps">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4 d-flex justify-content-center">
            <div
              data-toggle="tooltip"
              data-placement="top"
              title="Coming Soon"
              @click="showdataform = true"
            >
              <img
                class="image_apps"
                :src="require('@/assets/image/logo/google_play.png')"
                alt=""
              />
            </div>
            <div
              @click="showdataform = true"
              data-toggle="tooltip"
              data-placement="top"
              title="Coming Soon"
            >
              <img
                class="image_apps"
                :src="require('@/assets/image/logo/app_store.png')"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
    <div class="fiture">
      <div class="content_fiture">
        <label class="text-center d-block">Disini Semua Bisa</label>
        <img
          class="image_line d-none d-sm-block"
          :src="require('@/assets/image/icon/line.png')"
          alt=""
        />
        <div class="content_fiture_lelang container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <img
                class="content_fiture_lelang_image img-fluid"
                :src="require('@/assets/image/content/lelang.png')"
                alt=""
              />
            </div>
            <div class="col-md-6">
              <div class="information_lelang">
                <label for="">Pilih Sendiri Caramu Bertransaksi </label>
                <br />
                <p class="information_lelang_text">
                  Dengan pilihan transaksi secara jual beli, lelang, dan barter,
                  kamu akan lebih mudah dapetin apa yang kamu inginkan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="content_fiture_chat container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <div class="content_fiture_chat_informasi">
                <label for="">Dilengkapi Fitur Chat</label>
                <br />
                <p class="content_fiture_chat_informasi_text">
                  Kamu dapat terhubung dengan pengguna lain secara langsung dan
                  ngobrol soal barang yang kamu inginkan.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img
                class="content_fiture_chat_image img-fluid"
                :src="require('@/assets/image/content/connect.png')"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="content_fiture_transaksi container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <img
                class="content_fiture_lelang_image img-fluid"
                :src="require('@/assets/image/content/transaksi.png')"
                alt=""
              />
            </div>
            <div class="col-md-6">
              <div class="information_lelang">
                <label for="">Transaksi Lebih Aman </label>
                <br />
                <p class="information_lelang_text">
                  Sistem dan tim kami selalu mengontrol setiap pengguna.
                  Ditambah dengan sistem verifikasi yang baik akan meminimalisir
                  kecurangan dalam setiap transaksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="testimonial">
      <div class="content_testimonial container">
        <div class="content_testimonial_tagline text-center">
          <label for="testimonial"> Yuk, dengar apa kata sobat Ijolan  </label>
          <p class="content_testimonial_tagline_text">
            Sudah lebih dari 1.000.000 User menggunakan Ijolan, coba simak apa
            kata mereka yuk!
          </p>
        </div>
        <div class="content_testimonial_card">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="section_profile">
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid"
                          :src="
                            require('@/assets/image/content/image_avatar.png')
                          "
                          alt=""
                        />
                      </div>
                      <div class="col-md-9 align-self-center">
                        <label class="name_profile" for="name">John Doe</label>
                        <br />
                        <label class="title_profile" for="title"
                          >CEO Twitter</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="section_testimonial p-2">
                    <p class="section_testimonial_information">
                      Aplikasi ini sangat membantu saya ketika ingin menukar
                      barang-barang yang tidak terpakai. Selain dapat menukarkan
                      barang namun juga ada fitur auction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="section_profile">
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid"
                          :src="
                            require('@/assets/image/content/image_avatar.png')
                          "
                          alt=""
                        />
                      </div>
                      <div class="col-md-9 align-self-center">
                        <label class="name_profile" for="name">John Doe</label>
                        <br />
                        <label class="title_profile" for="title"
                          >CEO Twitter</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="section_testimonial p-2">
                    <p class="section_testimonial_information">
                      Aplikasi ini sangat membantu saya ketika ingin menukar
                      barang-barang yang tidak terpakai. Selain dapat menukarkan
                      barang namun juga ada fitur auction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="section_profile">
                    <div class="row">
                      <div class="col-md-3">
                        <img
                          class="img-fluid"
                          :src="
                            require('@/assets/image/content/image_avatar.png')
                          "
                          alt=""
                        />
                      </div>
                      <div class="col-md-9 align-self-center">
                        <label class="name_profile" for="name">John Doe</label>
                        <br />
                        <label class="title_profile" for="title"
                          >CEO Twitter</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="section_testimonial p-2">
                    <p class="section_testimonial_information">
                      Aplikasi ini sangat membantu saya ketika ingin menukar
                      barang-barang yang tidak terpakai. Selain dapat menukarkan
                      barang namun juga ada fitur auction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="question">
      <div class="content_question container">
        <div class="content_question_tagline text-center">
          <label for="question"> Pertanyaan yang sering diajukan </label>
        </div>
        <div class="content_question_collapse">
          <div class="row">
            <div class="col-md-6">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item class="collapse_custome" name="1">
                  <template slot="title">
                    <span for="" class="title">
                      Apakah aplikasi ini gratis ?
                    </span>
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
                    <span for="" class="title">
                      Apakah saya bisa menemukan pengguna terdekat ?
                    </span>
                  </template>
                  <div class="information">
                    Dengan fitur map dan jarak, kamu akan lebih mudah menemukan
                    barang atau user terdekat denganmu
                  </div>
                </el-collapse-item>
                <el-collapse-item class="collapse_custome" name="3">
                  <template slot="title">
                    <span for="" class="title">
                      Apa perbedaan Ijolan dengan marketplace lain ?
                    </span>
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
                    <span for="" class="title"> Apakah data saya aman ? </span>
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
    <div
      class="product"
      :style="
        'background-image: url(' +
        require('@/assets/image/content/background/bg_1.png') +
        ')'
      "
    >
      <div class="content_product container">
        <div class="row mb-4">
          <div class="col-md-6">
            <img
              class="img-fluid"
              :src="require('@/assets/image/content/image_product.png')"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <div class="content_product_information">
              <label for=""> Ayo Cari Barang di Ijolan! </label>
              <div
                class="element"
                :style="
                  'background-image: url(' +
                  require('@/assets/image/content/background/bg_3.png') +
                  ')'
                "
              ></div>
              <p class="information_tag">
                Download sekarang juga - Nikmati mudahnya mendapatkan barang
                yang kamu inginkan dengan beragam pilihan transaksi.
              </p>

              <div class="apps_product">
                <a
                  href="javascript: void(0);"
                  @click="showdataform = true"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Coming Soon"
                >
                  <img
                    class="img-fluid image_apps"
                    :src="require('@/assets/image/logo/google_play.png')"
                    alt=""
                  />
                </a>
                <a
                  href="javascript: void(0);"
                  @click="showdataform = true"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Coming Soon"
                >
                  <img
                    class="img-fluid image_apps"
                    :src="require('@/assets/image/logo/app_store.png')"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newsletter">
        <div class="content_newsletter container">
          <div class="row d-flex align-items-center">
            <div class="col-md-7">
              <label for="news letter" class="letter"> Newsletter </label>
              <p>
                Dapatkan berita terbaru, artikel, dan CSR dikirim melalui email
                setiap minggunya!
              </p>
            </div>
            <div class="col-md-5">
              <div class="send d-flex align-items-center">
                <el-input
                  placeholder="Masukkan email Anda"
                  class="w-100"
                ></el-input>
                <button class="btn btn-primary-yellow">Submit</button>
              </div>
            </div>
          </div>
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
  </Layout>
</template>
<script>
export default {
  name: "Beranda",
  components: {
    Layout: () => import("@/views/Layout"),
    Modal: () => import("@/components/Modal"),
  },
  data() {
    return {
      activeName: "1",
      showdataform: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Beranda/index.scss";
@import "@/assets/scss/Beranda/responsive.scss";
</style>
