import { createStore } from 'vuex'
import apiClient from "@/plugins/fakeStoreAxios"
const CART_ITEMS = 'cart';

export default createStore({
  state: {
    products: [],
    cart: [],
    errors: [],
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id == product.id);
      if (!existingProduct) {
        state.cart.push(product)
        localStorage.setItem(CART_ITEMS, JSON.stringify(state.cart))
      }

    },

    removeFromCart(state, product) {
      const index = state.cart.find(item => item.id == product.id)
      // console.log(index);
      if (index !== -1) {
        state.cart.splice(index, 1);
        localStorage.setItem(CART_ITEMS, JSON.stringify(state.cart))

      }
    },
    loadCart(state) {
      const savedCarts = localStorage.getItem(CART_ITEMS)
      if (savedCarts) {
        state.cart = JSON.parse(savedCarts)

      }
    }
  },
  actions: {
    async fetchProducts({ state, commit }) {
      try {
        const response = await apiClient.get("products")
        const products = await response.data
        // console.log(products)
        commit('setProducts', products);
        // console.log(state.cart)
      } catch (error) {
        state.errors = error
      }
    },

  },
  modules: {
  }
})
