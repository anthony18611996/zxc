<template>
  <header class="header" id="header">
    <div class="container h-100">
      <div class="row justify-content-between align-items-center h-100">
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6">
          <Logo />
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 col-6">
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
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  height: 142px;
}
</style>
