<template>
  <form action="">
    <div class="d-flex justify-content-between">
      <BaseInput type="mail" placeholder="Your email" class="field" required />
      <BaseButton text="send" />
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/form-elements/BaseInput";

export default {
  name: "FooterForm",
  components: {
    BaseInput,
  },
};
</script>

<style lang="scss">
.footer {
  input.field {
    width: 170px;
  }
  button.button__default {
    height: 39.52px;
    width: 100px;
    margin-left: 15px;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #c6b393;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darken(#c6b393, 35%);
      transition: all 0.3s;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }
}
</style>
