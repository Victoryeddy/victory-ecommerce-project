import { createStore } from 'vuex'
import apiClient from "@/plugins/fakeStoreAxios"
const CART_ITEMS = 'cart';
const LOVED_ITEMS = 'lovedItems';

export default createStore({
  state: {
    products: [],
    cart: [],
    errors: [],
    lovedItems: []
  },
 
  mutations: {
    setProducts(state, products) {
      state.products = products
    },

   

    // cart items
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id == product.id);
      if (!existingProduct) {
        state.cart.push(product)
        localStorage.setItem(CART_ITEMS, JSON.stringify(state.cart))
      }

    },

    removeFromCart(state, product) {
      const newItems = state.cart.filter(item => item.id !== product.id);

      
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
    },

    // loved items

     addLovedItems(state, product) {
      const lovedItem = state.lovedItems.find(item => item.id == product.id);
      if (!lovedItem) {
        state.lovedItems.push(product)
        localStorage.setItem(LOVED_ITEMS, JSON.stringify(state.lovedItems))
      }

    },

    removeFromLovedItems(state, product) {
      const newLovedItems = state.lovedItems.filter(item => item.id !== product.id);

    
      if (newLovedItems) {
        state.lovedItems = newLovedItems;
        localStorage.setItem(LOVED_ITEMS, JSON.stringify(state.lovedItems))

      }
    },

    loadLovedItemsInCart(state) {
      const lovedItemsInCarts = localStorage.getItem(LOVED_ITEMS)
      if (lovedItemsInCarts) {
        state.lovedItems = JSON.parse(lovedItemsInCarts)

      }
    },
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
  },
  getters: {

    getTotalPriceInCart(state) {
      return state.cart.reduce((total, cartItem) => {
        return total + cartItem.price;
      }, 0);
    },
    getTotalPriceInLovedItems(state) {
      return state.lovedItems.reduce((total, cartItem) => {
        return total + cartItem.price;
      }, 0);
    },

    productsWithLiked(state) {
      return state.products.map(product => ({
        ...product,
        liked: false,
      }));
    },
    cartsWithQuantity(state) {
      return state.cart.map(cartItem => ({
        ...cartItem,
        quantity: 1,
      }))
    }
  },
})
