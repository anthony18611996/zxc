<template>
  <swiper
    :navigation="true"
    :slidesPerView="1.5"
    :spaceBetween="30"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1.2,
        autoHeight: true,
      },
      '@0.75': {
        slidesPerView: 1.3,
        autoHeight: false,
      },
      '@1.00': {
        slidesPerView: 1.5,
      },
      '@1.50': {
        slidesPerView: 1.5,
      },
    }"
    class="mySwiper services__swiper"
  >
    <swiper-slide>
      <video
        src="https://biokonturkids.ru/wp-content/themes/bio/bio.mp4"
        controls="controls"
        poster="https://biokonturkids.ru/wp-content/themes/bio/img/bioPrev.jpg"
      ></video>
    </swiper-slide>
    <swiper-slide>
      <video
        src="https://biokonturkids.ru/wp-content/themes/bio/bio.mp4"
        controls="controls"
        poster="https://biokonturkids.ru/wp-content/themes/bio/img/bioPrev.jpg"
      ></video>
    </swiper-slide>
    <swiper-slide>
      <video
        src="https://biokonturkids.ru/wp-content/themes/bio/bio.mp4"
        controls="controls"
        poster="https://biokonturkids.ru/wp-content/themes/bio/img/bioPrev.jpg"
      ></video>
    </swiper-slide>
    <swiper-slide>
      <video
        src="https://biokonturkids.ru/wp-content/themes/bio/bio.mp4"
        controls="controls"
        poster="https://biokonturkids.ru/wp-content/themes/bio/img/bioPrev.jpg"
      ></video>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default {
  name: "ServicesSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.swiper-container.services__swiper {
  position: unset !important;
  height: 500px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    bottom: 0;
    top: unset;
    background: #c4c4c4;
    width: 50px;
    height: 50px;
    &:after {
      font-size: 20px;
      color: $white;
    }
  }
  .swiper-button-next {
    left: 90px;
  }
}
</style>
