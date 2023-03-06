<script setup lang="ts">
import { ref, computed } from "vue";
import Icon from "./ui/Icon.vue";
import CategoryChips from "./ui/CategoryChips.vue";
import CategoryButton from "./ui/CategoryButton.vue";
import Modal from "./ui/Modal.vue";
import useModal from "../composables/modalBehaviour";
import {
  Ingredients,
  productType,
  categories,
  activeChip,
  selectChip,
  selectedIngredients,
} from "../constants";
const { closeModal } = useModal();

const clearIngredients = () => {
  Ingredients.forEach((element) => {
    element.active = false;
  });
  productType.forEach((element) => {
    element.active = false;
  });
};
</script>

<template>
  <Modal name="filter">
    <div class="flex justify-between items-center w-full">
      <h2 class="font-bold text-2xl text-gray-900">Filters</h2>
      <div class="flex gap-4 items-center">
        <h4
          class="text-orange-400 whitespace-nowrap sm:block hidden"
          v-if="selectedIngredients"
        >
          Selected: {{ selectedIngredients }}
        </h4>
        <h4
          class="text-orange-400 hover:text-orange-500 bg-transparent hover:bg-gray-100 rounded-xl px-2 py-1 cursor-pointer whitespace-nowrap h-max"
          @click="clearIngredients"
        >
          Reset all
        </h4>
        <div
          class="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md h-max"
          @click="closeModal"
        >
          <Icon icon-name="cross" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col sm:max-h-max max-h-[250px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-xl"
    >
      <h4 class="w-full text-lg text-gray-500 py-2">Category</h4>

      <div class="flex gap-2 flex-wrap p-1">
        <CategoryChips
          v-for="(item, index) in categories"
          :key="index"
          :text="item"
          :active="index == activeChip.id"
          @click="selectChip(index)"
        />
      </div>
      <h4 class="w-full text-lg text-gray-500 py-2">Type</h4>
      <div
        class="max-h-[150px] min-h-[65px] h-max flex flex-wrap gap-4 p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl scrollbar-track-gray-100"
      >
        <CategoryButton
          v-for="(item, index) in productType"
          :key="index"
          :active="item.active"
          @click="item.active = !item.active"
          :iconName="item.iconName"
          :text="item.text"
        />
      </div>
      <h4 class="w-full text-lg text-gray-500 py-2">Ingredients</h4>
      <div
        class="max-h-[250px] h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl scrollbar-track-gray-100 flex flex-wrap gap-2 p-1"
      >
        <CategoryButton
          v-for="(item, index) in Ingredients"
          :key="index"
          :active="item.active"
          @click="item.active = !item.active"
          :image="item.name"
          :text="item.name"
        />
      </div>
    </div>
  </Modal>
</template>
