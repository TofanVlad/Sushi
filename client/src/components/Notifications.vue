<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import NavModal from "./ui/NavModal.vue";
import useModal from "../composables/modalBehaviour";
const { closeModal } = useModal();
</script>
<template>
  <NavModal name="bell">
    <div class="flex justify-between p-4">
      <h2 class="font-bold text-3xl">Notifications</h2>
      <div
        class="p-2 rounded-md bg-gray-100 cursor-pointer"
        @click="closeModal"
      >
        <Icon icon-name="cross" />
      </div>
    </div>
  </NavModal>
</template>
