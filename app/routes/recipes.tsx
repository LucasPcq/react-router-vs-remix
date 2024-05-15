import { json, useLoaderData } from "@remix-run/react";
import { getRecipes } from "../api/recipes";

// eslint-disable-next-line react-refresh/only-export-components
export const clientLoader = async () => {
  const recipes = await getRecipes();

  return json({ recipes });
};

export default function Recipes() {
  const { recipes } = useLoaderData<typeof clientLoader>();

  console.log(recipes);

  return (
    <div className="recipes">
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
