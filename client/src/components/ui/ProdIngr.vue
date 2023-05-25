<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ text: string; image: string }>();

const imgURL = computed(() => {
  return new URL(
    `../../assets/images/Products/${props.image}.png`,
    import.meta.url
  ).href;
});
</script>

<template>
  <div
    class="bg-gray-100 hover:bg-gray-200 transition-all select-none lg:max-w-[90px] lg:min-w-[90px] lg:max-h-[90px] lg:min-h-[90px] max-h-[70px] min-w-[70px] w-full h-full rounded-md shadow-sm flex flex-col items-center justify-center lg:gap-2 gap-0 p-2"
  >
    <div
      class="lg:max-w-[65px] max-w-[45px] lg:max-h-[45px] max-h-[35px] w-full h-full"
    >
      <img :src="imgURL" class="w-full h-full object-cover" :alt="text" />
    </div>
    <h4
      class="text-sm whitespace-nowrap text-ellipsis overflow-hidden h-max w-full text-center"
    >
      {{ text }}
    </h4>
  </div>
</template>
