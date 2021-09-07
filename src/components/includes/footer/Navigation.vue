<template>
  <div>
    <nav>
      <ul>
        <NavigationItem v-for="link in navList" :key="link" :link="link" />
      </ul>
    </nav>
  </div>
</template>

<script>
import NavigationItem from "@/components/includes/footer/NavigationItem";

export default {
  name: "Navigation",
  components: {
    NavigationItem,
  },
  data() {
    return {
      navList: [
        { path: "dd", name: "Home" },
        { path: "dd", name: "Services" },
        { path: "dd", name: "Our works" },
        { path: "dd", name: "Testimonials" },
      ],
    };
  },
};
</script>

<style lang="scss">
  .footer {
    nav {
      ul {
        padding: 0;
        display: flex;
      }
    }
  }
</style>
