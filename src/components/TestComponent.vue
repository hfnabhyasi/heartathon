<template lang="html">
  <div>
    <GridListSwitch
      :isGridActive="true"
      :isListActive="false"
      @toggleGridView="showGridLayout()"
      @toggleListView="showListLayout()"
    />
    <div>
        <h1>
          <span v-if="isGrid">Show Grid</span>
          <span v-if="isList">Show List</span>
        </h1>
    </div>
  </div>
</template>

<script>
import GridListSwitch from './GridListSwitch'

export default {
  data() {
    return {
      isGrid: true,
      isList: false
    }
  },
  components: { GridListSwitch },
  methods: {
    showGridLayout, showListLayout
  }
}

function showGridLayout() {
  this.isGrid = true;
  this.isList = false;
}

function showListLayout() {
  this.isGrid = false;
  this.isList = true;
}
</script>

<style lang="css" scoped>
</style>
