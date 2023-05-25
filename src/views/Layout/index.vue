<template>
  <transition>
    <div class="wrapper">
      <keep-alive>
        <Navbar />
      </keep-alive>
      <div class="content">
        <slot />
      </div>
      <keep-alive>
        <Footer />
      </keep-alive>
    </div>
  </transition>
</template>
<script>
export default {
  name: "App",
  components: {
    Navbar: () => import("./Navbar"),
    Footer: () => import("./Footer"),
  },
};
</script>
