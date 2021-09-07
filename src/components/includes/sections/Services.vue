<template>
  <section id="services" class="services">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <SectionName :sectionName="'— Services'" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <h2>
            We love work hard and explore new things that’s why we cover lot of
            things. Check our service list and view details
          </h2>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <ServicesList />
        </div>
      </div>
    </div>
  </section>
  <section id="ddd" class="ddd">
    <ServicesSlider />
  </section>
</template>

<script>
import ServicesList from "./components/services/ServicesList";
import ServicesSlider from "./components/services/ServicesSlider";

export default {
  name: "Services",
  components: {
    ServicesList,
    ServicesSlider,
  },
};
</script>

<style lang="scss" scoped>
.services {
  h2 {
    @include media_lg {
      font-size: 36px;
      line-height: 35px;
    }
    @include media_md {
      font-size: 27px;
      line-height: 35px;
    }
  }
}
.ddd {
  padding-top: 90px;
  position: relative;
  height: 785px;
  margin-bottom: 181px;
  @include media_md {
    padding-top: 20px;
    height: 625px;
  }
  @include media_sm {
    margin-bottom: 60px;
  }
  @include media_mobile {
    height: 290px;
  }
}
</style>
