<template>
  <div class="default_modal">
    <el-dialog
      :title="title"
      :visible.sync="show"
      :before-close="onClose"
      :width="width"
      :fullscreen="fullscreen"
      custom-class="modal-default"
    >
      <slot />
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
    },
    onClose: {
      type: Function,
      required: true,
    },
    width: {
      type: String,
      default: function() {
        return '50%';
      },
    },
  },
  name: 'Modal',
};
</script>

<style lang="scss">
@import '@/assets/scss/Modal/index.scss';
</style>
