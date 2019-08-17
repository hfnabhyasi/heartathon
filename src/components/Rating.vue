<template lang="html">
  <div>
    <Star :content="{solid: content.rating >= 1}" />
    <Star :content="{solid: content.rating >= 2}" />
    <Star :content="{solid: content.rating >= 3}" />
    <Star :content="{solid: content.rating >= 4}" />
    <Star :content="{solid: content.rating >= 5}" />
    <RatingScore :content="content" />
  </div>

</template>

<script>
import Star from "./Stars"
import RatingScore from './RatingScore'

export default {
  props:["content"],
  components: { Star, RatingScore }
}
</script>

<style lang="css" scoped>
</style>
