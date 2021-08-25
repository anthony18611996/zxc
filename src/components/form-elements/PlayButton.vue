<template>
  <button
    type="button"
    class="button__play d-flex align-items-center justify-content-center"
  >
    <img src="@/assets/images/icons/play.png" alt="" />
  </button>
</template>

<script>
export default {
  name: "PlayButton",
};
</script>

<style lang="scss" scoped>
.button__play {
  height: 65px;
  width: 65px;
  border: none;
  background-color: $white;
  position: relative;
  margin: auto;
}
</style>
