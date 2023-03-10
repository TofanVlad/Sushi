<script setup lang="ts">
defineProps<{ title: string }>();
</script>
<template>
  <div class="flex flex-col gap-2 w-full max-h-[150px]">
    <label class="text-gray-300 text-sm" :for="title">{{ title }}</label>
    <textarea
      class="bg-gray-100 rounded-lg p-2 resize-none min-h-[100px] outline-none scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-xl"
      :id="title"
    ></textarea>
  </div>
</template>
