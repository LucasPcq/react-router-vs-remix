import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  json,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import App from "./App.tsx";
import Recipes from "./Recipes.tsx";
import { getRecipes } from "../app/api/recipes.ts";
import About from "./About.tsx";

const recipesLoader = async () => {
  const recipes = await getRecipes();

  return json({
    recipes,
  });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Outlet />,
        errorElement: <div>Not found</div>,
        children: [
          {
            path: "recipes",
            element: <Recipes />,
            errorElement: <div>Recipes not found</div>,
            loader: recipesLoader,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
