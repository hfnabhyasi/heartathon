<template>
  <div id ="app">
     <Stars :rating="3" :numOfPeople="28" ></Stars>
  </div>
</template>

<script>
import Stars from './components/Stars'

export default {
   components : {
     Stars
   }
}

</script>

<style>

</style>