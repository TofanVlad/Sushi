<script lang="ts" setup>
import Icon from "./Icon.vue";
import { TProps } from "./icons/types";
const props = defineProps<{
  title: string;
  name: TProps;
}>();
</script>

<template>
  <div
    class="flex flex-col w-max min-w-[54px] h-[54px] sm:h-max justify-center items-center font-medium bg-white sm:bg-transparent sm:rounded-0 rounded-xl cursor-pointer"
  >
    <Icon :icon-name="name" />
    <h3 class="sm:block hidden">{{ title }}</h3>
  </div>
</template>
