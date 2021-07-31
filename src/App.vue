<template>
  <Layout />
</template>

<script>
import Layout from "./layouts/Layout";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 1200px;
  margin: 20px auto;
  padding: 15px;

  h1 {
    font-size: 32px;
    margin-bottom: 15px;
    font-weight: 700;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
