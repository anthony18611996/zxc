<template>
  <li>
    <span>{{ service }}</span>
  </li>
</template>

<script>
export default {
  name: "ServicesItem",
  props: {
    service: Array,
  },
};
</script>

<style scoped></style>
