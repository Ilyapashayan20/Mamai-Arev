<template>
  <div class=" min-h-screen flex flex-col justify-between">
  <Navbar />
  <div class="mt-28 x:mt-20">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
  </div>
  <Footer />
 </div>
 <div>
  <Bag />
  <Cart />
 </div>
 <ScrollToTopButton />
</template>


<script setup>
import Navbar from "./components/Navbar/Navbar.vue" 
import Footer from "./components/Footer/Footer.vue"
import Bag from "./components/Cart/Bag.vue";
import ScrollToTopButton from "./components/ScrollToTopButton.vue"
import Cart from "./components/Cart/Cart.vue";

</script>
