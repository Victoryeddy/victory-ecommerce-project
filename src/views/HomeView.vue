<template>
  <div>
    <!-- <Navbar /> -->
    <v-carousel cycle hide-delimiters>
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
            <p class="text-h2 text-white text-uppercase header text-center">
              New Arrivals
            </p>
            <p class="text-center mt-8">
              <v-btn
                class="fw-bold fs-3"
                size="large"
                color="orange"
                rounded
                to="/products"
                >Shop Now</v-btn
              >
            </p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <section class="services">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div>
              <p class="d-flex justify-content-center">
                <v-img
                  src="@/assets/f-delivery.png"
                  width="150"
                  height="100"
                ></v-img>
              </p>
              <h2 class="my-3 text-center">Free Shipping</h2>
              <p class="text-center text-light-grey">
                At Vmart, we believe that shopping online should be a
                hassle-free experience from start to finish. Whether you're
                ordering a small accessory or a large item, rest assured that
                shipping is on us!
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <p class="d-flex justify-content-center">
                <v-img src="@/assets/coin.png" width="150" height="100"></v-img>
              </p>
              <h2 class="my-3 text-center">100% Money back</h2>
              <p class="text-center text-light-grey">
                At Vmart, we understand that sometimes things don't go as
                planned.That's why we have implemented a straightforward and
                customer-centric returns and refunds policy.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <p class="d-flex justify-content-center">
                <v-img src="@/assets/chat.png" width="150" height="100"></v-img>
              </p>
              <h2 class="my-3 text-center">Online Support 24/7</h2>
              <p class="text-center text-light-grey">
                At Vmart, we believe that exceptional customer support is the
                backbone of a remarkable shopping experience. That's why we
                offer reliable and accessible online support to assist you every
                step of the way.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="featured-products">
      <v-container>
        <h4 class="text-center text-capitalize featuredProductHeader mb-0">
          featured products
        </h4>
        <div
          style="border: 2px solid orange; width: 10rem"
          class="mx-auto mt-1 mb-8"
        ></div>

        <vueper-slides
          class="no-shadow mt-6"
          :visible-slides="3"
          :slide-ratio="1 / 4"
          :dragging-distance="70"
          :gap="3"
          fixed-height="500px"
          :breakpoints="{ 598: { visibleSlides: 1, slideMultiple: 2 } }"
        >
          <vueper-slide v-for="product in fetchedProductData" :key="product.id">
            <template #content>
              <v-card class="d-flex align-items-stretch flex-column pa-2">
                <v-img
                  :src="product.image"
                  width="200"
                  height="300"
                  class="w-75 mx-auto"
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
                <div class="card-overlay"></div>

                <p class="text-center mt-4 text-capitalize">
                  {{ product.category }}
                </p>
                <p class="text-center mt-4 font-weight-bold text-h5">
                  ₦{{ product.price }}
                </p>
              </v-card>
              <!-- <p class="text-center mt-4">
                <v-btn color="orange" size="large" rounded>Add to cart</v-btn>
              </p> -->
            </template>
          </vueper-slide>
        </vueper-slides>
      </v-container>
    </section>

    <section class="bg-dark-grey countdown-section">
      <v-container>
        <v-row justify="center" align-content="center">
          <v-col cols="12" lg="6">
            <v-card class="fashion-items-card mt-2 border-dark">
              <v-img
                src="@/assets/banner-08-countdown.jpeg"
                cover
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
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
              <div class="card-overlay"></div>
              <div class="position-absolute beauty-collection">
                <p
                  class="text-capitalize text-white font-weight-bold text-h4 text-center"
                >
                  The beauty <br /><span
                    class="text-h3 font-weight-bold text-uppercase"
                    >lookbook</span
                  >
                </p>
                <p class="text-uppercase text-center mt-3 text-white text-h5">
                  View collection
                </p>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" lg="6">
            <v-card class="mt-2">
              <v-img src="@/assets/shop-item-09-glasses.jpeg" class="glasses" />
              <div class="position-absolute timer-section">
                <p class="text-capitalize text-center">Gafas sol Hawkers one</p>
                <p class="text-center mt-2">
                  <span style="text-decoration: line-through" class="me-2"
                    >$29.50</span
                  >
                  <span class="text-orange">$15.50</span>
                </p>

                <div class="d-flex mt-3">
                  <div class="border pa-2 me-1">
                    <p class="font-weight-medium text-center">
                      {{ remainingTime.remainingDay }}
                    </p>
                    <p class="text-grey">Days</p>
                  </div>
                  <div class="border pa-2 me-1">
                    <p class="font-weight-medium text-center">
                      {{ remainingTime.remainingHour }}
                    </p>
                    <p class="text-grey">Hours</p>
                  </div>
                  <div class="border pa-2 me-1">
                    <p class="font-weight-medium text-center">
                      {{ remainingTime.remainingMinute }}
                    </p>
                    <p class="text-grey">Minutes</p>
                  </div>
                  <div class="border pa-2 me-1">
                    <p class="font-weight-medium text-center">
                      {{ remainingTime.remainingSecond }}
                    </p>
                    <p class="text-grey">Seconds</p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="blog-section">
      <v-container>
        <h2 class="text-uppercase font-weight-bold text-center blog-heading">
          Our Blog
        </h2>
        <div
          style="border: 2px solid orange; width: 10rem"
          class="mx-auto mt-1 mb-8"
        ></div>

        <v-row justify="center" align-content="center">
          <v-col cols="12" lg="4">
            <v-card class="mt-5 border-dark fashion-items-card">
              <v-img src="@/assets/blog-01.jpeg" cover>
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

              <div class="card-overlay"></div>
            </v-card>
            <p class="font-weight-medium mt-4">
              Black Friday Guide: Best Sales & Discount Codes
            </p>
            <p class="font-xs mt-1">By Nancy Ward on July 22, 2022</p>
            <p class="font-xs mt-2">
              Unleash the shopping frenzy with our mind-blowing Black Friday
              discounts! Get ready to experience unparalleled savings on a wide
              range of products that will leave you breathless.
            </p>
          </v-col>
          <v-col cols="12" lg="4">
            <v-card class="mt-5 border-dark fashion-items-card">
              <v-img src="@/assets/blog-02.jpeg" cover>
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

              <div class="card-overlay"></div>
            </v-card>
            <p class="font-weight-medium mt-4">
              The White Sneakers Nearly Every Fashion Girls Own
            </p>
            <p class="font-xs mt-1">By Onyekwelu Ndu on July 22, 2023</p>
            <p class="font-xs mt-2">
              In the world of fashion, sneakers have become an essential element
              of every girl's wardrobe. Gone are the days when sneakers were
              limited to athletic activities; today, they are a symbol of style,
              versatility, and comfort.
            </p>
          </v-col>
          <v-col cols="12" lg="4">
            <v-card class="mt-5 border-dark fashion-items-card">
              <v-img src="@/assets/blog-03.jpeg" cover>
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

              <div class="card-overlay"></div>
            </v-card>
            <p class="font-weight-medium mt-4">
              New York SS 2023 Street Style: Annina Mislin
            </p>
            <p class="font-xs mt-1">By Victory Ndu on June 22, 2023</p>
            <p class="font-xs mt-2">
              Street style fashion has become a vibrant and influential force in
              the world of fashion, revolutionizing the way we express our
              individuality and challenge traditional norms.
            </p>
          </v-col>
        </v-row>

        <v-row class="pt-10" justify="center">
          <v-col cols="12" sm="6" lg="4" class="border-end">
            <p class="text-center">Free Delivery Worldwide</p>
            <p class="font-xs text-center">
              <router-link to="#" class="text-decoration-none"
                >Click here for more info</router-link
              >
            </p>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="border-end">
            <p class="text-center">30 Days Return</p>
            <p class="font-xs text-center font-weight-light">
              Simply return it within 30 days for an exchange
            </p>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <p class="text-center">Store Opening</p>
            <p class="font-xs text-center font-weight-light">
              Shop open from Monday to Sunday
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

import { VueperSlides, VueperSlide } from "vueperslides"
import { useStore } from "vuex"


import "vueperslides/dist/vueperslides.css"

//  using lifecycle hooks
import { onMounted, ref, reactive } from "vue"
import apiClient from "@/plugins/fakeStoreAxios"

// current date
const currentYear = new Date().getFullYear()
// console.log(currentYear)

const store = useStore()



// countdown section

const remainingTime = reactive({
  remainingDay: 0,
  remainingHour: 0,
  remainingMinute: 0,
  remainingSecond: 0,
})
let futureDate = new Date(2023, 7, 23, 11, 20, 0)

function updateCountdownTimer() {
  let currentMonth = new Date().getTime()
  // console.log(currentMonth)
  let futureMonth = futureDate.getTime()
  let diff = futureMonth - currentMonth

  remainingTime.remainingDay = Math.floor(diff / 1000 / 60 / 60 / 24)

  remainingTime.remainingHour = Math.floor(diff / 1000 / 60 / 60) % 24
  // console.log(remainingTime.remainingHour)

  remainingTime.remainingMinute = Math.floor(diff / 1000 / 60) % 60

  remainingTime.remainingSecond = Math.floor(diff / 1000) % 60

  remainingTime.remainingHour = addZero(remainingTime.remainingHour)

  remainingTime.remainingMinute = addZero(remainingTime.remainingMinute)
  remainingTime.remainingSecond = addZero(remainingTime.remainingSecond)
}

function addZero(theTime) {
  return theTime < 10 ? (theTime = "0" + theTime) : theTime
}

setInterval(updateCountdownTimer, 1000)

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
    const response = await apiClient.get("products?limit=9")
    const data = await response.data
    console.log(data)
    fetchedProductData.value = data
  } catch (error) {
    console.error(error)
  }
}

// function getAllUsers(){
//   apiClient.get(`users`)
//   .then(response =>{
//     console.log(response ,12345)
//   })
//   .catch(error =>{
//     console.log(error)
//   })
// }

onMounted(() => {
  fetchData()
   store.commit("loadCart")
  store.commit("loadLovedItemsInCart")
  // getAllUsers()
})
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
.featuredButton {
  transform: translate(-90) !important;
}

.bg-dark-grey {
  background-color: #f3f3f2 !important;
}

.countdown-section {
  padding: 6rem 0;
}

.blog-section {
  padding: 5rem 0;
}
.blog-heading {
  font-size: 2.5rem;
}
.font-xs {
  font-size: 0.875rem;
}

.text-dark-grey {
  color: #131313b3;
}
.text-light-grey {
  color: #727272;
}

.border-end {
  border-right: 1px solid rgba(128, 128, 128, 0.301);
}

.services {
  padding: 4rem 0;
}

@media only screen and (max-width: 768px) {
  .inner-content {
    background: transparent;
    position: absolute;
    left: 1%;
    top: 30%;
  }
  .beauty-collection {
    left: 20%;
    z-index: 333;
    top: 35%;
  }

  .timer-section {
    left: 10%;
    z-index: 333;
    top: 45%;
  }
  .glasses {
    margin-bottom: 8rem;
  }
  .category-cards {
    left: 27%;
    z-index: 333;
    top: 60%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .inner-content {
    background: transparent;
    position: absolute;
    left: 24%;
    top: 30%;
  }
  .category-cards {
    left: 40%;
    z-index: 333;
    top: 60%;
  }
  .beauty-collection {
    left: 33%;
    z-index: 333;
    top: 35%;
  }

  .timer-section {
    left: 30%;
    z-index: 333;
    top: 45%;
  }
}

@media only screen and (min-width: 850px) {
  .category-cards {
    left: 30%;
    z-index: 333;
    top: 60%;
  }

  .beauty-collection {
    left: 33%;
    z-index: 333;
    top: 35%;
  }

  .timer-section {
    left: 30%;
    z-index: 333;
    top: 55%;
  }
}
</style>
