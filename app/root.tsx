import { Links, Link, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Remix App</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/recipes">Recipes</Link>
        </div>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
