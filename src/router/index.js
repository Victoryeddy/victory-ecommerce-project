import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUs from '../views/ContactUs.vue'
import AboutUs from '../views/AboutUs.vue'
import Blog from '../views/Blog.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Carts from '../views/Carts.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:productId',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/shopping-carts',
    name: 'Carts',
    component: Carts
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
