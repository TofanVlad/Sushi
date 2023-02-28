<script setup lang="ts">
defineProps<{ text: string; active: boolean }>();
</script>

<template>
  <button
    class="cursor-pointer py-3 px-4 rounded-xl"
    :class="
      active
        ? 'bg-orange-500 hover:bg-orange-600 text-white'
        : 'bg-white hover:bg-gray-200 text-black'
    "
  >
    {{ text }}
  </button>
</template>
