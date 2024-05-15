import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

type Recipe = {
  id: string;
  name: string;
};

const Recipes = () => {
  const { recipes } = useLoaderData();

  return (
    <div className="recipes">
      <h1>Recipes with React-Router</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={recipes}>
          {(recipes: Recipe[]) => {
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
};

export default Recipes;
