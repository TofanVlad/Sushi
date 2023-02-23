<script setup lang="ts">
import Categories from "../components/Categories.vue";
import Button from "../components/ui/Button.vue";
</script>

<template>
  <Categories />
  <div
    class="max-w-[1576px] xl:mx-auto sm:mx-4 mx-2 bg-white rounded-2xl h-[500px] sm:mt-12 mt-0 flex md:flex-row flex-col-reverse overflow-hidden"
  >
    <div
      class="md:w-1/2 w-full md:h-full min-h-1/2 h-full flex flex-col justify-center px-10 gap-4 py-2"
    >
      <h1 class="lg:text-6xl md:text-5xl text-3xl font-bold mt-2">
        Ninja Sushi in Kiev! For now just on left shore
      </h1>
      <h4
        class="sm:whitespace-nowrap whitespace-normal text-[#686870] lg:text-xl md:text-lg text-base"
      >
        We deliver between 10:00 and 19:30
      </h4>
      <Button textColor="white" color="lime" text="Check News" size="lg" />
    </div>
    <div class="md:w-1/2 w-full md:h-full min-h-1/2 h-full bg-gray-600"></div>
  </div>
</template>
