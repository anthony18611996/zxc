<template>
  <div id="modal-template">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div
              class="header__nav-btn text-end"
              @click="
                $emit('close');
                restoreOverflow();
              "
            >
              <span>&#10006;</span>
            </div>
            <video controls="controls">
              <source
                src="//denis-creative.com/wp-content/uploads/2018/01/video.mp4"
                type="video/mp4"
              />
              <source
                src="//denis-creative.com/wp-content/uploads/2018/01/video.ogv"
                type="video/ogv"
              />
              <source
                src="//denis-creative.com/wp-content/uploads/2018/01/video.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoWindow",
  methods: {
    restoreOverflow() {
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  width: 565px;
  height: auto;
  @include media_mobile {
    width: 100%;
  }
  .modal-body {
    padding: 35px;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
