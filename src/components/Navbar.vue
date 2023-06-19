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

      <v-toolbar color="white" class="elevation-1 pa-2 px-6 ">
  
          <span>
    
            <v-img
              src="@/assets/fashionLogo.png.png"
              alt="fashion logo"
              width="120"
              height="50"
            ></v-img>
          </span>
          <v-spacer></v-spacer>
          <div class="d-none d-md-flex">

            <router-link to="/" class="me-5 nav-link"
            >Home</router-link
            >
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
    
          <v-btn icon large class="position-relative">
            <v-icon>mdi-shopping-outline</v-icon>
            <span class="bg-dark pa-1 py-0 fw-bold text-white nav-count">{{store.state.cart.length}}</span>
          </v-btn>
      </v-toolbar>
    </div>
    <!-- <v-btn icon elevation="0">
      <v-icon>mdi-shopping-outline</v-icon>
    </v-btn> -->
   
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();


</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  /* outline: 1px solid red; */
}

/* .secondary-nav{
  position:sticky;
  top:0;  
  z-index: 100;
} */

.nav-link{
  color:rgb(126, 123, 123);
  text-decoration:none;

}
.nav-link:hover{
  text-decoration:underline;
}
.text-grey {
  color:rgb(126, 123, 123);
}
.bg-dark{
  background-color: #131313 ;
}
.nav-count{
  border-radius: 50%;
  font-size: 0.75rem;
  position:absolute;
  bottom:50%;
  left: 56%;
}
</style>
