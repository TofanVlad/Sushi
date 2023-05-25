import { defineStore } from "pinia";
import axios from "axios";

import { IUser, IRegister, ILogin, ICartItems } from "./storeInterfaces";

const useUserStore = defineStore("user", {
  state: (): IUser => ({
    id: "",
    username: "",
    email: "",
    phone: "",
    cartItems: [],
    favourites: [],
    addresses: [],
    history: [],
  }),
  getters: {},
  actions: {
    async register(payload: IRegister) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          payload
        );
        console.log(res);
      } catch (error) {
        console.log("userStore -> register():", error);
      }
    },

    async login(payload: ILogin) {
      if (payload.username == "" || payload.password == "") return "No data!";
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          payload
        );
        this.id = data._id;
        this.username = data.username;
        this.email = data.email;
        this.phone = data.phone;
        this.cartItems = data.cartItems;
        this.favourites = data.favourites;
        this.addresses = data.addresses;
        this.history = data.history;
      } catch (error) {
        console.log("userStore -> login():", error);
      }
    },
    async addToCart(payload: ICartItems) {
      if (this.id == "") return;
      try {
        const item = this.cartItems.find((item) => item.id == payload.id);
        if (item) {
          item.quantity++;
        } else this.cartItems.push(payload);
        await axios.put(`http://localhost:5000/api/users/${this.id}`, {
          cartItems: this.cartItems,
        });
      } catch (error) {
        console.log("userStore -> addToCart():", error);
      }
    },

    async incrementCartItem(payload: ICartItems) {
      if (payload == undefined) return;
      try {
        const item = this.cartItems.find((item) => item.id == payload.id);
        if (item && item.quantity < 20) {
          item.quantity++;
        } else return;
        await axios.put(`http://localhost:5000/api/users/${this.id}`, {
          cartItems: this.cartItems,
        });
      } catch (error) {
        console.log("userStore -> incrementCartItem():", error);
      }
    },

    async decrementCartItem(payload: ICartItems) {
      if (payload == undefined) return;
      try {
        const item = this.cartItems.find((item) => item.id == payload.id);
        if (item && item.quantity > 1) {
          item.quantity--;
        } else return;
        await axios.put(`http://localhost:5000/api/users/${this.id}`, {
          cartItems: this.cartItems,
        });
      } catch (error) {
        console.log("userStore -> decrementCartItem():", error);
      }
    },

    async removeFromCart(payload: string) {
      if (this.id == "") return;

      try {
        this.cartItems = this.cartItems.filter((item) => item.id !== payload);
        await axios.put(`http://localhost:5000/api/users/${this.id}`, {
          cartItems: this.cartItems,
        });
      } catch (error) {
        console.log("userStore -> removeFromCart():", error);
      }
    },

    async addAddress(payload: string) {
      if (payload == undefined || this.id == "") return;
      try {
        this.addresses.push(payload);
        await axios.put(`http://localhost:5000/api/users/${this.id}`, {
          addresses: this.addresses,
        });
      } catch (error) {
        console.log("userStore -> addAddress():", error);
      }
    },

    async clearCart() {
      try {
        this.cartItems = [];
        await axios.put(`http://localhost:5000/api/users/${this.id}`, {
          cartItems: this.cartItems,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async checkUniqueUsername(payload: string) {
      try {
        const { data } = await axios.post(
          `http://localhost:5000/api/users/${payload}`
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default useUserStore;
