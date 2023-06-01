<template>
  <div>
    <Navbar />
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
            <p class="text-h2 text-white text-uppercase header">New Arrivals</p>
            <p class="text-center mt-8">
              <v-btn class="fw-bold fs-3" size="large" rounded>Shop Now</v-btn>
            </p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row>
        <v-col align-self="start" cols="12" md="4">
          <v-row class="flex-column">
            <v-col align-self="start">
              <v-sheet class="pa-2 mt-5">
                <v-card class="fashion-items-card mb-2 border-dark">
                  <v-img src="@/assets/banner-02.jpg" cover>
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
                  <div
                    class="position-absolute"
                    style="left: 30%; z-index: 333; top: 70%"
                  >
                    <v-btn color="white" size="large">Dresses</v-btn>
                  </div>
                </v-card>
              </v-sheet>
            </v-col>

            <v-col align-self="end">
              <v-sheet class="pa-2 ma-2">
                <v-card class="fashion-items-card mt-2 border-dark">
                  <v-img src="@/assets/banner-05.jpg" cover>
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
                  <div
                    class="position-absolute"
                    style="left: 30%; z-index: 333; top: 70%"
                  >
                    <v-btn color="white" size="large">Sunglasses</v-btn>
                  </div>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col align-self="center" cols="12" md="4">
          <v-row class="flex-column">
            <v-col>
              <v-sheet class="pa-2 mt-4">
                <v-card class="fashion-items-card mb-2 border-dark">
                  <v-img src="@/assets/banner-03.jpg" cover>
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
                  <div
                    class="position-absolute"
                    style="left: 30%; z-index: 333; top: 70%"
                  >
                    <v-btn color="white" size="large">Watches</v-btn>
                  </div>
                </v-card>
              </v-sheet>
            </v-col>

            <v-col align-self="end">
              <v-sheet>
                <v-card class="fashion-items-card mb-2 border-dark">
                  <v-img src="@/assets/banner-07.jpg" cover>
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
                  <div
                    class="position-absolute"
                    style="left: 30%; z-index: 333; top: 70%"
                  >
                    <v-btn color="white" size="large">Footwear</v-btn>
                  </div>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col align-self="center" cols="12" md="4">
          <v-row class="flex-column">
            <v-col align-self="center">
              <v-sheet class="pa-2 mb-5">
                <v-card class="fashion-items-card mb-2 border-dark">
                  <v-img src="@/assets/banner-04.jpg" cover>
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
                  <div
                    class="position-absolute"
                    style="left: 40%; z-index: 333; top: 70%"
                  >
                    <v-btn color="white" size="large">Bags</v-btn>
                  </div>
                </v-card>
              </v-sheet>
            </v-col>

            <v-col align-self="end">
              <v-sheet class="ma-2">
                <v-card
                  class="bg-light-gray mt-2 border-dark d-flex justify-center align-center flex-column pa-5"
                >
                  <h2 class="text-center fs-3 text-uppercase">
                    Sign up & get 20% free.
                  </h2>
                  <p class="text-center mt-2 w-85 mx-auto">
                    Be the first to know about the latest fashion news and get
                    exclusive offers
                  </p>
                  <p class="my-5">
                    <v-btn
                      class="text-uppercase mt-5"
                      rounded
                      color="black"
                      size="large"
                      >sign up</v-btn
                    >
                  </p>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

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
          fixed-height="500px"
          :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
        >
          <!-- <template #arrow-left>
            <v-icon size="x-large">mdi-arrow-left-bold-circle</v-icon>
          </template>
          <template #arrow-right>
            <v-icon size="x-large">mdi-arrow-right-bold-circle</v-icon>
          </template> -->
          <vueper-slide v-for="product in fetchedProductData" :key="product.id">
            <template #content>
              <!-- class="fashion-items-card mb-2 border-dark d-flex align-items-stretch" -->
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
              <p class="text-center mt-4">
                <v-btn color="primary" size="large" rounded>Add to cart</v-btn>
              </p>
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
              <div
                class="position-absolute"
                style="left: 30%; z-index: 333; top: 40%"
              >
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
              <v-img src="@/assets/shop-item-09-glasses.jpeg" />
              <div
                class="position-absolute"
                style="left: 25%; z-index: 333; top: 55%"
              >
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

        <v-row class="pt-10">
          <v-col cols="12"  md="9" lg="4" class="border-end">
            <p class="text-center">Free Delivery Worldwide</p>
            <p class="font-xs text-center">
              <router-link to="#" class="text-decoration-none"
                >Click here for more info</router-link
              >
            </p>
          </v-col>
          <v-col cols="12" md="9" lg="4" class="border-end">
            <p class="text-center ">30 Days Return</p>
            <p class="font-xs text-center font-weight-light">
              Simply return it within 30 days for an exchange
            </p>
          </v-col>
          <v-col cols="12" md="9" lg="4">
            <p class="text-center">Store Opening</p>
            <p class="font-xs text-center font-weight-light">
              Shop open from Monday to Sunday
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <footer class="footer bg-dark-grey">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" lg="4">
            <p class="font-weight-bold">GET IN TOUCH</p>
            <p class="font-weight-light mt-3">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <p class="mt-4">
              <v-icon icon="mdi-facebook" class="me-2"></v-icon>

              <v-icon icon="mdi-instagram" class="me-2"></v-icon>

              <v-icon icon="mdi-pinterest" class="me-2"></v-icon>

              <v-icon icon="mdi-snapchat" class="me-2"></v-icon>

              <v-icon icon="mdi-youtube" class="me-2"></v-icon>
            </p>
          </v-col>

          <v-col cols="12" md="6" lg="2">
            <p class="font-weight-bold">CATEGORIES</p>

            <ul style="list-style-type: none" class="mt-3">
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey">Men</a>
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Women</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Dresses</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Sunglasses</a
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="6" lg="2">
            <p class="font-weight-bold">LINKS</p>

            <ul style="list-style-type: none" class="mt-3">
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Search</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >About Us</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Contact Us</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Returns</a
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="6" lg="2">
            <p class="font-weight-bold">HELP</p>

            <ul style="list-style-type: none" class="mt-3">
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Track Order</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Returns</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey"
                  >Shipping</a
                >
              </li>
              <li class="my-2">
                <a href="#" class="text-decoration-none text-dark-grey">FAQS</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="6" lg="2">
            <p class="font-weight-bold">NEWSLETTER</p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Enter your email"
                  variant="underlined"
                  hint="e.g vick@gmail.com"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn rounded color="black" size="large">subscribe</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { VueperSlides, VueperSlide } from "vueperslides"
import "vueperslides/dist/vueperslides.css"

//  using lifecycle hooks
import { onMounted, ref, reactive } from "vue"
import apiClient from "@/plugins/axios"

// current date
const currentYear = new Date().getFullYear()
// console.log(currentYear)

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

onMounted(() => {
  fetchData()
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

.footer {
  padding: 4rem 0;
}

.text-dark-grey {
  color: #131313b3;
}

.border-end{
  border-right: 1px solid rgba(128, 128, 128, 0.301);
}
</style>
