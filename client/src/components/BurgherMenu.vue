<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Icon from "./ui/Icon.vue";
import useModal from "@/composables/modalBehaviour";
const { openedModal, closeModal } = useModal();

const active = ref(false);
watchEffect(() => {
  active.value = openedModal.value === "burgher";
});
</script>

<template>
  <section
    class="fixed w-screen h-screen left-0 top-0 bg-black/50 z-10"
    @click.stop="closeModal"
    v-if="active"
  >
    <div
      @click.stop
      class="absolute top-28 right-4 w-full bg-white max-w-[370px] rounded-xl p-4"
    >
      <div class="flex justify-between mb-6">
        <h2 class="font-bold text-2xl">Menu</h2>
        <div
          class="rounded-lg bg-gray-100 p-2 cursor-pointer"
          @click.stop="closeModal"
        >
          <Icon icon-name="cross" />
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div
          class="col-span-6 bg-gray-100 rounded-lg p-4 flex gap-2 cursor-pointer"
        >
          <span class="fi fi-gb rounded-sm"></span>
          Language: <span class="font-semibold">English</span>
        </div>
        <div class="col-span-2 bg-gray-100 rounded-lg p-4">321</div>
        <div class="col-span-2 bg-gray-100 rounded-lg p-4">321</div>
        <div class="col-span-2 bg-gray-100 rounded-lg p-4">321</div>
        <div class="col-span-2 bg-gray-100 rounded-lg p-4">321</div>
        <div class="col-span-2 bg-gray-100 rounded-lg p-4">321</div>
        <div class="col-span-2 bg-gray-100 rounded-lg p-4">321</div>
      </div>
    </div>
  </section>
</template>
