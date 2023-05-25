<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import NavIcon from "./ui/NavIcon.vue";
import NavLink from "./ui/NavLink.vue";
import Cart from "./Cart.vue";
import Notifications from "./Notifications.vue";
import BurgherMenu from "./BurgherMenu.vue";
import Authentication from "./Authentication.vue";
import useModal from "../composables/modalBehaviour";
import useUserStore from "@/store/userStore";
const store = useUserStore();
const { openModal, openedModal } = useModal();
</script>

<template>
  <nav
    class="list-none max-w-[1576px] rounded-xl flex items-center lg:gap-6 md:gap-4 gap-2 py-4 sm:pl-2 pl-1 md:pr-2 px-3 sm:mt-4 mt-2 bg-white shadow-md overflow-x-hidden z-30 fixed left-1/2 -translate-x-1/2"
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
        :active="openedModal === 'bell'"
      />
      <NavIcon name="heart" :active="false" />
      <router-link
        :to="`/Profile/${store.$state.username}`"
        v-if="store.$state.id !== ''"
      >
        <NavIcon name="human" :active="openedModal === 'human'" />
      </router-link>
      <NavIcon
        v-else
        name="human"
        :active="openedModal === 'human'"
        @click="openModal('human')"
      />
      <NavIcon
        name="cart"
        text="Cart"
        class="sm:flex hidden"
        :active="openedModal === 'cart'"
        @click="openModal('cart')"
      />
      <li class="lg:hidden block" @click="openModal('burgher')">
        <NavIcon name="burgher" :active="openedModal === 'burgher'" />
      </li>
    </ul>
  </nav>
  <Cart />
  <Notifications />
  <BurgherMenu />
  <Authentication />
</template>
