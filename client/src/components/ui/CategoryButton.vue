<script setup lang="ts">
import { computed } from "vue";
import Icon from "./Icon.vue";
import { TProps } from "./icons/types";
interface IProps {
  text: string;
  iconName?: TProps;
  image?: string;
  active: boolean;
}
const props = defineProps<IProps>();

const imgURL = computed(() => {
  return new URL(`../images/${props.image}.png`, import.meta.url).href;
});
</script>

<template>
  <div
    class="bg-white hover:bg-gray-200 rounded-md px-4 py-2 flex gap-2 cursor-pointer w-max items-center font-medium h-[56px]"
    :class="active == true && 'outline outline-2 outline-orange-500'"
  >
    <Icon :icon-name="iconName" v-if="iconName" />
    <img :src="imgURL" :alt="image" v-if="image" />
    <h4>{{ text }}</h4>
  </div>
</template>
