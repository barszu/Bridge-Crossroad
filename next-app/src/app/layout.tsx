import type { Metadata } from "next";
import "./globals.css";
import ChakraCustomProvider from "@/components/chakra-config/custom-provider";

export const metadata: Metadata = {
  title: "Bridge CrossRoad",
  description: "Autorzy: Szymon Kubiczek, Bartłomiej Szubiak, Joanna Konieczny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pl">
      <body>
        <ChakraCustomProvider>{children}</ChakraCustomProvider>
      </body>
    </html>
  );
}
