<template>
  <section id="work" class="work">
    <div class="work__wrapper">
      <WorkSlider />
    </div>
  </section>
  <Digital />
  <Services />
  <Well />
  <Works />
  <Testimonials />
  <Clients />
</template>

<script>
import WorkSlider from "./components/WorkSlider";
import Digital from "../components/includes/sections/Digital";
import Services from "../components/includes/sections/Services";
import Well from "../components/includes/sections/Well";
import Works from "../components/includes/sections/Works";
import Testimonials from "../components/includes/sections/Testimonials";
import Clients from "../components/includes/sections/Clients";

export default {
  name: "EventList",
  components: {
    WorkSlider,
    Digital,
    Services,
    Well,
    Works,
    Testimonials,
    Clients,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.work {
  max-width: 100vw;
  margin-bottom: 137px;
  @include media_mobile {
    margin-bottom: 320px;
  }
}
</style>
