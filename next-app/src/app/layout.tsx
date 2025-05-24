import type { Metadata } from "next";
import "./globals.css";
import ChakraCustomProvider from "@/components/chakra-config/custom-provider";
import ReactQuerryProvider from "@/components/external-libs/react-querry/provider";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Bridge CrossRoad",
  description: "Autorzy: Szymon Kubiczek, Bartłomiej Szubiak, Joanna Konieczny",
};

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pl" className={montserrat.variable}>
      <body>
        <ChakraCustomProvider>
          <ReactQuerryProvider>{children}</ReactQuerryProvider>
        </ChakraCustomProvider>
      </body>
    </html>
  );
}
