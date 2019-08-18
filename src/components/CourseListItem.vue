<template lang="html">
  <div class="border-bottom">
  <div class="row my-3">
    <div class="col-3">
      <img src="https://placehold.it/480x320" alt="heartfulness" class="img-fluid">
    </div>
    <div class="col-6">

      <i class="h3 far fa-user-circle"></i>

      <span class="ml-2">{{content.description}}</span>

      <div>
        <h6>{{content.heading}}</h6>
      </div>

      <CourseInfo :content="content" />

      <div>
        <span>{{content.details}}</span>
      </div>
    </div>
    <div class="col-3 border-left">
      <div class="text-right">
      <AddToWishList :content="content"></AddToWishList>
    <div>  {{content.price}}</div>
    <RatingA :content="content"></RatingA>
    <button type="button" class="btn btn-primary my-4">Preview this course</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
import CourseInfo from "./CourseInfo"
import AddToWishList from './AddToWishList'
import RatingA from './Rating-A'

export default {
  components: {
    CourseInfo,
    AddToWishList,
    RatingA
  },
  props: [
    "content"
  ]
}
</script>

<style lang="css" scoped>
</style>
