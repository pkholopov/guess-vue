<template>
  <div class="game_main">
    <div v-if="attempts >= 0">
      <p>Ты загадал число {{ guess }}!</p>
      <p class="attempts_left"> У меня осталось {{ `${attempts} ${declension()}` }}</p>
      <div class="buttons">
        <button @click="this.$emit('less')">
          Нет, моё число меньше
        </button>
        <button @click="this.$emit('more')">
          Нет, моё число больше
        </button>
        <button @click="this.$emit('changeScreen')">Верно!</button>
      </div>
    </div>
    <div v-else>
      <p>Это странно, но у меня закончились попытки. Кто-то из нас ошибся. </p>
      <p>(Но, к твоему сведению, я никогда не ошибаюсь)</p>
      <div class="buttons">
        <button @click="this.$emit('restart')">Заново</button>
      </div>
    </div>
  </div>
</template>

<script>
import { declension } from "@/assets/declension";
export default {
  props: {
    guess: Number,
    attempts: Number,
  },
  methods: {
    declension() {
      return `${declension(this.attempts, ['попытка', 'попытки', 'попыток'])}`
    }
  }
}
</script>

<style scoped>
.attempts_left {
  font-size: 1rem;
  color: gray;
}

</style>
