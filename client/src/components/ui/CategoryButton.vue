<script setup lang="ts">
import { computed } from "vue";
import Icon from "./Icon.vue";
import { TIcons } from "./icons/types";
interface IProps {
  text: string;
  iconName?: TIcons;
  image?: string;
  active: boolean;
}
const props = defineProps<IProps>();

const imgURL = computed(() => {
  return new URL(
    `../../assets/images/Products/${props.image}.png`,
    import.meta.url
  ).href;
});
</script>

<template>
  <div
    class="bg-white hover:bg-gray-200 outline rounded-md px-4 py-2 flex gap-2 cursor-pointer w-max items-center font-medium h-[56px] select-none whitespace-nowrap"
    :class="
      active == true
        ? 'outline-orange-500 outline-2'
        : 'outline-gray-500 outline-1'
    "
  >
    <Icon :icon-name="iconName" v-if="iconName" />
    <img :src="imgURL" :alt="image" v-if="image" />
    <h4>{{ text }}</h4>
  </div>
</template>
