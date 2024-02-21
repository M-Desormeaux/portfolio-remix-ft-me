import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/Landing/Landing";
import { Skillset } from "~/components/Skillset/Skillset";

export const meta: MetaFunction = () => {
  return [
    { title: "MikeDez | Home" },
    {
      name: "description",
      content:
        "Frontend Developer with 2 years of experience in responsive and accessible interfaces. Looking forward to building interesting applications.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Landing />

      <Skillset />

      <div className="flex flex-col items-center gap-4 p-5">
        <h2 className="text-3xl font-bold md:text-4xl">Highlighted Projects</h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://classroom-dashboard.mikedez.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-2 rounded border border-slate-100 bg-white p-2 drop-shadow hover:border-indigo-100 hover:bg-indigo-50 hover:drop-shadow-md active:drop-shadow-sm"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold underline">
                Classroom Dashboard
              </h3>
              <span className="text-sm">Active Project</span>
            </div>
            <p className="text-slate-800">
              Classroom Dashboard is a Remix application with the focus of
              providing a suggested solution to small scale grade management and
              classroom aid assessment. It is primarily imitating use by an
              administrator at this time. Design is done by myself.
            </p>
          </a>

          <a
            href="https://www.figma.com/community/widget/1342178141900653188"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-2 rounded border border-slate-100 bg-white p-2 drop-shadow hover:border-indigo-100 hover:bg-indigo-50 hover:drop-shadow-md active:drop-shadow-sm"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold underline">
                Figma Todo Widget
              </h3>
              <span className="text-sm">Active Project</span>
            </div>
            <p className="text-slate-800">
              This widget allows the user to add, complete, and remove tasks
              from a checklist with a modifyable card heading. Built using Figma
              tooling and a React-like composition using typescript.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
