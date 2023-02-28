<script setup lang="ts">
import { ref, reactive, computed } from "vue";

import Product from "../components/Product.vue";
import Button from "../components/ui/Button.vue";
import CategoryChips from "../components/ui/CategoryChips.vue";
import CategoryButton from "../components/ui/CategoryButton.vue";
import Categories from "../components/Categories.vue";
import Icon from "../components/ui/Icon.vue";

import { TCategories, TProps } from "../components/ui/icons/types";

const categories = ref(["All", "Classic", "Maki", "Baked", "Sweet"]);

const activeChip = ref(0);
const activeChipValue = ref(categories.value[0]);

interface TProductType {
  active: boolean;
  iconName: TProps;
  text: string;
}

const productType: TProductType[] = reactive([
  { active: false, iconName: "hot", text: "Spicy" },
  { active: false, iconName: "plant", text: "Vegetarian" },
  { active: false, iconName: "lactose", text: "Lactose-free" },
]);

const Ingredients = reactive([
  { name: "Salmon", active: false },
  { name: "Eel", active: false },
  { name: "Tuna", active: false },
  { name: "Chicken Breast", active: false },
  { name: "Tofu", active: false },
  { name: "Cream Cheese", active: false },
  { name: "Avocado", active: false },
  { name: "Tomato", active: false },
  { name: "Mushroom", active: false },
]);

const selectedIngredients = computed(() => {
  let selected = 0;
  Ingredients.map((item) => item.active && selected++);
  return selected;
});

const selectChip = (index: number) => {
  activeChip.value = index;
  activeChipValue.value = categories.value[index];
};

defineProps<{ name: TCategories }>();
</script>

<template>
  <section
    class="xl:mx-auto sm:mx-4 mx-2 max-w-[1576px] sm:pl-2 pl-1 md:pr-4 px-3"
  >
    <div class="relative">
      <Categories :name="name" />
      <div class="absolute lg:top-1/4 top-[110%] flex items-center gap-4">
        <router-link
          to="/"
          class="flex items-center text-green-400 bg-white rounded-xl px-4 py-2 hover:bg-gray-200 gap-2"
        >
          <Icon icon-name="leftArrow" class="fill-green-400"></Icon>
          Back
        </router-link>
        <div class="xl:flex hidden gap-1">
          <Icon icon-name="house" />
          <Icon icon-name="rightArrow" class="fill-gray-400" />
          <h4 class="capitalize text-gray-400">{{ name }}</h4>
        </div>
      </div>
    </div>

    <h1 class="font-bold text-5xl capitalize mt-20">
      {{ name }}
    </h1>

    <div class="justify-between items-center sm:flex hidden mt-8">
      <div class="md:gap-4 gap-2 sm:flex hidden">
        <CategoryChips
          v-for="(item, index) in categories"
          :key="index"
          :text="item"
          :active="index == activeChip"
          @click="selectChip(index)"
        />
      </div>
      <h4
        class="sm:flex md:text-base text-xs hidden md:gap-2 gap-0 items-center cursor-pointer"
      >
        From expensive to cheap <Icon icon-name="dropDown" />
      </h4>
    </div>

    <div class="flex justify-between my-8">
      <div class="md:flex hidden gap-4">
        <CategoryButton
          :active="item.active"
          :iconName="item.iconName"
          :text="item.text"
          @click="item.active = !item.active"
          v-for="(item, index) in productType"
          :key="index"
        />
      </div>
      <div class="xl:flex hidden gap-4">
        <CategoryButton
          :active="item.active"
          @click="item.active = !item.active"
          :image="item.name"
          :text="item.name"
          v-for="(item, index) in Ingredients.slice(0, 4)"
          :key="index"
        />
        <div
          class="flex items-center justify-center relative bg-white hover:bg-gray-200 p-4 rounded-lg cursor-pointer"
        >
          <div
            class="absolute rounded-full bg-[#FF6633] sm:w-7 w-5 sm:h-7 h-5 sm:text-base text-sm text-white -top-2 -right-2 flex items-center justify-center"
            v-if="selectedIngredients > 0"
          >
            {{ selectedIngredients }}
          </div>
          <Icon icon-name="categoryMenu" />
        </div>
      </div>
      <div class="xl:hidden flex gap-4">
        <div
          class="flex gap-2 items-center relative justify-center bg-white hover:bg-gray-200 p-4 text-gray-500 rounded-lg cursor-pointer"
        >
          <div
            class="absolute rounded-full bg-[#FF6633] sm:w-7 w-5 sm:h-7 h-5 sm:text-base text-sm text-white -top-2 -right-2 flex items-center justify-center"
            v-if="selectedIngredients > 0"
          >
            {{ selectedIngredients }}
          </div>
          <h4>Filters</h4>
          <Icon icon-name="categoryMenu" />
        </div>
      </div>
    </div>

    <section class="max-w-[1576px] xl:mx-auto sm:mx-4 mx-2">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full justify-items-center sm:gap-2 gap-4 my-4"
      >
        <Product v-for="(item, index) in 4" :key="index" />
      </div>
      <div class="mx-auto w-max">
        <Button
          color="white"
          size="lg"
          textColor="lime"
          text="Show All"
          class="mx-auto mb-4"
        />
      </div>
    </section>
  </section>
</template>
