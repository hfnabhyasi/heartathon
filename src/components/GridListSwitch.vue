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
  methods: {
    toggleGridView,
    toggleListView
  }
}

function toggleGridView() {
  this.isGrid = true;
  this.isList = false;
}

function toggleListView() {
  this.isGrid = false;
  this.isList = true;
}
</script>

<style lang="css" scoped>
</style>
