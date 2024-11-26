import { defineStore } from "pinia";
import addressesJSON from "@/mocks/addresses.json";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    addresses: addressesJSON,
    orders: [],
  }),
  getters: {},
  actions: {
    setAddresses(addresses) {
      this.addresses = addresses;
    },
    setOrders(orders) {
      this.orders = orders;
    },
  },
});
