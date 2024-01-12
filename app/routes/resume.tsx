import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "MikeDez | Resume" },
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
      <div className="p-5 pt-8">
        <h1 className="pb-2 pt-6 text-3xl font-bold">Work History</h1>
        <div>
          <div className="flex items-baseline gap-2">
            <h2 className="inline-block text-xl font-semibold">Comcast</h2>
            <span>Nov 2021 - Current</span>
          </div>
        </div>

        <h1 className="pb-2 pt-6 text-3xl font-bold">Education</h1>
        <div>
          <div className="flex items-baseline gap-2">
            <h2 className="inline-block text-xl font-semibold">
              DeVry University
            </h2>
            <span>2020 - 2023</span>
          </div>
          <span>Bachelor's of Applied Science in Software Development</span>
        </div>
      </div>
    </>
  );
}
