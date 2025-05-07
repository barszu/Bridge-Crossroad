"use client";

// only for demo purposes

import { Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function DummyPageComponent() {
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
      <Heading>hello world!</Heading>
      <Heading>{isFetched ? JSON.stringify(data) : "fetching..."}</Heading>
    </>
  );
}
