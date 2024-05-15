import { Outlet, createBrowserRouter, defer } from "react-router-dom";

import { getRecipes } from "../../app/api/recipes";

import About from "./About";
import App from "./App";
import Recipes from "./Recipes";

const recipesLoader = async () => {
  const recipes = getRecipes();

  return defer({
    recipes,
  });
};

export const reactRouter = createBrowserRouter([
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
