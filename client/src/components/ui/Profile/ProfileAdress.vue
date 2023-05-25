<script setup lang="ts">
import Icon from "../Icon.vue";
import useUserStore from "@/store/userStore";
const store = useUserStore();
const props = defineProps<{ data: string }>();

const deleteAddress = () => {
  const index = store.$state.addresses.indexOf(props.data);
  store.$state.addresses.splice(index, 1);
};
</script>

<template>
  <div class="flex gap-2 w-full items-center">
    <Icon icon-name="map" fill="black" />
    <p class="font-medium text-lg">{{ data }}</p>
    <div
      class="ml-auto w-[30px] h-[30px] p-1 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-lg"
      @click="deleteAddress"
    >
      <Icon icon-name="trash" class="w-full h-full" />
    </div>
  </div>
</template>
