<script setup lang="ts">
import Icon from "./Icon.vue";
import NavIcon from "./NavIcon.vue";
</script>

<template>
  <ul
    class="xl:mx-auto sm:mx-4 mx-2 max-w-[1576px] rounded-xl flex items-center font-medium lg:gap-6 md:gap-4 gap-2 py-4 md:px-7 sm:px-5 px-3 sm:mt-4 mt-2 bg-white"
  >
    <li>
      <Icon iconName="logo" />
    </li>
    <li
      class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 px-2 py-1 rounded-md"
    >
      Home
    </li>
    <li
      class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 px-2 py-1 rounded-md"
    >
      Delivery
    </li>
    <li
      class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 px-2 py-1 rounded-md whitespace-nowrap"
    >
      About Us
    </li>
    <li
      class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 px-2 py-1 rounded-md"
    >
      News
    </li>
    <li class="hidden gap-2 items-center xl:flex whitespace-nowrap">
      <Icon iconName="phone" />
      <h3>+38 097 688 34 38</h3>
    </li>
    <li
      class="lg:flex hidden items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 px-2 py-2 font-bold rounded-md"
    >
      <span class="fi fi-gb rounded-sm"></span>
      <h4 class="text-xs select-none">ENG</h4>
    </li>
    <ul class="flex gap-3 flex-1 justify-end">
      <li><NavIcon name="bell" :notifications="2" /></li>
      <li><NavIcon name="heart" /></li>
      <li><NavIcon name="human" /></li>
      <li class="sm:block hidden"><NavIcon name="cart" text="Cart" /></li>
      <li class="lg:hidden block"><NavIcon name="burgher" /></li>
    </ul>
  </ul>
</template>
