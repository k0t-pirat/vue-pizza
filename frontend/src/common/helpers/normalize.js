import doughSizes from "@/common/data/doughSizes";
import ingredients from "@/common/data/ingredients";
import sauces from "@/common/data/sauces";
import sizes from "@/common/data/sizes";

const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizes[size.id],
  };
};

export const normalizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  };
};

export const normalizeSauces = (sauce) => {
  return {
    ...sauce,
    value: sauces[sauce.id],
  };
};

export const fixDoughs = (doughs) => {
  const fixedItems = [];
  const doughNames = new Set();

  for (const dough of doughs) {
    if (!doughNames.has(dough.name)) {
      doughNames.add(dough.name);
      fixedItems.push(normalizeDough(dough));
    }
  }

  return fixedItems;
};
