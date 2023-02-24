<script setup lang="ts">
import { computed } from "vue";
import { TProps, icons } from "./icons/types";

interface IProps {
  iconName: TProps;
}

const props = defineProps<IProps>();

const getIconName = computed(() => {
  return icons[props.iconName];
});
</script>

<template>
  <component :is="getIconName"></component>
</template>
