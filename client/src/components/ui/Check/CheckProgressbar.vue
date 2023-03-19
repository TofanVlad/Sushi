<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Icon from "../Icon.vue";
const { timeInMinutes } = defineProps<{
  stages: string[];
  timeInMinutes: number;
}>();

const progress = ref(0);

const checkStage = computed(() => {
  return (stage: number) => {
    if (((progress.value / 60 / timeInMinutes) * 100) / 25 >= stage - 1)
      return true;
    return false;
  };
});

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += 0.1;

    if (progress.value >= timeInMinutes * 60) clearInterval(interval);
  }, 100);
});
</script>

<template>
  <div
    class="w-[calc(100%-128px)] bg-gray-100 rounded-lg h-1 md:flex hidden justify-between items-center relative mx-16 mb-12"
  >
    <div
      class="w-6 h-6 rounded-full z-[2] flex items-center justify-center relative transition-all duration-500"
      :class="checkStage(index + 1) ? 'bg-lime-600' : 'bg-gray-300'"
      v-for="(item, index) in stages"
      :key="index"
    >
      <p v-if="!checkStage(index + 1)">{{ index + 1 }}</p>
      <Icon icon-name="check" v-else />
      <div
        class="absolute -bottom-8 left-1/2 -translate-x-1/2 xl:max-w-max max-w-[115px] text-ellipsis overflow-hidden text-center transition-all duration-500 whitespace-nowrap"
        :class="checkStage(index + 1) ? 'text-[#1D1D1F]' : 'text-gray-300'"
      >
        {{ stages[index] }}
      </div>
    </div>
    <div
      class="absolute h-1 bg-[#1D1D1F] rounded-lg transition-all"
      :style="`width:${(progress / 60 / timeInMinutes) * 100}%`"
    ></div>
  </div>
</template>
