<script setup lang="ts">
import { computed } from "vue";
import useUserStore from "@/store/userStore";
import useDishStore from "@/store/dishStore";
import { IOrder } from "@/store/storeInterfaces";

defineProps<{
  data: IOrder;
}>();

const userStore = useUserStore();
const dishStore = useDishStore();

const img = computed(() => {
  return (name: string) => {
    return new URL(`../../../assets/images/${name}.png`, import.meta.url).href;
  };
});

const getDate = computed(() => {
  return (date: string) => {
    return new Date(date).toLocaleDateString("default", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    });
  };
});

const getTotalQuantity = computed(() => {
  return (id: string) => {
    let out = 0;
    userStore.$state.history
      .find((order: any) => order._id == id)
      ?.dishes.map((dish: any) => (out += dish.quantity));
    return out;
  };
});

const getTotalSum = computed(() => {
  return (id: string) => {
    let out = 0;
    userStore.$state.history
      .find((item: any) => item._id == id)
      ?.dishes.map(
        (dish: any) =>
          (out += dishStore.GET_DISH_DATA(dish.id)?.price * dish.quantity)
      );
    return out;
  };
});

const getDishImage = computed(() => {
  return (id: string) => {
    return userStore.$state.history
      .find((item: any) => item._id == id)
      ?.dishes.map((dish: any) => dishStore.GET_DISH_DATA(dish.id)?.name);
  };
});
</script>

<template>
  <div class="flex gap-2">
    <div class="flex flex-col justify-between">
      <p class="text-gray-400 text-sm">
        {{ getDate(data.createdAt) }}
      </p>
      <p class="text-xl font-bold"># {{ data._id.slice(-6) }}</p>
    </div>
  </div>
  <div class="flex gap-2">
    <div
      v-for="(photo, index) in getDishImage(data._id)"
      :key="index"
      class="bg-gray-200 rounded-full w-[60px] h-[60px] p-2"
    >
      <img :src="img(photo)" :alt="photo" class="w-full h-full object-cover" />
    </div>
  </div>
  <div class="flex gap-4">
    <div class="flex flex-col justify-around">
      <p class="text-gray-400 text-sm">Quantity:</p>
      <p class="text-xl font-bold">{{ getTotalQuantity(data._id) }}</p>
    </div>
    <div class="flex flex-col justify-around">
      <p class="text-gray-400 text-sm">Total:</p>
      <p class="text-xl font-bold">{{ getTotalSum(data._id) }}</p>
    </div>
  </div>
</template>
