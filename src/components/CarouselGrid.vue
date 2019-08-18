<template lang="html">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">

      <div class="carousel-item active ">
        <div class="row m-0">
          <div class="col-4 my-2" v-for="(course, i) in Courses" :key="i">
            <Card :content="course" />
            <!-- <template v-for="(course,i) in courses"> -->
            <!-- <CourseListItem :content="course" :key="i"/> -->
          </div>
        </div>
      </div>
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
  data() {
    return {
      Courses
    }
  },
  components: {
    Card
  }

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
