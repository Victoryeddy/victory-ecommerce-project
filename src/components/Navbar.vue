<template>
  <div>
    <v-toolbar density="compact" class="d-none d-md-flex">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-pinterest</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-snapchat</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-youtube</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <span class="fs-6 text-grey">Free Shipping for over $100</span>
      <v-spacer></v-spacer>
      <span class="fs-6 text-grey me-5">vick@gmail.com</span>
    </v-toolbar>
    <div class="secondary-nav">
      <v-toolbar color="white" class="elevation-1 pa-2 px-6">
        <span>
          <v-img
            src="@/assets/Free_Sample_By_Wix.jpeg"
            alt="fashion logo"
            width="150"
            height="60"
          ></v-img>
        </span>
        <v-spacer></v-spacer>
        <div class="d-none d-md-flex">
          <router-link to="/" class="me-5 nav-link">Home</router-link>
          <router-link to="/products" class="me-5 nav-link">Shop</router-link>
          <!-- <router-link to="/" class="me-5 nav-link">Sale</router-link>
            <router-link to="/" class="me-5 nav-link"
              >Features</router-link
            > -->
          <router-link to="/blog" class="me-5 nav-link">Blog</router-link>
          <router-link to="/about-us" class="me-5 nav-link">About</router-link>
          <router-link to="/contact-us" class="me-5 nav-link"
            >Contact</router-link
          >
        </div>
        <v-spacer></v-spacer>

        <v-btn icon large>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
        <v-btn icon large @click.stop="lovedItemsDrawer = !lovedItemsDrawer">
          <v-icon>mdi-heart-outline</v-icon>
          <span class="bg-dark pa-1 py-0 fw-bold text-white nav-count">{{
            store.state.lovedItems.length
          }}</span>
        </v-btn>

        <v-btn
          icon
          large
          class="position-relative"
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-shopping-outline</v-icon>
          <span class="bg-dark pa-1 py-0 fw-bold text-white nav-count">{{
            store.state.cart.length
          }}</span>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
        width="400"
      >
        <!-- <p>hello world</p> -->
        <v-card flat class="pa-5">
          <v-card-actions class="mb-6">
            <p class="font-weight-bold text-uppercase cart-text">Cart</p>
            <v-spacer></v-spacer>
            <v-btn icon large @click="drawer = false">
              <v-icon icon="mdi-window-close"></v-icon>
            </v-btn>
          </v-card-actions>

          <div v-if="carts.length <= 0">
            <p class="d-flex justify-content-center">
              <v-img
                src="@/assets/icons8-disappointed-100.png"
                width="300"
                height="150"
              ></v-img>
            </p>
            <p class="text-center font-weight-bold">No items In Your Cart</p>
          </div>
          <div v-else>
            <div
              v-for="(cart,index) in carts"
              :key="cart.id"
              v-show="index < 3"
              class="mt-8 cart-container"
            >
              <div class="d-flex justify-space-between">
                <div>
                  <v-img :src="cart.image" width="300" height="130"></v-img>
                  <div class="ms-4 me-3 mt-3 text-center">
                    <p>{{ cart.title }}</p>
                    <p class="mt-3 font-weight-bold fs-1">
                      ₦{{ getFormattedAmount(Math.ceil(cart.price)) }}
                    </p>
                  </div>
                </div>
                <!-- <div>
                  <v-btn icon class="elevation-0" @click="removeFromCart(cart)">
                    <v-icon icon="mdi-window-close"></v-icon>
                  </v-btn>
                </div> -->
              </div>
            </div>
            <p class="d-flex justify-space-between mt-6">
              <span class="total-text font-weight-bold">Total</span>
              <span class="mt-1 total-text font-weight-bold">
                ₦{{
                  getFormattedAmount(
                    Math.ceil(store.getters.getTotalPriceInCart)
                  )
                }}</span
              >
            </p>
            <v-btn block color="orange" size="large" class="mt-4" to="/shopping-carts">view in checkout</v-btn>
          </div>
        </v-card>
      </v-navigation-drawer>
      <v-navigation-drawer
        v-model="lovedItemsDrawer"
        location="right"
        temporary
        width="400"
      >
        <!-- <p>hello world</p> -->
        <v-card flat class="pa-5">
          <v-card-actions class="mb-6">
            <p class="font-weight-bold text-uppercase cart-text">Wish List</p>
            <v-spacer></v-spacer>
            <v-btn icon large @click="lovedItemsDrawer = false">
              <v-icon icon="mdi-window-close"></v-icon>
            </v-btn>
          </v-card-actions>

          <div v-if="lovedItems.length <= 0">
            <p class="d-flex justify-content-center">
              <v-img
                src="@/assets/icons8-disappointed-100.png"
                width="300"
                height="150"
              ></v-img>
            </p>
            <p class="text-center font-weight-bold">
              No items In Your Wish List
            </p>
          </div>
          <div v-else>
            <div
              v-for="lovedItem in lovedItems"
              :key="lovedItem.id"
              class="mt-8 cart-container"
            >
              <div class="d-flex justify-space-between">
                <div>
                  <v-img
                    :src="lovedItem.image"
                    width="300"
                    height="130"
                  ></v-img>
                  <div class="ms-4 me-3 mt-3 text-center">
                    <p>{{ lovedItem.title }}</p>
                    <p class="mt-3 font-weight-bold fs-1">
                      ₦{{ getFormattedAmount(Math.ceil(lovedItem.price)) }}
                    </p>
                  </div>
                </div>
                <div>
                  <v-btn
                    icon
                    class="elevation-0"
                    @click="removeFromLovedItem(lovedItem)"
                  >
                    <v-icon icon="mdi-window-close"></v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <p class="d-flex justify-space-between mt-6">
              <span class="total-text font-weight-bold">Total</span>
              <span class="mt-1 total-text font-weight-bold">
                ₦{{
                  getFormattedAmount(
                    Math.ceil(store.getters.getTotalPriceInLovedItems)
                  )
                }}</span
              >
            </p>
          </div>
        </v-card>
      </v-navigation-drawer>
    </div>
    <!-- <v-btn icon elevation="0">
      <v-icon>mdi-shopping-outline</v-icon>
    </v-btn> -->
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { ref, computed , onMounted } from "vue"
import { getFormattedAmount } from "@/utilities"

const store = useStore()
const drawer = ref(false)
const lovedItemsDrawer = ref(false)
const carts = computed(() => store.state.cart)

const lovedItems = computed(() => store.state.lovedItems)

// function removeFromCart(cartItem) {
//   store.commit("removeFromCart", cartItem)
// }

function removeFromLovedItem(item) {
  store.commit("removeFromLovedItems", item)
}

onMounted(() => {
  console.log(carts.value)
})
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

.cart-text {
  font-size: 1.5rem;
}

.total-text {
  font-size: 1.7rem;
}
.nav-link {
  color: rgb(126, 123, 123);
  text-decoration: none;
}
.nav-link:hover {
  text-decoration: underline;
}
.text-grey {
  color: rgb(126, 123, 123);
}
.bg-dark {
  background-color: #131313;
}
.nav-count {
  border-radius: 50%;
  font-size: 0.75rem;
  position: absolute;
  bottom: 50%;
  left: 56%;
}

.cart-container {
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  padding: 1rem;
}
</style>
