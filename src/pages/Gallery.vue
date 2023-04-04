<template>
    <div class="gallery">
      <div class="relative">
        <div class="w-full blur-sm bg-gallery bg-no-repeat bg-cover bg-center sm:py-20 py-36"></div>
        <h1 class="text-center absolute top-[44%] mx-auto w-full text-white text-6xl sm:text-3xl drop-shadow-lg font-semibold">
          Պատկերասրահ
        </h1>
      </div>
      <div class="h-[500px]" v-if="loading">
        <Spiner  />
      </div>
      <div v-else class="mt-12">
        <h1 class="text-center font-bold">Բոլորը</h1>
        <div class="gallery my-10 max-w-[1430px]  xl:flex-colmd:max-w-3xl sm:max-w-xl px-3 grid grid-cols-3 gap-3 sm:grid-cols-2 mx-auto">
          <div class=" overflow-hidden w-full rounded"  v-for="picture in pictures" :key="picture._id">
          <a  data-aos="zoom-in"      data-aos-duration="1000" class=" overflow-hidden"  :href="upload + picture.image"  data-fancybox="image">
            <img class="block h-full w-full   object-center overflow-hidden  transition-all hover:scale-125 object-cover" :src="upload + picture.image" alt="Picture" />
          </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {  onMounted, computed } from "vue";
  import { useStore } from "vuex";
  import "@fancyapps/fancybox/dist/jquery.fancybox.css";
  import "@fancyapps/fancybox";
  import Spiner from "@/components/Loadings/spiner.vue";
  
  const upload = `https://api-mamaiarev.onrender.com/uploads/gallery/`;
  const store = useStore();
  
  const loading = computed(() => store.getters.loadingPictures);
  const pictures = computed(() => store.getters.getPictures);

  
  onMounted(() => {
    store.dispatch("getGalleryImages");
  });
  </script>
  