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
  <div class="w-full flex gap-6 px-8">
    <div class="max-w-[64px] max-h-[64px]">
      <img :src="imgURL" :alt="title" class="w-full h-full object-cover" />
    </div>
    <div class="font-bold">
      <h2>{{ title }}</h2>
      <p class="text-orange-400 font-medium text-sm">Weight: {{ weight }}g</p>
    </div>
    <div class="ml-auto flex gap-8">
      <div>
        <p class="text-gray-400 text-sm">Price</p>
        <p class="font-bold">
          {{ price }} <span class="text-gray-500 text-xs">{{ currency }}</span>
        </p>
      </div>
      <div>
        <p class="text-gray-400 text-sm">Amount</p>
        <p class="font-bold">{{ amount }}</p>
      </div>
      <div>
        <p class="text-gray-400 text-sm">Total</p>
        <p class="font-bold">
          {{ price * amount }}
          <span class="text-gray-500 text-xs">{{ currency }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
