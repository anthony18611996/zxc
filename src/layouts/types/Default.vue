<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Header from "../../components/includes/header/Header";
import Footer from "@/components/includes/footer/Footer";

export default {
  name: "Default",
  components: {
    Header,
    Footer,
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener(
        "resize",
        this.dynamicMl(".section__name", ".ddd")
      );
      window.addEventListener(
        "resize",
        this.dynamicMl(
          ".section__name",
          ".swiper-container.mySwiper.work__swiper .swiper-pagination.swiper-pagination-progressbar"
        )
      );
    }, 1500);
  },
  methods: {
    dynamicMl(offset, target) {
      let _offset = document.querySelector(offset),
        _target = document.querySelector(target),
        ml = _offset.getBoundingClientRect();
      _target.style.marginLeft = ml.left + "px";
    },
  },
};
</script>

<style scoped></style>
