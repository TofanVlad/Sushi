import Logo from "./Logo.vue";
import LogoSmall from "./LogoSmall.vue";

import Rolls from "./Rolls.vue";
import RollsActive from "./RollsActive.vue";

import Sushi from "./Sushi.vue";
import SushiActive from "./SushiActive.vue";

import Sets from "./Sets.vue";
import SetsActive from "./SetsActive.vue";

import Bowls from "./Bowls.vue";
import BowlsActive from "./BowlsActive.vue";

import Drinks from "./Drinks.vue";
import DrinksActive from "./DrinksActive.vue";

import Sauces from "./Sauces.vue";
import SaucesActive from "./SaucesActive.vue";

import Unknown from "./Unknown.vue";

import Phone from "./Phone.vue";

import Bell from "./Bell.vue";
import Heart from "./Heart.vue";
import Human from "./Human.vue";
import Cart from "./Cart.vue";
import Burgher from "./Burgher.vue";

import Plus from "./Plus.vue";
import PlusSmall from "./PlusSmall.vue";
import Minus from "./Minus.vue";
import MinusSmall from "./MinusSmall.vue";

import Hot from "./Hot.vue";
import Plant from "./Plant.vue";
import Lactose from "./Lactose.vue";

import AppStore from "./AppStore.vue";
import GooglePlay from "./GooglePlay.vue";
import Facebook from "./Facebook.vue";
import Instagram from "./Instagram.vue";
import Telegram from "./Telegram.vue";
import PB from "./PB.vue";
import Visa from "./Visa.vue";
import MasterCard from "./MasterCard.vue";
import Error from "./404.vue";
import House from "./House.vue";
import ShoppingBag from "./ShoppingBag.vue";

import DropDown from "./DropDown.vue";
import LeftArrow from "./LeftArrow.vue";
import RightArrow from "./RightArrow.vue";

import CategoryMenu from "./CategoryMenu.vue";
import Cross from "./Cross.vue";

export const icons = {
  logo: Logo,
  logoSmall: LogoSmall,
  rolls: Rolls,
  rollsActive: RollsActive,
  sushi: Sushi,
  sushiActive: SushiActive,
  sets: Sets,
  setsActive: SetsActive,
  bowls: Bowls,
  bowlsActive: BowlsActive,
  drinks: Drinks,
  drinksActive: DrinksActive,
  sauces: Sauces,
  saucesActive: SaucesActive,
  unknown: Unknown,
  phone: Phone,
  bell: Bell,
  heart: Heart,
  human: Human,
  cart: Cart,
  burgher: Burgher,
  plus: Plus,
  plusSmall: PlusSmall,
  minus: Minus,
  minusSmall: MinusSmall,
  hot: Hot,
  plant: Plant,
  lactose: Lactose,
  appStore: AppStore,
  googlePlay: GooglePlay,
  facebook: Facebook,
  instagram: Instagram,
  telegram: Telegram,
  pb: PB,
  visa: Visa,
  masterCard: MasterCard,
  error: Error,
  house: House,
  shoppingBag: ShoppingBag,
  dropDown: DropDown,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  categoryMenu: CategoryMenu,
  cross: Cross,
};
export type TIcons = keyof typeof icons;

export type TCategories =
  | "rolls"
  | "rollsActive"
  | "sushi"
  | "sushiActive"
  | "sets"
  | "setsActive"
  | "bowls"
  | "bowlsActive"
  | "drinks"
  | "drinksActive"
  | "sauces"
  | "saucesActive";
