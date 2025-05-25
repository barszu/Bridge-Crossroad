import { Button, Checkbox, HStack, Stack } from "@chakra-ui/react";
import FormLayout from "../FormLayout";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";
import ChakraLink from "@/components/chakra-config/ChakraLink";
import FormHeading from "../FormHeading";
import FormInput from "../FormInput";

export default function LoginForm() {
  const t = useTranslations("Auth.LoginPage");
  return (
    <FormLayout>
      <Stack spacing={3} mt={8}>
        <FormHeading
          title={t("title")}
          noAccountText={t("noAccount.text")}
          noAccountLink={t("noAccount.link")}
        />

        <FormInput
          placeholder={t("form.loginOrEmailField.placeholder")}
          errorMessage={t("form.loginOrEmailField.errorMessage")}
          isInvalid={false} //TODO
          id="loginOrEmail"
          isRequired={true}
        />

        <FormInput
          placeholder={t("form.passwordField.placeholder")}
          errorMessage={t("form.passwordField.errorMessage")}
          isInvalid={false} //TODO
          id="password"
          isRequired={true}
          type="password"
        />

        <HStack justify="space-between" pt={4}>
          {/* TODO checkbox */}
          <Checkbox defaultChecked colorScheme="accent" size="md">
            {t("utilities.rememberMe")}
          </Checkbox>

          {/* TODO forgotpass */}
          <ChakraLink color="accent.500" href="/auth/forgot-password">
            {t("utilities.forgotPassword")}
          </ChakraLink>
        </HStack>

        <Stack spacing={3}>
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
