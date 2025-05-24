import {
  Box,
  Text,
  Button,
  Checkbox,
  Field,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import FormLayout from "../FormLayout";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const t = useTranslations("Auth.LoginPage");
  return (
    <FormLayout>
      {/* Formularz logowania */}
      <Stack spaceY={1} mt={8}>
        {/* Nagłówek formularza */}
        <Box>
          <Heading fontSize="2xl" mb={4}>
            {t("title")}
          </Heading>
          <HStack>
            <Text fontSize="sm">{t("noAccount.text")}</Text>
            <Link
              fontSize="sm"
              as={NextLink}
              href="/auth/register"
              color="purple.500"
            >
              {t("noAccount.link")}
            </Link>
          </HStack>
        </Box>

        {/* TODO login */}
        <Field.Root>
          <Input
            placeholder={t("form.loginOrEmailField.placeholder")}
            borderRadius="md"
          />
        </Field.Root>

        {/* TODO haslo */}
        <Field.Root>
          <Input
            placeholder={t("form.loginOrEmailField.placeholder")}
            borderRadius="md"
          />
        </Field.Root>

        <HStack justify="space-between" pt={4}>
          {/* TODO checkbox */}
          <Checkbox.Root colorScheme="purple">
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>{t("utilities.rememberMe")}</Checkbox.Label>
          </Checkbox.Root>
          {/* TODO forgotpass */}
          <Link color="purple.500" fontSize="sm">
            {t("utilities.forgotPassword")}
          </Link>
        </HStack>

        <Stack pt={2}>
          {/* login via google */}
          <Button variant="outline" size="lg" w="100%" borderColor="gray.200">
            <FcGoogle />
            {t("submitButtons.loginWithGoogle")}
          </Button>
          {/* login */}
          <Button bgColor={"purple.500"} size="lg" w="100%">
            {t("submitButtons.login")}
          </Button>
        </Stack>
      </Stack>
    </FormLayout>
  );
}
