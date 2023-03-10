<script setup lang="ts">
defineProps<{
  text: string;
  active: boolean;
  id: string;
  name: string;
  modelValue: string;
}>();
const handleInput = (event: Event) => {
  const isEventValid = event.target instanceof HTMLInputElement;
  emit("update:modelValue", isEventValid ? event.target.value : "");
};
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex gap-2 cursor-pointer w-max">
    <input
      type="radio"
      class="border-2 cursor-pointer"
      :name="name"
      :id="id"
      :checked="active"
      :class="active ? 'border-orange-400' : 'border-[#191919]'"
      :value="modelValue"
      @input="handleInput"
    />
    <label class="cursor-pointer" :for="id">{{ text }}</label>
  </div>
</template>

<style scoped>
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  display: grid;
  place-content: center;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
}

input[type="radio"]:before {
  content: "";
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #fb923c;
}

input[type="radio"]:checked:before {
  transform: scale(1);
}
</style>
