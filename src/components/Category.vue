<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-xl">Կատեգորիաներ</h1>
    <div class="flex items-start mt-4 flex-col">
      <router-link
      @click="setCategory('all')"

        :to="{ name: 'shop' }"
        :class="{ 'border-b text-yellow-400': selectedCategorie === null }"
        class="w-full text-start py-1 border-yellow-400"
        exact
      >
        Բոլորը
      </router-link>
      <router-link
      @click="setCategory('fruit')"

        :to="{ name: 'shop', query: { category: 'fruit' } }"
        :class="{ 'border-b text-yellow-400': selectedCategorie === 'fruit' }"
        class="w-full text-start py-1 border-yellow-400"
        exact
      >
        Մրգային
      </router-link>
      <router-link
      @click="setCategory('vegetables')"
        :to="{ name: 'shop', query: { category: 'vegetables' } }"
        :class="{ 'border-b text-yellow-400': selectedCategorie === 'vegetables' }"
        class="w-full text-start py-1 border-yellow-400"
        exact
      >
        Բանջարեղենային
      </router-link>
      <router-link
      @click="setCategory('tea')"

        :to="{ name: 'shop', query: { category: 'tea' } }"
        :class="{ 'border-b text-yellow-400': selectedCategorie === 'tea' }"
        class="w-full text-start py-1 border-yellow-400"
        exact
      >
        Թեյ
      </router-link>
    </div>
  </div>
</template>


<script setup>
import {  computed } from "vue";
import { useStore } from "vuex";
import router from "@/router";




const store = useStore();


const queryCategory = computed(() => store.getters.queryCategory)



const selectedCategorie =queryCategory;


const setCategory = (category) => {
  selectedCategorie.value = category;
  if (category === "all") {
    category = null;
  }
  store.dispatch("setCategory", category);

  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("category", category);
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  history.replaceState(history.state, null, newUrl);
  router.push({ name: "shop", query: { category } });
};

</script>
