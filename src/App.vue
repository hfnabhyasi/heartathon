<template>
<div class="container">
  <HeaderComp
    :content="HeaderData"
    :styles="{heading:'h3',description:'h6'}"
  />

  <!-- CourseRow  -->
  <template v-for="(course,i) in courses">
    <!-- <CourseListItem :content="course" :key="i"/> -->
    <HoveredCard :content="course" :key="i"></HoveredCard>
  </template>

</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
// import CourseRow from "./components/CourseRow"
import HeaderData from './data/header'
import CourseListItem from  './components/CourseListItem'
import courses from './data/courses'
import HoveredCard from './components/HoveredCard'


export default {
  data() {
    return {
      HeaderData,
      courses
    }
  },
  components: {
    HeaderComp,
    CourseListItem,
    HoveredCard

    // CourseRow
  }
}

</script>

<style>

</style>
