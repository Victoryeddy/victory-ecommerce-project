<template>
  <div>
    <!-- <Navbar /> -->

    <div class="contact-us-picture position-relative">
      <v-img
        height="300"
        aspect-ratio="16/9"
        cover
        src="@/assets/shopping-carts-picture.jpeg"
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
      <h1 class="text-center shop-header text-uppercase">Shopping Carts</h1>
    </div>

    <main class="main-section">
      <v-container fluid>
        <v-btn
          color="orange"
          prepend-icon="mdi-arrow-left"
          variant="outlined"
          elevation-1
          class="font-weight-bold"
          to="/products"
          >Continue Shopping</v-btn
        >

        <div class="scroller d-flex">
          <v-table hover>
            <thead>
              <tr>
                <th class="text-left text-uppercase cart-headers">
                  product
                </th>
                <th class="text-center text-uppercase cart-headers">
                  price
                </th>
                <th class="text-center text-uppercase cart-headers">
                  quantity
                </th>
                <th class="text-center text-uppercase cart-headers">
                  total
                </th>
                <th class="text-end text-uppercase cart-headers">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <div class="d-flex align-center">

                        <v-img
                          height="150"
                          width="200"
                          cover
                          src="@/assets/shopping-carts-picture.jpeg"
                          class="ma-2"
                        ></v-img>
                        <p>Chain bucket bag</p>
                    </div>
                 
                </td>
                <td class="font-bold text-center">$120</td>
                <td class="font-bold text-center">
                    <v-row no-gutters>
                        <v-col cols="4"><v-btn size="small">-</v-btn></v-col>
                        <v-col cols="4" >5</v-col>
                        <v-col cols="4"><v-btn size="small">+</v-btn></v-col>
                    </v-row>
                </td>
                <td class="font-bold text-end">
                    $300
                </td>
                <td class="font-bold text-end">
                    <v-btn size="small" prepend-icon="mdi-window-close" variant="outlined" color="red">remove</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-container>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
// import { getFormattedAmount } from "@/utilities"

import { ref, onMounted, computed } from "vue"
import { useStore } from "vuex"
import apiClient from "@/plugins/fakeStoreAxios"

const slider = ref(0)
const min = ref(16)
const max = ref(1000)

// const preLoader = ref(true)

// featured products section
const store = useStore()

const snackBar = ref(false)
const showLovedItemMessage = ref(false)
const timeout = ref(2000)
// Get products and cart from the store

</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}

.scroller {
  /* overflow: hidden; */
  overflow-x: scroll;
  margin-top: 3rem;
}
.cart-headers {
  font-weight: bold;
  font-size: 1.5rem;
  color: #131313 !important;
}
.shop-header {
  position: absolute;
  z-index: 666;
  bottom: 38%;
  left: 33%;
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
    left: 5%;
    color: #fff;
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .shop-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 25%;
    color: #fff;
    font-size: 3rem;
  }
}
</style>
