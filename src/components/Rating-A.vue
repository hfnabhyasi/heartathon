<template lang="html">
  <div>
    <div class="text-right">
      <Star :content="{solid: content.rating >= 1}" />
      <Star :content="{solid: content.rating >= 2}" />
      <Star :content="{solid: content.rating >= 3}" />
      <Star :content="{solid: content.rating >= 4}" />
      <Star :content="{solid: content.rating >= 5}" />
    </div>
    <div class="text-right">
      <RatingScore :content="content" />
    </div>
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
