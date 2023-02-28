<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import { TCategories } from "./ui/icons/types";
import { computed } from "vue";

const props = defineProps<{ name?: TCategories }>();

const categories: TCategories[] = [
  "rolls",
  "sushi",
  "sets",
  "bowls",
  "drinks",
  "sauces",
];

const getIconName = computed(() => {
  return (item: TCategories): TCategories => {
    if (props.name == item) {
      return (props.name + "Active") as TCategories;
    }
    return item;
  };
});
</script>

<template>
  <nav
    class="sm:overflow-hidden scrollbar-thin sm:pb-0 pb-1 scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg"
  >
    <div
      class="sm:bg-white bg-transparent mx-auto sm:mt-4 mt-0 rounded-md flex md:gap-8 sm:gap-4 gap-2 w-max sm:px-4 px-2 py-2"
    >
      <router-link
        class="flex flex-col sm:gap-2 gap-0 items-center justify-center cursor-pointer sm:shadow-none shadow-md sm:hover:bg-gray-100 sm:bg-transparent bg-white sm:w-20 w-16 sm:h-20 h-16 py-[2px] rounded-lg select-none"
        v-for="(item, index) in categories"
        :key="index"
        :to="`/Products/${item}`"
      >
        <Icon :icon-name="getIconName(item)" />
        <h3 class="capitalize sm:block hidden">{{ item }}</h3>
      </router-link>
    </div>
  </nav>
</template>
