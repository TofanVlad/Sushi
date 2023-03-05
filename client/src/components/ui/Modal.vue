<script setup lang="ts">
defineEmits(["closeModal"]);
</script>

<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 bg-black/50 z-10"
    @click="$emit('closeModal')"
  >
    <div
      class="bg-white flex-wrap sm:flex gap-2 absolute shadow-md p-4 outline outline-1 outline-orange-500 rounded-lg right-8 sm:left-auto left-4 top-1/2 -translate-y-1/2 z-20 lg:w-[650px] md:w-[550px] sm:w-[450px] overflow-hidden"
      @click.stop=""
    >
      <slot> </slot>
    </div>
  </div>
</template>
