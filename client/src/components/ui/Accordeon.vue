<script setup lang="ts">
import { ref, watchEffect } from "vue";
import useAccordeon from "../../composables/accordeonBehaviour";
const { openAccordeon, openedAccordeon } = useAccordeon();

const props = defineProps<{ id: string }>();

const active = ref(false);
const seen = ref(false);

watchEffect(() => {
  active.value = openedAccordeon.value === props.id;
});

const seeNotificiation = () => {
  seen.value = true;
};
</script>

<template>
  <div
    class="bg-gray-100 hover:bg-gray-200 transition-all duration-500 py-3 px-4 w-full rounded-xl flex flex-col gap-2 cursor-pointer relative"
    :class="active ? 'max-h-[380px]' : 'max-h-[100px]'"
    @click="
      openAccordeon(id);
      seeNotificiation();
    "
  >
    <div
      class="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"
      v-if="!seen"
    ></div>
    <slot name="minimized" v-if="!active"></slot>
    <slot name="opened" v-else></slot>
    <h4 class="text-sm text-gray-500 font-light select-none">16.02 at 16:40</h4>
  </div>
</template>
