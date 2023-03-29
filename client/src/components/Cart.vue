<script setup lang="ts">
import { ref } from "vue";
import Icon from "./ui/Icon.vue";
import CartItem from "./ui/CartItem.vue";
import NavModal from "./ui/NavModal.vue";
import useModal from "../composables/modalBehaviour";
const { closeModal } = useModal();
const cartItems = ref(10);
</script>

<template>
  <NavModal name="cart">
    <div class="flex justify-between px-4 pt-4">
      <h2 class="font-bold text-3xl">Your Cart</h2>
      <div
        class="p-2 rounded-md bg-gray-100 cursor-pointer"
        @click="closeModal"
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
      class="w-full bg-gray-100 flex items-center justify-between p-4"
      v-if="cartItems > 0"
    >
      <div class="flex flex-col">
        <h4 class="text-gray-500 text-sm">Summary:</h4>
        <h2 class="font-bold text-3xl">
          sum <span class="text-gray-700 text-base">MDL</span>
        </h2>
      </div>
      <router-link
        to="/Checkout"
        class="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2"
        @click="closeModal"
      >
        Checkout
      </router-link>
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
        @click="closeModal"
      >
        Catalog
      </router-link>
    </div>
  </NavModal>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
