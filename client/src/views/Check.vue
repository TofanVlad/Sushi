<script setup lang="ts">
import { Ref, ref, onMounted, computed } from "vue";
import Icon from "@/components/ui/Icon.vue";
import CheckoutContainer from "@/components/ui/Checkout/CheckoutContainer.vue";
import CheckLine from "@/components/ui/Check/CheckLine.vue";
import CheckDetail from "@/components/ui/Check/CheckDetail.vue";
import CheckProgressbar from "@/components/ui/Check/CheckProgressbar.vue";
import CheckItemSmall from "@/components/ui/Check/CheckItemSmall.vue";
import CheckItemBig from "@/components/ui/Check/CheckItemBig.vue";
import CheckItemDisplay from "@/components/ui/Check/CheckItemDisplay.vue";
import { IOrder } from "@/store/storeInterfaces";

import { checkInfo, checkProgressStages } from "@/constants";

import useOrderStore from "@/store/orderStore";
import useDishStore from "@/store/dishStore";
const orderStore = useOrderStore();
const dishStore = useDishStore();
const extendedOrder = ref(false);
const orderData: Ref<IOrder> = ref({
  adress: "",
  details: [],
  dishes: [],
  payment: "",
  username: "",
  createdAt: "",
});

const getDish = computed(() => {
  return (id: string) => {
    return dishStore.GET_DISH_DATA(id);
  };
});

const getQuantity = computed(() => {
  let out = 0;
  orderData.value.dishes.map((dish: any) => (out += dish.quantity));
  return out;
});

const getTotalSum = computed(() => {
  let out = 0;
  orderData.value.dishes.map((dish: any) => {
    out += dishStore.GET_DISH_DATA(dish.id)?.price * dish.quantity;
  });
  return out;
});

const orderInfo = computed(() => [
  orderData.value.adress,
  new Date(orderData.value.createdAt).toLocaleDateString("default", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  }),
  "Cash",
  getTotalSum.value,
]);

const props = defineProps<{ id: string }>();

onMounted(async () => {
  orderData.value = await orderStore.getOrderData(props.id);
});
</script>

<template>
  <main
    class="2xl:mx-auto lg:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1 overflow-hidden"
  >
    <div
      class="md:bg-white bg-transparent rounded-xl md:p-4 p-0 flex flex-col gap-3 mt-4"
    >
      <div
        class="flex md:flex-row flex-col md:items-start xs:items-center gap-4"
      >
        <section
          class="w-[450px] flex md:justify-center sm:pl-4 pl-2 sm:pr-0 pr-2 pt-4"
        >
          <h1
            class="font-bold sm:text-2xl text-xl leading-10 md:text-start xs:text-center sm:max-w-[420px] xs:max-w-[calc(100%-32px)] max-w-[300px] text-start md:mx-0 xs:mx-auto"
          >
            Thank You! <br />
            Your order
            <span class="p-2 bg-orange-400 text-white text-lg rounded-lg mx-1"
              >#{{ id.slice(-6) }}</span
            >
            has been successfully completed
          </h1>
        </section>
        <section
          class="max-h-[240px] md:hidden flex flex-col gap-2 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-xl"
        >
          <CheckItemBig
            v-for="(item, index) in orderData.dishes"
            :key="index"
            :title="getDish(item.id)?.name"
            :weight="getDish(item.id)?.weight"
            :price="getDish(item.id)?.price"
            currency="MDL"
            :image="getDish(item.id)?.name"
            :amount="item.quantity"
          />
        </section>
        <section
          class="w-full flex flex-col gap-2 pr-4 pt-4 md:bg-transparent bg-white rounded-lg md:p-0 p-4"
        >
          <h2 class="font-bold text-xl">Information about order</h2>
          <CheckLine
            v-for="(item, index) in checkInfo"
            :key="index"
            :title="item"
            :info="orderInfo[index]"
          />
        </section>
      </div>
    </div>
    <CheckoutContainer class="md:block hidden">
      <div class="flex gap-8 py-4 px-8">
        <div
          class="min-w-[32px] w-8 h-8 rounded-full flex items-center justify-center outline outline-2 outline-orange-400 bg-white hover:bg-gray-100 cursor-pointer"
          @click="extendedOrder = !extendedOrder"
        >
          <Icon
            :icon-name="extendedOrder ? 'arrowUp' : 'arrowDownBig'"
            class="fill-[#191919]"
          />
        </div>
        <div>
          <p class="text-gray-400 text-sm select-none">
            {{ new Date().toLocaleDateString() }}
          </p>
          <p class="text-xl font-bold select-none">#{{ id.slice(-6) }}</p>
        </div>
        <div
          class="flex gap-4 w-full pb-3 place-self-center scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl"
        >
          <CheckItemSmall
            v-for="(item, index) in orderData.dishes"
            :key="index"
            :image="getDish(item.id)?.name"
          />
        </div>
        <div class="flex gap-4 text-xl">
          <div>
            <p class="text-gray-400">Quantity</p>
            <p class="font-bold">{{ getQuantity }}</p>
          </div>
          <div>
            <p class="text-gray-400">Total</p>
            <p class="font-bold whitespace-nowrap">
              {{ getTotalSum }} <span class="text-gray-500 text-sm">MDL</span>
            </p>
          </div>
        </div>
      </div>
      <CheckProgressbar :timeInMinutes="5" :stages="checkProgressStages" />
      <section v-if="extendedOrder" class="mt-20 flex flex-col gap-4">
        <CheckItemDisplay
          v-for="(item, index) in orderData.dishes"
          :title="getDish(item.id)?.name"
          :image="getDish(item.id)?.name"
          :weight="getDish(item.id)?.weight"
          :price="getDish(item.id)?.price"
          currency="MDL"
          :amount="item.quantity"
        />
      </section>
    </CheckoutContainer>
    <div class="flex justify-center">
      <router-link
        to="/"
        class="bg-white hover:bg-gray-200 transition-colors px-8 py-4 h-max text-green-500 rounded-lg my-4"
      >
        Return to main menu
      </router-link>
    </div>
  </main>
</template>
