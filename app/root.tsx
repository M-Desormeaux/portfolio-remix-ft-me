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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          type="image/x-icon"
        />

        <link rel="manifest" href="/public/site.webmanifest" />
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
