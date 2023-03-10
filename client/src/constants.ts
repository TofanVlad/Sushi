import { Ref, ref, reactive, computed } from "vue";
import { TIcons } from "./components/ui/icons/types";

interface TProductType {
  active: boolean;
  iconName: TIcons;
  text: string;
}

const Ingredients = reactive([
  { name: "Salmon", active: false },
  { name: "Eel", active: false },
  { name: "Tuna", active: false },
  { name: "Chicken Breast", active: false },
  { name: "Tofu", active: false },
  { name: "Cream Cheese", active: false },
  { name: "Avocado", active: false },
  { name: "Tomato", active: false },
  { name: "Mushroom", active: false },
]);

const productType: TProductType[] = reactive([
  { active: false, iconName: "hot", text: "Spicy" },
  { active: false, iconName: "plant", text: "Vegetarian" },
  { active: false, iconName: "lactose", text: "Lactose-free" },
]);

const categories = ref(["All", "Classic", "Maki", "Baked", "Sweet"]);

const activeChip = reactive({
  id: 0,
  value: categories.value[0],
});

const selectChip = (index: number) => {
  activeChip.id = index;
  activeChip.value = categories.value[index];
};

const selectedIngredients = computed(() => {
  let selected = 0;
  Ingredients.map((item) => item.active && selected++);
  productType.map((item) => item.active && selected++);
  return selected;
});

const adresses: Ref<{ title: string; text: string }[]> = ref([
  {
    title: "Киев, Николая Краснова, 16",
    text: "Подьезд 5, этаж 3, квартира 104",
  },
  {
    title: "Киев, Большая Китаевская, 16",
    text: "Подьезд 5, этаж 3, квартира 104",
  },
  {
    title: "Львов, Октябрьская, 6",
    text: "Подьезд 5, этаж 3, квартира 104",
  },
]);

const payment = [
  "Cash",
  "By terminal",
  "Online payment",
  "Pay through PayPal",
] as const;

const cities = ["London", "Amsterdam", "Chisinau", "Berlin"] as const;

const activeCity: Ref<typeof cities[number]> = ref("London");

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

const promoCodes = ['GRISA123','GHE192SR','JWKM12WZ','ORFSQLPO']

export type TPayment = Ref<typeof payment[number]>;

export {
  selectedIngredients,
  categories,
  activeChip,
  productType,
  Ingredients,
  selectChip,
  adresses,
  payment,
  cities,
  restaurants,
  activeCity,
  promoCodes
};
