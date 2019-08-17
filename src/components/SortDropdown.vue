<template lang="html">
  <div>
    <select placeholder="Sort By..." @change="onChange($event);">
      <option value="dateNewest" selected>Date - Newest</option>
      <option value="dateOldest">Date - Oldest</option>
      <option value="priceLowToHigh">Price - Low to High</option>
      <option value="priceHighToLow">Price - High to Low</option>
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
    this.$emit('sortOptionSelected', evt.target.value);
  } catch (e) {
    showError.call(e)
  }
}
</script>

<style lang="css" scoped>
</style>
