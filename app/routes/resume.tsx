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
            <ul className="flex flex-wrap gap-1">
              <li>
                <span className="rounded bg-indigo-50 px-1">React</span>
              </li>
              <li>
                <span className="rounded bg-indigo-50 px-1">Remix</span>
              </li>
              <li>
                <span className="rounded bg-indigo-50 px-1">Tailwind</span>
              </li>
              <li>
                <span className="rounded bg-indigo-50 px-1">D3js</span>
              </li>
            </ul>
          </div>
        </div>
        <ul
          className="
        *: flex list-inside list-disc flex-col gap-2 py-2 *:px-5"
        >
          <li>
            Led initiative to improve API configuration and reduce technical
            limitations by migrating to Axios and helping break down existing
            APIs into groups for collaborative improvement.
          </li>
          <li>
            Contributed significantly (30%) to accessibility improvements for
            screen readers by improving the codebase to include more semantic
            HTML and using aria based improvements where previous was
            non-semantic html.
          </li>
          <li>
            Contributed significantly (22%) to a complex network management
            feature enhancement, delivering several key results including
            components and services to improve access to rollback functionality.
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
