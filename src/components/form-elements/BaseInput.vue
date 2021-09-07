<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
input {
  border: none;
  outline: none;
  background-color: #f5f4ff;
  padding-left: 20px;
  height: 39.52px;
  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: $subBlack;
  }
}
</style>
