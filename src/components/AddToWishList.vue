<template lang="html">
<div class="wishlist">

  <i class= "fa-heart" title ="Add to wishlist" :class=" toggleHeart ? 'fas' : 'far' " @click="addToWishList($event)">
  </i>
</div>
</template>
<script>
export default {
  props: {
    activeHeart: {
      type: Boolean,
      default: false
    },
      inactiveHeart: {
        type: Boolean,
        default: true
      },
      toggleHeart: {
        type: Boolean,
        default: false
      },

    content :{
      type : Object,
      default : {}
    }
  },

  methods: {
    addToWishList: function(event) {
      if(this.toggleHeart){
        this.toggleHeart = false;
        this.inactiveHeart = true;
        this.activeHeart = false;
        event.target.title="Add to wishlist";
      }
      else {
        this.toggleHeart = true;
        this.inactiveHeart = false;
        this.activeHeart = true;
        event.target.title="Remove From wishlist";
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
