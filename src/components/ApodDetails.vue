<template>
<div class="apod">
 <img :src="apodData.url" alt="Issue Loading">
 <h2>{{apodData.title}}</h2>
 <h3><span style="font-style: italic; font-weight: bolder;">Capture Date: </span>{{apodData.date}}</h3>
 <h4 class="apodExp"><span style="font-style: italic; font-weight: bolder;">Explanation: </span> {{ apodData.explanation}}</h4>
</div>
</template>

<script>
 export default {
  name: 'apod',
  props:["apodData"],
  data(){
   return {
    
   }
  },
  methods: {}
 }
</script>

<style>
 .apodExp {
  outline: 3px groove black;
  margin-left: .3rem;
  margin-right: .3rem;
  padding: 1rem;
 }
</style>