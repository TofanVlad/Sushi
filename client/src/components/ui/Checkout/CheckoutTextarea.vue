<script setup lang="ts">
defineProps<{ title: string; placeholder?: string }>();
</script>
<template>
  <div class="flex flex-col gap-2 w-full max-h-[150px] transition-all">
    <label class="text-gray-300 text-sm" :for="title">{{ title }}</label>
    <textarea
      class="bg-gray-100 outline-2 outline-none hover:outline-orange-400 rounded-lg p-2 resize-none min-h-[100px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-xl"
      :placeholder="placeholder"
      :id="title"
    ></textarea>
  </div>
</template>
