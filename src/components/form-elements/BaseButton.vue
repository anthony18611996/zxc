<template>
  <button class="button__default" type="button" v-on="$listiners" :class="disabled">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    disabled: String
  },
};
</script>

<style lang="scss" scoped>
.button__default {
  background-color: $blue;
  width: 189px;
  height: 38px;
  text-align: center;
  border: none;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $white;
    opacity: 1;
  }
}
</style>
