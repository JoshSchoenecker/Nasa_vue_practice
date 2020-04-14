<template>
 <div class="home container-fluid">
  <div class="row">
      <!-- APOD -->
   <ApodComponent></ApodComponent>
  </div>
 </div>
</template>

<script>
import ApodComponent from
'@/components/ApodComponent.vue'

 export default {
  name: 'Nasa',
  components: 
  { ApodComponent }
 }
</script>

<style>

</style>