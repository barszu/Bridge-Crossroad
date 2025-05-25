"use client";

import { Button, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import FormLayout from "../FormLayout";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";
import ChakraLink from "@/components/chakra-config/ChakraLink";
import FormHeading from "../FormHeading";
import FormInput from "../FormInput";

type FormValues = {
  loginOrEmail: string;
  password: string;
};

export default function LoginForm() {
  const t = useTranslations("Auth.LoginPage");
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} mt={8}>
          <FormHeading
            title={t("title")}
            noAccountText={t("noAccount.text")}
            noAccountLink={t("noAccount.link")}
          />

          <Controller
            control={control}
            name="loginOrEmail"
            defaultValue=""
            render={({ field }) => (
              <FormInput
                placeholder={t("form.loginOrEmailField.placeholder")}
                errorMessage={t("form.loginOrEmailField.errorMessage")}
                isInvalid={false} // TODO: obsługa walidacji
                id="loginOrEmail"
                isRequired={true}
                type="text"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <FormInput
                placeholder={t("form.passwordField.placeholder")}
                errorMessage={t("form.passwordField.errorMessage")}
                isInvalid={false} // TODO: obsługa walidacji
                id="password"
                isRequired={true}
                type="password"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <HStack justify="space-between" pt={4}>
            <Checkbox defaultChecked colorScheme="accent" size="md">
              {t("utilities.rememberMe")}
            </Checkbox>
            <ChakraLink color="accent.500" href="/auth/forgot-password">
              {t("utilities.forgotPassword")}
            </ChakraLink>
          </HStack>

          <Stack spacing={3}>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<FcGoogle />}
              type="button"
            >
              {t("submitButtons.loginWithGoogle")}
            </Button>
            <Button colorScheme="accent" size="lg" type="submit">
              {t("submitButtons.login")}
            </Button>
          </Stack>
        </Stack>
      </form>
    </FormLayout>
  );
}
