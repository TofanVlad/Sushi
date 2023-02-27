<script setup lang="ts">
import Icon from "./ui/Icon.vue";
import Button from "./ui/Button.vue";
</script>
<template>
  <footer
    class="w-full bg-white 2xl:flex 2xl:gap-0 gap-4 grid lg:grid-cols-3 grid-cols-2 justify-between lg:px-32 md:px-16 px-8 md:py-14 py-8 text-sm lg:rounded-t-none rounded-t-xl"
  >
    <ul
      class="flex flex-col gap-4 lg:col-span-1 col-span-2 lg:justify-self-auto justify-self-center"
    >
      <li class="lg:mx-0 mx-auto">
        <Icon icon-name="logo" />
      </li>
      <li
        class="lg:flex hidden flex-col gap-2 justify-between items-center lg:max-w-[270px] max-w-max"
      >
        <Icon icon-name="appStore" class="cursor-pointer" />
        <Icon icon-name="googlePlay" />
      </li>
      <li class="text-gray-400 lg:block hidden">
        © Ninja Sushi. All rights reserved.
      </li>
      <li class="cursor-pointer mt-auto lg:block hidden">Privacy Policy</li>
      <li class="lg:hidden block font-normal text-gray-400 text-center">
        The range of Ninja Sushi includes rolls, sushi, sets and drinks for
        every taste.
      </li>
    </ul>
    <ul
      class="text-base w-max 2xl:justify-self-start lg:justify-self-center justify-self-start"
    >
      <h4 class="text-gray-400 text-sm mb-4">Navigation</h4>
      <li class="cursor-pointer mt-1">Home</li>
      <li class="cursor-pointer mt-1">Menu</li>
      <li class="cursor-pointer mt-1">Delivery</li>
      <li class="cursor-pointer mt-1">Jobs</li>
      <li class="cursor-pointer mt-1">News</li>
    </ul>
    <ul class="text-base w-max justify-self-end">
      <h4 class="text-gray-400 text-sm mb-4 font-normal">Checkout</h4>
      <li class="mt-1 sm:text-base text-sm">+38 (067) 436 61 27</li>
      <li class="mt-1 sm:text-base text-sm">+38 (066) 031 76 30</li>
      <li class="mt-1 sm:text-base text-sm">+38 (093) 924 98 28</li>
    </ul>
    <ul class="text-base w-max justify-self-start">
      <h4 class="text-gray-400 text-sm mb-4 font-normal">Working hours</h4>
      <li class="mt-1 sm:text-base text-xs">11:00 AM - 22:45 PM</li>
      <li class="mt-1 sm:text-base text-xs">22:45 PM - 6:00 AM</li>
      <li class="text-gray-400 mt-1 sm:text-base text-sm">
        Overnight delivery
      </li>
    </ul>
    <ul
      class="text-base w-max 2xl:justify-self-start lg:justify-self-center justify-self-end"
    >
      <h4 class="text-gray-400 text-sm mb-4 font-normal">Our socials</h4>
      <li class="cursor-pointer mt-1 w-max flex gap-2">
        <Icon
          icon-name="facebook"
          class="fill-gray-400 hover:fill-orange-400 cursor-pointer"
        />
        <Icon
          icon-name="instagram"
          class="fill-gray-400 hover:fill-orange-400 cursor-pointer"
        />
      </li>
      <li
        class="cursor-pointer mt-4 w-max flex gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 text-blue-500 items-center rounded-lg"
      >
        <Icon icon-name="telegram" class="fill-blue-500" />
        <h4>Support</h4>
      </li>
    </ul>
    <ul
      class="flex flex-col w-max gap-4 lg:justify-self-end justify-self-center lg:col-span-1 col-span-2"
    >
      <li class="font-bold text-4xl lg:block hidden">#NinjaSushi</li>
      <li class="font-normal text-gray-400 lg:block hidden">
        Ninja Sushi in photoes of our clients
      </li>
      <li
        class="lg:hidden block cursor-pointer text-gray-400 text-sm text-center"
      >
        Privacy Policy
      </li>
      <Button
        color="gray"
        text="Check Instagram"
        size="lg"
        text-color="lime"
        class="lg:block hidden"
      />
      <li class="flex gap-4 justify-end mt-auto lg:mx-0 mx-auto">
        <Icon icon-name="masterCard" />
        <Icon icon-name="visa" />
        <Icon icon-name="pb" />
      </li>
      <li class="lg:hidden block text-gray-400 text-sm">
        © Ninja Sushi. All right reserved.
      </li>
    </ul>
  </footer>
</template>
