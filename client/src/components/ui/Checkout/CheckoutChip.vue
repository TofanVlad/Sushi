<script setup lang="ts">
defineProps<{ text: string; active: boolean }>();
</script>

<template>
  <div
    class="lg:px-4 px-2 lg:w-max w-[calc(50%-8px)] py-2 rounded-lg cursor-pointer text-center select-none"
    :class="
      active
        ? 'bg-orange-500 hover:bg-orange-600 text-white'
        : 'bg-gray-100 hover:bg-gray-200'
    "
  >
    {{ text }}
  </div>
</template>
