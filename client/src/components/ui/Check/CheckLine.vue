<script setup lang="ts">
defineProps<{ title: string; info: string }>();
</script>

<template>
  <div class="flex gap-2">
    <h4 class="whitespace-nowrap w-max text-sm text-gray-400 self-end">
      {{ title }}:
    </h4>
    <div class="w-full border-b-gray-400 border-b-2 border-dotted mb-1"></div>
    <h4 class="whitespace-nowrap w-max text-lg self-end">{{ info }}</h4>
  </div>
</template>
