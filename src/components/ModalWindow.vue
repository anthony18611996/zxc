<template>
  <div id="modal-template">
    <transition name="slide-fade" mode="out-in">
      <div class="modal-mask" @click="closeWindow">
        <div class="modal-wrapper">
          <form class="contact__form" @submit.prevent="sendForm">
            <div class="modal-container">
              <div
                class="modal-body"
                @click="this.$parent.$options.methods.closeWindow()"
              >
                <div class="modal-title">
                  <h3>You are welcome to our team</h3>
                </div>
                <div class="modal-fields">
                  <BaseInput
                    type="text"
                    placeholder="Name"
                    class="field"
                    v-model="name"
                    :class="{ 'is-invalid': v$.name.$error }"
                  />
                  <span class="valid-error" v-if="v$.name.$error">
                    Минимальная длина имени должна составлять 3 символа
                  </span>
                  <BaseInput
                    type="tel"
                    placeholder="Phone"
                    class="field"
                    v-model="phone"
                    :class="{ 'is-invalid': v$.phone.$error }"
                  />
                  <span class="valid-error" v-if="v$.phone.$error">
                    Введите корректный номер телефона
                  </span>
                </div>
                <div class="modal-buttonn">
                  <BaseButton
                    text="send"
                    :disabled="name !== '' && phone !== '' ? null : 'disabled'"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseInput from "@/components/form-elements/BaseInput";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "ModalWindow",
  components: {
    BaseInput,
  },
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      phone: "",
      error: null,
      window: false,
    };
  },
  mounted() {
    console.log(this.$parent.$options.methods);
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      phone: { required, minLength: minLength(12) },
    };
  },
  methods: {
    openWindow() {
      this.$emit("openWindow", (this.window = true));
    },
    closeWindow() {
      this.$emit("closeWindow", (this.window = false));
    },
    sendForm() {
      this.$store
        .dispatch("sendForm", {
          name: this.name,
          phone: this.phone,
        })
        .then(function (res) {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.error = err.response.data.message;
        });
      this.v$.$validate();
    },
  },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;

  @include media_md {
    height: 100vh;
    padding: 0;
  }
}

.modal-container {
  width: 1022px;
  margin: 0px auto;
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  @include media_mobile {
    width: 100%;
  }
}
</style>
