<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 footer__col">
          <Logo :fill="'#ffffff'" />
          <Navigation />
          <SocialLinks />
          <FooterForm />
        </div>
        <div>
          <hr class="footer__line" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../../Logo";
import Navigation from "@/components/includes/footer/Navigation";
import SocialLinks from "./SocialLinks.vue";
import FooterForm from "@/components/forms/FooterForm";

export default {
  name: "Footer",
  components: {
    Logo,
    Navigation,
    SocialLinks,
    FooterForm,
  },
};
</script>

<style lang="scss">
.footer {
  background-color: #515151;
  padding-top: 40px;
  &__col {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include media_tablet {
      align-items: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      height: 180px;
    }
  }
  &__line {
    margin-top: 50px;
    margin-bottom: 28px;
    background-color: $white;
    opacity: 0.2;
  }
}
</style>
