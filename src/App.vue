<template>
  <div id ="app">
     <Stars :rating="5" :numOfPeople="28" ></Stars>
  </div>
</template>

<script>
import Stars from './components/Stars'
import { appendFile, appendFile } from 'fs';
export default {
   components : {
     Stars
   }
}

</script>

<style>

</style>