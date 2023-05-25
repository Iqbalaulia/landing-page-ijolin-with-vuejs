<template>
  <div class="comptab">
    <ul>
      <li
        class="comptab_list small-10 col-black-4"
        :class="item.active ? 'active' : ''"
        v-for="(item, index) in items"
        :key="`tab_${index}`"
        :style="tab_style"
        @click="clickItem(item.name)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
/**
* Format Items
* items: [
    {
        name: 'Beranda',
        active: false,
    },
    {
        name: 'Profil',
        active: false,
    },
    {
        name: 'Berita',
        active: true,
    },
    {
        name: 'Pengumuman',
        active: false,
    },
    {
        name: 'Galleri',
        active: false,
    },
* ],
 */
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    clickItem: {
      type: Function,
      default: () => {},
    },
    tab_style: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  name: "Tab",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/Tab/index.scss";
</style>
