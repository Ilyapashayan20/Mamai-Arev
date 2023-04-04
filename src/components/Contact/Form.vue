<template>
    <div class="bg-[#333] w-full flex-[50%] px-14 sm:px-4 py-32">
        <h1 class=" text-3xl sm:text-2xl  text-gray-300"><span class=" text-white font-extrabold">Կապ</span> Մեզ հետ</h1>
        <p class=" mt-6 text-[#b3b3b3] max-w-lg sm:mt-4 sm:text-base text-lg">Կապ հաստատեք մեր թիմի հետ, և մենք կկապվենք Ձեզ հետ հնարավորինս շուտ.</p>
        <form class=" max-w-xl mt-5">
            <input class=" sm:text-base transition-all hover:text-yellow-400 border-b border-[#dadada] py-3 text-lg font-medium text-[#666] outline-none appearance-none w-full h-11 bg-transparent" placeholder="Անուն" name="name" required type="text">
            <input class=" sm:text-base transition-all hover:text-yellow-400 border-b my-6 border-[#dadada] py-3 text-lg font-medium text-[#666] outline-none appearance-none w-full h-11 bg-transparent" placeholder="Էլ-հասցե" name="email" required type="email">
            <textarea class=" sm:text-base transition-all hover:text-yellow-400 border-b border-[#dadada] py-3 text-lg font-medium text-[#666] outline-none appearance-none w-full min-h-[125px] bg-transparent" placeholder="Հաղորդագրություն" required name="message" type="text" />
            <button class=" sm:text-base w-full bg-transparent hover:bg-yellow-400 sm:mt-10 transition-all text-white mt-14 sm:py-2 py-4 hover:text-black px-7 font-bold text-lg border-2 border-yellow-400 select-none rounded-[30px]" type="submit">Ուղարկել</button>
        </form>
    </div>
</template>

<script setup>

</script>
