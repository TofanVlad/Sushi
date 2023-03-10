<script setup lang="ts">
defineProps<{ options: Array<string>; title: string }>();
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label class="text-gray-400 text-xs">{{ title }}</label>

    <div
      class="select relative max-w-[300px] max-h-[50px] w-full bg-gray-100 hover:bg-gray-200 rounded-lg"
    >
      <select
        class="border-none outline-none bg-transparent px-4 py-2 cursor-pointer w-full"
      >
        <option :value="item" v-for="(item, index) in options" :key="index">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  appearance: none;
}
.select::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  width: 20px;
  height: 20px;
  background-image: url("../../assets/dropDown.svg");
  /* justify-self: end; */
}
select::-ms-expand {
  display: none;
}
</style>
