<template>
    <span class="h5 fa-star"></span>
</template>

<script>

export default {
    props :  {
        rating : {
            type: Number,
            required: (true),
            default: 0
        },
        numOfPeople :{
            type: Number,
            required: (true),
            default: 0
        }
  },
  computed: {
    totalUncheck : function () {
      return (5 - this.rating);
    }
  }
}

</script>

<style>
  .checked {
      color:black;
  }
  .unchecked{
      color: lightgray;
  }
</style>
