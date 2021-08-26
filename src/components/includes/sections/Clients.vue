<template>
  <section id="clients" class="clients">
    <div class="container">
      <div class="row clients__content">
        <div
          class="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <h2>{{ title }}</h2>
        </div>
        <div
          class="
            col-xl-5
            offset-xl-4
            col-lg-5
            offset-lg-4
            col-md-6
            offset-md-1
            col-sm-6
            offset-sm-1
            col-12
          "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <p class="clients__subtitle">{{ subtitle }}</p>
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="row">
        <div
          class="d-flex justify-content-between align-items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1100"
          data-aos-easing="ease-in-sine"
        >
          <Mi />
          <Tinder />
          <Apple />
          <Nike />
          <Amd />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Amd from "../../svg/Amd";
import Apple from "../../svg/Apple";
import Mi from "../../svg/Mi";
import Nike from "../../svg/Nike";
import Tinder from "../../svg/Tinder";

export default {
  name: "Clients",
  components: {
    Mi,
    Tinder,
    Apple,
    Nike,
    Amd,
  },
  data() {
    return {
      title: "Our Clients",
      subtitle: "— We worked with",
      description:
        "Our favorite brands are our friends! We help them to achieve their goals, they help us to stay sharp.",
    };
  },
};
</script>

<style lang="scss">
#clients {
  padding-top: 102px;
  padding-bottom: 137px;
  background: #fafafa;
  @include media_mobile {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  svg {
    cursor: pointer;
    @include media_sm {
      width: 20%;
    }
    @include media_mobile {
      width: 15%;
    }
    g {
      transition: 0.5s;
      &:hover {
        opacity: 1;
      }
    }
  }
}
.clients {
  &__subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $subBlack;
  }
  &__content {
    margin-bottom: 60px;
  }
}
</style>
