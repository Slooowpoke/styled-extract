import { recipe } from "@vanilla-extract/recipes";

export const variants = {
  variant: {
    title: {
      fontSize: "100px",
    },
  },
  color: {
    red: {
      background: "red",
    },
    blue: {
      background: "blue",
    },
  },
};

export const demoRecipe = recipe({
  base: {},
  variants,
});
