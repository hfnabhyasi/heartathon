<template>
<div>
  <div class="container">
    <HeaderComp :content="HeaderData" :styles="{heading:'h3',description:'h6'}" />
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

export default {
  data() {
    return {
      HeaderData,
      Courses
    }
  },
  components: {
    HeaderComp,
    TestComponent
  }
}

</script>

<style>

</style>
