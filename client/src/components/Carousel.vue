<script setup lang="ts">
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide } from "vue3-carousel";
const images = ["Car_1.jpg", "Car_2.jpg", "Car_3.jpg", "Car_4.jpg"];
</script>
<template>
  <!-- <Carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="5000"
    class="md:w-1/2 w-full md:h-full min-h-1/2 h-full"
  >
    <Slide v-for="slide in images" :key="slide" class="h-full">
      <img :src="`/${slide}`" alt="" class="w-full h-full object-cover" />
    </Slide>
  </Carousel> -->
  <div class="md:w-1/2 w-full md:h-full min-h-1/2 h-full">
    <img src="/Car_1.jpg" alt="" class="w-full h-full object-cover" />
  </div>
</template>
