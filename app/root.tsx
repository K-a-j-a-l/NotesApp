import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from '~/styles/main.css';
import Navbar from "./components/Navbar";

export function meta() {
  return [
    {
      title: 'Notsify',
      description: 'Manage your notes with ease',
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navbar/>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}:any){
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>An Error Occurred</title>
      </head>
      <body>
        <header>
          <Navbar/>
        </header>
        <main className="error">
          <h1>An Error Occurred</h1>
          <p>{error.message}</p>
          <p>Back to <Link to="/">Safety</Link></p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}