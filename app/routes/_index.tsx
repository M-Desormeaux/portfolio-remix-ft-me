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
        <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://classroom-dashboard.mikedez.com"
            target="_blank"
            rel="noreferrer"
            className="group/ flex flex-col gap-2 rounded-md border border-slate-100 bg-slate-100 p-2 drop-shadow-md hover:border-slate-200 hover:bg-slate-200 active:drop-shadow-sm"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold underline">
                Classroom Dashboard
              </h3>
              <span className="text-sm">Active Project</span>
            </div>
            <p>
              Classroom Dashboard is a Remix application with the focus of
              providing a suggested solution to grade management and classroom
              aid assessment. It is primarily imitating use by an administrator
              at this time.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
