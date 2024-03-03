<template>
  <div id="app">
    <SimonGame/>
  </div>
</template>

<script>
import SimonGame from './components/SimonGame.vue'

export default {
  name: 'App',
  components: {
    SimonGame
  }
}
</script>

<style>
#app {
  font-family: Arial, serif;
    color: #333;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  color: #2c3e50;
  text-align: center;

}
</style>
./components/SimonGame.vue