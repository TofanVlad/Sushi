<script setup lang="ts">
import { computed } from "vue";
const { image } = defineProps<{ image: string }>();

const imgURL = computed(() => {
  return new URL(`../../../assets/images/${image}.png`, import.meta.url).href;
});
</script>

<template>
  <div
    class="min-w-[56px] min-h-[56px] max-h-[56px] max-w-[56px] rounded-full bg-gray-100 flex items-center justify-center"
  >
    <img
      :src="imgURL"
      alt="Product Image"
      class="w-[90%] h-[90%] object-cover"
    />
  </div>
</template>
