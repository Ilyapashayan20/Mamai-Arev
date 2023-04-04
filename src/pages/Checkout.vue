<template>
  <OrderSuccess @hide="clearCart" :show="show" />
  <div
    class="flex w-full mt-36 mb-64 flex-col h-full flex-1 items-center justify-center"
    v-if="cartProductCount === 0"
  >
    <h1>Զամբյուղը դատարկ է</h1>
    <router-link
      @click="hideCart"
      class="mt-3 py-1 bg-yellow-400/30 px-3 rounded-md"
      to="/products"
      >Խանութ</router-link
    >
  </div>
  <div v-else>
    <BillingDetails />
  </div>
</template>

<script setup>
import BillingDetails from "@/components/Checkout/BillingDetails.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import OrderSuccess from "@/components/Checkout/OrderSuccess.vue"


const clearCart = ()=>{
  store.dispatch('hidePopup')
  store.dispatch('clearCart');
}

const store = useStore();
const show = computed(()=> store.getters.orderSuccessfull)
const cartProductCount = computed(() => store.getters.getCartProductCount);
</script>
