<script setup lang="ts">
import { ref } from "vue";
import Icon from "./ui/Icon.vue";
defineEmits(["closeModal"]);
</script>
<template>
  <section
    class="fixed w-screen h-screen z-20 top-0 left-0 bg-black/50"
    @click.stop="$emit('closeModal')"
  >
    <div
      class="bg-white absolute top-28 xl:left-1/2 lg:left-[40%] md:left-1/4 sm:left-[20%] sm:right-auto right-6 left-2 rounded-xl lg:w-[590px] md:w-[540px] sm:w-[490px] flex flex-col gap-4 z-40 overflow-hidden max-h-[550px]"
      @click.stop=""
    >
      <div class="flex justify-between p-4">
        <h2 class="font-bold text-3xl">Notifications</h2>
        <div
          class="p-2 rounded-md bg-gray-100 cursor-pointer"
          @click="$emit('closeModal')"
        >
          <Icon icon-name="cross" />
        </div>
      </div>
    </div>
  </section>
</template>
