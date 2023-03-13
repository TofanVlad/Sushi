<script setup lang="ts">
import { ref } from "vue";
import CheckoutAdress from "./CheckoutAdress.vue";
import CheckoutCheckbox from "./CheckoutCheckbox.vue";
import CheckoutContainer from "./CheckoutContainer.vue";
import { adresses } from "../../constants";

const activeAdress = ref(0);
</script>

<template>
  <CheckoutContainer>
    <div
      v-if="adresses.length > 0"
      class="max-h-[260px] flex flex-col gap-3 p-1 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl"
    >
      <CheckoutAdress
        v-for="(item, index) in adresses"
        :key="index"
        :active="activeAdress === index"
        :title="item.title"
        :text="item.text"
        :id="`Adress-${index}`"
        @click="activeAdress = index"
      />
    </div>
    <div
      v-else
      class="h-[180px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-semibold text-xl text-center px-4"
    >
      You have not added any address
    </div>
    <div class="flex sm:flex-row flex-col gap-2">
      <button
        class="w-full py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-green-500"
      >
        Add new adress
      </button>
      <button
        class="w-full py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-red-500"
      >
        Delete adress
      </button>
    </div>
    <CheckoutCheckbox text="Don't call" />
    <CheckoutCheckbox text="Leave at the door" />
  </CheckoutContainer>
</template>
