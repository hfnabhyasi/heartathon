<template>
<div>
  <div class="container">
    <HeaderComp
      :content="HeaderData"
      :styles="{heading:'h3',description:'h6'}"
    />

    <!-- CourseRow  -->
    <template v-for="(course,i) in courses">
    <CourseListItem :content="course" :key="i"/>
  </template>
  </div>
</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
// import CourseRow from "./components/CourseRow"
import HeaderData from './data/header'
import CourseListItem from  './components/CourseListItem'
import courses from './data/courses'

export default {
  data() {
    return {
      HeaderData,
      courses
    }
  },
  components:{
    HeaderComp,
    CourseListItem
    // CourseRow
  }
}

</script>

<style>

</style>
