<script setup lang="ts">
import { computed } from "vue";
import Icon from "../Icon.vue";

interface IProps {
  name: string;
  weight: number;
  price: number;
  currency: string;
  image: string;
}

const { image } = defineProps<IProps>();

const imgURL = computed(() => {
  return new URL(`../../assets/images/${image}.png`, import.meta.url).href;
});
</script>

<template>
  <div
    class="bg-white p-4 flex flex-col gap-2 w-max rounded-lg max-h-[320px] h-[320px]"
  >
    <div class="max-w-[150px] max-h-[120px]">
      <img :src="imgURL" :alt="name" class="w-full h-full object-cover" />
    </div>
    <h4 class="font-bold text-2xl">{{ name }}</h4>
    <h5 class="font-light text-orange-500 text-lg">{{ weight }}l</h5>
    <div class="mt-auto flex items-center justify-between">
      <h4 class="font-bold text-xl">
        {{ price }}
        <span class="text-gray-500 font-semibold text-sm">{{ currency }}</span>
      </h4>
      <button
        class="max-h-[38px] bg-green-200 hover:bg-green-300 px-3 py-1 rounded-lg border-none"
      >
        <Icon icon-name="plus" class="fill-green-400" />
      </button>
    </div>
  </div>
</template>
