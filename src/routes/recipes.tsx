import { Await, createFileRoute, defer } from "@tanstack/react-router";
import { getRecipes } from "../../app/api/recipes";
import { Suspense } from "react";

export const Route = createFileRoute("/recipes")({
  loader: async () => {
    const recipes = getRecipes();
    return {
      recipes: defer(recipes),
    };
  },
  component: Recipes,
});

function Recipes() {
  const { recipes } = Route.useLoaderData();

  return (
    <div className="recipes">
      <h1>Recipes with Tanstack Router</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await promise={recipes}>
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
