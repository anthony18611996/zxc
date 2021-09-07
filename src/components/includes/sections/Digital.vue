<template>
  <section id="digital" class="digital">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <div class="digital__image">
            <img src="@/assets/images/digital.jpg" alt="" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div
            class="digital__content pt-5 pt-md-0"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            <h2 class="mb-4">
              {{ author.title }}
            </h2>
            <p>
              The best time to view the moon, obviously, is at night when there
              are few clouds and the weather is accommodating for a long and
              lasting study.
            </p>
            <p class="mb-5">
              For most of us, the idea of astronomy is something we directly
              connect to “stargazing”, telescopes and seeing magnificent
              displays in the heavens.
            </p>
            <div class="digital__author d-flex align-items-center">
              <div class="digital__author-icon">
                <img src="@/assets/images/icons/user.png" alt="" />
              </div>
              <div class="digital__author-info">
                <h4>{{ author.name }}</h4>
                <span>{{ author.vacancy }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Digital",
  data() {
    return {
      author: {
        title: "We solve digital problems with an outstanding creative flare",
        name: "Denis Shepovalov",
        vacancy: "Co-Founder & CEO",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.digital {
  padding-bottom: 142px;
  @include media_sm {
    padding-bottom: 50px;
  }
  &__image {
    img {
      @include media_md {
        width: 100%;
      }
      @include media_sm {
        height: 400px;
      }
    }
  }
  &__content {
    max-width: 540px;
    @include media_md {
      max-width: 100%;
    }
    h2 {
      @include media_md {
        font-size: 32px;
        line-height: 35px;
      }
    }
    h4 {
      line-height: 21px;
    }
  }

  &__author-icon {
    margin-right: 30px;
  }
}
</style>
