<script setup lang="ts">
import { ref } from "vue";

const handleInput = (event: Event) => {
  const isEventValid = event.target instanceof HTMLInputElement;
  emit("update:modelValue", isEventValid ? event.target.value : "");
};

defineProps<{ title: string; placeholder: string; modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-gray-300 text-sm" :for="title"
      >{{ title }} <span class="text-red-400">*</span></label
    >

    <input
      type="text"
      :name="title"
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full transition-all border-none bg-gray-100 outline-none px-3 py-2 max-w-[300px] focus:outline-orange-400 rounded-md text-base"
      @input="handleInput"
    />
  </div>
</template>
