<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Icon from "./ui/Icon.vue";
import { categories } from "@/constants";
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
      <div class="grid grid-cols-2 gap-4">
        <div
          class="col-span-2 bg-gray-100 rounded-lg p-4 flex gap-2 cursor-pointer"
        >
          <span class="fi fi-gb rounded-sm"></span>
          Language: <span class="font-semibold">English</span>
        </div>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-200 transition-all"
          v-for="(item, index) in categories"
          :key="index"
          :to="`/Products/${item}`"
          @click="closeModal"
        >
          <Icon :icon-name="item" />
          {{ item }}
        </router-link>
        <div
          class="col-span-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg p-4 flex gap-2 cursor-pointer text-gray-700 font-medium justify-center"
          @click="closeModal"
        >
          <Icon icon-name="cart" class="fill-gray-500" />
          <p>Repeat previous order</p>
        </div>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-gray-700"
          to="/"
          @click="closeModal"
        >
          <Icon icon-name="heart" class="fill-gray-500" />
          <p>Favourites</p>
        </router-link>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-gray-700"
          to="/"
          @click="closeModal"
        >
          <Icon icon-name="human" class="fill-gray-500" />
          <p>Profile</p>
        </router-link>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-gray-700"
          to="/"
          @click="closeModal"
        >
          <p>Home</p>
        </router-link>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-gray-700"
          to="/"
          @click="closeModal"
        >
          <p>Delivery</p>
        </router-link>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-gray-700"
          to="/"
          @click="closeModal"
        >
          <p>About us</p>
        </router-link>
        <router-link
          class="bg-gray-100 rounded-lg p-4 capitalize w-full flex justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-gray-700"
          to="/"
          @click="closeModal"
        >
          <p>News</p>
        </router-link>
      </div>
    </div>
  </section>
</template>
