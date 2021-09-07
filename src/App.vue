<template>
  <Layout />
</template>

<script>
import "./assets/js/scroll.js";
import Layout from "./layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: {
    Layout,
  },
};

setTimeout(() => {
  [].forEach.call(
    document.querySelectorAll("input[type=tel]"),
    function (input) {
      let keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = newValue.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          newValue = newValue.slice(0, i);
        }
        let reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = newValue;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
}, 2000);

AOS.init({
  once: true,
});
</script>

<style lang="scss">
div.wrapper {
  max-width: 1200px;
  margin: 20px auto;
  padding: 15px;

  h1 {
    font-size: 32px;
    margin-bottom: 15px;
    font-weight: 700;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

@include media_mobile {
  [data-aos][data-aos][data-aos-duration="2000"],
  body[data-aos-duration="2000"] [data-aos] {
    transition-duration: 1s;
  }
  [data-aos][data-aos][data-aos-duration="1500"],
  body[data-aos-duration="1500"] [data-aos] {
    transition-duration: 0.5s;
  }
}
</style>
