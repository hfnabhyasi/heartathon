<template>
<div>
  <div class="container">
    <HeaderComp :content="HeaderData" :styles="{heading:'h3',description:'h6'}" />
    <!-- <CourseRow /> -->
    <TestComponent :content="Courses" />
  </div>
</div>
</template>

<script>
// Data
import HeaderData from './data/header'
import Courses from './data/courses'
// Components
import HeaderComp from "./components/HeaderComp"
import TestComponent from './components/TestComponent'
// import CourseRow from "./components/CourseRow"

export default {
  data() {
    return {
      HeaderData,
      Courses
    }
  },
  components: {
    HeaderComp,
    // CourseRow,
    TestComponent
  }
}

</script>

<style>

</style>
