<template>
  <GoogleMap
    :api-key="apiKey"
    style="width: 100%; height: 600px"
    :center="center"
    :zoom="zoom"
  >
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script setup>
import { ref } from "vue"
import { GoogleMap, Marker } from "vue3-google-map"
// process.env.VUE_APP_GOOGLE_MAP_KEY
const apiKey = ref(process.env.VUE_APP_GOOGLE_MAP_KEY)
const center = ref({ lat: 40.689247, lng: -74.044502 })
const zoom = ref(12)
const markerOptions = ref({
  position: center,
  label: "L",
  title: "LADY LIBERTY",
})

</script>
