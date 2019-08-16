<template>
<div>
  <div class="container">
    <HeaderComp
      :content="HeaderData"
      :styles="{heading:'h3',description:'h6'}"
    />

    <!-- CourseRow  -->
    <CourseRow />

  </div>
</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
import CourseRow from "./components/CourseRow"
import HeaderData from './data/header'

export default {
  data() {
    return {
      HeaderData
    }
  },
  components:{
    HeaderComp,
    CourseRow
  }
}

</script>

<style>

</style>
