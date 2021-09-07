<template>
  <button
    class="button__default"
    type="submit"
    v-on="$listiners"
    :class="disabled"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    disabled: String,
  },
};
</script>

<style lang="scss" scoped>
.button__default {
  width: 189px;
  height: 38px;
  text-align: center;
  border: none;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $blue;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($blue, 35%);
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
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
