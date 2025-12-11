import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { builder } from "@builder.io/react";

builder.init("75764a9d262a4ded8bc94e622655cb4d");

const BuilderComponent = dynamic(
  () => import("@builder.io/react").then(m => m.BuilderComponent),
  { ssr: false }
);

export default function BuilderPage() {
  const router = useRouter();
  const path = router.asPath || "/";

  return (
    <BuilderComponent
      apiKey="75764a9d262a4ded8bc94e622655cb4d"
      model="page"
      options={{ url: path }}
    />
  );
}
