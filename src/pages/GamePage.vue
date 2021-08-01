<template>
  <Game
    @nextLevel="nextLevel"
    @drop="drop"
    :level="levels[currentLevel]"
    :level-now="currentLevel"
    v-if="levels.length && !loading"
  />
  <div v-else>Загрузка ...</div>
</template>

<script>
import Game from "../components/Game";

export default {
  name: "GamePage",
  components: {
    Game,
  },
  data() {
    return {
      currentLevel: 0,
      levels: [],
      loading: true,
    };
  },
  mounted() {
    this.mockLevels();
  },
  methods: {
    nextLevel() {
      this.loading = true;
      this.currentLevel++;
      alert("Вы перешли на новый уровень!");
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    mockLevels() {
      this.loading = true;
      for (let i = 0; i < 25; i++) {
        const level = {
          boxCount: this.random(9, 25),
          rightBoxesCount: this.random(3, 9),
          timeToHide: this.random(500, 3000),
        };
        this.levels.push(level);
      }
      this.loading = false;
    },
    random(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    drop() {
      this.loading = true;
      this.currentLevel = 0;
      alert("Вы проиграли!");
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style scoped></style>
