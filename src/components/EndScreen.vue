<template>
  <div class="game_end">
    <p>{{ finalPhrase }}</p>
      <div class="buttons">
        <button @click="this.$emit('restart')">Загадать ещё одно число</button>
      </div>
   </div>
</template>

<script>
  export default {
    props: {
      guess: Number,
      attempts: Number,
      totalAttempts: Number,
    },
    data() {
      return {
        finalPhrase: ''
      }
    },
    methods: {
      finalPhraseChoise() {
        if (this.attempts / (this.totalAttempts + 1) >= 0.8) {
          this.finalPhrase = `${this.guess}! Это было легко!`;
        } else if (this.attempts / (this.totalAttempts + 1) < 0.2) {
          this.finalPhrase = `Фух! Наконец-то. ${this.guess}. Ещё чуть-чуть, и не угадал бы! ;-)`;
        } else {
          this.finalPhrase = `Твоё число ${this.guess}! Как я сразу не догадался!`;
        }
      }
    },
    mounted() {
      this.finalPhraseChoise()
    }
  }
</script>

<style scoped>

</style>
