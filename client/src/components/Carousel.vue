<script setup lang="ts">
import { ref } from "vue";
const currentSlider = ref(1);
</script>
<template>
  <section class="w-full h-full relative bg-gray-200 transitions">
    <img
      src="./images/Car_1.jpg"
      alt=""
      class="w-full h-full object-cover transitions"
      v-show="currentSlider == 1"
    />
    <img
      src="./images/Car_2.jpg"
      alt=""
      class="w-full h-full object-cover transitions"
      v-show="currentSlider == 2"
    />
    <img
      src="./images/Car_3.jpg"
      alt=""
      class="w-full h-full object-cover transitions"
      v-show="currentSlider == 3"
    />
    <img
      src="./images/Car_4.jpg"
      alt=""
      class="w-full h-full object-cover transitions"
      v-show="currentSlider == 4"
    />
    <div class="absolute bottom-4 left-4 flex gap-2">
      <div
        class="bg-gray-300 rounded-full w-3 h-3 cursor-pointer opacity-70"
        :class="item == currentSlider && 'bg-orange-500'"
        @click="currentSlider = item"
        v-for="item in 4"
        :key="item"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.transitions {
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
</style>
