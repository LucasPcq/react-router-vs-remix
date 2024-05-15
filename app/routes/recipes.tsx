import { Suspense } from "react";
import { Await, defer, useLoaderData } from "@remix-run/react";

import { getRecipes } from "../api/recipes";

// eslint-disable-next-line react-refresh/only-export-components
export const clientLoader = async () => {
  const recipes = getRecipes();

  return defer({ recipes });
};

export default function Recipes() {
  const { recipes } = useLoaderData<typeof clientLoader>();

  return (
    <div className="recipes">
      <h1>Recipes with Remix</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={recipes}>
          {(recipes) => {
            return (
              <ul>
                {recipes.map((recipe) => (
                  <li key={recipe.id}>{recipe.name}</li>
                ))}
              </ul>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
