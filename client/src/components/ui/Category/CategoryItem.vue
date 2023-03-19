<script lang="ts" setup>
import Icon from "../Icon.vue";
import { TIcons } from "../icons/types";
defineProps<{
  title: string;
  name: TIcons;
}>();
</script>

<template>
  <div
    class="flex flex-col w-max min-w-[54px] h-[54px] sm:h-max justify-center items-center bg-white sm:bg-transparent sm:rounded-0 rounded-xl cursor-pointer"
  >
    <Icon :icon-name="name" />
    <h3 class="sm:block hidden">{{ title }}</h3>
  </div>
</template>
