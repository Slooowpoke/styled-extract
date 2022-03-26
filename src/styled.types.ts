import { ComponentType } from "react";
import { RuntimeFn } from "@vanilla-extract/recipes/dist/declarations/src/types";

export type JSXElements = keyof JSX.IntrinsicElements;

export interface Styled {
  <Tag extends JSXElements, Variants>(
    tag: Tag,
    recipes: RuntimeFn<any>,
    variants: Variants
  ): <Props>() => ComponentType<
    JSX.IntrinsicElements[Tag] &
      ConvertVariantType<Variants> &
      Props & { as?: JSXElements }
  >;

  <Tag extends ComponentType<any>, Variants>(
    tag: Tag,
    recipes: RuntimeFn<any>,
    variants: Variants
  ): <Props>() => ComponentType<ConvertVariantType<Variants> & Props>;
}

export type ConvertVariantType<Variants> = Omit<
  {
    [Property in keyof Variants]?: keyof Variants[Property] extends "true"
      ? boolean
      : keyof Variants[Property];
  },
  "base"
>;
