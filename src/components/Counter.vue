<template>
  <h2>{{ counter }}ddd</h2>
  <button @click="add">+1</button>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add() {
      this.counter++;
    }
  }
};
</script>
<style lang="scss" scoped></style>