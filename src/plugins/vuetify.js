// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#fff', // Customize the primary color
        secondary: '#ff4081', // Customize the secondary color
        accent: '#8c9eff', // Customize the accent color
      },
    },
  },
})
