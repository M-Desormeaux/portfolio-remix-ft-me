import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/Landing";
import { Skillset } from "~/components/Skillset";

export const meta: MetaFunction = () => {
  return [
    { title: "MikeDez | Home" },
    {
      name: "description",
      content:
        "Frontend Developer with 2 years of expertise in responsive and accessible interfaces. Looking forward to building interesting applications.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Landing />
      <Skillset />
    </>
  );
}
