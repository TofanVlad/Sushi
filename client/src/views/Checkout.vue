<script setup lang="ts">
import { ref } from "vue";
import CheckoutInput from "../components/ui/CheckoutInput.vue";
import Categories from "../components/Categories.vue";
import Icon from "../components/ui/Icon.vue";
const name = ref("");
const phone = ref("");
</script>

<template>
  <main>
    <main class="xl:mx-auto sm:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1">
      <div class="relative">
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
        <div class="bg-white p-4 w-max flex rounded-lg flex-col gap-4">
          <h2 class="text-2xl font-semibold">Private data</h2>
          <div class="flex gap-4">
            <CheckoutInput v-model="name" title="Name" placeholder="Name..." />
            <CheckoutInput
              v-model="phone"
              title="Phone Number"
              placeholder="Phone Number..."
            />
          </div>
        </div>
        <div></div>
      </section>
    </main>
  </main>
</template>
