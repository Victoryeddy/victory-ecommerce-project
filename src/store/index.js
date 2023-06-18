import { createStore } from 'vuex'
import apiClient from "@/plugins/fakeStoreAxios"


export default createStore({
  state: {
    products: [],
    cart: [],
    errors: [],
    selectedCategory: ''
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    addToCart(state, product){
      state.cart.push(product)
    },
     setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
  },
  actions: {
    async fetchProducts({state , commit}){
      try{
        const response = await apiClient.get("products")
        const products = await response.data
        // console.log(products)
        commit('setProducts', products);
      } catch(error){
        state.errors = error
      }
    },
   
  },
  modules: {
  }
})
