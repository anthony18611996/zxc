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
        { id: "work", name: "Home" },
        { id: "services", name: "Services" },
        { id: "our-work", name: "Our works" },
        { id: "testimonials", name: "Testimonials" },
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
