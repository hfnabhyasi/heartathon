<template lang="html">
  <div class="row">
    <div class="col-4 my-2" v-for="(course, i) in content" :key="i">
      <Card :content="course" />
    </div>
  </div>
</template>

<script>
import Card from "./Card"

export default {
  props: ["content"],
  components: {
    Card
  }
}

</script>

<style lang="css" scoped>
</style>
