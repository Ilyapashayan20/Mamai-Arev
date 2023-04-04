<template>
  <div class="shadow-md bg-white top-0 fixed w-full py-8 px-12 lg:px-6  lg:py-5 flex items-center lg:justify-between  z-40">
    <div class="logo w-fit  text-center bg-yellow-400 text-3xl font-normal text-green-100 relative z-50">
      Mamai Arev
    </div>
    <div :class="{ 'lg:top-[-1000px]' : !open}" class="flex justify-between items-center w-full  z-10 lg:fixed transition-all lg:h-screen lg:justify-evenly  lg:backdrop-blur-sm bg-white bg-opacity-80  lg:top-4 lg:flex-col lg:z-20 lg:left-0 ">
      <div class=" lg:hidden"></div>
      <nav class="menu gap-8 flex 2xl:gap-2 lg:w-full lg:flex-col lg:gap-4 lg:mb-64  x:mb-0">
        <router-link @click="open = false"
          active-class="text-yellow-400"
          class="2xl:px-2  text-center px-4 text-gray-700 hover:text-yellow-400 font-semibold text-xl 2xl:text-lg lg:text-xl transition-colors duration-300"
          to="/"
          >Գլխավոր</router-link
          
        >
        <router-link @click="open = false"
          active-class="text-yellow-400"
          class="2xl:px-2  text-center px-4 text-gray-700 hover:text-yellow-400 font-semibold text-xl 2xl:text-lg lg:text-xl transition-colors duration-300"
          to="/products"
          >Խանութ</router-link
        >
        <router-link @click="open = false"
          active-class="text-yellow-400"
          class="2xl:px-2  text-center px-4 text-gray-700 hover:text-yellow-400 font-semibold text-xl 2xl:text-lg lg:text-xl transition-colors duration-300"
          to="/about"
          >Մեր Մասին</router-link
        >
        <router-link @click="open = false"
          active-class="text-yellow-400"
          class="2xl:px-2  text-center px-4 text-gray-700 hover:text-yellow-400 font-semibold text-xl 2xl:text-lg lg:text-xl transition-colors duration-300"
          to="/gallery"
          >Պատկերասրահ</router-link
        >
        <router-link @click="open = false"
          active-class="text-yellow-400"
          class="2xl:px-2  text-center px-4 text-gray-700 hover:text-yellow-400 font-semibold text-xl 2xl:text-lg lg:text-xl transition-colors duration-300"
          to="/contact"
          >Կապ</router-link
        >
      </nav>
      <div class="rightsite flex gap-8 2xl:gap-4 items-center lg:flex-col">
        <button  @click="openModal"
          class="flex items-center px-6 py-3 text-base font-semibold text-black rounded-3xl border-2 border-yellow-400 bg-yellow-400 hover:bg-transparent transition"
        >
          <img src="@/images/icons/call.svg" class="mr-3" />
          <span> Պատվիրել Զանգով </span>
      </button>
        <Langs class=" hidden" />
      </div>
    </div>
    <div @click="open = !open" class="lg:flex hidden w-5 h-6 p-5 relative z-50">
      <button
        class="text-yellow-400 w-4 relative focus:outline-none bg-white "
        
      >
        <span class="sr-only">Open main menu</span>
        <div
          class="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span
            aria-hidden="true"
            class="block absolute h-0.5  w-7 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5  w-7 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'opacity-0': open }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5  w-7 bg-current transform transition duration-500 ease-in-out"
            :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
          ></span>
        </div>
      </button>
    </div>
  </div>
  <CallModal @close="openModal"  :modalActive="modalActive" />
</template>

<script setup>
import { ref } from "vue";
import Langs from "./Langs.vue";
import CallModal from "../Modal/CallModal.vue"

const modalActive = ref(false);

const openModal = () =>{
  modalActive.value = !modalActive.value
}

let open = ref(false);
</script>

<style></style>
