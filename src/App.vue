<template>
  <div id="app" class="container">
    <h1 class="text-primary">Sample Data : </h1>
    <div class="row">
      <template v-for="(card, i) in cardContent"  >
        <div class="col-3 my-2" :key="i">
          <TutorialCard :content="card" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import TutorialCard from './components/TutorialCard'
import $ from 'jquery'

export default {
  name: 'app',
  data() {
    return {
      cardContent: undefined
    }
  },
  components: {
    TutorialCard
  },
  mounted
}
function mounted() {
  try {
      $
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.cardContent = res)
  } catch (e) {
    // console.error(e);
  }
}
</script>

<style>

</style>
