<template lang="html">
  <div class="card  h-100 justify-content-around">
  <img class="card-img-top" :src="content.imgSrc" alt="Card image cap">
  <div class="card-body">
    <HeaderComp :content="{heading:content.heading,description:content.description}"
    :styles="{heading:'card-title h5 text-primary',description:'card-text h6'}"
    />
    <div class="text-right">
      {{content.price}}
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
