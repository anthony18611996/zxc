<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import NavBar from "../../components/NavBar";

export default {
  name: "Default",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
