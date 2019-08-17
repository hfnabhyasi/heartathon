<template lang="html">
  <div class="row">
    <div class="col-4 my-2" v-for="(course, i) in Courses" :key="i">
      <Card :content="course" />
    </div>
  </div>
</template>

<script>
import Card from "./Card"
import Courses from '../data/courses'

export default {
  data() {
    return {
      Courses
    }
  },
  components:{
    Card
  }
}
</script>

<style lang="css" scoped>
</style>
