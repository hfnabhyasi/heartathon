<template lang="html">
<div>
  <i
    @click="toggleListView();"
    class="h2 fas fa-list c-pointer mx-2 p-2"
    :class="{'bg-dark text-white': isList}"
  ></i>
  <i
    @click="toggleGridView();"
    class="h2 fas fa-th c-pointer mx-2 p-2"
    :class="{'bg-dark text-white': isGrid}"
  >
  </i>
</div>
</template>

<script>
export default {
  data() {
    return {
      isGrid: false,
      isList: true
    }
  },
  props:[ "isGridActive", "isListActive" ],
  methods: {
    toggleGridView,
    toggleListView
  },
  mounted
}

function mounted() {
  try {
      this.isGrid = this.isGridActive;
      this.isList = this.isListActive;
  } catch (e) {
    
  }
}

function toggleGridView() {
  this.isGrid = true;
  this.isList = false;
  this.$emit('toggleGridView')
}

function toggleListView() {
  this.isGrid = false;
  this.isList = true;
  this.$emit('toggleListView')
}
</script>

<style lang="css" scoped>
</style>
