<template lang="html">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
<!--  [1,2,3,4,5,6,7,8,9] >>> [[1,2,3],[4,5,6],[7,8,9]]-->
      <template v-for="(r, i) in Courses">
        <div class="carousel-item" :class="{ 'active': i === 0 }" :key="i">
          <div class="row m-0">
            <div class="col-4"  v-for="(x, y) in r" :key="y">
              <Card :content="x" />
            </div>
            <!-- <div class="col-4 my-2" v-for="(course, i) in Courses" :key="i">
              <Card :content="course" /> -->
              <!-- <template v-for="(course,i) in courses"> -->
              <!-- <CourseListItem :content="course" :key="i"/> -->
            <!-- </div>  -->
            <!-- <div class="col-4">col-1</div>
            <div class="col-4">col-2</div>
            <div class="col-4">col-3</div> -->
          </div>
        </div>
      </template>

    </div>

    <a class="carousel-control-prev ml--90px" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next mr--90px" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import Card from "./Card"
import Courses from '../data/courses'
export default {
  data,
  components: {
    Card
  },
  methods:{
    method1
  }
}

function data() {
  return {
    Courses: Courses.reduce(reduceArr, {
      finalArray: [],
      currentIdx: -1
    }).finalArray
  }
}

function method1() {
  //this
}

function reduceArr(r, item, i, arr) {

  if (i % 3 === 0) {
    r.currentIdx += 1;
    r.finalArray[r.currentIdx] = [];
  }
  r.finalArray[r.currentIdx].push(item);
  return r;
}
</script>

<style lang="css" scoped>
.ml--90px{
  margin-left:-90px;
}
.mr--90px{
  margin-right:-90px;
}
</style>
