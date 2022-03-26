import { ComponentType } from "react";
export declare type JSXElements = keyof JSX.IntrinsicElements;
export interface Styled {
    <Tag extends JSXElements, Variants>(tag: Tag, recipes: any, variants: Variants): <Props>() => ComponentType<JSX.IntrinsicElements[Tag] & ConvertVariantType<Variants> & Props & {
        as?: JSXElements;
    }>;
    <Tag extends ComponentType<any>, Variants>(tag: Tag, recipes: any, variants: Variants): <Props>() => ComponentType<ConvertVariantType<Variants> & Props>;
}
export interface Styled {
    <Tag extends JSXElements, Variants>(tag: Tag, recipes: any, variants: Variants): <Props>() => ComponentType<JSX.IntrinsicElements[Tag] & ConvertVariantType<Variants> & Props & {
        as?: JSXElements;
    }>;
    <Tag extends ComponentType<unknown>, Variants>(tag: Tag, recipes: any, variants: Variants): <Props>() => ComponentType<ConvertVariantType<Variants> & Props>;
}
export declare type ConvertVariantType<Variants> = Omit<{
    [Property in keyof Variants]?: keyof Variants[Property] extends "true" ? boolean : keyof Variants[Property];
}, "base">;
