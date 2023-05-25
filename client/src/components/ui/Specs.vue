<script setup lang="ts">
import Icon from "./Icon.vue";
interface IProps {
  types: Array<"hot" | "vegetarian" | "lactose">;
  classes: "inside" | "outside" | "prod";
}
defineProps<IProps>();
</script>

<template>
  <div
    class="md:px-2 px-1 py-1 rounded-md flex items-center sm:gap-2 gap-0 w-max select-none"
    :class="
      item == 'hot'
        ? 'sm:bg-red-100 text-red-500'
        : item == 'vegetarian'
        ? 'sm:bg-lime-100 text-lime-500'
        : 'sm:bg-amber-100 text-amber-500'
    "
    v-if="classes == 'prod'"
    v-for="(item, index) in types"
    :key="index"
  >
    <Icon :icon-name="item"></Icon>
    <h4 class="xl:text-base text-sm sm:block hidden">
      {{
        item == "hot"
          ? "Spicy"
          : item == "vegetarian"
          ? "Vegetarian"
          : "Lactose-free"
      }}
    </h4>
  </div>
  <div
    v-else
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
