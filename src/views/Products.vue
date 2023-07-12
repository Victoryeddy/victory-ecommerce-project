<template>
  <div>
    <!-- <Navbar /> -->

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
                ><v-btn
                  variant="plain"
                  @click="getFilteredData(`men's clothing`)"
                >
                  Men
                </v-btn></v-list-item
              >
              <v-list-item class="border-top"
                ><v-btn
                  variant="plain"
                  @click="getFilteredData(`women's clothing`)"
                >
                  Women
                </v-btn></v-list-item
              >
              <v-list-item class="border-top"
                ><v-btn variant="plain" @click="getFilteredData('jewelery')">
                  Jewelry
                </v-btn></v-list-item
              >
              <v-list-item class="border-top"
                ><v-btn variant="plain" @click="getFilteredData('electronics')">
                  Electronics
                </v-btn></v-list-item
              >
            </v-list>

            <p class="blog-category-heading font-weight-bold mt-8">Filters</p>
            <v-slider
              v-model="slider"
              class="align-center"
              :max="max"
              :min="min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="slider"
                  hide-details
                  single-line
                  density="compact"
                  type="number"
                  @input="filterByPrice"
                  style="width: 70px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col cols="12" lg="9">
            <v-row>
              <v-col
                cols="6"
                md="6"
                lg="4"
                v-for="product in products"
                :key="product.id"
              >
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

                    <v-icon
                      class="position-absolute heart-button"
                      color="red"
                      @click="addLovedItem(product)"
                      >{{
                        product.liked ? "mdi-heart" : "mdi-heart-outline"
                      }}</v-icon
                    >
                    <v-btn
                      class="position-absolute add-to-cart"
                      rounded
                      color="black"
                      @click="addToCart(product)"
                      >Add to Cart</v-btn
                    >

                    <v-snackbar
                      v-model="snackBar"
                      :timeout="timeout"
                      color="orange"
                      multi-line="true"
                      variant="tonal"
                    >
                      <span class="text-black">Added To Cart Successfully</span>

                      <template v-slot:actions>
                        <v-btn color="black" @click="snackBar = false">
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>
                    <v-snackbar
                      v-model="showLovedItemMessage"
                      :timeout="timeout"
                      color="orange"
                      multi-line="true"
                      variant="tonal"
                    >
                      <span class="text-black">Added To Wish List</span>

                      <template v-slot:actions>
                        <v-btn color="black" @click="snackBar = false">
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>

                    <div class="card-overlay"></div>
                  </v-card>
                  <p class="font-weight-medium mt-4">
                    {{ product.title }}
                  </p>
                  <p class="font-xs mt-1">
                    ₦{{ getFormattedAmount(Math.ceil(product.price)) }}
                  </p>
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
// import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import { getFormattedAmount } from "@/utilities"

import { ref, onMounted, computed } from "vue"
import { useStore } from "vuex"
import apiClient from "@/plugins/fakeStoreAxios"

const slider = ref(0)
const min = ref(0)
const max = ref(1000)

// const preLoader = ref(true)

// featured products section
const store = useStore()

const snackBar = ref(false)
const showLovedItemMessage = ref(false)
const timeout = ref(2000)
// Get products and cart from the store

const products = computed(() => store.getters.productsWithLiked)

// console.log(products)
function addToCart(product) {
  store.commit("addToCart", product)
  snackBar.value = true
}

function addLovedItem(product) {
  store.commit("addLovedItems", product)
  showLovedItemMessage.value = true
  // product.liked = !product.liked;
  product.liked = !product.liked
}

async function getFilteredData(value) {
  let response = await apiClient.get("products")
  const filteredData = response.data.filter(
    (eachData) => eachData.category === value
  )
  store.commit("setProducts", filteredData)
}

async function filterByPrice() {
  let response = await apiClient.get("products")
  const filteredProductsByPrice = response.data.filter((data) => {
    const price = data.price
    return price >= min.value && price <= slider.value
  })
  console.log(filteredProductsByPrice)
  store.commit("setProducts", filteredProductsByPrice)
}

onMounted(() => {
  store.dispatch("fetchProducts")
  store.commit("loadCart")
  store.commit("loadLovedItemsInCart")
  // filterByPrice()
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
  z-index: 5555;
  transform: translateY(90px);
  transition: all 0.5s ease-in-out;
}
.fashion-items-card:hover .add-to-cart {
  display: block !important;
  transform: translateY(20px);
}

.heart-button {
  top: 3%;
  left: 88%;
  z-index: 5555;

  display: none;
  transition: all 0.5s ease-in-out;
}

.fashion-items-card:hover .heart-button {
  display: block;
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
