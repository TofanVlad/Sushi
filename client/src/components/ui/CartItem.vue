<script setup lang="ts">
import Icon from "./Icon.vue";
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
  return new URL(`../../assets/images/${image}.png`, import.meta.url).href;
});
</script>

<template>
  <div
    class="w-full bg-gray-100 sm:p-4 p-2 sm:gap-4 gap-2 rounded-xl h-max flex relative items-center select-none transition-all"
  >
    <div
      class="absolute cursor-pointer p-1 bg-gray-200 hover:bg-gray-300 rounded-xl sm:-left-[14px] -left-1 sm:top-auto -top-1"
      @click="store.removeFromCart(id)"
    >
      <Icon icon-name="cross" />
    </div>
    <div
      class="min-w-[58px] max-w-[58px] min-h-[47px] max-h-[47px] w-full h-full"
    >
      <img
        :src="imgURL"
        :alt="name"
        class="w-full h-full object-cover select-none"
      />
    </div>
    <div class="flex flex-col justify-between max-w-[125px] select-none">
      <h4 class="font-bold text-ellipsis overflow-hidden whitespace-nowrap">
        {{ name }}
      </h4>
      <h4 class="text-orange-400 text-sm">Weight: {{ weight }}g</h4>
      <h4 class="text-base font-bold sm:hidden block">
        {{ price * amountVal }}
        <span class="text-xs font-medium">{{ currency }}</span>
      </h4>
    </div>
    <div class="ml-auto flex gap-4 items-center">
      <h4 class="text-base font-bold sm:block hidden">
        {{ price * amountVal }}
        <span class="text-xs font-medium">{{ currency }}</span>
      </h4>
      <div class="flex gap-2 items-center">
        <div
          class="rounded-lg sm:p-2 p-1 bg-white hover:bg-gray-200 cursor-pointer w-8 h-8 flex items-center justify-center"
          @click="
            amountVal !== 1 && amountVal--;
            store.decrementCartItem({ id, quantity: amount });
          "
        >
          <Icon icon-name="minusSmall" class="fill-black" />
        </div>
        <div class="select-none">{{ amountVal }}</div>
        <div
          class="rounded-lg sm:p-2 p-1 bg-white hover:bg-gray-200 cursor-pointer w-8 h-8 flex items-center justify-center"
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
