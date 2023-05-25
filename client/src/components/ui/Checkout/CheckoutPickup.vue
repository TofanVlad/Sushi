<script setup lang="ts">
import { computed, ref } from "vue";
import CheckoutChip from "./CheckoutChip.vue";
import CheckoutContainer from "./CheckoutContainer.vue";
import CheckoutDropdown from "./CheckoutDropdown.vue";

import { cities, restaurants, activeCity } from "../../../constants";

const getCityAdress = computed((): string[] => {
  return restaurants[activeCity.value];
});
defineEmits(["update:modelValue"]);
const test = ref("");
</script>

<template>
  <CheckoutContainer>
    <div class="flex md:gap-4 gap-2 flex-wrap justify-between">
      <CheckoutChip
        v-for="(item, index) in cities"
        :key="index"
        :text="item"
        :active="activeCity === item"
        @click="
          activeCity = item;
          $emit('update:modelValue', test);
        "
      />
    </div>
    <CheckoutDropdown
      :options="getCityAdress"
      title="The address of the restaurant from which you will pick up"
      v-model="test"
    />
  </CheckoutContainer>
</template>
