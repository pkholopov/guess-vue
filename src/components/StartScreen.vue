<template>
  <div class="game_start">
    <p>
      Загадай число от 1 до
    <div class="end_input">
      <input type="number" name="end" min="100" max="1000000000" :value="end - 1" @input="updateEnd">
    </div>
    </p>
    <p class="guess_count">
      Мне потребуется максимум {{ `${attempts} ${declension()}` }} попыток, чтобы его угадать!
    </p>
    <div class="buttons">
      <button @click="this.$emit('changeScreen')">Готово!</button>
    </div>
  </div>
</template>

<script>
import { declension } from "@/assets/declension";
export default {
  props: {
    start: Number,
    end: Number,
    guess: Number,
    attempts: Number,
  },
  methods: {
    updateEnd(e) {
      this.$emit('updateEnd', Number(e.target.value))
    },
    declension() {
      return `${declension(this.attempts, ['попытка', 'попытки', 'попыток'])}`
    }
  }

}
</script>

<style scoped>
input {
  font-size: 2rem;
  color: white;
  background-color: #1d1d1d;
  border: none;
  padding: 0 .5rem;
  outline: none;
}
.end_input {
  display: inline;
  position: relative;
}

.end_input::after {
  content: "🠗 Впиши своё число";
  position: absolute;
  text-align: left;
  width: 300px;
  left: 0px;
  top: -1.3rem;
  color: gray;
  font-size: 1rem;
  animation-duration: 2s;
  animation-name: blink;
  animation-iteration-count: infinite;
}

@keyframes blink {
  0% {
    color: gray;
  }
  50% {
    color: rgba(128, 128, 128, 0);
  }
  100% {
    color: gray;
  }
}

</style>
