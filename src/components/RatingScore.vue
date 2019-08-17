<template lang="html">
  <span>
    {{ content.rating }}({{content.ratingNumberOfPeople}})
  </span>
</template>

<script>
export default {
  props:["content"]
}
</script>

<style lang="css" scoped>
</style>
