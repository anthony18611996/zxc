<template>
  <header class="header" id="header" :class="height > 70 ? 'fixed' : null">
    <div class="container h-100">
      <div class="row justify-content-between align-items-center h-100">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <Logo />
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <Navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../../Logo";
import Navigation from "./Navigation";

export default {
  name: "Header",
  components: {
    Logo,
    Navigation,
  },
  data() {
    return {
      height: "0",
    };
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.height = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 142px;
  transition: 1.2s all cubic-bezier(0.39, 0.575, 0.565, 1);
  &.fixed {
    position: fixed;
    height: 75px;
    width: 100%;
    z-index: 9;
    background-color: #fff;
  }
}
</style>
