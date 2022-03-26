import { ComponentType, createElement, forwardRef } from "react";
import { JSXElements, Styled } from "./styled.types";
import { RuntimeFn } from "@vanilla-extract/recipes/dist/declarations/src/types";

export const styled: Styled = (
  tag: JSXElements | ComponentType<any>,
  recipes: RuntimeFn<any>,
  variants: Record<string, unknown>
) => {
  return function () {
    return forwardRef<typeof tag, any>(
      ({ as = tag, className, ...props }, ref) => {
        const recipeOptions: Record<string, string> = {};

        Object.keys(variants).forEach((key) => {
          recipeOptions[key] = props[key];
        });

        const classNames = recipes(recipeOptions);

        return createElement(as, {
          ref,
          ...props,
          className: `${className} ${classNames}`,
        });
      }
    );
  };
};
