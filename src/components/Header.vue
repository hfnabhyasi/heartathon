<template lang="html">
  <div class="header-component">
    <h1>{{ config.title }}</h1>
    <p>{{ config.desc }}</p>
  </div>
</template>

<script>
export default {
  props:["config"]
}
</script>

<style lang="css" scoped>

.header-component {
  margin: 10px;
  color: lightblue;
  border: 1px blue solid;
}
</style>
