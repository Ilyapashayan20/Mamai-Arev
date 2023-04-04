<template>
    <div class="shop mb-12 min-h-[700px]">
       <div class="flex max-w-[1630px]  2xl:max-w-[1420px] xl:flex-col gap-12 mt-12  md:max-w-3xl sm:max-w-xl mx-auto px-3">
        <Category />
        <ProductsList />
       </div>
    </div>
  </template>
  
  <script setup>
  import Category from '@/components/Category.vue';
  import ProductsList from '@/components/Products/ProductsList.vue';
  </script>
  