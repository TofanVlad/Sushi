<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import NavIcon from "./ui/NavIcon.vue";
</script>

<template>
  <nav
    class="xl:mx-auto sm:mx-4 list-none mx-2 max-w-[1576px] rounded-xl flex items-center lg:gap-6 md:gap-4 gap-2 py-4 sm:pl-2 pl-1 md:pr-4 px-3 sm:mt-4 mt-2 bg-white overflow-x-hidden"
  >
    <li>
      <Icon iconName="logo" class="sm:block hidden" />
      <Icon iconName="logoSmall" class="sm:hidden block" />
    </li>
    <router-link
      to="/"
      class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 px-2 py-1 rounded-md"
      >Home</router-link
    >
    <router-link
      to="/Product"
      class="cursor-pointer select-none hidden lg:block hover:bg-gray-100 px-2 py-1 rounded-md"
      >Delivery</router-link
    >
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
  </nav>
</template>
