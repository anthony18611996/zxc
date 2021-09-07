<template>
  <div id="modal-template">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <form class="contact__form" @submit.prevent="sendForm">
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
              <div class="modal-title">
                <h3>You are welcome to our team</h3>
              </div>
              <div class="modal-fields">
                <div style="position: relative">
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
                </div>
                <div style="position: relative">
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
              </div>
              <div class="modal-buttonn">
                <BaseButton text="send" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
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
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      phone: { required, minLength: minLength(18) },
    };
  },
  methods: {
    restoreOverflow() {
      document.body.style.overflow = "auto";
    },
    sendForm() {
      let userName = this.name,
        userPhone = this.phone;
      this.$store
        .dispatch("sendForm", {
          name: userName,
          phone: userPhone,
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
.modal-fields {
  span {
    transition: 0.5s;
    position: absolute;
    width: 100%;
    text-align: left;
    left: 4px;
    bottom: -7.5px;
    color: brown;
    font-size: 12px;
  }
}
</style>
