"use client";

// only for demo purposes

import { Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export default function DummyPageComponent() {
  const t = useTranslations("DummyPage");

  const { data, isFetched } = useQuery({
    queryKey: ["dummy"],
    queryFn: async () => {
      return (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
      ).json();
    },
  });

  return (
    <>
      <Heading>{t("text")}</Heading>
      <Heading>{t("description.text")}</Heading>
      <Heading>{isFetched ? JSON.stringify(data) : "fetching..."}</Heading>
    </>
  );
}
