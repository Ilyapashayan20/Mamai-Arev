<template>
   <transition name="fade" mode="out-in">
    <div v-show="isVisible">
    <button  class="fixed bottom-4 shadow-sm right-4 bg-yellow-400 text-white rounded-full p-3 hover:bg-yellow-200 transition-all" @click="scrollToTop">
      <img class=" w-7 rotate-180" src="@/images/icons/mouse-cursor.png" alt="">
    </button>
    </div>
  </transition>
  </template>
  
  <script setup>
  import {ref, watchEffect} from "vue"


  const isVisible = ref(false)

  const handleScroll = () =>{
    if(window.scrollY > 1000){
    isVisible.value = true
    } else{
      isVisible.value = false
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  watchEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  })
  </script>