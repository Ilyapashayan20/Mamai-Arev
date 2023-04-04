<template>
    <div class=" x:mt-16 mt-32 mb-28 max-w-[1420px] lg:max-w-4xl md:max-w-3xl sm:max-w-xl mx-auto px-3">
        <div class="mb-16">
            <h2 class=" text-center font-bold text-5xl sm:text-3xl border-b-[4px] pb-4 border-yellow-400">
                Առաջարկվող
                <span class=" font-thin">Ապրանքներ</span>
            </h2>
        </div>
        <div class="flex flex-wrap justify-center gap-8">
            <Product v-for="product in products" :key="product" :product="product" />
        </div>
        <div class=" mt-12 flex justify-center items-center">
            <router-link class=" bg-yellow-400 rounded-3xl py-2 font-bold px-6 hover:bg-yellow-300 transition-all text-lg text-center" to="/products">Խանութ</router-link>
        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';
import products from '@/data/products.js';
</script>
