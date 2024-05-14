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

const recipesLoader = async () => {
  return json({
    recipes: [
      { id: 1, name: "Pizza" },
      { id: 2, name: "Burger" },
    ],
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
