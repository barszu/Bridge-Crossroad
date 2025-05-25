import { Box, Container, Flex, Image } from "@chakra-ui/react";
import * as React from "react";

export interface IAuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <>
      <Flex minH="100vh" position="relative">
        {/* left side */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
        >
          <Container maxW="md">{children}</Container>
        </Box>
        {/* right side with background image */}
        <Box
          flex="1"
          display={{ base: "none", md: "block" }}
          position="relative"
        >
          <Box position="absolute" right={0} zIndex={0}>
            <Image
              src="/auth/splash-art-lightmode.svg"
              alt="Background with a trophy"
              h="100vh"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
