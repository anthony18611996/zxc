<template>
  <component :is="layout" />
</template>

<script>
import Default from "./types/Default";
import Profile from "./types/Profile";

export default {
  name: "Layout",
  components: {
    Default,
    Profile,
  },
  computed: {
    layout() {
      return this.$route.meta.layout ?? "default";
    },
  },
};
</script>

<style scoped></style>
