# `styled-extract`

A tiny utility to make type-safe variant components with vanilla extract and react.

## Install

```sh
npm install --save styled-extract
```

## Motivation

Vanilla extract is a great but if you're used to writing components with variant props using styled-system or stitches,
it feels like writing boilerplate code.

This package is tiny, but borrows ideas from Emotion, Dessert Box and Stitches to turn this:

```tsx
// Text.tsx
import { textRecipe, TextVariants } from './textRecipe.css.ts';

export const Text: FC<TextVariants> = ({ variant, color }) => (
  <div className="${textRecipe({
    variant,
    color
  })}">
    {children}
  </div>
)
```

Into this:

```tsx
// Text.tsx
import styled from "styled"
import { textRecipe, variants } from './textRecipe.css.ts';

export const Text = styled("div", textRecipe, variants)();
```

## Usage

You must export your variants from your .css.ts instead of using the immediately inside the recipe.

Your .css.ts file would look like:

```jsx
// textRecipe.css.ts
export const variants = {
    variant: {
        title: {
            fontSize: "100px",
            fontWeight: 600
        },
        subtitle: {
            fontSize: "20px",
            fontWeight: 500
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

export const textRecipe = recipe({
    variants,
});
```

Then create your components with the styled tag:

```tsx
// Text.tsx
import styled from "styled"
import { textRecipe, variants } from './textRecipe.css.ts';

export const Text = styled("div", textRecipe, variants)();
```

And use the component with its type safe props:

```tsx
<Text variant="title" color="red">
  Groovy
</Text>

// Type error
<Text variant="not-a-real-option">
  Groovy
</Text>
```

It also supports a polymorphic as prop for **simple** use cases.

```tsx
<Text variant="title" color="red" as="h1">
  Groovy
</Text>
```

## Usage with Radix UI

Instead of:

```tsx
import {labelRecipe, variants} from './textRecipe.css.ts';
import * as LabelPrimitive from '@radix-ui/react-label';

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive>,
  React.ComponentProps<typeof LabelPrimitive>>((props, forwardedRef) => {
  const {className, variant, color, ...itemProps} = props;
  return (
    <LabelPrimitive.Root
      {...itemProps}
      ref={forwardedRef}
      className={`${labelRecipe({
        variant,
        color
      })} ${className}`}
    />
  );
});
```

You can write:

```tsx
import {labelRecipe, variants} from './textRecipe.css.ts';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = styled(LabelPrimitive.Root, labelRecipe, variants)();
```

