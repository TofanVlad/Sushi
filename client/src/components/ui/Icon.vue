<script setup lang="ts">
import { computed } from "vue";
import { TIcons, icons } from "./icons/types";

interface IProps {
  iconName: TIcons;
}

const props = defineProps<IProps>();

const getIconName = computed(() => {
  return icons[props.iconName];
});
</script>

<template>
  <component :is="getIconName"></component>
</template>
