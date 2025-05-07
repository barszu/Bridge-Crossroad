import { createSystem, defaultConfig } from "@chakra-ui/react";

// https://chakra-ui.com/docs/theming/tokens
// https://chakra-ui.com/docs/get-started/migration

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
});
