<script setup lang="ts">
import { defineComponent, computed } from "vue";

import Logo from "./icons/Logo.vue";
import Rolls from "./icons/Rolls.vue";
import Sushi from "./icons/Sushi.vue";
import Sets from "./icons/Sets.vue";
import Bowls from "./icons/Bowls.vue";
import Drinks from "./icons/Drinks.vue";
import Sauces from "./icons/Sauces.vue";
import Unknown from "./icons/Unknown.vue";

import Phone from "./icons/Phone.vue";

import Bell from "./icons/Bell.vue";
import Heart from "./icons/Heart.vue";
import Human from "./icons/Human.vue";
import Cart from "./icons/Cart.vue";
import Burgher from "./icons/Burgher.vue";

interface IIcons {
  [key: string]: ReturnType<typeof defineComponent>;
}

const icons: IIcons = {
  logo: Logo,
  rolls: Rolls,
  sushi: Sushi,
  sets: Sets,
  bowls: Bowls,
  drinks: Drinks,
  sauces: Sauces,
  unknown: Unknown,
  phone: Phone,
  bell: Bell,
  heart: Heart,
  human: Human,
  cart: Cart,
  burgher: Burgher,
};
const props = defineProps<{ iconName: string }>();

const getIconName = computed(() => {
  return icons[props.iconName];
});
</script>

<template>
  <component :is="getIconName"></component>
</template>
