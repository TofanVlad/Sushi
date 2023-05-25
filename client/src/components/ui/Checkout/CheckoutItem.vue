<script setup lang="ts">
import Icon from "../Icon.vue";
import { computed, ref } from "vue";
import useUserStore from "@/store/userStore";

interface IProps {
  id: string;
  name: string;
  weight: number;
  price: number;
  amount: number;
  currency: string;
  image: string;
}

const store = useUserStore();
const { image, amount } = defineProps<IProps>();
const amountVal = ref(amount);

const imgURL = computed(() => {
  return new URL(`../../../assets/images/${image}.png`, import.meta.url).href;
});
</script>

<template>
  <div
    class="w-full h-max bg-white rounded-xl shadow-sm md:p-4 sm:p-2 p-0 md:gap-4 gap-2 sm:rounded-xl flex sm:flex-col md:flex-row relative items-center select-none transition-all"
  >
    <div
      class="absolute cursor-pointer p-1 bg-gray-100 hover:bg-gray-200 rounded-xl sm:left-1 sm:top-1 -left-2 -top-2"
      @click="store.removeFromCart(id)"
    >
      <Icon icon-name="cross" />
    </div>
    <div
      class="sm:max-w-[110px] min-w-[85px] min-h-[85px] md:max-h-[87px] flex flex-col items-center justify-center"
    >
      <img
        :src="imgURL"
        :alt="name"
        class="sm:w-full w-[calc(100%-8px)] sm:h-full h-[calc(100%-8px)] object-cover select-none"
      />
    </div>
    <h4
      class="font-bold text-ellipsis overflow-hidden whitespace-nowrap md:hidden sm:block hidden"
    >
      {{ name }}
    </h4>
    <h4
      class="font-bold text-ellipsis overflow-hidden whitespace-nowrap md:hidden sm:block hidden"
    >
      {{ price * amountVal }}
      <span class="text-xs font-semibold">{{ currency }}</span>
    </h4>
    <div
      class="md:flex hidden flex-col justify-between max-w-[125px] gap-2 select-none"
    >
      <h4 class="font-bold text-ellipsis overflow-hidden whitespace-nowrap">
        {{ name }}
      </h4>
      <h4 class="text-orange-400 text-sm">Weight: {{ weight }}g</h4>
      <h4 class="text-base font-bold lg:hidden block whitespace-nowrap">
        {{ price * amountVal }}
        <span class="text-xs font-semibold">{{ currency }}</span>
      </h4>
    </div>
    <div class="ml-auto md:flex hidden gap-4 items-center">
      <h4 class="text-base lg:block hidden font-bold whitespace-nowrap">
        {{ price * amountVal }}
        <span class="text-xs font-medium">{{ currency }}</span>
      </h4>
      <div class="flex gap-2 items-center">
        <div
          class="rounded-lg sm:p-2 p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer w-8 h-8 flex items-center justify-center"
          @click="
            amountVal !== 1 && amountVal--;
            store.decrementCartItem({ id, quantity: amount });
          "
        >
          <Icon icon-name="minusSmall" class="fill-black" />
        </div>
        <div class="select-none">{{ amountVal }}</div>
        <div
          class="rounded-lg sm:p-2 p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer w-8 h-8 flex items-center justify-center"
          @click="
            amountVal <= 19 && amountVal++;
            store.incrementCartItem({ id, quantity: amount });
          "
        >
          <Icon icon-name="plusSmall" class="fill-black" />
        </div>
      </div>
    </div>
  </div>
</template>
