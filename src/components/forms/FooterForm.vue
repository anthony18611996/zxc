<template>
  <form action="">
    <div class="d-flex justify-content-between">
      <BaseInput type="mail" placeholder="Your email" class="field" />
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
    background: #c6b393;
    height: 39.52px;
    width: 100px;
    margin-left: 15px;
  }
}
</style>
