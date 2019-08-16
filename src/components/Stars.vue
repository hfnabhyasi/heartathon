<template>
    <div>
       <img class="space fas fa-star" v-bind:key="n" v-for="n in rating" src="http:placehold.it/5px*5px"/>
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
  }
}
</script>

<style>
  .space {
      margin-right : 2px;
  }  
</style>

