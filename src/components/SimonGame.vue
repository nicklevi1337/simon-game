<template>
  <div class="game">
    <section class="gameboard">
      <ul class="gameboard__buttons">
        <li v-for="(item, idx) in layout" :key="idx" class="gameboard__button">
          <SimonButton
            :idx="idx"
            :color="item.color"
            :name="item.name"
            ref="button"
            @click="handleButtonClick"
          />
        </li>
      </ul>
    </section>
    <div class="sidebar">
      <section class="play">
        <h1 class="play__round">Раунд: {{ round }}</h1>
        <button class="play__button">Старт</button>
        <span class="play__result"
          >Sorry, you lost {{ round }} after rounds!</span
        >
      </section>

      <div class="difficulty">
        <h2 class="difficulty__heading">Сложность</h2>
        <ul class="difficulty__list">
          <li class="difficulty__item">
            <input type="radio" class="difficulty__input" />
            <label></label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SimonButton from "@/components/SimonButton.vue";
import { layout, difficultyLevels } from '@/utils/item.js';

export default {
  name: "SimonGame",
  components: {
    SimonButton,
  },

  data: () => ({
    layout,
    difficultyLevels,
    round: 0,
   // current: 0,
  }),
};
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 1224px) {
  .game {
    flex-direction: row;
  }
}

@media screen and (min-width: 1224px) {
  .gameboard {
    margin-right: 3rem;
  }
}

.gameboard__buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0;
  margin: 0;
  height: 75vw;
  width: 75vw;
  max-height: 500px;
  max-width: 500px;
  list-style-type: none;
  border-radius: 50%;
  box-shadow: 0 2.5px 10px 0 rgba(0, 0, 0, 0.5);
}

@media screen and (min-width: 1224px) {
  .gameboard {
    margin-right: 3rem;
  }
}

.gameboard__button {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 1rem solid hsl(0, 0%, 100%);
}

.gameboard__button:first-of-type {
  border-radius: 250px 0 0 0;
  border-right-width: 0.5rem;
  border-bottom-width: 0.5rem;
}

.gameboard__button:nth-of-type(2) {
  border-radius: 0 250px 0 0;
  border-left-width: 0.5rem;
  border-bottom-width: 0.5rem;
}

.gameboard__button:nth-of-type(3) {
  border-radius: 0 0 0 250px;
  border-right-width: 0.5rem;
  border-top-width: 0.5rem;
}

.gameboard__button:last-of-type {
  border-radius: 0 0 250px 0;
  border-top-width: 0.5rem;
  border-left-width: 0.5rem;
}

.sidebar {
  padding: 30px;
  min-width: 270px;
}

.play {
  margin-bottom: 2rem;
}

.play__round,
.difficulty__heading {
  display: block;
  margin: 0;
  margin-bottom: 0.5rem;
  color: var(--heading-color);
  font-size: 2rem;
}

.difficulty__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.difficulty__item {
  font-size: 1rem;
  line-height: 1.5rem;
}

.play__button {
  padding: 0.5rem 1rem;
  min-width: 100px;
  font-size: 1rem;
}

.play__result {
  display: block;
  margin-top: 1rem;
}

.play,
.difficulty {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 1224px) {
  .play,
  .difficulty {
    display: block;
  }
}
</style>
