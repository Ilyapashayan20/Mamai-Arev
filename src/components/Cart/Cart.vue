<template>
  <Transition name="modal-animation">
  <div v-if="showCart" class="fixed inset-0 bg-black/40 z-[999]">
    <div v-if="cartProducts"  :class="['absolute right-0 transition-all bg-white h-full', showCart ? 'w-96 x:w-full' : '-right-full']">
      <div class="p-4 flex flex-col h-full">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold drop-shadow-sm">Զամբյուղ <span class="ml-1">({{ cartProductCount }})</span></h2>
          <button @click="hideCart" class="w-9 h-9">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="black" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M6 6L18 18" stroke="black" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="flex flex-col flex-1 items-center justify-center" v-if="cartProducts.length === 0 ">
          <h1>Զամբյուղը դատարկ է</h1>
          <router-link @click="hideCart" class="mt-3 py-1 bg-yellow-400/30 px-3 rounded-md" to="/products">Խանութ</router-link>
        </div>
        <div v-else class="flex flex-col flex-1 mt-6 overflow-y-scroll">
          <div v-for="product in cartProducts" :key="product" class="flex  pb-3 border-b border-yellow-400 relative flex-col mb-4">
            <Transition name="fade">
            <div v-if="product.showRemove" class="delettimer absolute w-full h-full left-0 top-0 rounded-md bg-[#00000061] flex flex-col gap-2 justify-center items-center z-[2]">
              <button  @click="removeProduct(product._id, product)" class=" bg-red-500 text-white py-1 px-3 rounded-md">Հեռացնել</button>
              <button @click="product.showRemove = false" class=" bg-white text-black py-1 px-3 rounded-md">Չեղյարկել</button>

            </div>
            </Transition>
            <button @click="product.showRemove = true" class="remove-product absolute right-2 top-1/3 h-4 w-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="red" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M6 6L18 18" stroke="red" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
            </button>
            <div class="flex items-center justify-between ">
            <div class="w-24 h-24">
              <img v-if="product.images" class="object-cover rounded-md w-full h-full" :src="upload+product.images[0]" alt="">
            </div>
            <div class="flex-1  ml-4">
              <h3 class="font-bold x:text-sm">{{ product.title }}</h3>
              <p class="text-sm">{{ formatPrice(product.price) }} ֏</p>
            </div>
            </div>
            <div class="mt-3 w-full px-2 flex items-center justify-between">
              <div class="flex text-xl items-center">
                <button @click="reduceQuantity(product)" class="rounded-full cursor-pointer border border-gray-300 px-[9px] pb-[2px]">-</button>
                <span class="mx-4">{{ product.quantity }}</span> 
                <button @click="addQuantity(product._id)" class="rounded-full cursor-pointer border border-gray-300 px-[9px] pb-[2px]">+</button>
              </div>
              <span class="font-bold text-lg">{{ formatPrice(product.quantity * product.price) }} ֏</span>
            </div>
          </div>
        </div>
        <div class="p-4 shadow-inner">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-lg font-bold">Ընդամենը</h1>
            <p class="font-semibold">{{ formatPrice(TotalPrice) }} ֏</p>
          </div>
          <router-link @click="hideCart" to="/checkout" class="block rounded-lg bg-yellow-400 text-center py-3 text-base hover:bg-yellow-400/60 transition">
            Պատվիրել
          </router-link>
        </div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script setup>
import { computed, watchEffect} from 'vue';
import { useStore } from 'vuex';

const upload = 'https://api-mamaiarev.onrender.com/uploads/product/'

const store = useStore()


const reduceQuantity = (product) => {
  if( product.quantity > 1 ){
  store.dispatch('decreaseProductQuantity', product._id)
  } else{
    product.showRemove = true
  }
}

const addQuantity = (id) => {
  store.dispatch('increaseProductQuantity', id)
}


const formatPrice = (price) => {
  return price.toLocaleString('id-ID');
}

const cartProductCount = computed(() => store.getters.getCartProductCount);

const cartProducts = computed(() => store.getters.getCartProducts)





const removeProduct = (productId,product) => {
  product.showRemove = false
  store.dispatch('removeProductFromCart', productId)
}

const hideCart = () => {
  store.dispatch('hideCart')
}


const showCart = computed(() => store.getters.showCart )

const TotalPrice = computed(() => store.getters.getTotalCartProducts)


watchEffect(() => {
  if (showCart.value) {
    document.body.classList.add('styled');
  } else {
    document.body.classList.remove('styled');
  }
});
</script>
