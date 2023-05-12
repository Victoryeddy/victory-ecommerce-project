<template>
  <div>
    <v-toolbar density="compact">
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
    <v-toolbar color="white" class="elevation-1 pa-2 px-6">

        <span>
  
          <v-img
            src="@/assets/fashionLogo.png.png"
            alt="fashion logo"
            width="120"
            height="50"
          ></v-img>
        </span>
        <v-spacer></v-spacer>
        <router-link to="/about" class="me-5 text-decoration-none"
          >Home</router-link
        >
        <router-link to="/" class="me-5 text-decoration-none">Shop</router-link>
        <router-link to="/" class="me-5 text-decoration-none">Sale</router-link>
        <router-link to="/" class="me-5 text-decoration-none"
          >Features</router-link
        >
        <router-link to="/" class="me-5 text-decoration-none">Blog</router-link>
        <router-link to="/" class="me-5 text-decoration-none">About</router-link>
        <router-link to="/" class="me-5 text-decoration-none"
          >Contact</router-link
        >
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-shopping-outline</v-icon>
        </v-btn>
    </v-toolbar>
    <!-- <v-btn icon elevation="0">
      <v-icon>mdi-shopping-outline</v-icon>
    </v-btn> -->
   
  </div>
</template>

<script setup></script>

<style scoped>
* {
  font-family: "Open Sans", sans-serif;
  /* outline: 1px solid red; */
}
.text-grey {
  color: rgb(161, 159, 159);
}
</style>
