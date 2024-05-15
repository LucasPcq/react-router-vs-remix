import axios from "axios";

type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
};

interface RecipeResponse {
  recipes: Recipe[];
}

export const getRecipes = async () => {
  const { data } = await axios.get<RecipeResponse>(
    "https://dummyjson.com/recipes"
  );

  return data.recipes;
};
