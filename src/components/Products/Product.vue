<template>
    <div v-if="props.product" data-aos-offset="-300"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" class="flex flex-col justify-center items-center  w-fit shadow  hover:shadow-yellow-400 transition-all  rounded-3xl relative sm:w-full cursor-pointer">
     <router-link class=" w-full
     "   :to="{ path: '/product/' + product._id }">
        <div class="relative sm:w-full sm:h-80  w-80 h-64">
            <img :src=" upload + product.images[0]" :class="{ 'hover:opacity-0 ' : product.images[1] }"  class=" opacity-100 absolute inset-0 rounded-t-3xl object-cover w-full h-full transition-opacity group-hover:opacity-0">
            <img v-if="product.images[1]" :src="upload + product.images[1]"  class=" opacity-0  hover:opacity-100 absolute inset-0 rounded-3xl object-cover w-full h-full transition-opacity group-hover:opacity-100">
          </div>
          <div class="flex mt-3 px-4 justify-between  items-center">
        <h1 v-if="product.title" class=" text-xl">{{ product.title.substring(0,7) }} <span v-if="product.title.length > 7" >...</span> </h1>
        <p class=" bg-yellow-400 rounded-full px-3 py-1 opacity-90">{{ product.category.name }}</p>
        </div>
        </router-link>
        <div class="flex mt-4 justify-between w-full px-4 mb-2 items-center">
        <span class="mt-2 relative font-semibold text-xl" v-if="product.price"> {{ product.price }} ֏ <span class=" absolute -top-3 rotate-[332deg] font-extralight text-sm bg-gray-200 rounded-md p-[2px]" v-if="product.weight">500g</span> </span>
        <button @click="addCart(product)" class="py-2  my-4 px-5 border-2 font-semibold sm:text-[15px] sm:font-bold text-base border-yellow-400 hover:bg-yellow-400 rounded-3xl transition-all flex items-center w-fit "><img class="mr-3 w-6 sm:w-6" src="@/images/icons/shopping-bag.svg" alt=""> <span class="text-center mr-4">Ավելացնել</span></button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex';
const upload = 'https://api-mamaiarev.onrender.com/uploads/product/'

const props = defineProps({
    product:{
        tpype: Object,
        required: true
    }
})

const store = useStore()

const addCart = (product) => {
    store.dispatch('addProductsToCart', { product: product, quantity: 1 });

}

</script>
