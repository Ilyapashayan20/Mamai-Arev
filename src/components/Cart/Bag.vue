<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="cartProductCount > 0"
      :class="{ 'bottom-20 x:bottom-20' : isVisible , ' bottom-4 x:bottom-3' : !isVisible}"
      class="fixed z-[99] bug  ease-out right-3"
    >
      <div
        @click="openCartPopup"
        class="relative cursor-pointer p-5 rounded-full border border-yellow-400 shadow-yellow-400 bg-[#ffffffcc]"
      >
        <img src="@/images/icons/shopping-bag.svg" alt="" />
        <span
          class="-top-3 -right-1 absolute bg-red-600 text-white rounded-full py-1 px-3"
          >{{ cartProductCount }}</span
        >
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed,ref,watchEffect } from "vue";
import { useStore } from "vuex";

const isVisible = ref(false);

function handleScroll() {
  if (window.scrollY > 1000) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
}

watchEffect(() => {
  window.addEventListener('scroll', handleScroll);
});

const store = useStore();

const openCartPopup = () => {
  store.dispatch("showCart");
};
const cartProductCount = computed(() => store.getters.getCartProductCount);
</script>


<style>
.bug{
  transition: 0.3s all ease-in-out;
}
</style>