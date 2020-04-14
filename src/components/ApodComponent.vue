<template>
 <div class="apod col-6">
  <h3 class="text-center"> Nasa APOD </h3>
  
  <hr>
  
 </div>
</template>

<script>
 export default {
  name: 'apod',
  data(){
   return{
    
   }
  },

  computed:{
   apod(){
    return this.$store.state.apod
   }
  },

  created(){
   this.$store.dispatch("getApod")
  },
  
  methods: {}
 }
</script>

<style>
.apod {
    outline: 1px solid black;
    padding: .2rem;
}
</style>