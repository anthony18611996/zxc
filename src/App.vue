<template>
  <NavBar />
  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

.wrapper {
  max-width: 1200px;
  margin: auto;
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
