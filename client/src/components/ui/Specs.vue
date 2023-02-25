<script setup lang="ts">
import Icon from "./Icon.vue";
interface IProps {
  types: Array<"hot" | "plant" | "lactose">;
  classes: "inside" | "outside";
}
defineProps<IProps>();
</script>

<template>
  <div
    class="absolute gap-2"
    :class="
      classes === 'inside'
        ? 'bottom-0 left-0 md:flex hidden'
        : 'bottom-4 sm:left-4 left-2 flex md:hidden z-[2]'
    "
  >
    <Icon :icon-name="item" v-for="(item, index) in types" :key="index"></Icon>
  </div>
</template>
