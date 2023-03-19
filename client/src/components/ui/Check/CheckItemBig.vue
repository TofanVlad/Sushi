<script setup lang="ts">
import { computed } from "vue";
const { image } = defineProps<{
  image: string;
  title: string;
  weight: number;
  price: number;
  amount: number;
  currency: string;
}>();

const imgURL = computed(() => {
  return new URL(`../../../assets/images/${image}.png`, import.meta.url).href;
});
</script>

<template>
  <div class="bg-white p-4 flex items-center gap-2 rounded-lg min-w-[340px]">
    <div class="max-w-[86px] max-h-[86px]">
      <img
        :src="imgURL"
        alt="product Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="w-full flex flex-col justify-between gap-1">
      <h2 class="font-bold">{{ title }}</h2>
      <p class="text-orange-400 font-medium text-xs">Weight: {{ weight }}g</p>
      <div class="flex justify-between items-end">
        <h3 class="font-bold text-2xl">
          {{ price }}<span class="text-gray-500 text-base">{{ currency }}</span>
        </h3>
        <p class="text-sm text-gray-400 font-medium">x{{ amount }}</p>
      </div>
    </div>
  </div>
</template>
