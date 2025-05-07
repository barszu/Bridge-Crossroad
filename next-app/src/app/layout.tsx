import type { Metadata } from "next";
import "./globals.css";
import ChakraCustomProvider from "@/components/chakra-config/custom-provider";
import ReactQuerryProvider from "@/components/external-libs/react-querry/provider";

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
        <ChakraCustomProvider>
          <ReactQuerryProvider>{children}</ReactQuerryProvider>
        </ChakraCustomProvider>
      </body>
    </html>
  );
}
