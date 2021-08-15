<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Header from "../../components/includes/header/Header";

export default {
  name: "Default",
  components: {
    Header,
  },
};
</script>

<style scoped></style>
