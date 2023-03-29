<script setup lang="ts">
import { computed } from "vue";
import Icon from "../Icon.vue";
import { profileSectionInfo } from "@/constants";
const props = defineProps<{
  section: "box" | "heart" | "map" | "sun";
}>();

const getSectionValues = computed(() => {
  return profileSectionInfo.value[props.section];
});

const imgURL = computed(() => {
  return new URL(
    `../../../assets/images/${getSectionValues.value.icon}.svg`,
    import.meta.url
  ).href;
});
</script>

<template>
  <section class="w-full">
    <div class="flex md:flex-row flex-col gap-4 justify-between items-center">
      <h2 class="font-bold xl:text-5xl lg:text-4xl text-3xl">
        {{ getSectionValues.title }}
      </h2>
      <button
        class="bg-green-500 hover:bg-green-600 px-4 py-2 flex items-center md:w-max w-full justify-center gap-2 rounded-xl"
        v-if="getSectionValues.buttonText"
      >
        <p class="text-white">
          {{ getSectionValues.buttonText }}
        </p>
        <Icon icon-name="plus" class="fill-white" />
      </button>
    </div>
    <div
      class="mt-8 bg-white px-6 py-4 rounded-xl flex md:flex-row flex-col-reverse md:text-start text-center md:justify-start justify-center items-center gap-8"
    >
      <div class="2xl:w-[335px] xl:w-[275px] w-[225px]">
        <img :src="imgURL" alt="Icon" class="w-full h-full object-cover" />
      </div>

      <div class="max-w-[500px] 2xl:ml-16 xl:ml-12 lg:ml-8">
        <p class="xl:text-3xl text-2xl mb-2">{{ getSectionValues.text }}</p>
        <p class="text-gray-500 xl:text-sm text-xs font-normal">
          {{ getSectionValues.desc }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2"></div>
  </section>
</template>
