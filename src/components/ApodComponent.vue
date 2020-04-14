<template>
 <div class="apod apodSection col-6">
  <h1> NASA APOD </h1>
  <hr>
  <ApodDetails :apodData="apod"></ApodDetails>
 </div>
</template>

<script>
 import ApodDetails from './ApodDetails.vue'
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

  methods: {},
  components: {
   ApodDetails
  }
 }
</script>

<style>
.apodSection {
    margin-left: 1rem;
    margin-right: 1rem;
    border: 1px solid black;
    padding: .2rem;
    box-shadow: 3px 3px 10px 3px black;
}
</style>