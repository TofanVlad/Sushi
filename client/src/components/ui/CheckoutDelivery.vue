<script setup lang="ts">
import { ref } from "vue";
import CheckoutAdress from "./CheckoutAdress.vue";
import CheckoutCheckbox from "./CheckoutCheckbox.vue";
import CheckoutDropdown from "./CheckoutDropdown.vue";
import CheckoutRadio from "./CheckoutRadio.vue";
import CheckoutContainer from "./CheckoutContainer.vue";
import CheckoutInput from "./CheckoutInput.vue";
import CheckoutTextarea from "./CheckoutTextarea.vue";
import { adresses, payment, TPayment } from "../../constants";
defineProps<{ active: "Delivery" | "Pickup" }>();

const activeAdress = ref(0);
const activePayment = ref(0);

const changeAmount = ref(0);
const paymentMethod: TPayment = ref(payment[activePayment.value]);
</script>

<template>
  <div class="mb-8" v-if="active === 'Delivery'">
    <CheckoutContainer>
      <div
        class="max-h-[260px] flex flex-col gap-3 p-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl"
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
      <div class="flex gap-2">
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
    <CheckoutContainer>
      <h2 class="font-bold text-2xl">Time to deliver</h2>
      <h4 class="text-gray-400 text-sm">Delivery time say via telephone.</h4>
      <div class="flex gap-3">
        <CheckoutDropdown
          title="Day"
          :options="['Today', 'Tomorow', 'Couple Days']"
        />
        <CheckoutDropdown
          title="Time"
          :options="['As fast as possible', 'Afternoon', 'Night']"
        />
      </div>
    </CheckoutContainer>
    <CheckoutContainer>
      <h2 class="text-bold text-3xl">Payment method</h2>
      <h4 class="text-gray-400 text-sm">
        Alcoholic drinks are paid for only with cash
      </h4>
      <CheckoutRadio
        v-for="(item, index) in payment"
        :key="index"
        :id="`Payment-${index}`"
        :active="activePayment === index"
        :name="'payment'"
        :text="item"
        @click="activePayment = index"
        v-model="paymentMethod"
      />
      <CheckoutInput
        title="rest"
        placeholder="Sum..."
        v-model="changeAmount"
        currency="MDL"
      />
    </CheckoutContainer>
    <CheckoutContainer>
      <h2 class="text-3xl font-bold">Comment</h2>
      <div class="flex justify-between">
        <CheckoutInput title="Chopsticks" placeholder="Chopsticks ..." />
        <CheckoutInput
          title="Beginner chopsticks"
          placeholder="Beginner chopsticks ..."
        />
      </div>
      <CheckoutTextarea title="Order details" />
      <CheckoutCheckbox text="I have cat" />
      <CheckoutCheckbox text="I have dog" />
    </CheckoutContainer>
  </div>
  <div v-else></div>
</template>
