import { Box, BoxProps, Heading, HStack, Text } from "@chakra-ui/react";
import ChakraLink from "../chakra-config/ChakraLink";

export interface IFormHeadingProps {
  title: string;
  noAccountText: string;
  noAccountLink: string;
  onElementProps?: BoxProps;
}

export default function FormHeading(props: IFormHeadingProps) {
  return (
    <Box {...props.onElementProps}>
      <Heading fontSize="2xl" mb={4}>
        {props.title}
      </Heading>
      <HStack>
        <Text>{props.noAccountText}</Text>
        <ChakraLink href="/auth/register" color="accent.500">
          {props.noAccountLink}
        </ChakraLink>
      </HStack>
    </Box>
  );
}
