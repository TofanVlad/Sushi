<script setup lang="ts">
import { ref, reactive } from "vue";
import Icon from "./Icon.vue";
import CheckoutAdress from "./CheckoutAdress.vue";
import CheckoutCheckbox from "./CheckoutCheckbox.vue";
import CheckoutContainer from "./CheckoutContainer.vue";
import CheckoutChip from "./CheckoutChip.vue";
import CheckoutInput from "./CheckoutInput.vue";
import { adresses, cities, activeCity } from "../../constants";

const addAdress = ref(false);
const activeAdress = ref(0);

const newAdressInfo: { [key: string]: null | string | number } = reactive({
  Street: null,
  House: null,
  Entrance: null,
  Floor: null,
  Apartment: null,
});
</script>

<template>
  <CheckoutContainer>
    <div
      v-if="adresses.length > 0 && addAdress === false"
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
      v-if="adresses.length === 0 && addAdress === false"
      class="h-[180px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-semibold text-xl text-center px-4"
    >
      You have not added any address
    </div>
    <div
      v-if="addAdress === true"
      class="flex md:gap-4 gap-2 flex-wrap justify-between"
    >
      <CheckoutChip
        v-for="(item, index) in cities"
        :key="index"
        :text="item"
        :active="activeCity === item"
        @click="activeCity = item"
      />
    </div>
    <CheckoutInput
      title="Street, house"
      placeholder="Blvd. Example"
      v-model="newAdressInfo.Street"
      v-if="addAdress === true"
    />
    <div v-if="addAdress === true" class="flex justify-between gap-2">
      <CheckoutInput
        title="House"
        placeholder="0"
        v-model="newAdressInfo.House"
      />
      <CheckoutInput
        title="Entrance"
        placeholder="0"
        v-model="newAdressInfo.Entrance"
      />
      <CheckoutInput
        title="Floor"
        placeholder="0"
        v-model="newAdressInfo.Floor"
      />
      <CheckoutInput
        title="Apartment"
        placeholder="0"
        v-model="newAdressInfo.Apartment"
      />
    </div>
    <div class="flex sm:flex-row flex-col gap-2">
      <button
        class="w-full py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-green-500"
        @click="addAdress = !addAdress"
      >
        <div v-if="addAdress === false">Add new Adress</div>
        <div class="flex gap-2 justify-center items-center" v-else>
          <Icon icon-name="leftArrow" class="fill-green-500" />
          Back
        </div>
      </button>
      <button
        class="w-full py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-red-500"
        v-if="addAdress === false"
      >
        Delete adress
      </button>
      <div
        v-else
        class="flex items-center gap-2 text-gray-500 font-semibold text-xs w-full"
      >
        <Icon icon-name="info" class="min-w-[20px]" />
        Delivery adress will be saved automatically
      </div>
    </div>
    <CheckoutCheckbox text="Don't call" />
    <CheckoutCheckbox text="Leave at the door" />
  </CheckoutContainer>
</template>
