import { ingredientsQuantity } from "@/common/helpers/ingredients-quantity";
import { pizzaPrice } from "@/common/helpers/pizza-price";
import { useDataStore } from "@/stores/data";
import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizza", {
  state: () => ({
    index: null,
    name: "",
    sauceId: 0,
    doughId: 0,
    sizeId: 0,
    ingredients: [],
  }),
  getters: {
    sauce: (state) => {
      const data = useDataStore();
      return data.sauces.find((i) => i.id === state.sauceId) ?? data.sauces[0];
    },
    dough: (state) => {
      const data = useDataStore();
      return data.doughs.find((i) => i.id === state.doughId) ?? data.doughs[0];
    },
    size: (state) => {
      const data = useDataStore();
      return data.sizes.find((i) => i.id === state.sizeId) ?? data.sizes[0];
    },
    ingredientsExtended: (state) => {
      const data = useDataStore();
      const pizzaIngredientIds = state.ingredients.map((i) => i.ingredientId);
      return data.ingredients
        .filter((i) => pizzaIngredientIds.includes(i.id))
        .map((i, idx) => {
          return {
            ...i,
            quantity: state.ingredients[idx]?.quantity ?? 0,
          };
        });
    },
    price: (state) => {
      return pizzaPrice(state);
    },
    ingredientQuantities: (state) => {
      return ingredientsQuantity(state);
    },
  },
  actions: {},
});
