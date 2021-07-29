<template>
  <div class="wrapper">
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(2) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "EventCreate",
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapGetters(["getEventById"]),
    ...mapState(["user", "categories"]),
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 30px 0 0 0;
  border: 1px solid;
  padding: 15px 5px 15px 5px;
  display: flex;
  flex-wrap: wrap;

  li {
    font-size: 16px;
    color: crimson;
    margin: 0 10px;
  }
}
</style>
