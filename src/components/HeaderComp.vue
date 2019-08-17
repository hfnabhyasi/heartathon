<template lang="html">
  <div>
    <h1 :class="styles.heading">{{content.heading}}</h1>
    <h3 :class="styles.description">{{content.description}}</h3>
  
  </div>
</template>

<script>
export default {
  props:[
  "content","styles"
  ]
}
</script>

<style lang="css" scoped>

</style>
