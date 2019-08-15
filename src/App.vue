<template>
  <div id="app">
    <div v-for="(item, i) in items" :key="i">
      <Header  :config="item" v-if="items.length > 3" />
    </div>
      <!-- {{ myData }} -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'

const Courses = require('./data/courses.json');

export default {
  name: 'app',
  data() {
    return {
      items: Courses
    }
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
