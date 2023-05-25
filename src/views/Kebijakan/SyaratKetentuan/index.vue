<template>
  <div class="kebijakan_privasi">
    <h2 for="">Syarat & Ketentuan</h2>
    <p>{{ data.pembuka.paragraf_1 }}</p>
    <p>{{ data.pembuka.paragraf_2 }}</p>
    <p>{{ data.pembuka.paragraf_3 }}</p>

    <div class="list_kebijakan">
      <ul v-for="(item, index) in data.list_kebijakan" :key="`list_${index}`">
        <li>
          <a href="" :id="item.animate">{{ item.id }}. {{ item.name }}</a>
        </li>
      </ul>
    </div>

    <div class="informasi_kebijakan">
      <ul
        class="parent"
        v-for="(item, index) in data.list_kebijakan"
        :key="`list_${index}`"
      >
        <li>
          <a href="">{{ item.abjad }}. {{ item.name }}</a>
          <p>{{ item.content.pembukaan }}</p>

          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-11">
              <ul
                v-for="(kebijakan, index) in item.content.kebijakan"
                :key="`kebijakan_${index}`"
              >
                <li class="mb-2">
                  {{ kebijakan.pendahuluan }}
                </li>

                <div class="row mt-2 mb-2">
                  <div class="col-md-1"></div>
                  <div class="col-md-11">
                    <ul
                      v-for="(isi, index) in kebijakan.isi"
                      :key="`list_${index}`"
                    >
                      <li>
                        {{ isi.penjelasan }}
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <p>{{ item.content.penutupan }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import data from "../data.json";

export default {
  name: "Privasi",
  data() {
    return {
      data: data.syarat_ketentuan,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Kebijakan/index.scss";
@import "@/assets/scss/Kebijakan/responsive.scss";
</style>
