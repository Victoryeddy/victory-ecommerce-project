<template>
  <footer class="footer bg-dark-grey">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="4">
          <p class="font-weight-bold">GET IN TOUCH</p>
          <p class="font-weight-light mt-3">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <p class="mt-4">
            <v-icon icon="mdi-facebook" class="me-2"></v-icon>

            <v-icon icon="mdi-instagram" class="me-2"></v-icon>

            <v-icon icon="mdi-pinterest" class="me-2"></v-icon>

            <v-icon icon="mdi-snapchat" class="me-2"></v-icon>

            <v-icon icon="mdi-youtube" class="me-2"></v-icon>
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="2">
          <p class="font-weight-bold">CATEGORIES</p>

          <ul style="list-style-type: none" class="mt-3">
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Men</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Women</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Dresses</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Sunglasses</a
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <p class="font-weight-bold">LINKS</p>

          <ul style="list-style-type: none" class="mt-3">
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Search</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >About Us</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Contact Us</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Returns</a
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <p class="font-weight-bold">HELP</p>

          <ul style="list-style-type: none" class="mt-3">
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Track Order</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Returns</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >Shipping</a
              >
            </li>
            <li class="my-2">
              <a
                href="#"
                class="text-decoration-none font-weight-light text-black"
                >FAQS</a
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="2">
          <p class="font-weight-bold">NEWSLETTER</p>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Enter your email"
                variant="underlined"
                hint="e.g vick@gmail.com"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn rounded color="primary" size="large">subscribe</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center" align-content="center" class="mt-8">
        <v-col cols="12" sm="6" class="d-flex">
          <v-img src="@/assets/paypal.png" width="60" height="25" />
          <v-img src="@/assets/visa.png" width="60" height="25" />
          <v-img src="@/assets/mastercard.png" width="60" height="25" />
          <v-img src="@/assets/express.png" width="60" height="25" />
          <v-img src="@/assets/discover.png" width="60" height="25" />
        </v-col>
        <v-col cols="12">
          <p class="text-center fs-6 font-weight-light">
            Copyright &copy;{{ currentYear }} Victory Ndu. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>

// current date
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.bg-dark-grey {
  background-color: #f3f3f2 !important;
}
.footer {
  padding: 4rem 0;
}
</style>
