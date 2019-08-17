<template lang="html">
  <div>
    <button
      type="button"
      class="border-0 bg-white text-dark mx-2 p-0"
      @click="toggleListView();"
    >
      <i class="h2 fas fa-list bg-dark text-white"></i>
    </button>

    <button
      type="button"
      class="border border-primary bg-dark text-white mx-2 p-2 pb-0"
      @click="toggleGridView();"
    >
      <i class="h2 fas fa-th"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGrid: true,
      isList: false
    }
  },
  methods: {
    toggleGridView,
    toggleListView
  }
}

function toggleGridView() {
  alert('toggle grid...')
}

function toggleListView() {
  alert('toggle list')
}
</script>

<style lang="css" scoped>
</style>
