<template>
<div>
  <HeaderComp :content="{heading:'Yoga Courses & Events',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}"
    :styles="{heading:'h3',description:'h6'}"
  />
  <Card :content="{price:'Free',heading:'Science of Yoga - Heartfulness Way',description:'Instructor'}" />
  <Card :content="{price:'$20',heading:'Hatha Yoga',description:'Online...'}" />
</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
import Card from "./components/Card"
export default {
components:{
  HeaderComp,Card
}
}

</script>

<style>

</style>
