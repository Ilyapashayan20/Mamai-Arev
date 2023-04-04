<template>
  <div class="home">
    <Slider />
    <FeaturedProduct />
    <ProductsPreview />
  </div>
</template>

<script setup>
import FeaturedProduct from '@/components/Products/FeaturedProduct.vue';
import ProductsPreview from '@/components/Products/ProductsPreview.vue';
import Slider from '@/components/Slider/Slider.vue';

</script>
