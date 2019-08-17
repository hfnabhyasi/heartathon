<template lang="html">
  <div>
      <input type="text" :placeholder="placeholder" />
      <input type="button" :value="submitText" />
  </div>
</template>

<script>
export default {
  props:[ "placeholder", "submitText" ]
}
</script>

<style lang="css" scoped>
</style>
