<template>
    <div ref="card" class="relative flex flex-col">
        <button @click="showLanguageSelector = !showLanguageSelector " class="font-bold">
            Հայ
        </button>
        <div v-if="showLanguageSelector" class="absolute top-10 right-0 bg-white border py-1 px-3 border-gray-300 rounded-lg z-10">
            <button class="font-bold mb-3" >Рус</button>
            <button class=" font-bold">Eng</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
import { onClickOutside } from '@vueuse/core'

let showLanguageSelector = ref(false)
const card = ref()

const closeLanguageSelector = () => {
    showLanguageSelector.value = false
}

onClickOutside(card, closeLanguageSelector) 

</script>


