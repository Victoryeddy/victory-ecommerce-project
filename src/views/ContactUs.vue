<template>
    <div>
       <Navbar />

       <div class="contact-us-picture">
        <h1 class="font-weight-bold text-white text-uppercase text-center">Contact</h1>
       </div>
      <!-- <GoogleMap /> -->
    </div>
</template>

<script setup>
import GoogleMap from "@/components/GoogleMap.vue"
import Navbar from "@/components/Navbar.vue"

</script>

<style>
/* *{
  outline: 1px solid green;
} */
.contact-us-picture{
  background-image: url("@/assets/contact-heading-picture.jpeg");
  min-height:50vh;
  background-attachment: fixed;
  background-blend-mode: multiply;
  background-position: center;
}
.contact-us-picture > h1{
   font-size:3.5rem;
   padding-top:5rem;
}
</style>