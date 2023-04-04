<template>

  <Transition name="toast">
  <Warn v-if="warn"  title="Քարտով վճարումը դեռ հասանելի չէ" />
  </Transition>
  <div
    class="mb-24 grid grid-cols-2 lg:grid-cols-1 w-full h-full max-w-[1630px] 2xl:max-w-[1420px] xl:flex-col gap-12 mt-12 md:max-w-3xl sm:max-w-xl mx-auto px-3"
  >
    <div class="w-full h-fit rounded-xl shadow-lg px-4 py-5">
      <h1 class="text-2xl font-bold">Առաքում</h1>
      <div class="mt-5 w-full">
        <div class="w-full flex flex-col">
          <label
            class="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Անուն
          </label>
          <input
          :class="{ 'border-red-500 ': v$.customer.name.$error }"
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
            id="name"
            type="text"
            v-model="DataOrder.customer.name"
          />
          
        </div>
        <div class="w-full flex flex-col">
          <label
            class="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Էլ․Հասցէ
          </label>
          <input
          :class="{ 'border-red-500 ': v$.customer.email.$error }"

            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            v-model="DataOrder.customer.email"
          />
        </div>
        <div class="w-full relative flex flex-col">
          <label
            class="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="phone"
          >
            հեռախոս
          </label>
          <input
          :class="{ 'border-red-500 ': v$.customer.phone.$error }"

            class="appearance-none relative pl-20 text-base block w-full font-bold border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
            id="phone"
            type="number"
            v-model="DataOrder.customer.phone"
          />
          <div class="absolute top-[38.7px] left-2 flex gap-3 items-center">
            <img class="w-6" src="../../images/icons/AM.svg" alt="" />
            <span class="text-base font-bold">+374</span>
          </div>
        </div>
        <div class="w-full flex flex-col">
          <label
            class="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="city"
          >
            քաղաք
          </label>
          <input
          :class="{ 'border-red-500 ': v$.address.city.$error }"

            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
            id="city"
            type="text"
            v-model="DataOrder.address.city"
          />
        </div>
        <div class="w-full flex flex-col">
          <label
            class="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="address"
          >
            հասցե
          </label>
          <input
          :class="{ 'border-red-500 ': v$.address.address1.$error }"

            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
            id="addres"
            type="text"
            placeholder="փողոց, տուն, մուտք, հարկ, բնակարան"
            v-model="DataOrder.address.address1"

          />
        </div>
        <div class="w-full flex flex-col">
          <label
            class="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="address"
          >
            Լրացուցիչ տեղեկություն
          </label>
          <textarea
          
            class="appearance-none h-32 block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="addres"
            type="text"
            placeholder="Լրացուցիչ տեղեկություններ առաքման հասցեի մասին"
            v-model="DataOrder.address.additionalAddress"
          />
        </div>
      </div>
    </div>
    <div class="w-full h-full rounded-xl shadow-lg px-4 py-5">
      <h1 class="text-2xl font-bold">Ձեր պատվերը</h1>
      <div class="min-h-[605px] flex flex-col justify-between">
        <div
          class="mt-5 w-full max-h-[305px] flex flex-col flex-1 overflow-y-scroll"
        >
          <div
            v-for="product in cartProducts"
            :key="product"
            class="flex pb-3 shadow relative flex-col mb-4"
          >
            <Transition name="fade">
              <div
                v-if="product.showRemove"
                class="delettimer absolute w-full h-full left-0 top-0 rounded-md bg-[#00000061] flex flex-col gap-2 justify-center items-center z-[2]"
              >
                <button
                  @click="removeProduct(product._id, product)"
                  class="bg-red-500 text-white py-1 px-3 rounded-md"
                >
                  Հեռացնել
                </button>
                <button
                  @click="product.showRemove = false"
                  class="bg-white text-black py-1 px-3 rounded-md"
                >
                  Չեղյարկել
                </button>
              </div>
            </Transition>
            <button
              @click="product.showRemove = true"
              class="remove-product absolute right-2 top-1/3 h-4 w-4"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="red"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="red"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="flex items-center justify-between">
              <div class="w-24 h-24">
                <img
                  v-if="product.images"
                  class="object-cover rounded-md w-full h-full"
                  :src="upload + product.images[0]"
                  alt=""
                />
              </div>
              <div class="flex-1 ml-4">
                <router-link :to="{ path: '/product/' + product._id }">
                  <h3 class="font-bold w-fit text-xl x:text-xs">
                    {{ product.title }}
                  </h3>
                </router-link>
                <div class="flex x:text-sm gap-2 items-center">
                  <p class="">{{ formatPrice(product.price) }} ֏</p>
                  <span>x</span>
                  <span>{{ product.quantity }}</span>
                </div>
              </div>
              <div class="mr-12">
                <span class="text-xl x:text-base font-semibold"
                  >{{ formatPrice(product.quantity * product.price) }} ֏</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full flex flex-col">
          <h1 class="text-xl x:text-lg mb-4 font-bold">Ընդհանուր գումարը</h1>
          <div
            class="w-full text-xl x:text-base flex justify-between items-center"
          >
            <h3 class="font-medium capitalize">ենթագումար</h3>
            <span class="font-semibold">{{ formatPrice(TotalPrice) }} ֏ </span>
          </div>
          <div
            class="w-full text-xl x:text-base mt-3 border-b-2 border-yellow-400 pb-3 flex justify-between items-center"
          >
            <h3 class="font-medium capitalize">Առաքում</h3>
            <span class="font-semibold"
              >{{ formatPrice(deliveryPrice) }} ֏
            </span>
          </div>
          <div
            class="w-full text-xl x:text-base mt-3 flex justify-between items-center"
          >
            <h3 class="font-medium capitalize">Ընդամենը</h3>
            <span class="font-bold"
              >{{ formatPrice(deliveryPrice + TotalPrice) }} ֏
            </span>
          </div>
          <div v-if="v$.order_details.payment_method.$error" class="mt-2"><p class=" text-red-500">Ընտրեք վճարման եղանակ</p></div>
          <div
            class="mt-4 h-fit w-full x:flex-col x:gap-8 flex justify-between"
          >
            <div class="flex flex-col gap-3">
              <label @click="selected = 'cash'" class="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  v-model="selected"
                  value="cash"
                  name="payment-option"
                  class="hidden"
              
                />
                <div
                  class="form-radio w-6 h-6 rounded-full border-2 border-gray-300"
                ></div>
                <span class="ml-2 text-gray-700 font-medium"
                  >Կանխիկ վճարում
                </span>
              </label>
              <label   @click="selected = 'card'" class="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  v-model="selected"
                  value="card"
                  name="payment-option"
                  class="hidden"
                />
                <div
                  class="form-radio w-6 h-6 rounded-full border-2 border-gray-300"
                ></div>
                <span class="ml-2 text-gray-700 font-medium"
                  >Քարտով վճարում</span
                >
              </label>
            </div>
            <div class="flex h-fit self-end">
              <button
                @click="SubmitOrder"
                :disabled="isLoding"
                :class="{ ' opacity-60 cursor-not-allowed' : isLoding}"
                class="py-2 px-4 rounded-lg hover:bg-opacity-50 transition-all bg-yellow-400"
              >
                Պատվիրել
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Warn from '../Alerts/Warn.vue'
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { computed, ref,watch } from "vue";

const store = useStore();

const warn = ref(false)

const cartProducts = computed(() => store.getters.getCartProducts);
const TotalPrice = computed(() => store.getters.getTotalCartProducts);

const isLoding = computed(() => store.getters.orderLoading)

const deliveryPrice = ref(1000);
const selected = ref("");

const DataOrder = ref({
  customer:{
    name: '',
    email:'',
    phone:'',
  },
  address:{
    city: '',
    address1:'',
    additionalAddress: ''
  },
  order_details:{
    product: cartProducts.value,
    payment_method: selected.value,
    price: TotalPrice.value + deliveryPrice.value 
  }
}) 

const rules ={
  customer: {
    name: { required },
    email: { required },
    phone: { required },
  },
  address: {
    city: { required },
    address1: { required },
  },
  order_details: {
    payment_method: { required },
  }
}

watch(selected, (newValue) => {
  DataOrder.value.order_details.payment_method = newValue;
});

const v$ = useVuelidate(rules, DataOrder);

function SubmitOrder() {
  v$.value.$touch();
  if (v$.value.$error) return;
  if(selected.value === 'cash'){
  store.dispatch('crateOrder',DataOrder.value)
  }else{
    warn.value = true
    setTimeout(() =>{
      warn.value = false
    },4500)
  }
}


const upload = "https://api-mamaiarev.onrender.com/uploads/product/";

const formatPrice = (price) => {
  return price.toLocaleString("id-ID");
};

const removeProduct = (productId, product) => {
  product.showRemove = false;
  store.dispatch("removeProductFromCart", productId);
  window.scrollTo(0, 0);
};

</script>

<style>
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="radio"].hidden {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.form-radio {
  transition: background-color 0.2s, border-color 0.2s;
}

input[type="radio"].hidden:checked + .form-radio {
  background-color: #fff3b2;
  border-color: #fde047;
}

</style>
