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
 
      <span class="fs-6 font-grey">Free Shipping for over $100</span>
      <v-spacer></v-spacer>
      <span class="fs-6 font-grey">vick@gmail.com</span>
      
    </v-toolbar>
  </div>
</template>

<script setup></script>

<style scoped>
*{
    font-family: 'Lato', sans-serif;
}
.font-grey{
    color:rgb(161, 159, 159);
}
</style>
