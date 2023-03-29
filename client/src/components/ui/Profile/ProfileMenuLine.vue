<script setup lang="ts">
import Icon from "../Icon.vue";
import { selectProfileMenuLine } from "@/constants";

defineProps<{
  icon: "map" | "heart" | "sun" | "box";
  text: string;
  active: boolean;
}>();
</script>

<template>
  <div
    class="rounded-xl items-center gap-3 cursor-pointer px-3 py-2 md:max-h-[65px] w-full transition-all duration-200 flex md:flex-row flex-col md:order-1 order-2"
    :class="[
      active
        ? 'md:bg-orange-500 bg-gray-100 md:hover:bg-orange-600 hover:bg-gray-200 md:text-white text-orange-500'
        : 'bg-transparent hover:bg-gray-100',
      icon === 'sun' ? 'md:flex hidden' : 'flex',
    ]"
    @click="icon !== 'sun' && selectProfileMenuLine(icon)"
  >
    <div
      class="md:bg-white bg-transparent rounded-xl flex items-center justify-center md:p-3 pt-3 md:max-h-[45px]"
    >
      <Icon
        :icon-name="icon"
        :class="active ? 'md:fill-black fill-orange-500' : 'fill-black'"
      />
    </div>
    <p
      class="md:whitespace-nowrap whitespace-normal text-center text-ellipsis overflow-hidden select-none"
    >
      {{ text }}
    </p>
  </div>
</template>
