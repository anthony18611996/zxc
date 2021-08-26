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
      <video controls="controls">
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.mp4"
          type="video/mp4"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.ogv"
          type="video/ogv"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.webm"
          type="video/webm"
        />
      </video>
    </swiper-slide>
    <swiper-slide>
      <video controls="controls">
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.mp4"
          type="video/mp4"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.ogv"
          type="video/ogv"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.webm"
          type="video/webm"
        />
      </video>
    </swiper-slide>
    <swiper-slide>
      <video controls="controls">
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.mp4"
          type="video/mp4"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.ogv"
          type="video/ogv"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.webm"
          type="video/webm"
        />
      </video>
    </swiper-slide>
    <swiper-slide>
      <video controls="controls">
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.mp4"
          type="video/mp4"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.ogv"
          type="video/ogv"
        />
        <source
          src="//denis-creative.com/wp-content/uploads/2018/01/video.webm"
          type="video/webm"
        />
      </video>
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
