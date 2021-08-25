<template>
  <div>
    <a href="#" target="_blank" class="footer__social-link"><Twit /></a>
    <a href="#" target="_blank" class="footer__social-link"> <Link /> </a>
    <a href="#" target="_blank" class="footer__social-link"> <Google /></a>
    <a href="#" target="_blank" class="footer__social-link"> <Fb /> </a>
  </div>
</template>

<script>
import Twit from "@/components/svg/Twit";
import Link from "@/components/svg/Link";
import Google from "@/components/svg/Google";
import Fb from "@/components/svg/Fb";

export default {
  name: "SocialLinks",
  components: {
    Twit,
    Link,
    Google,
    Fb,
  },
};
</script>

<style lang="scss">
.footer {
  &__social-link {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
