<template>
  <section id="our-work" class="our-work">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <SectionName :sectionName="'— our works'" />
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
          <h2>{{ title }}</h2>
        </div>
        <div
          class="
            col-xl-6
            offset-xl-2
            col-lg-7
            offset-lg-0
            col-md-6
            offset-md-0
            col-sm-12 col-12
          "
        >
          <swiper
            :slidesPerView="5"
            :breakpoints="{
              '@0.00': {
                slidesPerView: 3,
              },
              '@0.30': {
                slidesPerView: 3,
              },
              '@0.57': {
                slidesPerView: 3,
              },
              '@0.75': {
                slidesPerView: 3,
              },
              '@1.00': {
                slidesPerView: 4,
              },
              '@1.50': {
                slidesPerView: 5,
              },
            }"
            class="mySwiper tabs__nav-swiper"
          >
            <swiper-slide v-for="(tab, index) in tabsList" :key="index"
              ><h5
                @click="SetType(tab.name)"
                :class="type === tab.name ? 'active' : null"
              >
                {{ tab.name }}
              </h5>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-if="type === 'All'" class="row">
        <swiper
          :slidesPerView="3"
          :slidesPerColumn="2"
          :spaceBetween="30"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 2,
              slidesPerColumn: 2,
            },
            '@0.57': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            '@0.75': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            '@1.00': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            '@1.50': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
          }"
          class="mySwiper column__slider"
        >
          <swiper-slide v-for="(img, index) in slidesList" :key="index">
            <img :src="require(`@/assets/images/works/${img.url}`)" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="row" v-else>
        <swiper
          :slidesPerView="3"
          :slidesPerColumn="2"
          :spaceBetween="30"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 2,
              slidesPerColumn: 2,
            },
            '@0.57': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            '@0.75': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            '@1.00': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            '@1.50': {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
          }"
          class="mySwiper column__slider"
        >
          <swiper-slide v-for="(img, index) in sortedImagesByType" :key="index">
            <img :src="require(`@/assets/images/works/${img.url}`)" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "Works",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      type: "All",
      title: "Discover our Work",
      description:
        "It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.",
      tabsList: [
        { id: 1, name: "All" },
        { id: 2, name: "Branding" },
        { id: 3, name: "Web" },
        { id: 4, name: "Development" },
        { id: 5, name: "Films" },
      ],
      slidesList: [
        { id: 1, type: "Branding", url: "1.jpg" },
        { id: 2, type: "Web", url: "2.jpg" },
        { id: 3, type: "Web", url: "3.jpeg" },
        { id: 4, type: "Development", url: "4.jpg" },
        { id: 5, type: "Films", url: "5.jpg" },
        { id: 6, type: "Films", url: "6.jpg" },
      ],
    };
  },
  mounted() {
    this.swiperWrapperStyle();
  },
  computed: {
    sortedImagesByType() {
      return this.slidesList.filter((item) => item.type === this.type);
    },
  },
  methods: {
    SetType(type) {
      this.type = type;
    },
    swiperWrapperStyle() {
      const wrapper = document.querySelector(".column__slider .swiper-wrapper");
      wrapper.style.paddingTop = 30 + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.our-work {
  margin-bottom: 230px;
  @include media_md {
    margin-bottom: 60px;
  }
}

.tabs__nav-swiper {
  .swiper-slide {
    &:last-child {
      h5 {
        text-align: right;
      }
    }
    h5 {
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
      &.active {
        color: $blue;
      }
      &:hover {
        color: $blue;
      }
    }
  }
}

.column__slider {
  padding: 0 15px 0 15px;
  height: 930px;
  margin-top: 100px;
  overflow: unset;
  margin-bottom: 62px;
  .swiper-slide {
    text-align: center;
    height: calc((100% - 30px) / 2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    @include media_md {
      height: 301px;
    }
    @include media_sm {
      height: 220px;
    }
    &:hover {
      transform: translateY(-20px);
      box-shadow: (-30px 80px 200px rgba(0, 0, 0, 0.25));
    }
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      @include media_md {
        height: 100%;
      }
    }
  }
  @include media_md {
    height: 650px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @include media_sm {
    height: 500px;
    margin-top: 0px;
    overflow: hidden;
  }
}
</style>
