<script lang="ts" setup>
import Icon from "./Icon.vue";
defineProps<{
  name: string;
  notifications?: number;
  text?: string;
}>();
</script>

<template>
  <div
    class="sm:p-4 p-3 sm:min-h-[56px] min-h-[48px] rounded-xl outline-2 outline outline-[#D2D2D7] cursor-pointer flex items-center justify-center gap-2 relative"
  >
    <div
      class="absolute rounded-full bg-[#FF6633] sm:w-7 w-5 sm:h-7 h-5 sm:text-base text-sm text-white -top-2 -right-2 flex items-center justify-center"
      v-if="!!notifications"
    >
      {{ notifications }}
    </div>
    <h3 v-if="!!text">{{ text }}</h3>
    <Icon :icon-name="name" />
  </div>
</template>
