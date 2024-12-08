import { Ingredient } from './ingredient';

export interface Recipe {
  id: number;
  ingredients: Ingredient[];
  effect: string;
  name: string;
}
