<script setup lang="ts">
defineProps<{ type: "hit" | "new" }>();
</script>

<template>
  <h5
    class="px-2 py-[2px] rounded-lg opacity-95 capitalize select-none"
    :class="
      type === 'hit'
        ? 'bg-red-100 text-orange-500'
        : 'bg-green-200 text-green-500'
    "
  >
    {{ type }}
  </h5>
</template>
