<script setup lang="ts">
defineProps<{ active: "Delivery" | "Pickup" }>();
</script>

<template>
  <div v-if="active === 'Delivery'"></div>
  <div v-else></div>
</template>
