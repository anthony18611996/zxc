<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <router-link :to="{ name: 'event-list' }">List</router-link>
    <router-link :to="{ name: 'event-create' }">Create</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav {
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
</style>
