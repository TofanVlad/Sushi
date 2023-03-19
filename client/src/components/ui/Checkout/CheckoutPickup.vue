<script setup lang="ts">
import { computed } from "vue";
import CheckoutChip from "./CheckoutChip.vue";
import CheckoutContainer from "./CheckoutContainer.vue";
import CheckoutDropdown from "./CheckoutDropdown.vue";

import { cities, restaurants, activeCity } from "../../../constants";

const getCityAdress = computed((): string[] => {
  return restaurants[activeCity.value];
});
</script>

<template>
  <CheckoutContainer>
    <div class="flex md:gap-4 gap-2 flex-wrap justify-between">
      <CheckoutChip
        v-for="(item, index) in cities"
        :key="index"
        :text="item"
        :active="activeCity === item"
        @click="activeCity = item"
      />
    </div>
    <CheckoutDropdown
      :options="getCityAdress"
      title="The address of the restaurant from which you will pick up"
    />
  </CheckoutContainer>
</template>
