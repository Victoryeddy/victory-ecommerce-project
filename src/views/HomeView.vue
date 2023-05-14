<template>
  <div>
    <Navbar />
    <v-carousel cycle>
      <v-carousel-item
        v-for="item in carouselData.items"
        :key="item"
        :src="require(`../assets/${item.src}`)"
        cover
        class="position-relative"
        gradient="to right, rgba(0,0,0,0.3), rgba(0,0,0,0.7)"
      >
      <v-sheet
        class="inner-content"
        height="30%"
      >
        <div class=" fill-height ">
          <p class="text-h6 text-white text-center fw-bold">
            All collections {{ currentYear  }}
          </p>
          <p class="text-h2 text-white text-uppercase header">New Arrivals</p>
          <p class="text-center"><v-btn> Shop Now </v-btn></p>
        </div>
      </v-sheet>
    </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

//  using lifecycle hooks
import { onMounted, ref, reactive } from "vue";
import apiClient from "@/plugins/axios";

const model = ref(0);
console.log(model.value);

// current date
const currentYear = new Date().getFullYear()
console.log(currentYear);

// carousel slide pictures
const carouselData = reactive({
  items: [
    {
      src: "erik-mclean-nfoRa6NHTbU-unsplash.jpg",
    },
    {
      src: "aviv-rachmadian-7F7kEHj72MQ-unsplash.jpg",
    },
    {
      src: "clark-street-mercantile-P3pI6xzovu0-unsplash.jpg",
    },
    {
      src: "waldemar-HmgSNpswOxM-unsplash.jpg",
    },
    {
      src: "girls-fashion.jpg",
    },
    {
      src: "girl2 fashion.jpg",
    },
  ],
});
onMounted(() => {
  console.log(`the component is now mounted.`);
  apiClient
    .get("products")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  /* outline: 1px solid red; */
}
.header{
  font-weight:600;
}
.inner-content{
  background:transparent;
  position: absolute;
  left:44%;
  top:30%;
}
</style>
