import type { LinksFunction } from "@remix-run/node";
import {
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🤠</text></svg>"
        />
        <Meta />
        <Links />
      </head>
      <body className="hero-pattern flex h-fit min-h-lvh justify-center shadow-inner">
        <div className="h-fit min-h-lvh w-full bg-white drop-shadow-2xl  md:w-11/12 md:max-w-4xl lg:max-w-6xl">
          <Navigation pathname={pathname} />
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
