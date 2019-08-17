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
      <AddToWishList :content="content"></AddToWishList>
    <div>  {{content.price}}</div>
    <Rating :content="content"></Rating>
    </div>
  </div>
</div>
</template>

<script>
import HeaderComp from "./HeaderComp"
import CourseInfo from "./CourseInfo"
import AddToWishList from './AddToWishList'
import Rating from './Rating'

export default {
  components:{
    HeaderComp, CourseInfo,AddToWishList,Rating
  },
props:[
  "content"
]
}
</script>

<style lang="css" scoped>
</style>
