<template>
    <div>        
        <template  v-for="n in rating">
            <span :key="n" class="fas fa-star checked" ></span>
        </template>
        <template  v-for="n in totalUncheck">
            <span :key="n" class="fas fa-star unchecked" ></span>
        </template>       
       <span class="small">{{rating}}({{numOfPeople}}) </span>
    </div>  
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

