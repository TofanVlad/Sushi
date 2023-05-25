import { defineStore } from "pinia";
import axios from "axios";

import { IOrderStore, IOrder } from "./storeInterfaces";

const useOrderStore = defineStore("order", {
  state: (): IOrderStore => ({
    orders: [],
  }),
  getters: {
    GET_LAST_ORDER(store) {
      return store.orders?.pop();
    },
  },
  actions: {
    async createOrder(payload: IOrder) {
      if (!payload) return;
      try {
        await axios.post(`http://localhost:5000/api/orders/`, payload);
      } catch (error) {
        console.log(error);
      }
    },
    async getUsersOrders(payload: string) {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/orders?username=${payload}`
        );
        this.orders = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOrderData(payload: string) {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/orders/${payload}`
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default useOrderStore;
