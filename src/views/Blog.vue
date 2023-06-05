<template>
  <div>
    <Navbar />

    <div class="contact-us-picture position-relative">
      <v-img
        height="250"
        aspect-ratio="16/9"
        cover
        src="@/assets/blog-heading.jpeg"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <h1 class="text-center blog-header text-uppercase">Blog</h1>
    </div>

    <main class="main-section">
      <v-container>
        <v-row justify="center" align="center">
         <v-col cols="12" lg="7">
          <div v-for="article in allArticles" :key="article.title">

            <v-card class="mt-5 border-dark fashion-items-card" >
              <v-img :src="article.image" cover>
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="card-overlay"></div>
            </v-card>
            <p class="font-weight-medium mt-4">
             {{ article.title }}
            </p>
            <p class="font-xs mt-1">By Nancy Ward on {{ getFormattedDate(article.publishedAt) }}</p>
            <p class="font-xs mt-2">
             {{ article.content }}
            </p>
            <router-link :to="article.url" class="fs-3">Read More</router-link>
          </div>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import { getFormattedDate } from '@/utilities';

//  using lifecycle hooks
import { onMounted, ref, reactive } from "vue"
import apiClient from "@/plugins/articlesAxiosFile"

const allArticles = ref([])


function getArticles() {
  apiClient
    .get(
      `top-headlines?category=general&lang=en&country=us&max=8&apikey=${process.env.VUE_APP_NEWS_API_KEY}`
    )
    .then((response) => {
      allArticles.value = response.data.articles
      console.log(allArticles.value,12345)
    })
    .catch((error) => {
      console.log(error)
    })
}
onMounted(() => {
  console.log(process.env.VUE_APP_NEWS_API_KEY)
  getArticles()
})
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}
.blog-header {
  position: absolute;
  z-index: 666;
  bottom: 38%;
  left: 45%;
  color: #fff;

  font-size: 3.5rem;
}

@media only screen and (max-width: 768px) {
  .blog-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 25%;
    color: #fff;
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .blog-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 37%;
    color: #fff;
    font-size: 3rem;
  }
}
</style>
