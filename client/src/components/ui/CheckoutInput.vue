<script setup lang="ts">
import { ref } from "vue";

const handleInput = (event: Event) => {
  const isEventValid = event.target instanceof HTMLInputElement;
  emit("update:modelValue", isEventValid ? event.target.value : "");
};

defineProps<{
  title: string;
  required?: boolean;
  placeholder: string;
  modelValue?: string | number;
  currency?: string;
}>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-gray-300 text-sm" :for="title"
      >{{ title }} <span class="text-red-400" v-if="required">*</span></label
    >

    <div
      class="relative max-w-[300px] w-full transition-all py-2 pl-3 bg-gray-100 rounded-md outline-2 outline-none hover:outline-orange-400"
      :class="currency ? 'pr-10' : 'pr-3'"
    >
      <input
        type="text"
        :name="title"
        :placeholder="placeholder"
        :value="modelValue"
        class="w-full border-none bg-transparent outline-none text-base"
        @input="handleInput"
      />
      <h5
        class="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 font-bold text-xs"
        v-if="currency"
      >
        {{ currency }}
      </h5>
    </div>
  </div>
</template>
