<template lang="html">
  <div>
    <Star />
    <i class="fas fa-user"></i>
    {{ content.rating }} {{ content.ratingNumberOfPeople }}</div>

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
