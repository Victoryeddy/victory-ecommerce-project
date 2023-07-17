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
          <v-col cols="12" lg="7">
            <div class="scroller d-flex mt-7 elevation-2">
              <v-table>
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
                      <v-row>
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
                      ₦{{ Math.ceil(calculateSingleCartTotal(cart)) }}
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

          <v-col cols="12" lg="5">
            <v-card class="mt-7 elevation-2 pa-4">
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Order Summary</th>
                    <th class="text-end">{{ carts.length }} Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-grey py-3">Delivery Charges</td>
                    <td class="text-grey text-end py-3">
                      Add your delivery address at checkout to see delivery
                      charges
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3">Subtotal:</td>
                    <td class="text-end py-3">
                      ₦{{
                        getFormattedAmount(Math.ceil(calculateAllCartsTotal))
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Total:</td>
                    <td class="font-weight-bold text-end">
                      ₦{{
                        getFormattedAmount(Math.ceil(calculateAllCartsTotal))
                      }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <v-btn block color="orange" class="mt-4" @click="payWithPaystack"
                >Pay Now</v-btn
              >
              <!-- </div> -->
              <v-row
                class="d-flex justify-center align-center mt-3 mx-auto"
                no-gutters
                style="width: 80%"
              >
                <v-col cols="3">
                  <p class="text-grey mt-3 font-xs">We accept:</p>
                </v-col>
                <v-col cols="9">
                  <div class="d-flex mt-4">
                    <v-img
                      src="@/assets/mastercardPicture.png"
                      width="10"
                      height="10"
                    ></v-img>
                    <v-img
                      src="@/assets/visacardPicture.png"
                      width="10"
                      height="10"
                    ></v-img>
                    <v-img
                      src="@/assets/vervecardPicture.png"
                      width="10"
                      height="10"
                    ></v-img>
                    <v-img
                      src="@/assets/KongaPayPicture.png"
                      width="10"
                      height="10"
                    ></v-img>
                  </div>
                </v-col>
                <v-col cols="12">
                  <p class="d-flex justify-center mt-4 font-xs">
                    <span class="text-grey"
                      ><v-icon>mdi-lock-outline</v-icon> Transactions are 100%
                      safe and secure
                    </span>
                  </p>
                </v-col>
              </v-row>
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
import { getFormattedAmount } from "@/utilities"

import { ref, onMounted, watch, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const carts = ref([])

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

function calculateSingleCartTotal(cart) {
  let total = cart.price * cart.quantity
  return total
}

const calculateAllCartsTotal = computed(() => {
  return carts.value.reduce((total, cart) => {
    return total + calculateSingleCartTotal(cart)
  }, 0)
})
const totalAmount = ref(0)

function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: process.env.VUE_APP_PAYSTACK_API_KEY,
    email: "johndoe@gmail.com",
    amount: totalAmount.value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit

    currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
    ref: generateReference(),
    callback: function (response) {
      var reference = response.reference
      alert("Payment complete! Reference: " + reference)
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.")
      console.log(totalAmount.value)
    },
  })
  handler.openIframe()
}

function generateReference() {
  const date = new Date();
  const timestamp = date.getTime();
  const random = Math.floor(Math.random() * 1000); 
  return `REF-${timestamp}-${random}`;
}

// we watch for change in the getters so we can update the cart object
watch(() => {
  carts.value = store.getters.cartsWithQuantity
totalAmount.value = calculateAllCartsTotal.value

})

onMounted(() => {
  store.commit("loadCart")
  store.commit("loadLovedItemsInCart")
  console.log(process.env.VUE_APP_PAYSTACK_API_KEY)
  console.log(totalAmount.value)
})
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}

.scroller {
  /* overflow: hidden; */
  overflow-x: scroll;
  /* margin-top: 3rem; */
}
.font-xs {
  font-size: 0.75rem;
}
.cart-headers {
  font-weight: bold;
  font-size: 1.1rem;
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
