<script setup lang="ts">
defineProps<{ text: string; active: boolean }>();
</script>

<template>
  <button
    class="cursor-pointer py-3 px-4 rounded-xl outline outline-1"
    :class="
      active
        ? 'bg-orange-500 hover:bg-orange-600 text-white outline-red-300'
        : 'bg-white hover:bg-gray-200 text-black outline-gray-500'
    "
  >
    {{ text }}
  </button>
</template>
