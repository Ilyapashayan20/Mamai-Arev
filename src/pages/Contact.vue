<template>
    <div class="contct">
        <div class="max-w-6xl px-4 items-center  lg:max-w-4xl md:max-w-3xl sm:max-w-xl mx-auto bg-white py-36 flex justify-between sm:flex-col sm:gap-11">
            <div  class="flex flex-col">
                <div  class="flex items-center flex-col">
                    <img class="w-24" src="@/images/icons/map.svg" alt="">
                    <h1 class="mt-3 text-center font-black text-3xl">Հասցե</h1>
                </div>
                <p class=" text-[#3b3b3b] font-medium text-lg text-center mt-6">Yerevan Jrevj/7th Street</p>
            </div>
            <div  class="flex  flex-col">
                <div class="flex items-center flex-col">
                    <img class="w-24 mr-1" src="@/images/icons/phone.svg" alt="">
                    <h1 class="mt-3 text-center font-black text-3xl">Հեռախոս</h1>
                </div>
                <a href="tel:096444577" class=" text-[#3b3b3b] font-medium text-lg text-center mt-6">(+374)-96-444-577</a>
            </div>
            <div  class="flex  flex-col">
                <div class="flex items-center flex-col">
                    <img class="w-24" src="@/images/icons/gmail.svg" alt="">
                    <h1 class="mt-3 text-center font-black text-3xl">Էլ-Փոստ</h1>
                </div>
                <a href="mailto:mamaiarev444@gmail.com" class=" text-[#3b3b3b] font-medium text-lg text-center mt-6 underline">mamaiarev444@gmail.com</a>
            </div>
        </div>
        <div class="message_block mb-44 flex w-full lg:h-[1200px] lg:flex-col-reverse">
            <Map />
            <Form />
        </div>
    </div>
  </template>
  
  <script setup>
  import Map from "@/components/Contact/Map.vue"
  import Form from "@/components/Contact/Form.vue"
  </script>
  