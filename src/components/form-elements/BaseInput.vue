<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :modelValue="modelValue" @input="updateValue" v-bind="$attrs" />
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
    modelValue: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
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
  &.is-invalid {
    border-bottom: 1px solid brown;
  }
}
</style>
