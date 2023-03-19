<script setup lang="ts">
defineProps<{ active: boolean; text: string }>();
</script>

<template>
  <button
    class="w-full rounded-lg h-full py-2"
    :class="
      active
        ? 'bg-orange-500 text-white'
        : 'bg-transparent hover:bg-gray-200 text-black'
    "
  >
    {{ text }}
  </button>
</template>
