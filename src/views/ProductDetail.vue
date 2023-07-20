<template>
  <div>
    <!-- <v-breadcrumbs :items="breadCrumb.items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs> -->
    <v-container>
      <v-row class="d-flex justify-center mt-9">
        <v-col cols="12" lg="6"
          ><v-img :src="singleProduct.image" width="600" height="600"></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <p class="product-heading">{{ singleProduct.title }}</p>
          <p class="text-capitalize text-grey">
            <span>Category:</span> {{ singleProduct.category }}
          </p>
          <star-rating
            read-only
            :rating="rating.rate"
            glow="2"
            show-rating="false"
            class="mt-4"
            star-size="20"
          />
          <p class="price mt-2">
            <span class="text-grey">Price:</span> ₦{{
              getFormattedAmount(Math.ceil(singleProduct.price))
            }}
          </p>

          <p class="description-heading mt-4">Description</p>
          <p class="text-grey mt-1 description">
            {{ singleProduct.description }}
          </p>
          <p>
            <v-btn
              prepend-icon="mdi-shopping-outline"
              color="orange"
              size="large"
              class="mt-8 cart-button"
              rounded
              @click="addToCart(singleProduct)"
              >Add to Cart</v-btn
            >
            <!-- <v-btn icon="mdi-heart-outline" size="large"  @click="addLovedItem(singleProduct)"></v-btn> -->
            <v-snackbar
              v-model="snackBar"
              :timeout="timeout"
              color="primary"
              multi-line="true"
              variant="tonal"
            >
              <span class="text-black">Added To Cart Successfully</span>

              <template v-slot:actions>
                <v-btn color="black" @click="snackBar = false"> Close </v-btn>
              </template>
            </v-snackbar>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import apiClient from "@/plugins/fakeStoreAxios"
import StarRating from "vue-star-rating"
import { getFormattedAmount } from "@/utilities"

const timeout = ref(2000)

const snackBar = ref(false)
function addToCart(product) {
  store.commit("addToCart", product)
  snackBar.value = true
}

const store = useStore()

const route = useRoute()
const router = useRouter()

const rating = ref([])
// const count = ref([])

let singleProduct = ref([])
const productId = route.params.productId
function getSingleItem() {
  apiClient
    .get(`products/${productId}`)
    .then((response) => {
      singleProduct.value = response.data
      console.log(singleProduct.value)
      rating.value = singleProduct.value.rating
    })
    .catch((error) => {
      console.log(error)
    })
}

onMounted(() => {
  getSingleItem()
  store.commit("loadCart")
  store.commit("loadLovedItemsInCart")
})
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800;900&display=swap");
.product-heading {
  font-weight: 500;
  font-size: 2.1rem;
  color: #131313;
  font-family: "Montserrat", sans-serif;
}
.price {
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  color: #3d3d4e;
}
.description-heading {
  font-weight: 500;
  font-size: 1.5rem;
  color: #3d3d4e;
  font-family: "Montserrat", sans-serif;
}
.description,
.cart-button {
  font-family: "Montserrat", sans-serif;
}
.cart-button {
  font-weight: 600;
}
</style>
