<template lang="html">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://placehold.it/640x480" alt="Card image cap">
  <div class="card-body">
    <HeaderComp :content="{heading:content.heading,description:content.description}"
    :styles="{heading:'card-title h5 text-primary',description:'card-text h6'}"
    />
    <span class="price">
        {{content.price}}
    </span>

    <!-- <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
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
.price{
  float:right;
}
</style>
