<template>
  <div class="wrapper">
    <div class="game">
      <div v-if="screen === 0">
        <start-screen :start="start" :end="end" :guess="computedGuess" :attempts="attempts" @updateEnd="updateEnd"
          @changeScreen="changeScreen"></start-screen>
      </div>
      <div v-else-if="screen === 1">
        <game-screen :guess="computedGuess" :attempts="attempts" @less="less" @more="more" @changeScreen="changeScreen" @restart="restart">
        </game-screen>
      </div>
      <div v-else-if="screen === 2">
        <end-screen :guess="computedGuess" :attempts="attempts" :total-attempts="totalAttempts" @restart="restart"></end-screen>
      </div>
    </div>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen'
import GameScreen from '@/components/GameScreen'
import EndScreen from '@/components/EndScreen'

export default {
  components: { StartScreen, GameScreen, EndScreen },
  name: 'App',
  data() {
    return {
      screen: 0, // 0 - start, 1 - game, 2 - end
      start: 1,
      end: 101,
      guess: 0,
      attempts: 0,
      totalAttempts: 0
    }
  },
  methods: {
    computeAttempts() {
      this.attempts = this.totalAttempts = Math.ceil(Math.log2(this.end)) - 1
    },
    changeScreen() {
      this.screen = (this.screen + 1) % 3
    },
    updateEnd(newEnd) {
      this.end = newEnd + 1
      this.computeAttempts()
    },
    less() {
      this.end = this.computedGuess
      this.attempts--
    },
    more() {
      this.start = this.computedGuess
      this.attempts--
    },
    restart() {
      this.screen = 0
      this.start = 1
      this.end = 101
      this.computeAttempts()
      // this.changeScreen()
    }
  },
  mounted() {
    this.computeAttempts()
  },
  computed: {
    computedGuess() {
      return this.start + Math.floor((this.end - this.start) / 2)
    },

  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
}
.game {
  width: 60vw;
  min-height: 300px;
  padding: 80px 20px 20px 20px;
  border: 1px solid red;
  border-radius: 8px;
  font-size: 2rem;
  position: relative;
  color: white;
  box-shadow: 0 0 15px 5px red;
  text-align: center  ;
}

.buttons {
  position: absolute;
  bottom: 20px;
}

.buttons > button {
  font-size: 1.5rem;
  color: white;
  margin-right: 10px;
  padding: 5px;
  background-color: #1d1d1d;
  border: 1px solid red;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 5px red;
}

</style>
