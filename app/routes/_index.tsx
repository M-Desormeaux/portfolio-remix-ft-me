import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/Landing/Landing";
import { Skillset } from "~/components/Skillset/Skillset";

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
      <div className=" p-5">
        <div className="w-full rounded-md border border-yellow-600 bg-yellow-100 px-4 py-2">
          Apologies, but I do not have any projects to show off just yet. Come
          back later to see what I have made.
        </div>
      </div>
    </>
  );
}
