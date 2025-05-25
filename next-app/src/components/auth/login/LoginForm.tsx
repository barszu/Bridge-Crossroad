import {
  Box,
  Text,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import FormLayout from "../FormLayout";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";
import ChakraLink from "@/components/chakra-config/ChakraLink";

export default function LoginForm() {
  const t = useTranslations("Auth.LoginPage");
  return (
    <FormLayout>
      {/* Login Form */}
      <Stack spacing={1} mt={8}>
        {/* Login, no account link */}
        <Box>
          <Heading fontSize="2xl" mb={4}>
            {t("title")}
          </Heading>
          <HStack>
            <Text fontSize="sm">{t("noAccount.text")}</Text>
            <ChakraLink fontSize="sm" href="/auth/register" color="accent.500">
              {t("noAccount.link")}
            </ChakraLink>
          </HStack>
        </Box>

        {/* TODO login */}
        <Input
          placeholder={t("form.loginOrEmailField.placeholder")}
          borderRadius="md"
        />

        {/* TODO haslo */}
        <Input
          placeholder={t("form.loginOrEmailField.placeholder")}
          borderRadius="md"
        />

        <HStack justify="space-between" pt={4}>
          {/* TODO checkbox */}
          <Checkbox defaultChecked colorScheme="accent">
            {t("utilities.rememberMe")}
          </Checkbox>

          {/* TODO forgotpass */}
          <ChakraLink
            color="accent.500"
            fontSize="sm"
            href="/auth/forgot-password"
          >
            {t("utilities.forgotPassword")}
          </ChakraLink>
        </HStack>

        <Stack pt={2}>
          {/* login via google */}
          <Button variant="outline" size="lg" leftIcon={<FcGoogle />}>
            {t("submitButtons.loginWithGoogle")}
          </Button>
          {/* login */}
          <Button colorScheme="accent" size="lg">
            {t("submitButtons.login")}
          </Button>
        </Stack>
      </Stack>
    </FormLayout>
  );
}
