<template>
      <div @click="clsoeImagePreview" v-if="imagePreview" class=" md:hidden  fixed z-[999999] left-0 top-0 w-full h-screen bg-black bg-opacity-40">
      <div  v-if="product.images" class="flex mt-24 justify-center items-center mx-auto w-fit">
        <img class="max-h-[800px] max-w-[800px] object-contain overflow-auto m-auto " :src="upload+product.images[imagePreviewIndex]" alt="">
      </div>
  </div>
  <div class=" w-full  h-[500px] "  v-if="loading">
  <Spiner />
  </div>
  <div v-else>
  <div  class="flex xl:flex-col xl:mb-16  xl:pt-1 pt-20 gap-9 px-6 x:p-0 x:gap-0 m-auto max-w-7xl mb-20">
    <div class="w-[560px] xl:w-full images_block relative">
      <div @click="showImagePreview(currentIndex)"  v-if="product.images"
        :style="{ backgroundImage: `url(${ upload + product.images[currentIndex]})` }"
        class="relative min-w-[560px] xl:min-w-0  cursor-zoom-in pb-[100%] bg-cover bg-no-repeat bg-center"
      >
        <button @click.stop v-if="product.images.length >= 2" @click="nextSlide"
          class="bg-white transition-all right-4 top-[50%] absolute hover:opacity-40 w-10 h-10 text-center flex items-center justify-center rounded-full"
        >
          <svg
            style="display: block; width: 12px"
            viewBox="0 0 9.3 17"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Right</desc>
            <polyline
              fill="none"
              stroke="#facc15"
              stroke-linejoin="butt"
              stroke-linecap="butt"
              stroke-width="1"
              points="0.5,0.5 8.5,8.5 0.5,16.5"
            ></polyline>
          </svg>
        </button>
        <button @click.stop v-if="product.images.length >= 2" @click="prevSlide"
          class="bg-white rotate-180 transition-all left-4 top-[50%] absolute hover:opacity-40 w-10 h-10 text-center flex items-center justify-center rounded-full"
        >
          <svg
            style="display: block; width: 12px"
            viewBox="0 0 9.3 17"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Right</desc>
            <polyline
              fill="none"
              stroke="#facc15"
              stroke-linejoin="butt"
              stroke-linecap="butt"
              stroke-width="1"
              points="0.5,0.5 8.5,8.5 0.5,16.5"
            ></polyline>
          </svg>
        </button>
      </div>
    </div>
    <div class="product_info bg-gray-100 p-12 md:p-7 x:p-3 x:pt-6 w-full max-w-xl xl:max-w-none p flex flex-col justify-between">
        <h1 class=" text-2xl mb-2 x:mb-3 mb:text-xl  font-semibold">{{ product.title }}</h1>
        <div class="my-3 md:text-xs md:items-start border-b-2 border-yellow-400 pb-1  flex  gap-5 justify-between text-lg"> <span class="font-bold ">Բաղադրությունը  </span>
        <span v-if="product.recept">{{ product.recept }}</span>
        </div>
        <div class="my-3 md:text-xs md:items-start border-b-2 border-yellow-400 pb-1  flex  gap-5 justify-between text-lg"> 
        <span class="font-bold ">Պիտանիության ժամկետը</span>
        <span>{{ product.term }}</span>
        </div>
        <div class="my-3 md:text-sm  border-b-2 border-yellow-400 pb-1  flex  gap-5 justify-between items-center text-lg"> 
        <span class="font-bold ">Քանակ</span>
        <div class="flex rounded-3xl border  py-2 px-3 md:py-1 md:px-2 md:gap-2 gap-3 text-lg items-center">
            <img @click="reduceQuality" src="@/images/icons/minus.png" class="cursor-pointer select-none  md:w-3" alt="-">
            <span class="mx-4 md:mx-1 bg-white w-7 select-none text-center rounded-full">{{ quality }}</span>
            <img @click="addQuality" src="@/images/icons/plus.png" class="cursor-pointer select-none md:w-3" alt="+">
        </div>
        </div>
        <div class="flex x:mt-8
         justify-between  items-center">
            <span class="font-semibold md:text-2xl text-3xl"> {{ product.price }}֏</span>
            <button  @click="addProduct(product)" class="py-1  px-6 border-2 font-semibold sm:text-[14px] sm:font-bold text-lg border-yellow-400 hover:bg-transparent  bg-yellow-400 rounded-3xl transition-all flex items-center w-fit ">Ավելացնել</button>
        </div>
    </div>
  </div>
  <div v-if="RecProducts.length > 0" class=" m-auto max-w-7xl px-6 x:px-6 mb-14">
    <h2 class="text-center font-bold text-4xl sm:text-3xl border-b-[4px] pb-4 border-yellow-400"> Նման <span class="font-thin">Ապրանքներ</span></h2> 
    <div class="w-full mt-12 gap-7 flex flex-wrap">
      <Product v-for="RecProduct in RecProducts" :key="RecProduct"  :product="RecProduct" />
    </div>
  </div>
  </div>

  <!--  -->

</template>

<script setup>
import {ref,onMounted, computed, watch} from "vue"
import Product from '@/components/Products/Product.vue'
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import Spiner from "@/components/Loadings/spiner.vue";

const store = useStore()

const route = useRouter()

const upload = 'https://api-mamaiarev.onrender.com/uploads/product/'

const imagePreview = ref(false)
const imagePreviewIndex = ref(0)

const showImagePreview = (val) => {
  imagePreview.value = true
  imagePreviewIndex.value = val
}


const clsoeImagePreview = () =>{
  imagePreview.value = false
  imagePreviewIndex.value = 0
}

const productID = route.currentRoute.value.params.id



const product = computed(() => store.getters.Product)

const RecProducts = computed(() => store.getters.ProductByCategory)

const quality = ref(1)



const addQuality = () =>{
    quality.value++
}

const reduceQuality = () =>{
    quality.value === 1 ? quality.value = 1 : quality.value--
}
const addProduct = () => {
  const productToAdd = {
    ...product.value
  }
  store.dispatch('addProductsToCart', { product: productToAdd, quantity: quality.value });
}

const currentIndex = ref(0);
const maxIndex = ref(1);

if (product.value.images){
 maxIndex.value =  product.value.images.length - 1
}

function nextSlide() {
  currentIndex.value = currentIndex.value === maxIndex.value ? 0 : currentIndex.value + 1;
}

function prevSlide(){
  currentIndex.value = currentIndex.value === 0 ? maxIndex.value : currentIndex.value - 1;
}


const loading = computed(() => store.getters.LoadingProduct)


onMounted(() => {
  store.dispatch('getProductbyId', productID);
});

watch(() => route.currentRoute.value.params.id, (newProductID, oldProductID) => {
    if (newProductID !== oldProductID) {
      store.dispatch('getProductbyId', newProductID);
    }
  });

</script>
