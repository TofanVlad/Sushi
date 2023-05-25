import { Ref, ref, reactive, computed } from "vue";
import { TIcons, TCategories } from "./components/ui/icons/types";

export interface TProductType {
  active: boolean;
  iconName: TIcons;
  text: string;
}

const Ingredients = reactive([
  { name: "Salmon", active: false },
  { name: "Nori", active: false },
  { name: "Rice", active: false },
  { name: "Eel", active: false },
  { name: "Tuna", active: false },
  { name: "Seasame", active: false },
  { name: "Chicken Breast", active: false },
  { name: "Tofu", active: false },
  { name: "Cream Cheese", active: false },
  { name: "Avocado", active: false },
  { name: "Tomato", active: false },
  { name: "Mushroom", active: false },
]);

const productType: TProductType[] = reactive([
  { active: false, iconName: "hot", text: "Spicy" },
  { active: false, iconName: "vegetarian", text: "Vegetarian" },
  { active: false, iconName: "lactose", text: "Lactose-free" },
]);

const prodCategories = ref(["All", "Classic", "Maki", "Baked", "Sweet"]);

const categories: TCategories[] = ["rolls", "sushi", "sets", "bowls", "drinks"];

const activeChip = reactive({
  id: 0,
  value: categories[0],
});

const selectChip = (index: number) => {
  activeChip.id = index;
  activeChip.value = categories[index];
};

const selectedIngredients = computed(() => {
  let selected = 0;
  Ingredients.map((item) => item.active && selected++);
  productType.map((item) => item.active && selected++);
  return selected;
});

const payment = [
  "Cash",
  "By terminal",
  "Online payment",
  "Pay through PayPal",
] as const;

const cities = ["London", "Amsterdam", "Chisinau", "Berlin"] as const;

const activeCity: Ref<(typeof cities)[number]> = ref("London");

const restaurants = {
  London: ["35 Broadway", "52 Albert Road", "95 Windsor Road", "77 Kingsway"],
  Amsterdam: [
    "823 Loenermark",
    "2025 Arthur Van Schendelstraat",
    "1728 Van Der Palmkade",
  ],
  Chisinau: ["Blvd. Dacia", "Str. Kiev"],
  Berlin: [
    "Karl-Liebknecht-Str. 45",
    "Rudi-Dutschke-Straße 6",
    "Heidelberger Str. 23",
    "Kleine Hamburger Str. 39",
  ],
};

const promoCodes = ["GRISA123", "GHE192SR", "JWKM12WZ", "ORFSQLPO"];

const checkInfo = ["Adress", "Time", "Payment method", "Total sum"];

const checkProgressStages = [
  "Order Confirmation",
  "Cooking",
  "Waiting for Courier",
  "Courier on the way",
  "Courier arrived",
];

export type TPayment = Ref<(typeof payment)[number]>;

const profileMenuLines = {
  box: "Order History",
  heart: "Favourite Dishes",
  map: "Delivery address",
  sun: "Site theme",
};
const selectedProfileMenuLine: Ref<"map" | "box" | "heart" | "sun"> =
  ref("box");

const selectProfileMenuLine = (
  icon: Extract<TIcons, "map" | "heart" | "box" | "sun">
) => {
  selectedProfileMenuLine.value = icon;
};

type TProfileSectionInfo = {
  title: string;
  icon: TIcons;
  text: string;
  desc: string;
  buttonText?: string;
};

const profileSectionInfo: Ref<
  Record<"box" | "map" | "heart" | "sun", TProfileSectionInfo>
> = ref({
  box: {
    title: "Order History",
    icon: "addressLess" as TIcons,
    text: " You have no orders",
    desc: "Go to the category you are interested in and place your first order",
    buttonText: "Add address",
  },
  heart: {
    title: "Favourite dishes",
    icon: "heartLess" as TIcons,
    text: "You haven't added anything to your favourites yet",
    desc: "Go to the category you are interested in and mark your favorite",
  },
  map: {
    title: "Orders Addresses",
    icon: "historyLess" as TIcons,
    text: "You have no saved addresses",
    desc: "Go to the category you are interested in and make your first order and the address will be saved automatically",
  },
  sun: {
    title: "",
    icon: "sun" as TIcons,
    text: "",
    desc: "",
  },
});

export {
  selectedIngredients,
  categories,
  prodCategories,
  activeChip,
  productType,
  Ingredients,
  selectChip,
  payment,
  cities,
  restaurants,
  activeCity,
  promoCodes,
  checkInfo,
  checkProgressStages,
  profileMenuLines,
  selectedProfileMenuLine,
  selectProfileMenuLine,
  profileSectionInfo,
};
