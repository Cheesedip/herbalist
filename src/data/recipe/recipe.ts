import { Ingredient, IngredientWithPlant } from './ingredient';

export type RecipeWithPlants = Omit<Recipe, 'ingredients'> & {
  ingredients: IngredientWithPlant[];
};

export interface Recipe {
  id: number;
  ingredients: Ingredient[];
  effect: string;
  name: string;
  imageUrl: string;
}
