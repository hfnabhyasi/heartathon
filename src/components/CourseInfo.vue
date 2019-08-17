<template lang="html">
  <div>
    <i class="h5 fas fa-sliders-h fa-rotate-270"></i> <span class="mx-2">{{content.level}}</span>
    <i class="h5 fas fa-play-circle"></i> <span class="mx-2">{{content.noOfVideos}} lectures</span>
    <i class="h5 far fa-clock"></i> <span class="mx-2">{{content.duration}} hours</span>
    <i class="h5 fas fa-closed-captioning" v-if="content.hasSubtitles"></i>
  </div>
</template>

<script>
export default {
  props: ["content"]
}
</script>

<style lang="css" scoped>
</style>
