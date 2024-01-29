import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import stylesheet from "~/styles.css";
import { Navigation } from "./components/Navigation/Navigation";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="hero-pattern flex h-fit min-h-lvh justify-center shadow-inner">
        <div className="flex h-fit min-h-lvh w-full flex-col bg-white drop-shadow-2xl  md:w-11/12 md:max-w-4xl lg:max-w-6xl">
          <Navigation pathname={pathname} />
          <Outlet />
          <div className="flex flex-grow" />
          <footer className="flex h-16 items-center gap-2 bg-slate-200 object-left-bottom px-6">
            <Link
              to="https://www.linkedin.com/in/m-desormeaux/"
              className="underline"
              prefetch="intent"
            >
              LinkedIn
            </Link>
            <Link
              to="https://github.com/M-Desormeaux"
              className="underline"
              prefetch="intent"
            >
              Github
            </Link>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
