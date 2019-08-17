<template>
    <span class="fa-star" :class=" content.solid ? 'fas' : 'far' "></span>
</template>

<script>

export default {
  props: ["content"]
}

</script>

<style>
</style>
