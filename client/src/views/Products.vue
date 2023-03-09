<script setup lang="ts">
import { ref, reactive, computed } from "vue";

import Modal from "../components/ui/Modal.vue";
import Filter from "../components/Filter.vue";
import ProdCard from "../components/ProdCard.vue";
import Button from "../components/ui/Button.vue";
import CategoryChips from "../components/ui/CategoryChips.vue";
import CategoryButton from "../components/ui/CategoryButton.vue";
import Categories from "../components/Categories.vue";
import Icon from "../components/ui/Icon.vue";
import useModal from "../composables/modalBehaviour";

import { TCategories, TIcons } from "../components/ui/icons/types";
import {
  Ingredients,
  activeChip,
  categories,
  productType,
  selectChip,
  selectedIngredients,
} from "../constants";
const { openModal, openedModal } = useModal();

const ingredientsMore = ref(false);

defineProps<{ name: TCategories }>();
</script>

<template>
  <section class="xl:mx-auto sm:mx-4 mx-2 max-w-[1576px] sm:px-2 px-1">
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

    <div
      class="sm:grid sm:grid-cols-[1fr_fit-content(100%)] flex justify-between mt-8 gap-y-8"
    >
      <div class="justify-between items-center sm:flex hidden">
        <div class="md:gap-4 gap-2 sm:flex hidden">
          <CategoryChips
            v-for="(item, index) in categories"
            :key="index"
            :text="item"
            :active="index == activeChip.id"
            @click="selectChip(index)"
          />
        </div>
      </div>
      <h4
        class="md:flex md:text-base sm:text-xs text-sm sm:text-black text-gray-500 sm:hidden flex sm:bg-transparent bg-white w-max md:p-0 p-4 rounded-xl md:gap-2 gap-0 items-center cursor-pointer lg:place-self-end min-w-[130px]"
      >
        <h4 class="whitespace-nowrap text-ellipsis overflow-hidden">
          From expensive to cheap
        </h4>
        <Icon
          icon-name="dropDown"
          class="sm:fill-black fill-gray-400 min-w-[24px]"
        />
      </h4>

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
      <div
        class="xl:flex hidden gap-4 w-fit flex-wrap justify-end xl:max-w-[750px] 2xl:max-w-[950px]"
      >
        <CategoryButton
          v-for="(item, index) in !ingredientsMore
            ? Ingredients.slice(0, 4)
            : Ingredients"
          :key="index"
          :active="item.active"
          @click="item.active = !item.active"
          :image="item.name"
          :text="item.name"
        />
        <div
          class="bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center outline outline-1 cursor-pointer max-w-[56px] max-h-[56px]"
          :class="
            ingredientsMore ? 'outline-orange-500 p-4' : 'outline-gray-500 p-3'
          "
          @click="ingredientsMore = !ingredientsMore"
        >
          <Icon
            icon-name="minus"
            class="fill-gray-600"
            v-if="ingredientsMore"
          />
          <Icon icon-name="plus" class="fill-gray-600" v-else />
        </div>
      </div>
      <div class="xl:hidden flex place-self-end w-max">
        <div class="relative text-gray-500 select-none">
          <div
            class="absolute rounded-full bg-[#FF6633] sm:w-7 w-5 sm:h-7 h-5 sm:text-base text-sm text-white -top-2 -right-2 flex items-center justify-center"
            v-if="selectedIngredients > 0 && openedModal !== 'filter'"
          >
            {{ selectedIngredients }}
          </div>
          <div
            class="cursor-pointer flex gap-2 items-center justify-center outline outline-2 p-4 rounded-lg"
            :class="
              openedModal === 'filter'
                ? 'outline-white bg-orange-500 text-white'
                : ' outline-gray-200 bg-white hover:bg-gray-100 text-gray-500'
            "
            @click="openModal('filter')"
          >
            <h4>Filters</h4>
            <Icon
              icon-name="categoryMenu"
              :class="openedModal === 'filter' ? 'fill-white' : 'fill-gray-500'"
            />
          </div>
        </div>
      </div>
    </div>

    <section class="max-w-[1576px] xl:mx-auto sm:mx-4 mx-2">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full justify-items-center sm:gap-2 gap-4 my-4"
      >
        <ProdCard
          href="/Products/rolls/1"
          image="prod"
          :type="['new']"
          :specs="['plant', 'lactose', 'hot']"
          title="Gunkan Salmon"
          :weight="40"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil vero
        facere assumenda aliquid. Quos porro non totam labore necessitatibus."
          :price="190"
          currency="MDL"
          v-for="(item, index) in 4"
          :key="index"
        />
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
  <Filter />
</template>
