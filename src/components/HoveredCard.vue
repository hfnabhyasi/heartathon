<template lang="html">
  <div class="card  h-100 justify-content-around">
  <img class="card-img-top" :src="content.imgSrc" alt="Card image cap">
  <div class="card-body">
    <HeaderComp :content="{heading:content.heading,description:content.description}"
    :styles="{heading:'card-title h5 text-primary',description:'card-text h6'}"
    />
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
