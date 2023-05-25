<template>
  <Layout>
    <div
      class="content-tagline container-fluid"
      :style="
        'background-image: url(' +
        require('@/assets/image/content/background/bg_6.png') +
        ')'
      "
    >
      <div class="information_tagline">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center">
            <h1>Disini Semua Bisa</h1>
            <span
              >Yuk, kenalan sama fitur-fitur Ijolan biar kamu mudah
              menggunakannya!</span
            >
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="content_barter">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <label for="">Barter</label>
            <img
              class="img-fluid image_underline"
              :src="require('@/assets/image/content/background/bg_8.png')"
              alt=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div
              class="img-fluid image_phone"
              :style="
                'background-image: url(' +
                require('@/assets/image/content/barter/' + selectBarter) +
                ')'
              "
            ></div>
          </div>
          <div class="col-md-7">
            <div class="content_barter_tutorial">
              <div class="tab_box">
                <Tab
                  :items="[
                    {
                      name: 'Registrasi',
                      active: activeTabBarter === 'Registrasi' ? true : false,
                    },
                    {
                      name: 'Upload Barang',
                      active:
                        activeTabBarter === 'Upload Barang' ? true : false,
                    },
                    {
                      name: 'Barter',
                      active: activeTabBarter === 'Barter' ? true : false,
                    },
                  ]"
                  :tab_style="{ minWidth: '2rem', padding: '0.3rem 0.5rem' }"
                  :clickItem="(tabActive) => (activeTabBarter = tabActive)"
                />
              </div>
              <div class="box_content border">
                <div v-if="activeTabBarter === `Registrasi`">
                  <span for="cara barter" class="span_label"
                    >Cara Registrasi</span
                  >
                  <ul>
                    <li
                      v-for="(item, index) in caraBarter.slice(0, 6)"
                      :key="`index_${index}`"
                      class="d-flex align-items-center"
                    >
                      <div>
                        <div
                          @click="selectBarter = item.cara"
                          :style="
                            'background-image: url(' +
                            require('@/assets/image/icon/ellipse.svg') +
                            ')'
                          "
                          class="numbering"
                        >
                          {{ item.nomer }}
                        </div>
                      </div>
                      {{ item.pesan }}
                      <!-- <span class="numbering_information">{{
                        item.pesan
                      }}</span> -->
                    </li>
                  </ul>
                </div>

                <div v-if="activeTabBarter === `Upload Barang`">
                  <span for="cara barter" class="span_label"
                    >Cara Upload Barang</span
                  >

                  <ul>
                    <li
                      v-for="(item, index) in caraBarter.slice(6, 17)"
                      :key="`index_${index}`"
                      class="d-flex align-items-center"
                    >
                      <div>
                        <div
                          class="numbering"
                          @click="selectBarter = item.cara"
                          :style="
                            'background-image: url(' +
                            require('@/assets/image/icon/ellipse.svg') +
                            ')'
                          "
                        >
                          {{ item.nomer }}
                        </div>
                      </div>
                      {{ item.pesan }}
                      <!-- <span class="numbering_information">{{
                        item.pesan
                      }}</span> -->
                    </li>
                  </ul>
                </div>
                <div v-if="activeTabBarter === `Barter`">
                  <span for="cara barter" class="span_label">Cara Barter</span>

                  <ul>
                    <li
                      v-for="(item, index) in caraBarter.slice(17)"
                      :key="`index_${index}`"
                      class="d-flex align-items-center mx-auto"
                    >
                      <div>
                        <div
                          class="numbering"
                          @click="selectBarter = item.cara"
                          :style="
                            'background-image: url(' +
                            require('@/assets/image/icon/ellipse.svg') +
                            ')'
                          "
                        >
                          {{ item.nomer }}
                        </div>
                      </div>
                      {{ item.pesan }}
                      <!-- <span class="numbering_information">{{
                        item.pesan
                      }}</span> -->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_barter">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <label for="">Lelang</label>
            <img
              class="img-fluid image_underline"
              :src="require('@/assets/image/content/background/bg_8.png')"
              alt=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div
              class="img-fluid image_phone"
              :style="
                'background-image: url(' +
                require('@/assets/image/content/lelang/' + selectLelang) +
                ')'
              "
            ></div>
          </div>
          <div class="col-md-7">
            <div class="content_barter_tutorial">
              <div class="tab_box">
                <Tab
                  :items="[
                    {
                      name: 'Lelang',
                      active: activeTabLelang === 'Lelang' ? true : false,
                    },
                  ]"
                  :tab_style="{ minWidth: '2rem', padding: '0.3rem 0.5rem' }"
                  :clickItem="(tabActive) => (activeTabLelang = tabActive)"
                />
              </div>
              <div class="box_content border">
                <div v-if="activeTabLelang === `Lelang`">
                  <span for="cara barter" class="span_label">Cara Lelang</span>
                  <ul>
                    <li
                      v-for="(item, index) in caraLelang"
                      :key="`index_${index}`"
                      class="d-flex align-items-center"
                    >
                      <div>
                        <div
                          @click="selectLelang = item.cara"
                          :style="
                            'background-image: url(' +
                            require('@/assets/image/icon/ellipse.svg') +
                            ')'
                          "
                          class="numbering"
                        >
                          {{ item.nomer }}
                        </div>
                      </div>
                      {{ item.pesan }}
                      <!-- <span class="numbering_information">{{
                        item.pesan
                      }}</span> -->
                    </li>
                  </ul>
                </div>
              </div>
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
    Tab: () => import("@/components/Tab"),
  },
  data() {
    return {
      value: 5,
      activeTabBarter: "Registrasi",
      activeTabLelang: "Lelang",

      caraBarter: [
        {
          nomer: 1,
          pesan: "Tap Daftar dalam Session Login",
          cara: "cara_1.png",
        },
        {
          nomer: 2,
          pesan: "Masukan No Telepon",
          cara: "cara_2.png",
        },
        {
          nomer: 3,
          pesan: "Tap Lanjutkan",
          cara: "cara_3.png",
        },
        {
          nomer: 4,
          pesan: "Masukan Verifikasi No Hp",
          cara: "cara_4.png",
        },
        {
          nomer: 5,
          pesan: "Lengkapi Daftar Masukan Nama Lengkap, Email & Password",
          cara: "cara_5.png",
        },
        {
          nomer: 6,
          pesan: "Tap Selesai",
          cara: "cara_6.png",
        },
        {
          nomer: 1,
          pesan: "Tap Tambah Produk",
          cara: "upload_1.png",
        },
        {
          nomer: 2,
          pesan: "Upload Foto Barang",
          cara: "upload_2.png",
        },
        {
          nomer: 3,
          pesan: "Masukan dan Pilih Kategori Barang",
          cara: "upload_3.png",
        },
        {
          nomer: 4,
          pesan: "Masukan Spesifikasi Barang (Ukuran, Warna, Merk) ",
          cara: "upload_4.png",
        },
        {
          nomer: 5,
          pesan: "Pilih Kondisi Barang (Baru / Bekas)",
          cara: "upload_5.png",
        },
        {
          nomer: 6,
          pesan: "Masukan Berat Satuan  (gram)",
          cara: "upload_6.png",
        },
        {
          nomer: 7,
          pesan: "Pilih Status Pengelolaan Barang",
          cara: "upload_5.png",
        },
        {
          nomer: 8,
          pesan: "Masukan Deskripsi Barang",
          cara: "upload_4.png",
        },
        {
          nomer: 9,
          pesan: "Tap Terapkan",
          cara: "upload_6.png",
        },
        {
          nomer: 10,
          pesan:
            "Masukan Harga Barang (Kelipatan Untuk Action & Beli Langsung harga yang ingin diterapkan)",
          cara: "upload_5.png",
        },
        {
          nomer: 11,
          pesan: "Upload Barang",
          cara: "upload_6.png",
        },
        {
          nomer: 1,
          pesan: "Search Produk / Filter Produk",
          cara: "barter_1.png",
        },
        {
          nomer: 2,
          pesan: "Tap Produk Barter Yang diinginakan",
          cara: "barter_2.png",
        },
        {
          nomer: 3,
          pesan: "Baca Ketentuan Barter Produk",
          cara: "barter_2.png",
        },
        {
          nomer: 4,
          pesan: "Tap Ajukan",
          cara: "barter_2.png",
        },
        {
          nomer: 5,
          pesan: "Chat Trader (Tanya Kondisi dan Detail Barang)",
          cara: "barter_3.png",
        },
        {
          nomer: 6,
          pesan: "Tap Upload Pengajuan barang kamu",
          cara: "barter_5.png",
        },
        {
          nomer: 7,
          pesan:
            "Pilih Opsi Lampiran (Pengajuan kamu, Storage Internal, Ambil Foto Barang)",
          cara: "barter_5.png",
        },
        {
          nomer: 8,
          pesan: "Pilih barang yang di ajukan",
          cara: "barter_7.png",
        },
        {
          nomer: 9,
          pesan: "Tap Ajukan",
          cara: "barter_9.png",
        },
        {
          nomer: 10,
          pesan: "Tap Ya, Lanjut",
          cara: "barter_10.png",
        },
        {
          nomer: 11,
          pesan: "Tap Konfirmasi",
          cara: "barter_11.png",
        },
        {
          nomer: 12,
          pesan: "Pilih Opsi Tempat COD",
          cara: "barter_12.png",
        },
        {
          nomer: 13,
          pesan: "Melakukan COD",
          cara: "barter_13.png",
        },
        {
          nomer: 14,
          pesan: "Tap Konfirmasi Deals",
          cara: "barter_14.png",
        },
        {
          nomer: 15,
          pesan: "Yeah Barang Telah Diterima",
          cara: "barter_15.png",
        },
      ],
      caraLelang: [
        {
          nomer: 1,
          pesan: "Tap Produk Auction",
          cara: "lelang_1.jpg",
        },
        {
          nomer: 2,
          pesan: "Lihat Detail Produk",
          cara: "lelang_2.png",
        },
        {
          nomer: 3,
          pesan: "Tap Bid Sekarang",
          cara: "lelang_3.png",
        },
        {
          nomer: 4,
          pesan: "Tap Metode Ikut Penawaran",
          cara: "lelang_4.png",
        },
        {
          nomer: 5,
          pesan: "Pilih Kelipatan Bid",
          cara: "lelang_5.png",
        },
        {
          nomer: 6,
          pesan: "Tap Ajukan Bid",
          cara: "lelang_6.png",
        },
        {
          nomer: 7,
          pesan: "Konfirmasi bid. Tap Ya, Lanjut",
          cara: "lelang_7.png",
        },
        {
          nomer: 8,
          pesan: "Yeay Pengajuan Berhasil",
          cara: "lelang_8.png",
        },
        {
          nomer: 9,
          pesan: "Cek Transaksi Penajuan",
          cara: "lelang_9.png",
        },
        {
          nomer: 10,
          pesan: "Kemball ke Dashboard, Tap Transaksi",
          cara: "lelang_10.png",
        },
      ],
      selectBarter: "cara_1.png",
      selectLelang: "lelang_1.jpg",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/ProdukFitur/index.scss";
@import "@/assets/scss/ProdukFitur/responsive.scss";
</style>
