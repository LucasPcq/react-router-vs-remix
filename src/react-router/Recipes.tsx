import { useLoaderData } from "react-router-dom";

type Recipe = {
  id: string;
  name: string;
};

const Recipes = () => {
  const { recipes } = useLoaderData() as { recipes: Recipe[] };

  return (
    <div className="recipes">
      <h1>Recipes with React-Router</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
