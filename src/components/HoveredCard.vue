<template lang="html">

  <div class="card bg-light" style="width: 24rem; ">
    <div class="card-body">

      <div class="row my-3">

        <div class="col-12">

          <i class="h3 far fa-user-circle"></i>
          <span class="ml-2">{{content.description}}</span>

          <div>
            <h6>{{content.heading}}</h6>
          </div>

          <div class="mt-2">
            <span>{{content.details}}</span>
          </div>
          <div class="mt-3">
            <CourseInfo :content="content" />
          </div>
          <div class="p-3 text-center">
            <a href="#" class="btn btn-primary">Preview this course</a>
          </div>
        </div>
      </div>
      <div class="row  border-top">
        <div class="col-8 text-left my-2">
          <AddToWishListS :content="content"></AddToWishListS>
          <!-- <Rating :content="content"></Rating> -->
        </div>
        <div class="col-4 my-2 text-right">  {{content.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp"
import Rating from './Rating'
import CourseInfo from './CourseInfo'
import AddToWishListS from './AddToWishList-Status'

export default {
  components: {
    HeaderComp,
    Rating,
    CourseInfo,
    AddToWishListS
  },
  props: [
    "content"
  ]
}
</script>

<style lang="css" scoped>

</style>
