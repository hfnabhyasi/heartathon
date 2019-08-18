<template>
<div class="container">
  <HeaderComp
    :content="HeaderData"
    :styles="{heading:'h3',description:'h6'}"
  />

  <!-- <CarouselGrid /> -->
  <!-- <Tabs/> -->
  <IconHeader/>

  <!-- CourseRow  -->
  <!-- <template v-for="(course,i) in courses"> -->
    <!-- <CourseListItem :content="course" :key="i"/> -->
    <!-- <HoveredCard :content="course" :key="i"></HoveredCard> -->
  <!-- </template> -->

</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
// import CourseRow from "./components/CourseRow"
import HeaderData from './data/header'
// import CourseListItem from  './components/CourseListItem'
import courses from './data/courses'
// import HoveredCard from './components/HoveredCard'
// import CarouselGrid from './components/CarouselGrid'
// import Tabs from './components/Tabs'
import IconHeader from './components/IconHeader'


export default {
  data() {
    return {
      HeaderData,
      courses
    }
  },
  components: {
    HeaderComp,
    // CourseListItem,
    // HoveredCard,
    // CarouselGrid,
    // Tabs,
    IconHeader

    // CourseRow
  }
}

</script>

<style>

</style>
