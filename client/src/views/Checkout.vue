<script setup lang="ts">
import { Ref, ref, reactive } from "vue";
import CheckoutContainer from "../components/ui/CheckoutContainer.vue";
import CheckoutInput from "../components/ui/CheckoutInput.vue";
import CheckoutButton from "../components/ui/CheckoutButton.vue";
import CheckoutDelivery from "../components/ui/CheckoutDelivery.vue";
import Categories from "../components/Categories.vue";
import Icon from "../components/ui/Icon.vue";
const name = ref("");
const phone = ref("");

const activeDelivery: Ref<"Delivery" | "Pickup"> = ref("Delivery");
</script>

<template>
  <main>
    <main class="xl:mx-auto sm:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1">
      <div class="relative mb-20">
        <Categories />
        <div class="absolute lg:top-1/4 top-[110%] flex items-center gap-4">
          <router-link
            :to="`/`"
            class="flex items-center text-green-400 bg-white rounded-xl px-4 py-2 hover:bg-gray-200 gap-2"
          >
            <Icon icon-name="leftArrow" class="fill-green-400"></Icon>
            Back
          </router-link>
          <div class="xl:flex hidden gap-1">
            <Icon icon-name="house" />
            <Icon icon-name="rightArrow" class="fill-gray-400" />
            <h4 class="capitalize text-gray-400">Checkout</h4>
          </div>
        </div>
      </div>
      <h1 class="font-bold text-5xl my-8">Checkout</h1>
      <section class="flex justify-between">
        <div class="flex flex-col">
          <CheckoutContainer>
            <h2 class="text-2xl font-semibold">Private data</h2>
            <div class="flex gap-4">
              <CheckoutInput
                v-model="name"
                title="Name"
                placeholder="Name..."
                :required="true"
              />
              <CheckoutInput
                v-model="phone"
                title="Phone Number"
                placeholder="Phone Number..."
                :required="true"
              />
            </div>
          </CheckoutContainer>
          <CheckoutContainer>
            <h2 class="text-2xl font-bold">Delivery</h2>
            <div
              class="flex bg-gray-100 rounded-lg max-h-[50px] px-2 py-1 transition-all"
            >
              <CheckoutButton
                :active="activeDelivery === 'Delivery'"
                @click="activeDelivery = 'Delivery'"
                text="Delivery"
              />
              <CheckoutButton
                :active="activeDelivery === 'Pickup'"
                @click="activeDelivery = 'Pickup'"
                text="Pickup"
              />
            </div>
          </CheckoutContainer>
          <CheckoutDelivery :active="activeDelivery" />
        </div>
      </section>
    </main>
  </main>
</template>
