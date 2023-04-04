<template>
  <div class="relative w-full">
    <div class="slider-container overflow-hidden ">
      <div class="slider-wrapper flex h-[700px]" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="slider-item flex-shrink-0 w-full bg-center bg-scroll bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${image.src})` }" >
          <div class="bg-black  bg-opacity-40 w-full h-[700px]"></div>
        </div>
      </div>
    </div>
    <div class="slider-navigation absolute top-0 bottom-0 flex justify-between w-full px-4">
      <button @click="prevSlide" class="mx-5 left-0 absolute top-[50%] transition-all text-4xl translate-y-1/2 font-semibold bg-white rounded-full hover:bg-yellow-400  p-3 "> <img src="../../images/icons/arr-left.svg" alt=""></button>
      <button @click="nextSlide" class="mx-5 right-0 absolute top-[50%] transition-all text-4xl translate-y-1/2 font-semibold bg-white rounded-full hover:bg-yellow-400  p-3 "> <img src="../../images/icons/arr-right.svg"></button>
    </div>
  </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = [
  {
    src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2018%2F07%2F27200058%2FEatingWell_Dehydrating_Guide_Alli_377.jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://makefoodstay.com/wp-content/uploads/2020/08/food-dehydrator.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://st.depositphotos.com/1177973/1431/i/950/depositphotos_14316383-stock-photo-assortment-of-dry-tea-isolated.jpg',
    alt: 'Image 3',
  },
];

const currentIndex = ref(0);
const maxIndex = ref(images.length - 1);

function nextSlide() {
  currentIndex.value = currentIndex.value === maxIndex.value ? 0 : currentIndex.value + 1;
}

function prevSlide() {
  clearInterval();
  currentIndex.value = currentIndex.value === 0 ? maxIndex.value : currentIndex.value - 1;
}

onMounted(()=>{
  setInterval(nextSlide, 5000)
})



</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 660px;
}

.slider-wrapper {
  transition: transform 0.3s ease-out;
}

.slider-item {
  flex: 0 0 100%;
  max-width: 100%;
  height: 100%;
}
</style>
