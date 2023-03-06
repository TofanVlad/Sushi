<script setup lang="ts">
import { Ref, ref } from "vue";
import Icon from "./ui/Icon.vue";
import NavIcon from "./ui/NavIcon.vue";
import NavLink from "./ui/NavLink.vue";
import Cart from "./Cart.vue";
import Notifications from "./Notifications.vue";
import useModal from "../composables/modalBehaviour";
const { openModal } = useModal();
</script>

<template>
  <nav
    class="xl:mx-auto sm:mx-4 list-none mx-2 max-w-[1576px] rounded-xl flex items-center lg:gap-6 md:gap-4 gap-2 py-4 sm:pl-2 pl-1 md:pr-4 px-3 sm:mt-4 mt-2 bg-white shadow-md overflow-x-hidden z-30 fixed left-1/2 -translate-x-1/2"
  >
    <Icon iconName="logo" class="sm:block hidden" />
    <Icon iconName="logoSmall" class="sm:hidden block" />
    <NavLink text="Home" href="/" />
    <NavLink text="Delivery" href="/Products/rolls" />
    <NavLink text="About Us" href="/AboutUs" />
    <NavLink text="News" href="/News" :shrink="true" />
    <li class="hidden gap-2 items-center xl:flex whitespace-nowrap">
      <Icon iconName="phone" />
      <h3>+38 097 688 34 38</h3>
    </li>
    <li
      class="lg:flex hidden items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all px-2 py-2 font-bold rounded-md"
    >
      <span class="fi fi-gb rounded-sm"></span>
      <h4 class="text-xs select-none">ENG</h4>
    </li>
    <ul class="flex gap-3 flex-1 justify-end">
      <NavIcon
        name="bell"
        :notifications="2"
        @click="openModal('bell')"
        :active="false"
      />
      <NavIcon name="heart" :active="false" />
      <NavIcon name="human" :active="false" />
      <NavIcon
        name="cart"
        text="Cart"
        class="sm:flex hidden"
        :active="false"
        @click="openModal('cart')"
      />
      <li class="lg:hidden block">
        <NavIcon name="burgher" :active="false" />
      </li>
    </ul>
  </nav>
  <Cart />
  <Notifications />
</template>
