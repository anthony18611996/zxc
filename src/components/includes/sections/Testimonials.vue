<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <SectionName :sectionName="'— Testimonials'" />
        </div>
      </div>
      <swiper :navigation="true" class="mySwiper testimonials__swiper">
        <swiper-slide v-for="item in testimonialsSlides" :key="item.id">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-12">
              <h2>{{ item.title }}</h2>
              <h4>{{ item.author }}</h4>
              <p>{{ item.vacancy }}</p>
              <p></p>
            </div>
            <div
              class="
                col-xl-5
                offset-xl-1
                col-lg-5
                offset-lg-1
                col-md-5
                offset-md-1 offset-sm-0
                col-sm-5 col-12
              "
            >
              <div class="testimonials__swiper-image">
                <img :src="require(`@/assets/images/${item.image}`)" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default {
  name: "Testimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonialsSlides: [
        {
          id: 1,
          title:
            '"Professionals in their craft! All products were super great with strong attention to details, and overall vibe"',
          author: "Polina Kuzina",
          vacancy: "Manager at Craftwork",
          image: "polina.jpg",
        },
        {
          id: 2,
          title:
            '"Professionals in their craft! All products were super great with strong attention to details, and overall vibe"',
          author: "Kuzina Polina",
          vacancy: "Manager at Craftwork",
          image: "polina.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#testimonials {
  padding-bottom: 176px;
  @include media_md {
    padding-bottom: 50px;
  }
}
.swiper-container.testimonials__swiper {
  @include media_md {
    padding-bottom: 80px;
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
  h2 {
    margin-top: 53px;
    margin-bottom: 121px;
    @include media_md {
      font-size: 32px;
      line-height: 42px;
    }
    @include media_sm {
      margin-top: 0px;
      margin-bottom: 50px;
      font-size: 27px;
    }
  }
  .testimonials__swiper-image {
    margin-top: -20px;
    @include media_mobile {
      margin-top: 30px;
    }
    img {
      @include media_md {
        width: 100%;
      }
    }
  }
}
</style>
