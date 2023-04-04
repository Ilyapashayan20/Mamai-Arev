/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1083px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      "x": {"max": "435px"}
    },
    extend: {
      colors: {
        'yellow-400' : "#FFEA00"
      },
      backgroundImage:{
        'fruit': "url('https://gardening.usask.ca/images/fruit%20and%20veg/dried-fruit-by-k8-unsplash.jpg)",
        'gallery': "url('../images/bg/bg-gallery.jpg')",
        'checkout': "url('../images/bg/bg-checkout.jpg')"

      }
    },
  },
  plugins: [],
  purge: ['../index.html','./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
