<script setup lang="ts">
import { Ref, ref, computed } from "vue";
import CheckoutDelivery from "../components/ui/Checkout/CheckoutDelivery.vue";
import CheckoutPickup from "../components/ui/Checkout/CheckoutPickup.vue";

import CheckoutContainer from "../components/ui/Checkout/CheckoutContainer.vue";
import CheckoutInput from "../components/ui/Checkout/CheckoutInput.vue";
import CheckoutButton from "../components/ui/Checkout/CheckoutButton.vue";
import CheckoutItem from "../components/ui/Checkout/CheckoutItem.vue";
import CheckoutRecommend from "../components/ui/Checkout/CheckoutRecommend.vue";
import CheckoutRadio from "../components/ui/Checkout/CheckoutRadio.vue";
import CheckoutTextarea from "../components/ui/Checkout/CheckoutTextarea.vue";
import CheckoutDropdown from "../components/ui/Checkout/CheckoutDropdown.vue";
import CheckoutCheckbox from "../components/ui/Checkout/CheckoutCheckbox.vue";

import Categories from "../components/Categories.vue";
import Icon from "../components/ui/Icon.vue";

import { payment, TPayment, promoCodes } from "../constants";

const activePayment = ref(0);

const changeAmount = ref(0);
const name = ref("");
const phone = ref("");

const promoCode = ref("");
const isPromoCodeValid: Ref<null | boolean> = ref(null);

const isUserLogined = ref(false);

const paymentMethod: TPayment = ref(payment[activePayment.value]);

const checkoutChoice: Ref<"CheckoutDelivery" | "CheckoutPickup"> =
  ref("CheckoutDelivery");

const getCheckoutComponent = computed(() => {
  return checkoutChoice.value == "CheckoutDelivery"
    ? CheckoutDelivery
    : CheckoutPickup;
});

const checkPromoCode = () => {
  isPromoCodeValid.value = promoCodes.includes(promoCode.value);
};
</script>

<template>
  <main
    class="2xl:mx-auto lg:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1 overflow-hidden"
  >
    <div class="relative mb-20">
      <Categories />
      <div class="absolute lg:top-1/4 top-[110%] flex items-center gap-4">
        <router-link
          :to="`/`"
          class="flex items-center text-green-400 bg-white rounded-xl px-4 py-2 hover:bg-gray-200 gap-2"
        >
          <Icon icon-name="arrowLeft" class="fill-green-400"></Icon>
          Back
        </router-link>
        <div class="xl:flex hidden gap-1">
          <Icon icon-name="house" />
          <Icon icon-name="arrowRight" class="fill-gray-400" />
          <h4 class="capitalize text-gray-400">Checkout</h4>
        </div>
      </div>
    </div>
    <h1 class="font-bold text-5xl my-8">Checkout</h1>
    <div v-if="!isUserLogined">
      <h4 class="text-gray-500 text-sm">
        Tired of filling out fields? <br />
        Sign in or register to autocomplete
      </h4>
      <button
        class="bg-white hover:bg-gray-200 text-green-400 text-lg py-2 px-4 rounded-xl lg:max-w-[475px] md:max-w-[360px] w-full mt-4"
      >
        Login with phone number
      </button>
    </div>
    <section
      class="flex md:flex-row flex-col md:gap-4 gap-0 justify-between md:mb-8 mb-4"
    >
      <section class="flex flex-col lg:min-w-[475px] lg:max-w-[475px] w-full">
        <CheckoutContainer>
          <h2 class="text-3xl font-bold">Private data</h2>
          <div
            class="flex xs:flex-row flex-col items-center justify-between gap-4"
          >
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
          <h2 class="text-3xl font-bold">Delivery</h2>
          <div
            class="flex bg-gray-100 rounded-lg max-h-[50px] px-2 py-1 transition-all"
          >
            <CheckoutButton
              :active="checkoutChoice === 'CheckoutDelivery'"
              @click="checkoutChoice = 'CheckoutDelivery'"
              text="Delivery"
            />
            <CheckoutButton
              :active="checkoutChoice === 'CheckoutPickup'"
              @click="checkoutChoice = 'CheckoutPickup'"
              text="Pickup"
            />
          </div>
        </CheckoutContainer>
        <component :is="getCheckoutComponent" />
        <CheckoutContainer>
          <h2 class="font-bold text-3xl">
            {{
              checkoutChoice == "CheckoutDelivery"
                ? "Time to deliver"
                : "Willing to pickup"
            }}
          </h2>
          <h4 class="text-gray-400 text-sm">
            {{
              checkoutChoice == "CheckoutDelivery"
                ? "Delivery time say via telephone"
                : "Please specify the most convenient pickup time"
            }}
          </h4>
          <div
            class="flex sm:flex-row flex-col items-center justify-center gap-3"
          >
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
          <h2 class="font-bold text-3xl">Payment method</h2>
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
            :active="activePayment === 0"
            title="Change"
            placeholder="Sum..."
            v-model="changeAmount"
            currency="MDL"
            type="number"
          />
        </CheckoutContainer>
        <CheckoutContainer>
          <h2 class="text-3xl font-bold">Comment</h2>
          <div class="flex gap-2 justify-between">
            <CheckoutInput
              title="Chopsticks"
              placeholder="Chopsticks ..."
              type="number"
            />
            <CheckoutInput
              title="Beginner chopsticks"
              placeholder="Beginner chopsticks ..."
              type="number"
            />
          </div>
          <CheckoutTextarea
            title="Order details"
            placeholder="My dear courier..."
          />
          <CheckoutCheckbox text="I have cat" />
          <CheckoutCheckbox text="I have dog" />
        </CheckoutContainer>
      </section>
      <section
        class="rounded-xl md:bg-transparent bg-white w-full mx-auto gap-3 md:p-0 p-4 md:mt-0 my-4"
      >
        <h2 class="font-bold text-2xl md:hidden block">Your order</h2>
        <div
          class="max-h-[350px] max-w-[calc(100vw-60px)] bg-gray-100 rounded-lg overflow-hidden px-4 md:py-0 py-4 gap-4 flex md:flex-col flex-row justify-between scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl mx-auto mt-4"
        >
          <CheckoutItem
            v-for="item in 5"
            :key="item"
            name="Gunkan Salmon"
            currency="MDL"
            :weight="190"
            :price="190"
            :amount="1"
            image="prod"
          />
        </div>
        <div
          class="md:hidden flex flex-wrap gap-x-4 max-w-full mx-auto mt-4 justify-center"
        >
          <h4 v-for="item in 5" class="text-gray-500 text-lg font-light">
            {{ item == 5 ? "Gunkan Salmon" : "Gunkan Salmon," }}
          </h4>
        </div>

        <div class="mt-4 lg:flex flex-col hidden mx-4 w-full xl:px-0 px-4">
          <h2 class="font-bold text-3xl">We recommend to add</h2>
          <div
            class="grid xl:grid-cols-4 lg:grid-cols-2 place-items-center gap-2 mt-4"
          >
            <CheckoutRecommend
              v-for="item in 4"
              :key="item"
              name="Coca Cola"
              :weight="0.25"
              :price="190"
              currency="MDL"
              image="Cola"
            />
          </div>
        </div>
        <div
          class="flex md:mx-4 mx-auto gap-2 md:justify-start justify-center items-center mt-4"
        >
          <div
            class="md:bg-white bg-gray-100 px-2 py-2 rounded-lg flex gap-1 outline outline-2"
            :class="
              isPromoCodeValid == false
                ? 'outline-red-400'
                : isPromoCodeValid == true
                ? 'outline-green-400'
                : 'outline-orange-400'
            "
          >
            <input
              type="text"
              v-model="promoCode"
              class="max-w-[150px] outline-none bg-transparent"
              placeholder="Promo Code..."
              :class="
                isPromoCodeValid == false
                  ? 'text-red-400'
                  : isPromoCodeValid == true && 'text-green-400'
              "
            />
            <Icon icon-name="error" v-if="isPromoCodeValid == false" />
          </div>
          <button
            class="text-green-400 md:bg-white bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
            @click="checkPromoCode"
          >
            Apply
          </button>
        </div>
        <div
          class="md:px-4 px-0 py-4 bg-white mt-4 rounded-xl md:mx-4 mx-0 flex justify-between gap-2"
        >
          <div>
            <h5 class="text-gray-500 font-light text-sm">Total:</h5>
            <h3 class="font-bold text-2xl">
              Sum <span class="text-gray-500 text-sm">MDL</span>
            </h3>
          </div>
          <router-link
            to="/Check/1D24AD"
            class="lg:px-8 xs:px-6 px-4 xs:py-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white lg:text-2xl xs:text-xl text-lg whitespace-nowrap"
          >
            Make order
          </router-link>
        </div>
      </section>
    </section>
  </main>
</template>
