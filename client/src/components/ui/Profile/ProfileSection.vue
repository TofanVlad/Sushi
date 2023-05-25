<script setup lang="ts">
import { computed, onMounted } from "vue";
import { profileSectionInfo } from "@/constants";
import useUserStore from "@/store/userStore";
import useDishStore from "@/store/dishStore";
import ProfileHistory from "./ProfileHistory.vue";
import ProfileAdress from "./ProfileAdress.vue";
const userStore = useUserStore();
const dishStore = useDishStore();

onMounted(async () => {
  dishStore.getDishes();
});
const props = defineProps<{
  section: "box" | "heart" | "map";
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

const getSectionData = computed(() => {
  return (section: "box" | "heart" | "map") => {
    switch (section) {
      case "box":
        return userStore.$state.history;
      case "heart":
        return userStore.$state.favourites;
      case "map":
        return userStore.$state.addresses;
    }
  };
});
</script>

<template>
  <section class="w-full">
    <div class="flex md:flex-row flex-col gap-4 justify-between items-center">
      <h2 class="font-bold xl:text-5xl lg:text-4xl text-3xl">
        {{ getSectionValues.title }}
      </h2>
    </div>
    <div
      class="mt-8 bg-white px-6 py-4 rounded-xl flex md:flex-row flex-col-reverse md:text-start text-center md:justify-start justify-center items-center gap-8"
      v-if="getSectionData(section).length == 0"
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
    <div
      v-else
      class="mt-4 bg-white px-6 py-4 rounded-lg flex justify-between"
      v-for="(item, index) in getSectionData(section)"
      :key="index"
    >
      <ProfileHistory :data="item" v-if="section == 'box'" />
      <ProfileAdress :data="item" v-if="section == 'map'" />
    </div>
    <div class="grid grid-cols-2"></div>
  </section>
</template>
