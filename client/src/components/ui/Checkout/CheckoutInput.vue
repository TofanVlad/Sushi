<script setup lang="ts">
const handleInput = (event: Event) => {
  const isEventValid = event.target instanceof HTMLInputElement;
  emit("update:modelValue", isEventValid ? event.target.value : "");
};

withDefaults(
  defineProps<{
    title: string;
    required?: boolean;
    placeholder?: string;
    modelValue?: null | string | number;
    currency?: string;
    type?: "number" | "text";
    active?: boolean;
  }>(),
  {
    type: "text",
    active: true,
    modelValue: null,
  }
);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col md:w-auto w-full gap-1">
    <label class="text-gray-300 text-sm whitespace-nowrap" :for="title"
      >{{ title }} <span class="text-red-400" v-if="required">*</span></label
    >

    <div
      class="relative w-full transition-all py-2 pl-3 bg-gray-100 rounded-md outline-2 outline-none"
      :class="[
        currency ? 'pr-10' : 'pr-3',
        active && 'hover:outline-orange-400 ',
      ]"
    >
      <input
        :type="type"
        :name="title"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="active === false"
        class="w-full border-none bg-transparent outline-none text-base disabled:text-gray-400"
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
