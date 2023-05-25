<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import Icon from "../Icon.vue";
import CheckoutAdress from "./CheckoutAdress.vue";
import CheckoutCheckbox from "./CheckoutCheckbox.vue";
import CheckoutContainer from "./CheckoutContainer.vue";
import CheckoutChip from "./CheckoutChip.vue";
import CheckoutInput from "./CheckoutInput.vue";
import { cities, activeCity } from "../../../constants";
import useUserStore from "@/store/userStore";

const store = useUserStore();

const addresses = ref(store.$state.addresses);

const addAdress = ref(false);
const activeAdress = ref(0);

const newAdressInfo: { [key: string]: string | number } = reactive({
  Street: "",
  House: "",
  Entrance: "",
  Floor: "",
  Apartment: "",
});
defineEmits(["update:modelValue"]);

const finalAddress = computed(() => {
  let output = "";
  if (!newAdressInfo.Street) return false;
  if (!newAdressInfo.House) return false;
  if (!newAdressInfo.Apartment) return false;
  output = `${newAdressInfo.Street}/${newAdressInfo.House} `;
  if (newAdressInfo.Entrance !== "")
    output += `${newAdressInfo.Entrance}.${newAdressInfo.Apartment} `;
  return output;
});

const deleteAddress = () => {
  addresses.value.splice(activeAdress.value, 1);
};
</script>

<template>
  <CheckoutContainer>
    <div
      v-if="addresses.length > 0 && addAdress === false"
      class="max-h-[192px] flex flex-col gap-3 p-1 overflow-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl"
    >
      <CheckoutAdress
        v-for="(item, index) in addresses"
        :key="index"
        :active="activeAdress === index"
        :title="item"
        :id="`Adress-${index}`"
        @click="
          activeAdress = index;
          $emit('update:modelValue', addresses[activeAdress]);
        "
      />
    </div>
    <div
      v-if="addresses.length == 0 && addAdress == false"
      class="md:h-[192px] h-[240px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-semibold text-xl text-center px-4"
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
        <div
          class="flex gap-2 justify-center items-center"
          @click="addAdress = !addAdress"
          v-else
        >
          <Icon icon-name="arrowLeft" class="fill-green-500" />
          Back
        </div>
      </button>
      <button
        class="w-full py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-red-500"
        v-if="addAdress === false"
        @click="deleteAddress"
      >
        Delete adress
      </button>
      <div
        v-else
        class="w-full py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-blue-500 text-center cursor-pointer"
        @click="
          finalAddress !== false && store.addAddress(finalAddress);
          addAdress = !addAdress;
        "
      >
        Save address
      </div>
    </div>
    <CheckoutCheckbox text="Don't call" />
    <CheckoutCheckbox text="Leave at the door" />
  </CheckoutContainer>
</template>
