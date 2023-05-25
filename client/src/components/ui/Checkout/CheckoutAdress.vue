<script setup lang="ts">
import Icon from "../Icon.vue";
defineProps<{ active: boolean; title: string; id: string }>();
</script>

<template>
  <label
    :for="id"
    class="flex transition-all items-center md:justify-start justify-between md:gap-4 gap-2 outline outline-2 outline-gray-200 hover:outline-orange-400 md:px-4 px-3 py-2 rounded-xl cursor-pointer"
  >
    <Icon
      icon-name="map"
      :class="active ? 'fill-orange-400' : 'fill-gray-500'"
    />
    <div class="flex flex-col sm:max-w-max max-w-[170px] w-full">
      <h3 class="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
        {{ title }}
      </h3>
    </div>
    <input
      type="radio"
      class="md:ml-auto ml-0 cursor-pointer border-2"
      :checked="active"
      :class="active ? 'border-orange-400' : 'border-[#191919]'"
      :id="id"
      name="adress"
    />
  </label>
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
