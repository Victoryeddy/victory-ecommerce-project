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
              <v-btn class="fw-bold fs-3" size="large" rounded>Shop Now</v-btn>
            </p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div>
      <v-container>
        <v-row class="mt-5 d-flex justify-content-center">
          <v-col cols="12" lg="4">
            <div class="d-flex flex-column">
              <v-card
                class="fashion-items-card mb-2 border-dark"
                style="min-height: 55vh"
              >
                <v-img src="@/assets/banner-02.jpg" />
                <div class="card-overlay"></div>
                <div
                  class="position-absolute"
                  style="left: 30%; z-index: 333; top: 70%"
                >
                  <v-btn color="white" size="large">Dresses</v-btn>
                </div>
              </v-card>
              <v-card
                class="fashion-items-card mt-2 border-dark"
                style="min-height: 40vh"
              >
                <v-img src="@/assets/banner-05.jpg" />
                <div class="card-overlay"></div>
                <div
                  class="position-absolute"
                  style="left: 30%; z-index: 333; top: 70%"
                >
                  <v-btn color="white" size="large">Sunglasses</v-btn>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" lg="4">
            <div class="d-flex flex-column">
              <v-card
                class="fashion-items-card mb-2 border-dark"
                style="min-height: 30vh"
              >
                <v-img src="@/assets/banner-03.jpg" />
                <div class="card-overlay"></div>
                <div
                  class="position-absolute"
                  style="left: 30%; z-index: 333; top: 70%"
                >
                  <v-btn color="white" size="large">Watches</v-btn>
                </div>
              </v-card>

              <v-card
                class="fashion-items-card mb-2 border-dark"
                style="min-height: 55vh"
              >
                <v-img src="@/assets/banner-07.jpg" />
                <div class="card-overlay"></div>
                <div
                  class="position-absolute"
                  style="left: 30%; z-index: 333; top: 70%"
                >
                  <v-btn color="white" size="large">Footwear</v-btn>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" lg="4">
            <div class="d-flex flex-column">
              <v-card
                class="fashion-items-card mb-2 border-dark"
                style="min-height: 55vh"
              >
                <v-img src="@/assets/banner-04.jpg" />
                <div class="card-overlay"></div>
                <div
                  class="position-absolute"
                  style="left: 40%; z-index: 333; top: 70%"
                >
                  <v-btn color="white" size="large">Bags</v-btn>
                </div>
              </v-card>
              <v-card
                style="min-height: 40vh"
                class="bg-light-gray mt-2 border-dark d-flex justify-center align-center flex-column"
              >
                <h2 class="text-center fs-3 text-uppercase">
                  Sign up & get 20% free.
                </h2>
                <p class="text-center mt-2 w-85 mx-auto">
                  Be the first to know about the latest fashion news and get
                  exclusive offers
                </p>
                <p>
                  <v-btn
                    class="text-uppercase mt-5"
                    rounded
                    color="black"
                    size="large"
                    >sign up</v-btn
                  >
                </p>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <section class="featured-products">
      <v-container>
        <h4 class="text-center text-capitalize featuredProductHeader mb-6">
          featured products
        </h4>

        <vueper-slides
          class="no-shadow mt-3"
          :visible-slides="3"
          :slide-ratio="1 / 4"
          :dragging-distance="70"
          :gap="3"
          fixed-height="390px"
           :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
        >
          <vueper-slide v-for="product in fetchedProductData" :key="product.id"  >
            <template #content>
              <!-- <div class="position-relative"> 
                <v-img :src="product.image" width="500" height="300"/>
                <div class="card-overlay"></div>

                <p class="text-center mt-3 font-weight-bold fs-3">{{ product.title }}</p>
              </div> -->
              <v-card
                class="fashion-items-card mb-2 border-dark d-flex align-items-stretch"
                
              >
               <v-img :src="product.image" width="500" height="300"/>
                <div class="card-overlay"></div>
                <div
                  class="position-absolute"
                  style="left: 30%; z-index: 333; top: 70%"
                >
                  <v-btn color="white" size="large" class="featuredButton">Add to Cart</v-btn>
                </div>
                <p>{{ product.title }}</p>
              </v-card>
            </template>
          </vueper-slide>
        </vueper-slides>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

//  using lifecycle hooks
import { onMounted, ref, reactive } from "vue"
import apiClient from "@/plugins/axios"

const model = ref(0)
console.log(model.value)

// current date
const currentYear = new Date().getFullYear()
console.log(currentYear)

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
})

// featured products section
const fetchedProductData = ref([])

const fetchData = async () => {
  try {
    const response = await apiClient.get("products?limit=8")
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
  /* border:1px solid blue; */
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
  /* width: 100%; */
  /* min-height: 50vh; */
  transition: transform 0.3s ease;
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
.fashion-items-card:hover .v-img {
  transform: scale(1.1);
}

.fashion-items-card:hover .card-overlay {
  opacity: 1;
}
.bg-light-gray {
  background-color: rgba(255, 255, 255, 0.8) !important;
}
.w-85 {
  width: 85%;
}

.featured-products {
  padding: 5rem 0;
}
.featuredProductHeader {
  font-size: 2.5rem;
}

.featured-products-cards {
  background: blue !important;
}
.real-cards {
  background: #fff;
  box-shadow: 2px 2px 2px #0000007e;
  width: 40vw;
  height: 80vh;
  /* height: 8rem; */
}
.featuredButton{
  transform: translate(-90) !important;
}
</style>
