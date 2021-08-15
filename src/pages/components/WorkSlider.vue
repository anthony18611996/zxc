<template>
  <swiper class="mySwiper">
    <swiper-slide v-for="slide in slidesList" :key="slide.id">
      <h1>{{ slide.title }}</h1>
      <p>{{ slide.desc }}</p>
      <div class="work__image text-end">
        <img :src="require(`@/assets/images/${slide.image}`)" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default {
  name: "WorkSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slidesList: [
        {
          id: 1,
          title: "Work around you and your team",
          desc: "From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers",
          image: "Placeholder.jpg",
        },
        {
          id: 2,
          title: "Work around you and your team",
          desc: "From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers",
          image: "Placeholder.jpg",
        },
        {
          id: 3,
          title: "Work around you and your team",
          desc: "From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers",
          image: "Placeholder.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
