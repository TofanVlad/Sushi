<script setup lang="ts">
import Icon from "./ui/Icon.vue";
</script>

<template>
  <section
    class="max-w-[1576px] bg-white rounded-lg xl:mx-auto sm:mx-4 mx-2 mt-48 xl:px-16 md:px-8 px-2 pt-16 mb-16 flex md:flex-row flex-col-reverse md:items-end items-center gap-8"
  >
    <div class="md:w-1/2 w-3/4 pb-16">
      <h2 class="font-bold lg:text-5xl sm:text-4xl text-2xl">
        Ninja - is family. <br />
        Download our application
      </h2>
      <h4 class="lg:text-lg sm:text-base text-sm lg:mt-8 sm:mt-6 mt-4">
        Become a ninja! Stay up to date with all the news and never go hungry.
      </h4>
      <div
        class="flex gap-4 lg:mt-8 sm:mt-6 mt-4 sm:flex-row flex-col items-center"
      >
        <Icon icon-name="appStore" class="cursor-pointer" />
        <Icon icon-name="googlePlay" />
      </div>
    </div>
    <div class="xl:w-1/3 sm:w-1/2 w-2/3 relative">
      <img
        src="../assets/images/Iphones.png"
        alt=""
        class="absolute bottom-0"
      />
    </div>
  </section>
</template>
