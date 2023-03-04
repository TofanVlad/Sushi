<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import Type from "./ui/Type.vue";
import Specs from "./ui/Specs.vue";

import { computed } from "vue";

interface IProps {
  href: string;
  title: string;
  weight: number;
  image: string;
  type?: ("hit" | "new")[];
  specs?: ("hot" | "plant" | "lactose")[];
  description: string;
  price: number;
  currency: string;
}
const props = defineProps<IProps>();

const imgURL = computed(() => {
  return new URL(`../assets/images/${props.image}.png`, import.meta.url).href;
});
</script>

<template>
  <router-link
    :to="href"
    class="sm:p-4 px-2 py-4 flex md:flex-col justify-between w-max bg-white cursor-pointer outline outline-2 outline-none hover:outline-orange-500 transition-all rounded-md overflow-hidden md:max-w-[300px] max-w-full md:h-max h-[220px] sm:gap-3 gap-2 relative shadow-sm"
  >
    <Specs :types="specs" classes="outside" v-if="specs" />

    <div
      class="md:max-w-[290px] md:max-h-[270px] h-max md:w-full min-w-[96px] w-3/4 relative"
    >
      <img :src="imgURL" class="w-full h-full object-cover" alt="" />
      <div class="absolute top-0 left-0 flex gap-2">
        <Type
          :type="item"
          v-for="(item, index) in type"
          :key="index"
          v-if="type"
        />
      </div>
      <Specs :types="specs" classes="inside" v-if="specs" />
    </div>
    <div class="flex flex-col w-full max-w-3/4 gap-1">
      <h2 class="font-bold sm:text-2xl text-xl whitespace-nowrap">
        {{ title }}
      </h2>
      <h4 class="text-orange-500 sm:text-lg text-base">
        Weight: {{ weight }}g
      </h4>
      <h4
        class="text-[#686870] md:max-h-[86px] sm:text-base text-sm clamp mb-auto"
      >
        {{ description }}
      </h4>
      <div class="flex justify-between items-end">
        <h2 class="font-bold xl:text-4xl sm:text-3xl text-xl whitespace-nowrap">
          {{ price }}
          <span class="text-[#686870] xl:text-lg sm:text-base text-sm">{{
            currency
          }}</span>
        </h2>
        <div class="flex gap-3 items-end">
          <div
            class="bg-gray-100 hover:bg-gray-200 rounded-xl w-[42px] h-[42px] items-center justify-center cursor-pointer sm:flex hidden"
          >
            <Icon icon-name="heart" class="fill-orange-500" />
          </div>
          <div
            class="bg-green-100 hover:bg-green-200 sm:w-[62px] sm:h-[42px] h-[32px] w-[52px] flex items-center justify-center rounded-xl cursor-pointer"
          >
            <Icon icon-name="plus" class="fill-green-400" />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media screen and (max-width: 640px) {
  .clamp {
    -webkit-line-clamp: 4;
  }
}
</style>
