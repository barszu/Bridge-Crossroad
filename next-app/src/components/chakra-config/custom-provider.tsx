"use client";

// needed for better compatibility :)

// context for llms
// https://chakra-ui.com/docs/get-started/llms

// help
// https://chakra-ui.com/docs/get-started/migration
// https://chakra-ui.com/docs/components/concepts/overview
// https://chakra-ui.com/docs/charts/pie-chart
// https://chakra-ui.com/docs/styling/overview
// https://chakra-ui.com/docs/theming/overview

import { Provider as ChakraDefaultProvider } from "@/components/external-libs/chakra-default/ui/provider";
import { system } from "@/components/chakra-config/system";

export default function CustomChakraProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraDefaultProvider system={system}>{children}</ChakraDefaultProvider>
  );
}
