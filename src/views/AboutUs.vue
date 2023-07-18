<template>
  <div>
    <!-- <Navbar /> -->

    <div class="contact-us-picture position-relative">
      <v-img
        height="250"
        aspect-ratio="16/9"
        cover
        src="@/assets/contact-heading-picture.jpeg"
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
      <h1 class="text-center about-header text-uppercase">About Us</h1>
    </div>

    <main class="main-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="7">
            <h2 class="font-weight-bold heading">Our Story</h2>
            <p class="mt-4">
              Welcome to our online clothing store! At Vmart Store, we believe
              that fashion is a powerful means of self-expression. We are
              passionate about curating a collection of stylish and trendy
              clothing pieces that allow you to showcase your unique personality
              and individuality. With a keen eye for the latest fashion trends
              and a dedication to providing exceptional quality, we strive to
              offer an unparalleled shopping experience. Our team of fashion
              enthusiasts works tirelessly to handpick each item in our store,
              ensuring that only the finest garments make it to your wardrobe.
            </p>
            <p>
              At Vmart Store, we cater to individuals from all walks of life,
              with an extensive range of clothing options for men, women, and
              children. Whether you're looking for casual everyday wear,
              sophisticated formal attire, or trendy seasonal outfits, we have
              something to suit every taste and occasion. We understand that
              shopping for clothes online can sometimes be challenging, which is
              why we prioritize customer satisfaction above all else. Our
              website is designed with user-friendliness in mind, making it easy
              to navigate through our diverse product categories, browse
              detailed descriptions, and find the perfect items that match your
              style preferences.
            </p>
          </v-col>

          <v-col cols="12" lg="4">
            <v-sheet class="pa-2 mt-4">
              <v-card class="fashion-items-card mb-2 border-dark">
                <v-img src="@/assets/SPS_1374-removebg-preview.png" cover>
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
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}
.about-header {
  position: absolute;
  z-index: 666;
  bottom: 38%;
  left: 40%;
  color: #fff;

  font-size: 3.5rem;
}

.fashion-items-card {
  position: relative;
  overflow: hidden;
}
.fashion-items-card .v-img {
  transition: transform 0.3s ease;
}

.fashion-items-card:hover .v-img {
  transform: scale(1.1);
}

.fashion-items-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.main-section {
  padding: 3rem 0;
}
.main-section .heading {
  font-size: 2.5rem;
}

@media only screen and (max-width: 768px) {
  .about-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 25%;
    color: #fff;
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .about-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 37%;
    color: #fff;
    font-size: 3rem;
  }
}
</style>
