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

        <v-row>
          <v-col cols="12" lg="8">
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
                  <tr v-for="cart in carts" :key="cart.id">
                    <td>
                      <div class="d-flex align-center justify-start">
                        <v-img
                          height="200"
                          width="200"
                          :src="cart.image"
                          aspect-ratio="16/9"
                          class="ma-2"
                        ></v-img>
                      </div>
                    </td>
                    <td class="font-bold text-center">
                      ₦{{ Math.ceil(cart.price) }}
                    </td>
                    <td class="font-bold text-center">
                      <v-row no-gutters>
                        <v-col cols="4"
                          ><v-btn size="small" @click="decrementQuantity(cart)"
                            >-</v-btn
                          ></v-col
                        >
                        <v-col cols="4">{{ cart.quantity }}</v-col>
                        <v-col cols="4"
                          ><v-btn size="small" @click="incrementQuantity(cart)"
                            >+</v-btn
                          ></v-col
                        >
                      </v-row>
                    </td>
                    <td class="font-bold text-end">
                      ₦{{ Math.ceil(calculateTotal(cart)) }}
                    </td>
                    <td class="font-bold text-end">
                      <v-btn
                        size="small"
                        prepend-icon="mdi-window-close"
                        variant="outlined"
                        color="red"
                        @click="removeFromCart(cart)"
                        >remove</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </v-col>

          <v-col cols="12" lg="4">
            <v-card class="mt-9">
              <p>Hello world</p>
            </v-card>
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
// import { getFormattedAmount } from "@/utilities"

import {ref, onMounted,   watch } from "vue"
import { useStore } from "vuex"


const store = useStore()

const carts = ref([]);

function removeFromCart(cartItem) {
  store.commit("removeFromCart", cartItem)
}

function incrementQuantity(cart) {
  cart.quantity++
}
function decrementQuantity(cart) {
  if (cart.quantity > 1) {
    cart.quantity--
  }

}

function calculateTotal(cart) {
  let total = cart.price * cart.quantity
  return total
}

// we watch for change in the getters so we can update the cart object
watch(() => {
  carts.value = store.getters.cartsWithQuantity;
});

onMounted(() => {
  store.commit("loadCart")
  store.commit("loadLovedItemsInCart")
})
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  outline: 1px solid red;
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
