<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { TModals } from "../../composables/modalBehaviour";
import useModal from "../../composables/modalBehaviour";
const { closeModal, openedModal } = useModal();

const props = defineProps<{ name: TModals }>();
const active = ref(false);

watchEffect(() => {
  active.value = openedModal.value === props.name;
});
</script>

<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 bg-black/50 z-10"
    @click="closeModal"
    v-if="active"
  >
    <div
      class="bg-white flex-wrap sm:flex gap-2 overflow-hidden absolute shadow-md p-4 outline outline-1 outline-orange-500 rounded-lg sm:right-8 right-2 sm:left-auto left-2 top-28 z-20 lg:w-[650px] md:w-[550px] sm:w-[450px] sm:max-h-[650px] max-h-[calc(100vh-120px)] h-max"
      @click.stop
    >
      <slot> </slot>
    </div>
  </div>
</template>
