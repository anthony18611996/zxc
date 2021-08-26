<template>
  <div class="header__nav-btn text-end" @click="toggleMenu">
    <img src="@/assets/images/icons/menu.png" alt="" />
  </div>
  <div class="header__menu">
    <div class="header__nav-btn text-end" @click="toggleMenu">
      <span>&#10006;</span>
    </div>
    <nav>
      <ul>
        <NavigationItem v-for="nav in navigations" :key="nav.name" :nav="nav" />
      </ul>
    </nav>
  </div>
</template>

<script>
import NavigationItem from "@/components/includes/header/NavigationItem";

export default {
  name: "Navigation",
  components: {
    NavigationItem,
  },
  data() {
    return {
      navigations: [
        { id: "services", name: "services" },
        { id: "our-work", name: "our works" },
        { id: "testimonials", name: "testimonials" },
        { id: "clients", name: "our clients" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      let _buttons = document.querySelectorAll(".header .header__nav-btn"),
        _menu = document.querySelector(".header__menu"),
        _links = document.querySelectorAll(".header__menu li");

      _buttons.forEach((item) => {
        item.onclick = function () {
          item.classList.toggle("active");
          _menu.classList.toggle("show");
          _links.forEach((link) => {
            link.onclick = function () {
              item.classList.remove("active");
              _menu.classList.remove("show");
              document.body.style.overflow = "inherit";
            };
          });
          if (_menu.classList.contains("show")) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "inherit";
          }
        };
      });
    },
  },
};
</script>

<style lang="scss">
.header__nav-btn {
  cursor: pointer;
}
.header__menu {
  background-color: $white;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9;
  top: 0;
  left: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;
  &.show {
    left: 0;
  }
  ul {
    padding-left: 0;
    li {
      span {
        transition: 0.5s;
        &:hover {
          color: $blue;
        }
      }
    }
  }
  .header__nav-btn {
    position: absolute;
    top: 50px;
    right: 50px;
    border: 1px solid #ebebeb;
    padding: 10px;
    &:hover {
      box-shadow: 0 0 16px rgba(61, 129, 15, 0.2);
    }
    span {
      font-size: 40px;
      transition: 0.5s;
      display: block;
      &:hover {
        transform: rotate(1turn);
      }
    }
  }
}
</style>
