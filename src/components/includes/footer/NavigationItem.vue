<template>
  <li>
    <a :href="`#${link.id}`"
      ><span>{{ link.name }}</span></a
    >
  </li>
</template>

<script>
export default {
  name: "NavigationList",
  props: {
    link: Object,
  },
};
</script>

<style lang="scss">
.footer {
  nav {
    ul {
      margin-bottom: 0;
      li {
        a {
          span {
            color: $white;
            opacity: $footerOpacity;
            transition: 0.5s;
            @include media_mobile {
              font-size: 14px;
            }
            &:hover {
              opacity: 1;
            }
          }
        }
      }
      li:not(:last-child) {
        margin-right: 50px;
        @include media_mobile {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
