<script setup lang="ts">
import { ref } from "vue";
import Icon from "./ui/Icon.vue";
import CartItem from "./ui/CartItem.vue";
defineEmits(["closeModal"]);

const cartItems = ref(10);
</script>

<template>
  <section
    class="fixed w-screen h-screen z-20 top-0 left-0 bg-black/50"
    @click.stop="$emit('closeModal')"
  >
    <div
      class="bg-white absolute top-28 xl:left-1/2 lg:left-[40%] md:left-1/4 sm:left-[20%] sm:right-auto right-6 left-2 rounded-xl lg:w-[590px] md:w-[540px] sm:w-[490px] flex flex-col gap-4 z-40 overflow-hidden max-h-[550px]"
      @click.stop=""
    >
      <div class="flex justify-between p-4">
        <h2 class="font-bold text-3xl">Your Cart</h2>
        <div
          class="p-2 rounded-md bg-gray-100 cursor-pointer"
          @click="$emit('closeModal')"
        >
          <Icon icon-name="cross" />
        </div>
      </div>

      <div
        class="sm:p-4 p-2 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl scrollbar-track-gray-100"
        v-if="cartItems > 0"
      >
        <CartItem
          :amount="1"
          name="Gunkan Salmon"
          :weight="40"
          :price="190"
          currency="MDL"
          image="prod"
          v-for="(item, index) in cartItems"
          :key="index"
        />
      </div>
      <div
        class="w-full h-[350px] text-center flex flex-col justify-center items-center sm:text-2xl text-xl font-bold bg-gray-200 py-8 px-2 rounded-md"
        v-else
      >
        <Icon icon-name="shoppingBag" />
        Your cart is currently empty.
        <span>Let's fill it up! </span>
        <router-link
          to="/Products/rolls"
          class="sm:w-1/2 w-3/4 py-2 bg-green-400 hover:bg-green-500 transition-all rounded-lg text-white font-medium text-xl mt-auto"
          @click="$emit('closeModal')"
        >
          Catalog
        </router-link>
      </div>
      <div
        class="w-full bg-gray-100 flex items-center justify-between p-4"
        v-if="cartItems > 0"
      >
        <div class="flex flex-col">
          <h4 class="text-gray-500 text-sm">Summary:</h4>
          <h2 class="font-bold text-3xl">
            sum <span class="text-gray-700 text-base">MDL</span>
          </h2>
        </div>
        <button
          class="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2"
        >
          Checkout
        </button>
      </div>
    </div>
  </section>
</template>
