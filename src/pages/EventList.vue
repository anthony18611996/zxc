<template>
  <section id="work" class="work">
    <div class="work__wrapper">
      <WorkSlider />
    </div>
  </section>
</template>

<script>
import WorkSlider from "./components/WorkSlider";

export default {
  name: "EventList",
  components: {
    WorkSlider,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.work {
  max-width: 1160px;
  padding: 0 15px 0 15px;
  margin-left: auto;
  margin-right: auto;
  &__wrapper {
    margin: 0 -15px 0 -15px;
  }
}
</style>
