<script setup lang="ts">
defineProps<{ text: string; href: string; shrink?: boolean }>();
</script>
<template>
  <router-link
    :to="href"
    class="cursor-pointer select-none hover:bg-gray-100 transition-all px-2 py-1 rounded-md whitespace-nowrap relative"
    :class="shrink ? 'xl:block hidden' : 'lg:block hidden'"
    >{{ text }}</router-link
  >
</template>
