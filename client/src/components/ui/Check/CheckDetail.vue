<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <p class="w-max text-sm">{{ text }}</p>
</template>
