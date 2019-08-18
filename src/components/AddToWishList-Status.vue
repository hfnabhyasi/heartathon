<template lang="html">
<div class="wishlist">
  <i class= "fa-heart h4 c-pointer"  :class=" toggleHeart ? 'fas' : 'far' " @click="addToWishList($event)">
  </i>
  <label class="ml-1 align-top" v-if="addedtowishlist"> Add to wishlist </label>
  <label class="ml-1 align-top" v-else=""> Remove from wishlist </label>
</div>
</template>
<script>
export default {
  props: {
    toggleHeart: {
      type: Boolean,
      default: false
    },
      addedtowishlist: {
        type: Boolean,
        default: true
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
        this.addedtowishlist = true;
        event.target.title = "Add to wishlist";
      } else {
        this.toggleHeart = true;
        this.addedtowishlist = false;
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
