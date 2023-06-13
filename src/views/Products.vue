<template>
  <div>
    <Navbar />

    <div class="contact-us-picture position-relative">
      <v-img
        height="300"
        aspect-ratio="16/9"
        cover
        src="@/assets/nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpeg"
        gradient="to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <h1 class="text-center shop-header text-uppercase">Shop Now!</h1>
    </div>

    <main class="main-section">
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="3">
            <p class="blog-category-heading font-weight-bold">Category</p>
            <v-list>
              <v-list-item class="border-top"
                ><v-btn variant="plain" @click="getFilteredData('general')">
                  All
                </v-btn></v-list-item
              >
              <v-list-item class="border-top"
                ><v-btn variant="plain" @click="getFilteredData('business')">
                  Men
                </v-btn></v-list-item
              >
              <v-list-item class="border-top"
                ><v-btn variant="plain" @click="getFilteredData('sports')">
                  Women
                </v-btn></v-list-item
              >
              <v-list-item class="border-top"
                ><v-btn variant="plain" @click="getFilteredData('science')">
                  Jewelry
                </v-btn></v-list-item
              >
              <v-list-item class="border-bottom border-top"
                ><v-btn variant="plain" @click="getFilteredData('health')">
                  Electronics
                </v-btn></v-list-item
              >
            </v-list>

            <p class="blog-category-heading font-weight-bold mt-8">Filters</p>
            <v-slider
              v-model="priceRange"
              :min="minPrice"
              :max="maxPrice"
              color="orange"
              step="1"
            ></v-slider>
          </v-col>
          <v-col cols="12" lg="9">
            <v-row>
              <v-col cols="6" md="6" lg="4" v-for="product in fetchedProductData" :key="product.id">
                <div>
                  <v-card class="border-dark fashion-items-card">
                    <v-img
                      :src="product.image"
                      gradient="to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)"
                      width="400"
                      height="200"
                      aspect-ratio="16/9"
                      class="d-flex child-flex"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey-lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-icon class="position-absolute heart-button" color="white">mdi-heart-outline</v-icon>
                    <v-btn
                      class="position-absolute add-to-cart" 
                      rounded
                      color="black"
                      >Add to Cart</v-btn
                    >

                    <div class="card-overlay"></div>
                  </v-card>
                  <p class="font-weight-medium mt-4">
                    {{product.title}}
                  </p>
                  <p class="font-xs mt-1">{{product.price}}</p>
                 
                </div>
              </v-col>
             
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

import { ref, onMounted } from "vue"
import apiClient from "@/plugins/fakeStoreAxios"


const priceRange = ref(0)
const minPrice = ref(0)
const maxPrice = ref(100)

// featured products section
const fetchedProductData = ref([])

const fetchData = async () => {
  try {
    const response = await apiClient.get("products")
    const data = await response.data
    console.log(data)
    fetchedProductData.value = data
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  fetchData()
})
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}
.shop-header {
  position: absolute;
  z-index: 666;
  bottom: 38%;
  left: 38%;
  color: #fff;
  font-size: 3.5rem;
}

.fashion-items-card {
  position: relative;
  overflow: hidden;
}
.fashion-items-card .v-img {
  transition: transform 0.3s ease;
}

.fashion-items-card:hover .v-img {
  transform: scale(1.1);
}

.fashion-items-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.main-section {
  padding: 4rem 0;
}

.add-to-cart {
  bottom: 20%;
  left: 28%;
  display: block;
  transform: translateY(90px);
  transition: all 0.5s ease-in-out;
}
.fashion-items-card:hover .add-to-cart {
  display: block !important;
  transform: translateY(20px);
}

.heart-button{
  top:3%;
  left:88%;
  display:none;
  transition: all 0.5s ease-in-out;

}

.fashion-items-card:hover .heart-button{
  display:block;
}

@media only screen and (max-width: 768px) {
  .shop-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 20%;
    color: #fff;
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .shop-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 37%;
    color: #fff;
    font-size: 3rem;
  }
}
</style>
