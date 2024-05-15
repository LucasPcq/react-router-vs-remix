import { json, useLoaderData } from "@remix-run/react";

// eslint-disable-next-line react-refresh/only-export-components
export const clientLoader = async () => {
  return json({
    recipes: [
      { id: 1, name: "Pizza" },
      { id: 2, name: "Burger" },
    ],
  });
};

export default function Recipes() {
  const { recipes } = useLoaderData<typeof clientLoader>();

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
