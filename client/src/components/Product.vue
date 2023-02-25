<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import Type from "./ui/Type.vue";
import Specs from "./ui/Specs.vue";
</script>

<template>
  <div
    class="sm:p-4 px-2 py-4 flex md:flex-col justify-between w-max bg-white rounded-md overflow-hidden md:max-w-[300px] max-w-full md:h-max h-[220px] sm:gap-3 gap-2 relative"
  >
    <Specs :types="['hot', 'plant', 'lactose']" classes="outside" />

    <div
      class="md:max-w-[290px] md:max-h-[270px] h-max md:w-full min-w-[96px] w-3/4 relative"
    >
      <img src="./images/prod.jpg" class="w-full h-full object-cover" alt="" />
      <div class="absolute top-0 left-0 flex gap-2">
        <Type type="hit" />
        <Type type="new" />
      </div>
      <Specs :types="['hot', 'plant', 'lactose']" classes="inside" />
    </div>
    <div class="flex flex-col md:w-full max-w-3/4 gap-1">
      <h2 class="font-bold sm:text-2xl text-xl whitespace-nowrap">
        Gunkan Salmon
      </h2>
      <h4 class="text-orange-500 sm:text-lg text-base">Weight: 40g</h4>
      <h4
        class="text-[#686870] md:max-h-[86px] sm:text-base text-sm clamp mb-auto"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil vero
        facere assumenda aliquid. Quos porro non totam labore necessitatibus.
      </h4>
      <div class="flex justify-between items-end">
        <h2 class="font-bold xl:text-4xl sm:text-3xl text-xl whitespace-nowrap">
          190
          <span class="text-[#686870] xl:text-lg sm:text-base text-sm"
            >MDL</span
          >
        </h2>
        <div class="flex gap-3 items-end">
          <div
            class="bg-gray-100 rounded-xl w-[42px] h-[42px] items-center justify-center cursor-pointer sm:flex hidden"
          >
            <Icon icon-name="heart" class="fill-orange-500" />
          </div>
          <div
            class="bg-green-100 sm:w-[62px] sm:h-[42px] h-[32px] w-[52px] flex items-center justify-center rounded-xl cursor-pointer"
          >
            <Icon icon-name="plus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media screen and (max-width: 640px) {
  .clamp {
    -webkit-line-clamp: 4;
  }
}
</style>
