<template>
    <h1 class=" text-center mb-16  font-bold text-5xl sm:text-3xl" >Ամբողջ ՏԵսականի</h1>
    <div class=" px-3 md:flex-col flex w-full max-w-[1400px] m-auto justify-between gap-2">
       <div  data-aos="zoom-in" class="transition-all hover:scale-[0.95] ease-in-out overflow-hidden relative box-border flex  items-center mb-3 w-full  md:h-[410px]  h-[650px]">
        <figure class="h-auto absolute  top-0 right-0 bottom-0 left-0 m-auto">
            <img class=" w-full h-full object-cover object-[50%,50%]" src="https://gardening.usask.ca/images/fruit%20and%20veg/dried-fruit-by-k8-unsplash.jpg" alt="">
        </figure>
        <div  @click="setCategory('fruit')"  class=" relative flex items-center w-full justify-center h-full p-4 text-white transition-[.3s] ease-in-out bg-[#33333333] hover:bg-[#ffea006e] peer-hover:bg-red-200">
            <h1 class=" text-2xl font-bold" >Միրգ</h1>
            <router-link class=" absolute w-full h-full left-0 top-0" :to="{ name: 'shop', query: { category: 'fruit' } }" />
        </div>
       </div>
       <div data-aos="zoom-in" class="transition-all hover:scale-[0.95] overflow-hidden relative box-border flex  items-center mb-3 w-full  md:h-[410px] h-[650px]">
        <figure class="h-auto absolute  top-0 right-0 bottom-0 left-0 m-auto">
            <img class=" w-full h-full object-cover object-[50%,50%]" src="https://media.istockphoto.com/id/621139208/photo/assortment-of-dehydrated-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=vS6Pbg5MX2uTUrMNK7CWEXv4tmznlrFJOiJE2MB6mA0=" alt="">
        </figure>
        <div class=" relative flex items-center w-full justify-center h-full p-4 text-white transition-[.3s] ease-in-out bg-[#33333333] hover:bg-[#ffea006e] peer-hover:bg-red-200">
            <h1 class=" text-2xl font-bold" >Բանջարեղեն</h1>
            <router-link class=" absolute w-full h-full left-0 top-0" :to="{ name: 'shop', query: { category: 'vegetables' } }" />
        </div>
       </div>
       <div data-aos="zoom-in" class=" hover:scale-[0.95] transition-all overflow-hidden relative box-border flex  items-center mb-3 w-full md:h-[410px]  h-[650px]">
        <figure class="h-auto absolute  top-0 right-0 bottom-0 left-0 m-auto">
            <img class=" w-full h-full object-cover object-[50%,50%]" src="https://st2.depositphotos.com/4252389/11361/i/950/depositphotos_113618072-stock-photo-assortment-of-dry-tea-various.jpg" alt="">
        </figure>
        <div class=" relative flex items-center w-full justify-center h-full p-4 text-white transition-[.3s] ease-in-out bg-[#33333333] hover:bg-[#ffea006e] peer-hover:bg-red-200">
            <h1 class=" text-2xl font-bold" >Թեյ</h1>
            <router-link class=" absolute w-full h-full left-0 top-0" :to="{ name: 'shop', query: { category: 'tea' } }" />
        </div>
       </div>
    </div>
</template>


<script setup>



</script>