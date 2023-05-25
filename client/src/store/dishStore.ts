import { defineStore } from "pinia";
import axios from "axios";

import { IDish, IDishStore } from "./storeInterfaces";

import { TProductType } from "../constants";

const useDishStore = defineStore("dish", {
  state: (): IDishStore => ({
    dishes: [],
    cartDishes: [],
  }),
  getters: {
    GET_DISH_DATA(store) {
      return (id: string) => {
        return store.dishes?.find((dish) => dish._id == id);
      };
    },
    GET_RECOMMEND(store) {
      let out: Array<IDish> = [];
      store.dishes?.map((dish) => out.length < 4 && out.push(dish));
      return out;
    },
    GET_FOUR_DRINKS(store) {
      return store.dishes?.filter((dish) => dish.category == "drinks");
    },
    GET_HOME(store) {
      return (category: string) => {
        return store.dishes?.filter(
          (dish) => dish.category == category.toLowerCase()
        );
      };
    },
    GET_ROLLS(store) {
      return (products: string[]) => {
        return store.dishes?.filter(
          (dish) =>
            dish.category == "rolls" &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
      };
    },
    GET_SUSHI(store) {
      return (products: string[]) => {
        return store.dishes?.filter(
          (dish) =>
            dish.category == "sushi" &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
      };
    },
    GET_BOWLS(store) {
      return (products: string[]) => {
        return store.dishes?.filter(
          (dish) =>
            dish.category == "bowls" &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
      };
    },
    GET_SETS(store) {
      return (products: string[]) => {
        return store.dishes?.filter(
          (dish) =>
            dish.category == "sets" &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
      };
    },
    GET_DRINKS(store) {
      return (products: string[]) => {
        return store.dishes?.filter(
          (dish) =>
            dish.category == "drinks" &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
      };
    },
    GET_SAUCES(store) {
      return (products: string[]) => {
        return store.dishes?.filter(
          (dish) =>
            dish.category == "sauces" &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
      };
    },
    GET_SPICY: (store) => {
      return (category: string, products: string[]) =>
        store.dishes?.filter(
          (dish) =>
            dish.specs.includes("hot") &&
            dish.category == category &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
    },
    GET_VEGETARIAN(store) {
      return (category: string, products: string[]) =>
        store.dishes?.filter(
          (dish) =>
            dish.specs.includes("vegetarian") &&
            dish.category == category &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
    },
    GET_LACTOSE(store) {
      return (category: string, products: string[]) =>
        store.dishes?.filter(
          (dish) =>
            dish.specs.includes("lactose") &&
            dish.category == category &&
            products.every((ingredient) =>
              dish.ingredients.includes(ingredient)
            )
        );
    },
    GET_DISH_FILTER(store) {
      return (specs: TProductType[], category: string, products: string[]) => {
        if (specs[0].active) return this.GET_SPICY(category, products);
        if (specs[1].active) return this.GET_VEGETARIAN(category, products);
        if (specs[2].active) return this.GET_LACTOSE(category, products);
        if (!specs[0].active && !specs[1].active && !specs[2].active) {
          switch (category) {
            case "rolls":
              return this.GET_ROLLS(products);
            case "sushi":
              return this.GET_SUSHI(products);
            case "sets":
              return this.GET_SETS(products);
            case "bowls":
              return this.GET_BOWLS(products);
            case "drinks":
              return this.GET_DRINKS(products);
            case "sauces":
              return this.GET_SAUCES(products);
          }
        }
      };
    },
  },
  actions: {
    async createDish(payload: IDish) {
      try {
        await axios.post("http://localhost:5000/api/dishes/", payload);
      } catch (error) {
        console.log("dishStore -> createDish():", error);
      }
    },
    async getDishes() {
      try {
        const { data } = await axios.get("http://localhost:5000/api/dishes/");
        this.dishes = data;
      } catch (error) {
        console.log("dishStore -> getDishes():", error);
      }
    },
    async getDishByIds(payload: any) {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/dishes/getMany/",
          { ids: payload }
        );
        this.cartDishes = data;
      } catch (error) {
        console.log("dishStore -> getDishByIds():", error);
      }
    },
  },
});

export default useDishStore;
