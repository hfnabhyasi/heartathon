<template>
<div>
  <div class="container">
    <HeaderComp :content="HeaderData" :styles="{heading:'h3',description:'h6'}" />
    <!-- <CourseRow /> -->
    <GridListSwitch />
  </div>
</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
// import CourseRow from "./components/CourseRow"
import HeaderData from './data/header'
import GridListSwitch from './components/TestComponent'

export default {
  data() {
    return {
      HeaderData
    }
  },
  components: {
    HeaderComp,
    // CourseRow,
    GridListSwitch
  }
}

</script>

<style>

</style>
