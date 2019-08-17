<template lang="html">
  <div>
    <Star :content="{solid: content.rating >= 1}" />
    <Star :content="{solid: content.rating >= 2}" />
    <Star :content="{solid: content.rating >= 3}" />
    <Star :content="{solid: content.rating >= 4}" />
    <Star :content="{solid: content.rating >= 5}" />
  </div>

</template>

<script>
import Star from "./Stars"
export default {
  props:["content"],
  components: { Star }
}
</script>

<style lang="css" scoped>
</style>
