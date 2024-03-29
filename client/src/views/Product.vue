<script setup lang="ts">
import { computed, onBeforeMount } from "vue";

import Categories from "../components/Categories.vue";
import ProdIngr from "../components/ui/ProdIngr.vue";
import ProdCard from "../components/ProdCard.vue";
import Icon from "../components/ui/Icon.vue";
import Specs from "../components/ui/Specs.vue";
import Type from "../components/ui/Type.vue";
import useDishStore from "@/store/dishStore";
import useUserStore from "@/store/userStore";
import { TCategories } from "../components/ui/icons/types";
const store = useDishStore();
const userStore = useUserStore();
const props = defineProps<{ category: TCategories; id: string }>();

let dishValue: any;

onBeforeMount(async () => {
  if (store.$state.dishes?.length == 0) {
    await store.getDishes();
  }
  dishValue = store.$state.dishes?.filter((dish) => dish._id === props.id)[0];
});

const imgURL = computed(() => {
  return (href: string) =>
    new URL(`../assets/images/${href}.png`, import.meta.url).href;
});

const currency = "MDL";
</script>

<template>
  <main class="2xl:mx-auto sm:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1">
    <div class="relative mb-20">
      <Categories :name="dishValue.category" />
      <div class="absolute lg:top-1/4 top-[110%] flex items-center gap-4">
        <router-link
          :to="`/Products/${dishValue.category}`"
          class="flex items-center text-green-400 bg-white rounded-xl px-4 py-2 hover:bg-gray-200 gap-2"
        >
          <Icon icon-name="arrowLeft" class="fill-green-400"></Icon>
          Back
        </router-link>
        <div class="xl:flex hidden gap-1">
          <Icon icon-name="house" />
          <Icon icon-name="arrowRight" class="fill-gray-400" />
          <h4 class="capitalize text-gray-400">{{ dishValue.category }}</h4>
          <Icon icon-name="arrowRight" class="fill-gray-400" />
          <h4
            class="capitalize text-gray-400 max-w-[65px] text-ellipsis whitespace-nowrap overflow-hidden"
          >
            {{ dishValue.name }}
          </h4>
        </div>
      </div>
    </div>

    <section
      class="w-full bg-white py-8 sm:px-4 px-2 my-20 flex gap-2 md:flex-row flex-col rounded-md relative"
    >
      <div
        class="absolute md:flex hidden top-2 left-2 flex-col gap-2 z-10"
        v-if="dishValue.specs"
      >
        <Specs :types="dishValue.specs" classes="prod" />
      </div>
      <div
        class="md:w-1/2 w-full md:h-full h-1/2 relative my-auto flex items-center justify-center"
      >
        <div
          class="absolute bottom-0 left-0 md:hidden flex flex-row sm:gap-2 gap-0 z-10"
          v-if="dishValue.specs"
        >
          <Specs :types="dishValue.specs" classes="prod" />
        </div>
        <div class="w-max md:h-max h-full">
          <img
            :src="imgURL(dishValue.name)"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div class="md:w-1/2 w-full flex flex-col gap-8">
        <div class="md:flex hidden gap-2" v-if="dishValue.type">
          <Type
            v-for="(item, index) in dishValue.type"
            :type="item"
            :key="index"
          />
        </div>
        <h1 class="font-bold xl:text-5xl lg:text-4xl sm:text-3xl text-2xl">
          {{ dishValue.name }}
        </h1>
        <h3 class="xl:text-2xl text-orange-500">
          Weight: {{ dishValue.weight }}g
        </h3>
        <h4 class="">Contains:</h4>
        <div
          class="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-lg pb-4 flex gap-4 xl:justify-center justify-start"
        >
          <ProdIngr
            :text="item"
            :image="item"
            v-for="(item, index) in dishValue.ingredients"
            :key="index"
          />
        </div>
        <div class="flex sm:gap-2 gap-1 items-center justify-between">
          <h2
            class="font-bold xl:text-5xl sm:text-4xl text-2xl whitespace-nowrap"
          >
            {{ dishValue.price }}
            <span class="text-[#686870] sm:text-xl text-base">{{
              currency
            }}</span>
          </h2>
          <button
            class="bg-green-500 hover:bg-green-600 transition-all md:self-end flex gap-2 items-center justify-center sm:text-xl text-base text-white w-full md:w-[350px] py-2 rounded-xl h-full"
            @click="userStore.addToCart({ id: dishValue._id, quantity: 1 })"
          >
            Add to Cart
            <Icon icon-name="cart" class="fill-white sm:block hidden" />
          </button>
          <div
            class="sm:p-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-xl justify-self-end cursor-pointer"
          >
            <Icon icon-name="heart" class="fill-orange-500" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full pb-16 overflow-hidden">
      <div class="flex justify-between items-center">
        <h2 class="font-bold md:text-4xl sm:text-3xl text-2xl">
          Maybe something else?
        </h2>
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-full mt-4 px-2 place-items-center"
      >
        <ProdCard
          v-for="item in store.GET_RECOMMEND"
          :key="item"
          :title="item.name"
          :weight="item.weight"
          :price="item.price"
          currency="MDL"
          :image="item.name"
          :href="`/Products/${item.category}/${item._id}`"
          :type="item.type"
          :description="item.ingredients"
        />
      </div>
    </section>
  </main>
</template>
