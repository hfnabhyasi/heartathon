<template lang="html">
  <div class="card  h-100 justify-content-around">
  <img class="card-img-top" :src="content.imgSrc" alt="Card image cap">
  <div class="card-body">
    <HeaderComp
      :content="content"
      :styles="{heading:'card-title h5 text-primary',description:'card-text h6'}"
    />
    <div class="text-right">
      {{content.price}}
    </div>
    <hr />
    <Rating :content="content" />
  </div>
</div>
</template>

<script>
import HeaderComp from "./HeaderComp"
import Rating from './Rating'

export default {
  components:{
    HeaderComp,
    Rating
  },
  props:[
    "content"
  ]
}
</script>

<style lang="css" scoped>

</style>
