<script setup lang="ts">
import { onBeforeMount, computed } from "vue";
import Categories from "../components/Categories.vue";
import Button from "../components/ui/Button.vue";
import ProdCard from "../components/ProdCard.vue";
import Carousel from "../components/Carousel.vue";
import Map from "../components/Map.vue";
import Application from "../components/Application.vue";
import useDishStore from "@/store/dishStore";

const store = useDishStore();

onBeforeMount(async () => {
  await store.getDishes();
});
</script>

<template>
  <Categories />

  <section
    class="max-w-[1576px] xl:mx-auto sm:mx-4 mx-2 bg-white rounded-2xl h-[500px] sm:mt-12 mt-2 flex md:flex-row flex-col-reverse overflow-hidden"
  >
    <div
      class="md:w-1/2 w-full md:h-full min-h-1/2 h-full flex flex-col justify-center px-10 gap-4 py-2"
    >
      <h1
        class="lg:text-6xl md:text-5xl text-3xl font-bold mt-2 md:text-left text-center"
      >
        Ninja Sushi in London! For now just on left shore
      </h1>
      <h4
        class="sm:whitespace-nowrap whitespace-normal text-[#686870] lg:text-xl md:text-lg text-base md:text-left text-center"
      >
        We deliver between 10:00 and 19:30
      </h4>
      <Button
        textColor="white"
        color="lime"
        text="Check News"
        size="lg"
        class="md:mx-0 mx-auto md:w-max w-11/12"
      />
    </div>
    <Carousel />
  </section>
  <section
    class="max-w-[1576px] 2xl:mx-auto sm:mx-4 mx-2 md:mt-24 mt-16"
    v-for="cat in ['Rolls', 'Sushi', 'Sets', 'Bowls', 'Drinks']"
  >
    <div class="flex md:justify-between justify-center mb-4">
      <h2 class="font-bold md:text-5xl sm:text-4xl text-3xl">{{ cat }}</h2>
      <Button
        color="white"
        size="lg"
        textColor="lime"
        text="Show All"
        class="md:block hidden"
      />
    </div>
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full justify-items-center sm:gap-2 gap-4"
    >
      <ProdCard
        v-for="(item, index) in store.GET_HOME(cat)"
        :key="index"
        :specs="item.specs"
        :type="item.type"
        :href="`/Products/${item.category}/${item._id}`"
        :title="item.name"
        :weight="item.weight"
        :image="item.name"
        :description="item.ingredients"
        :price="item.price"
        currency="MDL"
      />
      <Button
        color="white"
        size="lg"
        textColor="lime"
        text="Show All"
        class="md:hidden block"
      />
    </div>
  </section>

  <Map />
  <Application />
</template>
