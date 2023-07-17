<template>
  <v-app>
    <v-main class="position-relative">
      <Navbar />
      <div class="slide-up-container">
        <!-- <v-img
          src="./assets/icons8-slide-up-100.png"
          width="70"
          height="70"
          class="slide-up"
        ></v-img> -->
        <v-btn
          v-if="showScrollToTop"
          icon="mdi-arrow-up"
          color="orange"
          @click="scrollToTop"
        ></v-btn>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { ref, onMounted, onUnmounted } from "vue"

const showScrollToTop = ref(false)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

function checkForScroll() {
  window.scrollY > 650
    ? (showScrollToTop.value = true)
    : (showScrollToTop.value = false)
}

// checking window scrollY on mounted
onMounted(() => {
  window.addEventListener("scroll", checkForScroll)
}),
// it guarantees that the cleanup tasks are executed correctly when the component is being unmounted
  onUnmounted(() => {
    window.removeEventListener("scroll", checkForScroll)
  })
</script>

<style>
.slide-up-container {
  position: fixed;
  z-index: 4;
  right: 3rem;
  bottom: 4rem;
}
/* .position-relative{
  position:relative;
 } */
</style>
