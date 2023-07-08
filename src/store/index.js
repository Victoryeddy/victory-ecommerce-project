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

    getTotalPriceInCart(state){
      return state.cart.reduce((total, cartItem) => {
        return total + cartItem.price;
      }, 0);
    }
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
      const newItems = state.cart.filter(item => item.id !== product.id);

      // console.log(index);
      if (newItems) {
        state.cart = newItems;
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
        commit('setProducts', products);
      } catch (error) {
        state.errors = error
      }
    },

  },
  modules: {
  }
})
