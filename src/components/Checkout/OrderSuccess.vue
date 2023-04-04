<template>
  <Transition name="modal-animation">
    <div
      v-if="props.show"
      @click="hide"
      class="cursor-pointer flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-black/40 z-[999]"
    >
      <Transition name="modal-animation-inner">
        <div v-if="show" @click.stop class="p-11 rounded-md bg-white w-3/4">
          <div class="w-fit mx-auto">
            <img class="w-32" src="../../images/icons/succsess.png" alt="" />
          </div>
          <h1 class="mt-4 text-center text-xl">
            Ձեր պատվերը հաջողությամբ գրանցվել է
          </h1>
          <router-link @click="hide"
            class="mt-2 text-yellow-400 underline text-center flex m-auto w-fit"
            to="/"
            >Գլխավոր էջ</router-link
          >
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["hide"]);



const props = defineProps({
  show: Boolean,
});

const hide = () => {
  emit("hide");

};
</script>
