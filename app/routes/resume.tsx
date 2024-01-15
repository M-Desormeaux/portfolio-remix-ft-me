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
      <div className="pb-4 pt-8">
        <h1 className="bg-slate-200 px-8 pb-3 pt-6 text-3xl font-bold">
          Work History
        </h1>
        <div className="p-2 px-5">
          <div className="flex items-baseline gap-2">
            <h2 className="inline-block text-xl font-semibold">Comcast</h2>
            <span>Nov 2021 - Current</span>
          </div>
          <div className="flex flex-wrap gap-1">
            <span>Primary Tech Stack:</span>
            <span className="flex flex-wrap gap-1 *:rounded *:bg-indigo-50 *:px-1">
              <span>React,</span>
              <span>Remix,</span>
              <span>Tailwind,</span>
              <span>D3js</span>
            </span>
          </div>
        </div>
        <ul
          className="
        *: flex list-inside list-disc flex-col gap-2 py-2 *:px-5"
        >
          <li>
            Delivers consistent feature work over 2-week sprints in a scrum
            environment in like with product strategy.
          </li>
          <li>
            Discovered issues and Lead initiative to improve API configuration
            to keep up with future improvements.
          </li>
          <li>Devloped simple charts using D3 and React.</li>
          <li>
            Contributed significantly (30%) to accessibility improvements for
            screen readers.
          </li>
          <li>
            Contributed significantly (22%) to a complex feature enhancement,
            delivering several key components and influencing the approach the
            team took to complete the work.
          </li>
        </ul>

        <h1 className="bg-slate-200 px-8 pb-3 pt-6 text-3xl font-bold">
          Education
        </h1>
        <div className="p-2 px-5">
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
