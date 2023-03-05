<script lang="ts" setup>
import Icon from "./Icon.vue";
import { TIcons } from "./icons/types";
defineProps<{
  name: TIcons;
  notifications?: number;
  text?: string;
  active: boolean;
}>();
</script>

<template>
  <div
    class="select-none sm:p-4 p-3 sm:min-h-[56px] min-h-[48px] rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 relative"
    :name="name"
    :class="
      active
        ? 'bg-orange-500 hover:bg-orange-600'
        : 'outline-2 outline outline-[#D2D2D7] bg-white hover:bg-gray-100'
    "
  >
    <div
      class="absolute rounded-full sm:w-7 outline outline-1 w-5 sm:h-7 h-5 sm:text-base text-sm -top-2 -right-2 flex items-center justify-center"
      :class="
        active
          ? 'bg-white   outline-orange-500 text-orange-500'
          : 'bg-orange-500 text-white  outline-white'
      "
      v-if="!!notifications"
    >
      {{ notifications }}
    </div>
    <h3 v-if="!!text" :class="active ? 'text-white' : 'text-gray-500'">
      {{ text }}
    </h3>
    <Icon :class="active ? 'fill-white' : 'fill-gray-500'" :icon-name="name" />
  </div>
</template>
