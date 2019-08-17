<template lang="html">
  <div class="border-bottom">
  <div class="row my-3">
    <div class="col-3">
      <img src="https://placehold.it/480x320" alt="heartfulness" class="img-fluid">
    </div>
    <div class="col-6">
      <i class="fas fa-user-alt"></i>
      <div>
        {{content.description}}
        <h6>{{content.heading}}</h6>
      </div>
    </div>
    <div class="col-3 border-left">
      Part 3
    </div>
  </div>
</div>
</template>

<script>
import HeaderComp from "./HeaderComp"
export default {
  components:{
    HeaderComp
  },
props:[
  "content"
]
}
</script>

<style lang="css" scoped>
</style>
