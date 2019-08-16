<template lang="html">
    <div class="card h-100 border border-primary">
      <img src="https://placehold.it/400x200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          {{ content.title.substr(0, 10) }}
        </h5>
        <p class="card-text">
          {{ content.body.substr(0, 50) }}...
        </p>
        <a href="#" class="btn btn-primary">Read More...</a>
      </div>
  </div>
</template>

<script>
export default {
  props: ["content"]
}
</script>

<style lang="css" scoped>
</style>
