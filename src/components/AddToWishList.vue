<template lang="html">
<div class="wishlist">
  <i class= "fa-heart h3 c-pointer"  title ="Add to wishlist" :class=" toggleHeart ? 'fas' : 'far' " @click="addToWishList($event)">
  </i>
</div>
</template>
<script>
export default {
  props: {
    toggleHeart: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      default: () => {
        return {

        }
      }
    }
  },

  methods: {
    addToWishList: function(event) {
      if (this.toggleHeart) {
        this.toggleHeart = false;
        event.target.title = "Add to wishlist";
      } else {
        this.toggleHeart = true;
        event.target.title = "Remove From wishlist";
      }
    }
  }
}
</script>

<style lang="css" scoped>
.c-pointer{
  cursor:pointer;
}
</style>
