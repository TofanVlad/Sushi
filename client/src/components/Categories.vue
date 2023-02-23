<script setup lang="ts">
import Icon from "./ui/Icon.vue";

const categories = ["rolls", "sushi", "sets", "bowls", "drinks", "sauces"];
</script>

<template>
  <div
    class="w-screen sm:overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
  >
    <div
      class="sm:bg-white bg-transparent mx-auto sm:mt-4 mt-0 rounded-md flex md:gap-8 sm:gap-4 gap-2 w-max font-medium sm:px-4 px-2 py-2"
    >
      <div
        class="flex flex-col sm:gap-2 gap-0 items-center cursor-pointer sm:hover:bg-gray-100 sm:bg-transparent bg-white sm:w-20 w-16 sm:h-20 h-16 py-[2px] rounded-lg select-none"
        v-for="(item, index) in categories"
        :key="index"
      >
        <Icon :icon-name="item" class="h-full" />
        <h3 class="capitalize sm:block hidden">{{ item }}</h3>
      </div>
    </div>
  </div>
</template>
