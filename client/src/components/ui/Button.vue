<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  color: "lime" | "gray" | "white";
  text: string;
  size: "sm" | "md" | "lg";
  textColor: "lime" | "blue" | "white";
}

const props = defineProps<IProps>();

const getSize = computed((): string => {
  let returnSize = "";
  switch (props.size) {
    case "sm":
      returnSize = "padding-inline: 8px;";
      break;
    case "md":
      returnSize = "padding-inline: 16px;";
      break;
    case "lg":
      returnSize = "padding-inline: 64px;";
      break;
  }
  return returnSize;
});

const getColor = computed((): string => {
  let returnColor = "";
  switch (props.color) {
    case "lime":
      returnColor = "background-color: #00CC2D;";
      break;
    case "gray":
      returnColor = "background-color: #F5F5F7;";
      break;
    case "white":
      returnColor = "background-color: white;";
      break;
  }
  return returnColor;
});

const getTextColor = computed((): string => {
  let returnText = "";
  switch (props.textColor) {
    case "blue":
      returnText = "color: #039BE5;";
      break;
    case "lime":
      returnText = "color: #00CC2D;";
      break;
    case "white":
      returnText = "color: #FFFFFF;";
      break;
  }
  return returnText;
});

const getBtnStyles = computed((): string => {
  return getSize.value + " " + getColor.value + " " + getTextColor.value;
});
</script>

<template>
  <button :style="getBtnStyles" class="py-2 rounded-md w-max text-center">
    {{ text }}
  </button>
</template>
