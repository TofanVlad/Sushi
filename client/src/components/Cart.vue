<script setup lang="ts">
import { computed, watchEffect } from "vue";
import Icon from "./ui/Icon.vue";
import CartItem from "./ui/CartItem.vue";
import NavModal from "./ui/NavModal.vue";
import useModal from "../composables/modalBehaviour";
import useUserStore from "@/store/userStore";
import useDishStore from "@/store/dishStore";

const { closeModal, openModal } = useModal();

const store = useUserStore();
const dishStore = useDishStore();

const cartItems = computed(() => dishStore.cartDishes);

const getQuantity = computed(() => {
  return (dish: any) => {
    return store.$state.cartItems.find((item) => dish._id == item.id)?.quantity;
  };
});

const cartSum = computed(() => {
  let sum = 0;
  cartItems.value.map((item) => (sum += item.price * getQuantity.value(item)));
  return sum;
});

watchEffect(() => dishStore.getDishByIds(store.$state.cartItems));
</script>

<template>
  <NavModal name="cart">
    <div class="flex justify-between px-4 pt-4">
      <h2 class="font-bold text-3xl">Your Cart</h2>
      <div
        class="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer"
        @click="closeModal"
      >
        <Icon icon-name="cross" />
      </div>
    </div>
    <div
      class="sm:p-4 p-2 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl scrollbar-track-gray-100"
      v-if="cartItems.length > 0"
    >
      <CartItem
        v-for="(item, index) in cartItems"
        :key="index"
        :id="item._id"
        :amount="getQuantity(item)"
        :name="item.name"
        :weight="item.weight"
        :price="item.price"
        currency="MDL"
        :image="item.name"
      />
    </div>

    <div
      class="w-full bg-gray-100 flex items-center justify-between p-4"
      v-if="cartItems.length > 0"
    >
      <div class="flex flex-col">
        <h4 class="text-gray-500 text-sm">Summary:</h4>
        <h2 class="font-bold text-3xl">
          {{ cartSum }} <span class="text-gray-700 text-base">MDL</span>
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
      v-if="cartItems.length == 0 && store.id !== ''"
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

    <div
      class="w-full flex flex-col py-16 items-center justify-center gap-8 text-lg"
      v-if="store.id == ''"
    >
      You are not logged into your account
      <button
        class="w-2/3 bg-green-500 hover:bg-green-600 text-white text-xl py-2 rounded-lg"
        @click="
          closeModal();
          openModal('human');
        "
      >
        Log In
      </button>
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
