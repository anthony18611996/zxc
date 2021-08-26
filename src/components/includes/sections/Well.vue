<template>
  <section id="well" class="well">
    <div
      class="well__images"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div class="image__wrap">
        <img src="@/assets/images/well.jpg" alt="" />
      </div>
      <div class="image__wrap">
        <img src="@/assets/images/well2.jpeg" alt="" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="
            col-xl-6
            offset-xl-6
            col-lg-6
            offset-lg-6
            col-md-6
            offset-md-6
            col-sm-12 col-12
          "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div class="well__content-wrapper">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <ul>
              <li
                class="d-flex align-items-center"
                v-for="item in wellList"
                :key="item"
              >
                <div class="icon">
                  <img
                    :src="require(`@/assets/images/icons/${item.icon}`)"
                    alt=""
                  />
                </div>
                <div class="name">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Well",
  data() {
    return {
      title: "Well thought with super easy to use",
      description:
        "As we approached the palace I could see through the great windows of the first floor the brilliantly illuminated audience chamber of Than Kosis. The immense hall was crowded with nobles and their women.",
      wellList: [
        { icon: "100.png", name: "Ultimate Result" },
        { icon: "bag.png", name: "Minimal Design" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.well {
  position: relative;
  height: 552px;
  margin-bottom: 202px;
  @include media_sm {
    height: auto;
    margin-bottom: 50px;
  }
  &__images {
    position: absolute;
    max-width: 50%;
    img {
      @include media_md {
        width: 100%;
      }
    }
    @include media_sm {
      position: relative;
      max-width: 100%;
      margin-bottom: 200px;
    }
    @include media_mobile {
      margin-bottom: 330px;
    }
    .image__wrap:last-child {
      max-width: 350px;
      height: 453px;
      position: absolute;
      width: 100%;
      top: 99px;
      right: -100px;
      filter: drop-shadow(30px 80px 180px rgba(0, 0, 0, 0.25));
      @include media_lg {
        right: 0;
      }
      @include media_md {
        max-width: 250px;
        height: 350px;
      }
      @include media_sm {
        top: 200px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__content-wrapper {
    max-width: 475px;
    margin-left: auto;
    h2 {
      margin-bottom: 40px;
    }

    p {
      margin-bottom: 40px;
    }

    ul {
      padding-left: 0;

      li {
        margin-bottom: 30px;

        .icon {
          background: #e5e5e5;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          display: flex;
          margin-right: 29px;

          img {
            margin: auto;
          }
        }

        .name {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #000000;
        }
      }
    }
    @include media_sm {
      max-width: 100%;
    }
  }
}
</style>
