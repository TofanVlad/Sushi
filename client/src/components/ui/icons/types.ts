import Logo from "./Logo.vue";
import Rolls from "./Rolls.vue";
import Sushi from "./Sushi.vue";
import Sets from "./Sets.vue";
import Bowls from "./Bowls.vue";
import Drinks from "./Drinks.vue";
import Sauces from "./Sauces.vue";
import Unknown from "./Unknown.vue";

import Phone from "./Phone.vue";

import Bell from "./Bell.vue";
import Heart from "./Heart.vue";
import Human from "./Human.vue";
import Cart from "./Cart.vue";
import Burgher from "./Burgher.vue";

import Plus from "./Plus.vue";

import Hot from "./Hot.vue";
import Plant from "./Plant.vue";
import Lactose from "./Lactose.vue";

export const icons = {
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
  plus: Plus,
  hot: Hot,
  plant: Plant,
  lactose: Lactose,
};
export type TProps = keyof typeof icons;
