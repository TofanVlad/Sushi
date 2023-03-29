<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import { TCategories } from "./ui/icons/types";
import { computed } from "vue";
defineProps<{ icon: TCategories }>();
</script>

<template>
  <router-link
    class="bg-white rounded-xl md:hidden flex flex-col justify-center items-center py-4"
    :to="`/Products/rolls`"
  >
    <Icon :icon-name="icon" />
    <h3 class="capitalize">{{ icon }}</h3>
  </router-link>
</template>
