<template>
    <div class="w-full flex-col">
      <Spiner v-if="loading"/>
      <div v-else class="grid  grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8">
            <Product v-for="product in products" :key="product" :product="product" />
            
        </div>
      <p v-if="countProduct === 0 && !loading" class="mt-4 text-gray-500 text-center">Այս դաշտը դարարկ է</p>
  
      <div class="mt-5 flex items-center">
        <div v-if="totalPages > 1" class="flex w-full justify-center gap-2">
          <router-link
            v-for="page in totalPageNumbers"
            :to="{ name: 'shop', query: { page: page } }"
            class="border-2 flex justify-center items-center  min-w-[36px] h-9 text-base rounded-full"
            :key="page"
            :class="{
              ' border-yellow-400 ': currentPage === page,
              ' border-[#e9e9e9] text-[#a9a9a9] ': currentPage !== page,
            }"
            @click="getPage(page)"
          >
            {{ page }}
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from "vue";
  import { useStore } from "vuex";
  import { useRoute } from "vue-router";
import Spiner from '@/components/Loadings/spiner.vue'
import Product from "./Product.vue";

  const route = useRoute();
  const store = useStore();
  const fields = "title category price images createdAt weight";
  const pageSize = 12;

  const countProduct = computed(() => store.getters.Count );
  const loading = computed(() => store.getters.LoadingProduct);
  const queryCategory = computed(()=> store.getters.queryCategory)

  const loadProducts = () => {
  const options = {
    fields,
    limit: pageSize,
    category: queryCategory.value,
  };

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  if (category) {
    options.category = category;
    store.dispatch("setCategory", category);
  }

  store.dispatch("getProducts", options);
};
  onMounted(loadProducts);
  const page = parseInt(route.query.page) || 1;
  const currentPage = ref(1);
  currentPage.value = page;
  const totalPages = computed(() => Math.ceil(countProduct.value / pageSize));
  const totalPageNumbers = computed(() => {
    const result = [];
    for (let i = 1; i <= totalPages.value; i++) {
      result.push(i);
    }
    return result;
  });
  function getPage(val) {
    currentPage.value = val;
  }
  const products = computed(() => {
    return store.getters.Products;
  });
  watch(currentPage, (page) => {
    const options = {
      fields,
      page: currentPage.value,
      limit: pageSize,
      category : queryCategory.value,
    };
    route.query.page = page;
    store.dispatch("getProducts", options);
  });

  watch(queryCategory, () => {
    const options = {
      fields,
      page: currentPage.value,
      limit: pageSize,
      category : queryCategory.value,
    };
    store.dispatch("getProducts", options);
    options.category = null;
  })


  </script>