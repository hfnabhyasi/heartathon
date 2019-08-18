<template lang="html">
  <div>
    <select class="custom-select" @change="onChange($event);">
      <option value="all" selected>All Categories...</option>
      <option value="yoga">Yoga</option>
      <option value="meditation">Meditation</option>
      <option value="relaxation">Relaxation</option>
    </select>
  </div>
</template>

<script>
import { showError } from '../utils'

export default {
  methods:{
    onChange
  }
}

function onChange(evt) {
  try {
    this.$emit('categoryOptionSelected', evt.target.value);
  } catch (e) {
    showError.call(e)
  }
}
</script>

<style lang="css" scoped>
</style>
