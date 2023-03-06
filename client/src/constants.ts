import { ref, reactive, computed } from "vue";
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


export { selectedIngredients,categories, activeChip, productType, Ingredients, selectChip }
