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
        <v-sheet class="inner-content" height="30%">
          <div class="fill-height">
            <p class="text-h6 text-white text-center fw-bold">
              All collections {{ currentYear }}
            </p>
            <p class="text-h2 text-white text-uppercase header">New Arrivals</p>
            <p class="text-center mt-8">
              <v-btn class="fw-bold fs-3" rounded>Shop Now</v-btn>
            </p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container>

      <v-row class="mt-5 d-flex justify-content-center">
        <v-col cols="12" lg="4">
          <div class="d-flex flex-column">
            <div class="fashion-items-card mb-2 border-dark" style="min-height: 55vh">
              <v-img
                src="@/assets/banner-02.jpg" 
              />
              <div class="card-overlay"></div>
            </div>
            <div class="fashion-items-card mb-2 border-dark" style="min-height: 55vh">
              <v-img
                src="@/assets/banner-03.jpg" 
              />
              <div class="card-overlay"></div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="d-flex flex-column">
            <v-card style="min-height: 50vh" class="mb-0" hover>
              <v-img
                src="@/assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
                class="align-end"
                height="300px"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                
                cover
              >
                <v-card-title class="text-white">Hello world</v-card-title>
              </v-img>
  
             
            </v-card>

            <v-card style="min-height: 60vh" class="mt-0" hover>
            <v-img
              src="@/assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
              cover
            >
              <v-card-title class="text-white">Hello world</v-card-title>
            </v-img>
  
           
          </v-card>
          </div>
         
         
        </v-col>
        <v-col cols="12" lg="4">
          <div class="d-flex flex-column">
            <v-card style="min-height: 55vh" class="mb-2 border-dark">
              <p class="text-center">hello world</p>
            </v-card>
            <v-card style="min-height: 55vh" class="mb-2 border-dark">
              <p class="text-center">hello world</p>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
const currentYear = new Date().getFullYear();
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
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}
.header {
  font-weight: 600;
}
.inner-content {
  background: transparent;
  position: absolute;
  left: 35%;
  top: 30%;
}
.fashion-items-card {
  position: relative;
  overflow: hidden;
}
.fashion-items-card .v-img {
  /* width: 100%;
  height: 100%; */
  transition: transform 0.3s ease;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.fashion-items-card:hover .v-img {
  transform: scale(1.1);
}

.fashion-items-card:hover .card-overlay {
  opacity: 1;
}
</style>
