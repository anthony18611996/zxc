<template>
  <div class="wrapper">
    {{ levelNow }}
    <div class="polygon">
      <div
        class="box"
        v-for="(box, index) in boxes"
        :key="box"
        :class="{
          'is-right': box.isRight,
          'not-active': !box.show,
          selected: box.isSelected,
        }"
        @click="select(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: {
    level: {
      type: Object,
      required: true,
    },
    levelNow: {
      type: Number,
    },
  },
  data() {
    return {
      boxes: [],
      selected: [],
      canSelect: false,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    hide() {
      this.boxes.forEach((box) => (box.show = false));
      this.canSelect = true;
    },
    complete() {
      let isValid = true;
      this.selected.forEach((selected) => {
        const isRight = this.boxes[selected].isRight;
        if (!isRight) {
          isValid = false;
        }
      });
      if (isValid) this.$emit("nextLevel");
      else this.$emit("drop");
    },
    start() {
      this.setDefaults();
      setTimeout(this.hide, this.level.timeToHide);
    },
    setDefaults() {
      let previosBox = [];
      for (let i = 0; i < this.level.boxCount; i++) {
        this.boxes.push({
          isSelected: false,
          isRight: false,
          show: true,
        });
      }
      for (let x = 0; x < this.level.rightBoxesCount; x++) {
        let box = this.randomBox();
        while (previosBox.includes(box)) {
          box = this.randomBox();
        }
        previosBox.push(box);
        this.boxes[box].isRight = true;
      }
    },
    randomBox() {
      return Math.floor(Math.random() * this.level.boxCount);
    },
    select(box) {
      const boxToSelect = this.boxes[box];
      if (boxToSelect.isSelected) {
        boxToSelect.isSelected = false;
        this.selected = this.selected.filter((item) => item !== box);
        return;
      }
      if (
        this.selected.length < this.level.rightBoxesCount &&
        this.canSelect &&
        !this.selected.includes(box)
      ) {
        boxToSelect.isSelected = true;
        this.selected.push(box);
      }
      if (this.selected.length === this.level.rightBoxesCount) this.complete();
    },
  },
};
</script>

<style lang="scss" scoped>
.polygon {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 600px;

  .box {
    width: calc(100% / 5);
    border: 1px solid $black;
    background-color: $white;
    height: 100px;
    &.is-right {
      background-color: blue;
    }

    &.not-active {
      background-color: #42b983;
    }

    &.selected {
      background-color: red;
    }
  }
}
</style>
