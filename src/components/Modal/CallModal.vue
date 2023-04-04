<template>
    <Transition name="modal-animation">
    <div v-show="props.modalActive" @click="close" class="fixed bg-black bg-opacity-50 w-full flex items-center h-screen z-[99999]">
        <Transition name="modal-animation-inner">
        <div @click.stop v-show="props.modalActive" class="mb-36 sm:mb-48 shadow-sm relative bg-white border-[3px]  rounded-lg mx-auto sm:w-80  w-96 h-60 flex justify-center items-center">
            <button @click="close" class=" absolute right-3  bg-white    shadow-xl rounded-full top-3"><img class=" w-7" src="@/images/icons/close.svg" alt=""></button>
            <div class="flex gap-3">
                <a  class="rounded-full hover:scale-110 transition-all bg-[#47C756] p-2 w-14" target="_blank" href="https://wa.me/37496444577">
                    <img src="@/images/icons/whatsapp.svg" alt="">
                </a>
                <a  class="rounded-full p-2 bg-purple-700 hover:scale-110 transition-all w-14" target="_blank" href="viber://chat?number=%2B37496444577">
                    <img src="@/images/icons/viber.svg" alt="">
                </a>
                <a  class="rounded-full bg-[#00AAFF] hover:scale-110 transition-all p-2 w-14" target="_blank" href="https://www.facebook.com/friends/?profile_id=100090359653207&notif_id=1676734751092338&notif_t=friend_confirmed&ref=notif">
                    <img src="@/images/icons/messanger.svg" alt="">
                </a>
            </div>
            <a class="text-start absolute bottom-7 text-lg  font-bold w-fit hover:bg-opacity-50 transition-all" href="tel:096444577">(+374) 96-444-577 </a>

        </div>
        </Transition>
    </div>
    </Transition>
</template>

<script setup>

import { defineProps ,defineEmits} from 'vue';

const props = defineProps({
    modalActive: Boolean,
})

const emits = defineEmits(['close'])

const close = () =>{
    emits('close')
}

</script>
