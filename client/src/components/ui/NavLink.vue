<script setup lang="ts">
defineProps<{ text: string; href: string }>();
</script>
<template>
  <router-link
    :to="href"
    class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 transition-all px-2 py-1 rounded-md whitespace-nowrap"
    >{{ text }}</router-link
  >
</template>
