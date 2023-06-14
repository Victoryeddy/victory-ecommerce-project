<template>
  <div>
    <Navbar />

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
      <h1 class="text-center contact-header text-uppercase">Contact</h1>
    </div>

    <main class="main-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="6" align-self="stretch">
            <GoogleMap />
          </v-col>

          <v-col cols="12" lg="6">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Full Name" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Phone Number" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email Address" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="input an number"
                      required
                      type="text"
                      v-model="numberInput"
                      @input="formatNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="Enter your message"></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      rounded
                      size="large"
                      append-icon="mdi-send"
                      >send</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import GoogleMap from "@/components/GoogleMap.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

import { ref } from "vue"


const numberInput = ref('')

function formatNumber() {
  // Remove any non-digit characters from the input value
  const digitsOnly = numberInput.value.replace(/\D/g, "")

  // Format the number with commas
  const formattedNumber = new Intl.NumberFormat().format(digitsOnly)

  // Update the input value with the formatted number
  numberInput.value = formattedNumber
}
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  /* outline: 1px solid red; */
}
.contact-header {
  position: absolute;
  z-index: 666;
  bottom: 38%;
  left: 43%;
  color: #fff;
  font-size: 3.5rem;
}

.main-section {
  padding: 4rem 0;
}

@media only screen and (max-width: 768px) {
  .contact-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 30%;
    color: #fff;
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .contact-header {
    position: absolute;
    z-index: 666;
    bottom: 38%;
    left: 37%;
    color: #fff;
    font-size: 3rem;
  }
}
</style>
