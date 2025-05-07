"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

interface ChakraProviderPropsExtended extends ColorModeProviderProps {
  system?: typeof defaultSystem;
}

export function Provider(props: ChakraProviderPropsExtended) {
  return (
    <ChakraProvider value={props?.system || defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
