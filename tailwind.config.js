/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22252a",
        secondary: "#2f3338",
      }
    },
  },
  daisyui: {
    themes: ['night', 'cupcake']
  }, 
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}