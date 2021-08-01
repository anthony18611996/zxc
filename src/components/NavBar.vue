<template>
  <nav id="nav" class="nav">
    <ul>
      <li v-for="item in menuItems" :key="item">
        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuItems: [
        { link: "/home", name: "home" },
        { link: "/", name: "event-list" },
        { link: "/game", name: "game" },
        { link: "/event-create", name: "event-create" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
      font-size: 18px;
      color: #42b983;

      &.router-link-active {
        border-bottom: 1px solid #42b983;
      }
    }
  }
}
</style>
