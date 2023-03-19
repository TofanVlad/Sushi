<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <label
    class="flex items-center gap-3 cursor-pointer w-max select-none"
    :for="text"
  >
    <input type="checkbox" class="cursor-pointer" :id="text" />
    <h3>{{ text }}</h3>
  </label>
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  border: 0.1em solid #9e9e9e;
  border-radius: 0.25em;
  display: grid;
  place-items: center;
}

input[type="checkbox"]:before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms all ease-in-out;
  box-shadow: inset 1em 1em white;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:checked:before {
  transform: scale(1);
}

input[type="checkbox"]:checked {
  border: 0.1em solid #fb923c;
  background-color: #fb923c;
}
</style>
