<template>
  <ul class="services__list">
    <ServicesItem
      v-for="service in services"
      :key="service"
      :service="service"
    />
  </ul>
</template>

<script>
import ServicesItem from "./ServicesItem";

export default {
  name: "ServicesList",
  components: {
    ServicesItem,
  },
  data() {
    return {
      services: [
        "Multimedia",
        "Creative Strategy",
        "Interactive design",
        "UI/UX",
        "Packaging",
        "Coding",
        "Branding",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services__list {
  padding-left: 67px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @include media_lg {
    padding-left: 30px;
  }
  @include media_md {
    padding-left: 15px;
  }
  @include media_sm {
    padding-left: 0;
  }
  li {
    max-width: 240px;
    text-align: left;
    width: 100%;
    margin-bottom: 15px;
    @include media_lg {
      max-width: 200px;
    }
    @include media_md {
      max-width: 170px;
      margin-bottom: 9px;
    }
    @include media_sm {
      max-width: 160px;
    }
  }
}
</style>
