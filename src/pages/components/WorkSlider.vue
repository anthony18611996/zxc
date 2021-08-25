<template>
  <swiper
    class="mySwiper work__swiper"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :pagination="{
      type: 'progressbar',
    }"
  >
    <swiper-slide v-for="slide in slidesList" :key="slide.id">
      <div class="work__slide d-flex">
        <div class="work__text">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.desc }}</p>
          <BaseButton :text="'get started'" @click="this.$on('openW', this.openWindow)" />
        </div>s
        <div class="work__image text-end">
          <img
            class="work__main-image"
            :src="require(`@/assets/images/${slide.image}`)"
            alt=""
          />
          <div class="work__video">
            <div class="work__video-wrapper d-flex h-100">
              <img
                class="work__poster"
                src="@/assets/images/videobg.jpg"
                alt=""
              />
              <PlayButton />
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <ModalWindow v-if="window" />
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/components/pagination/pagination.min.css";

import PlayButton from "../../components/form-elements/PlayButton";
import ModalWindow from "@/components/ModalWindow";

SwiperCore.use([Autoplay, Pagination]);

export default {
  name: "WorkSlider",
  components: {
    Swiper,
    SwiperSlide,
    PlayButton,
    ModalWindow,
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
  mounted() {
    this.paginationStyles(
      ".work__swiper .swiper-pagination",
      ".work__swiper .swiper-pagination-progressbar-fill"
    );
  },
  methods: {
    paginationStyles(pagination, fill) {
      const _pagination = document.querySelector(pagination);
      const _fill = document.querySelector(fill);
      const _ddd = document.querySelector(".work__text");
      let x = window.innerWidth - _ddd.offsetWidth * 4;
      _pagination.style.width = 278 + "px";
      _pagination.style.height = 2 + "px";
      _pagination.style.bottom = 16.33 + "%";
      _pagination.style.top = "unset";
      _pagination.style.left = x + "px";
      _fill.style.backgroundColor = "black";
    },
  },
};
</script>

<style lang="scss">
.custom-pagination {
  width: 278px;
  height: 2px;
  background-color: #d7d4d4;
}
.work {
  &__slide {
    position: relative;
    @include media_lg {
      padding: 0 15px 0 15px;
    }
    @include media_mobile {
      flex-wrap: wrap;
    }
  }

  &__text {
    max-width: 475px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 67px;
    @include media_md {
      max-width: 375px;
      padding-top: 0;
    }
    @include media_sm {
      max-width: 275px;
    }
    @include media_mobile {
      max-width: 100%;
      margin-bottom: 50px;
    }
    h1 {
      @include media_md {
        font-size: 46px;
        line-height: 50px;
      }
      @include media_sm {
        font-size: 36px;
      }
    }
    p {
      margin-bottom: 56px;
    }
  }
  &__image {
    position: relative;
    .work__main-image {
      @include media_lg {
        width: 100%;
      }
    }
  }
  &__video {
    position: absolute;
    width: 400px;
    height: 310px;
    left: -125px;
    top: 452px;
    box-shadow: -20px 60px 220px rgba(0, 0, 0, 0.44);
    @include media_lg {
      top: 350px;
    }
    @include media_md {
      width: 300px;
      height: 210px;
      top: 315px;
    }
    @include media_sm {
      width: 250px;
      height: 160px;
      top: 255px;
      left: -30px;
    }
    @include media_mobile {
      width: 100%;
      height: 250px;
      left: 0;
      top: 400px;
    }
    &-wrapper {
      position: relative;

      img.work__poster {
        position: absolute;
        top: 0;
        left: 0;
        @include media_md {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
.swiper-container.mySwiper.work__swiper {
  overflow-x: clip;
  overflow-y: unset;
}

.swiper-container.mySwiper.work__swiper
  .swiper-pagination.swiper-pagination-progressbar {
  width: 278px;
  height: 2px;
  bottom: 16.33%;
  top: unset;
  background-color: black;
}
</style>
