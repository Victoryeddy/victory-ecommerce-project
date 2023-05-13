<template>
  <div>
    <Navbar/>
  </div>
</template>

<script setup>
 import Navbar from "@/components/Navbar.vue"

//  using lifecycle hooks
import { onMounted } from 'vue';
import apiClient from '@/plugins/axios';
onMounted(() => {
  console.log(`the component is now mounted.`)
   apiClient.get('products')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
})
 
</script>

<style scoped>

</style>
