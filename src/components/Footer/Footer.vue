<template>
    <div class="bg-[#333]">
        <div class="max-w-[1440px] pt-14   pb-11 px-5 lg:max-w-4xl md:max-w-3xl sm:max-w-xl mx-auto flex flex-col">
            <div class="flex  flex-wrap  sm:flex-col sm:gap-20 gap-24">
            <div class="footer_logo">
                <div class="logo sm:text-center bg-yellow-400 text-4xl py-8 font-normal text-green-100 relative">
                    Mamai Arev
                </div>
            </div>
            <div class="footer_menu gap-1 flex flex-col">
                <h1 class="mb-3 cursor-pointer text-white text-lg font-semibold">ՄԵՆՅՈՒ</h1>
                <router-link active-class="active-router font-bold border-b-2 border-yellow-400" class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa]" to="/">Գլխավոր</router-link>
                <router-link active-class="active-router font-bold border-b-2 border-yellow-400" class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa] " to="/products">Խանութ</router-link>
                <router-link active-class="active-router font-bold border-b-2 border-yellow-400" class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa] " to="/about">Մեր Մասին</router-link>
                <router-link active-class="active-router font-bold border-b-2 border-yellow-400" class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa] " to="/gallery">Պատկերասրահ</router-link>
                <router-link active-class="active-router font-bold border-b-2 border-yellow-400" class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa] " to="/contact">Կապ</router-link>
            </div>
            <div class="footer_shop gap-1 flex flex-col">
                <h1 class="mb-3 cursor-pointer text-white text-lg font-semibold">Խանութ</h1>
                <router-link  class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa]" :to="{ name: 'shop'}" >Մրգե Չրեր</router-link>
                <router-link  class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa]" :to="{ name: 'shop' }">Բանջարեղենային Չրեր</router-link>
                <router-link  class="text-start text-sm w-fit hover:text-white  transition-all text-[#aaa] " :to="{ name: 'shop'}">Թեյ</router-link>
            </div>
            <div class="footer_contact gap-1 flex flex-col">
                <h1 class="mb-3 cursor-pointer text-white text-lg font-semibold">Կապ</h1>
                <p class="text-start  text-base w-fit hover:text-white  transition-all text-[#aaa]">Yerevan/Jrvej <span class="mx-3">7th Street</span></p>
                <a class="text-start text-base  font-bold w-fit hover:text-white transition-all text-[#aaa]" href="tel:096444577">(+374) 96-444-577 </a>
                <a href="mailto:mamaiarev444@gmail.com" class="text-start text-base w-fit hover:border-none  transition-all text-yellow-400">mamaiarev444@gmail.com</a>
                <div class="socila_block flex mt-1  gap-2">
                  <a class=" w-7" target="_blank" href="https://www.facebook.com/profile.php?id=100090359653207"><img src="@/images/icons/fb.svg" alt=""></a>
                  <a class=" w-7" target="_blank" href="https://www.instagram.com/mamai_arev6/"><img src="@/images/icons/insta.svg" alt=""></a>
                </div>
            </div>
            </div>
            <div class="w-full my-12 border-t border-[#464646]" />
            <div class="copyright">
                <p class=" text-lg text-[#7e7e7e]">© 2023 MamaiArev. All rights reserved. Created by <a class=" text-[#4a8b71] underline"  target="_blank" href="https://pashayan.info/">Pashayan.info</a></p>
            </div>
        </div>
    </div>
</template>

