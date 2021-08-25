<template>
  <li class="text-center">
    <a :href="`#${nav.id}`">
      <span>{{ nav.name }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: "NavigationItem",
  props: {
    nav: Object,
  },
};
</script>

<style lang="scss" scoped>
.header__menu {
  li {
    margin-bottom: 20px;
    a {
      span {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: $subBlack;
        opacity: 0.7;
      }
    }
  }
}
</style>
